import puppeteer from "puppeteer-core";

const CHROME =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = process.env.BASE || "http://localhost:3119";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
await page.goto(`${BASE}/`, { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 1200));

const describeFocus = () =>
  page.evaluate(() => {
    const a = document.activeElement;
    if (!a) return "none";
    return `${a.tagName}[${a.getAttribute("aria-label") || a.textContent?.trim().slice(0, 18) || ""}]`;
  });

// 1. Focus must NOT be stolen on first load.
console.log("focus on load:            ", await describeFocus());

// 2. Open via keyboard, confirm focus moves into the panel.
await page.evaluate(() => document.querySelector('button[aria-label="Open menu"]').focus());
await page.keyboard.press("Enter");
await new Promise((r) => setTimeout(r, 600));
console.log("focus after open:         ", await describeFocus());
console.log("  html overflow:          ", await page.evaluate(() => document.documentElement.style.overflow || "(unset)"));
console.log("  lenis stopped:          ", await page.evaluate(() => document.documentElement.classList.contains("lenis-stopped")));

// 3. A REAL wheel gesture must not scroll the page behind the panel.
const beforeWheel = await page.evaluate(() => Math.round(window.scrollY));
await page.mouse.move(195, 500);
for (let i = 0; i < 6; i++) {
  await page.mouse.wheel({ deltaY: 200 });
  await new Promise((r) => setTimeout(r, 120));
}
await new Promise((r) => setTimeout(r, 600));
const afterWheel = await page.evaluate(() => Math.round(window.scrollY));
console.log(`real wheel scroll:        ${beforeWheel} -> ${afterWheel} ${beforeWheel === afterWheel ? "BLOCKED (good)" : "LEAKED (bad)"}`);

// 4. A real touch swipe must not scroll it either.
const beforeTouch = await page.evaluate(() => Math.round(window.scrollY));
await page.touchscreen.touchStart(195, 500);
for (let i = 0; i < 8; i++) await page.touchscreen.touchMove(195, 500 - i * 40);
await page.touchscreen.touchEnd();
await new Promise((r) => setTimeout(r, 700));
const afterTouch = await page.evaluate(() => Math.round(window.scrollY));
console.log(`real touch swipe:         ${beforeTouch} -> ${afterTouch} ${beforeTouch === afterTouch ? "BLOCKED (good)" : "LEAKED (bad)"}`);

// 5. Tab must cycle inside the panel, not escape to the page behind.
const tabStops = [];
for (let i = 0; i < 9; i++) {
  await page.keyboard.press("Tab");
  tabStops.push(await describeFocus());
}
const escaped = await page.evaluate(() => {
  const panel = document.getElementById("mobile-menu");
  return panel ? !panel.contains(document.activeElement) : null;
});
console.log("tab cycle:                ", tabStops.join(" -> "));
console.log("  focus left the panel:   ", escaped === false ? "no (good)" : `YES (bad) ${escaped}`);

// 6. Shift+Tab must stay inside too.
await page.keyboard.down("Shift");
await page.keyboard.press("Tab");
await page.keyboard.up("Shift");
console.log("shift+tab stays inside:   ", (await page.evaluate(() => document.getElementById("mobile-menu")?.contains(document.activeElement))) ? "yes (good)" : "no (bad)");

// 7. Escape closes, focus returns to the toggle, scroll unlocks.
await page.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 600));
const closed = await page.evaluate(() => ({
  panelGone: !document.getElementById("mobile-menu"),
  htmlOverflow: document.documentElement.style.overflow || "(unset)",
  paddingRight: document.documentElement.style.paddingRight || "(unset)",
  lenisStopped: document.documentElement.classList.contains("lenis-stopped"),
  label: document.querySelector("header button")?.getAttribute("aria-label"),
}));
console.log("after Escape:", JSON.stringify(closed));
console.log("focus after close:        ", await describeFocus());

// 8. Scrolling works again after close.
const y0 = await page.evaluate(() => Math.round(window.scrollY));
await page.mouse.move(195, 500);
for (let i = 0; i < 5; i++) {
  await page.mouse.wheel({ deltaY: 200 });
  await new Promise((r) => setTimeout(r, 120));
}
await new Promise((r) => setTimeout(r, 800));
const y1 = await page.evaluate(() => Math.round(window.scrollY));
console.log(`scroll after close:       ${y0} -> ${y1} ${y1 > y0 ? "UNLOCKED (good)" : "STUCK (bad)"}`);

await browser.close();
