/**
 * Mobile responsiveness audit.
 *
 * Drives the locally installed Chrome over CDP and measures real layout at each
 * device viewport. Dev-only: uses puppeteer-core, which does not download a
 * browser. Run with the app already serving on BASE.
 *
 *   node scripts/audit-mobile.mjs
 */
import puppeteer from "puppeteer-core";

const BASE = process.env.BASE ?? "http://localhost:3118";
const CHROME =
  process.env.CHROME ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

/** Portrait devices, narrowest and widest first. 320 is the real-world floor. */
const DEVICES = [
  { name: "iPhone SE (1st gen)", w: 320, h: 568, dpr: 2 },
  { name: "Galaxy S8 / A-series", w: 360, h: 740, dpr: 3 },
  { name: "iPhone SE 2/3, 8", w: 375, h: 667, dpr: 2 },
  { name: "iPhone 12/13 mini", w: 375, h: 812, dpr: 3 },
  { name: "iPhone 12/13/14", w: 390, h: 844, dpr: 3 },
  { name: "iPhone 14 Pro / 15", w: 393, h: 852, dpr: 3 },
  { name: "iPhone XR / 11", w: 414, h: 896, dpr: 2 },
  { name: "iPhone 14 Pro Max", w: 430, h: 932, dpr: 3 },
  { name: "iPad mini (portrait)", w: 744, h: 1133, dpr: 2 },
  { name: "iPad (portrait)", w: 820, h: 1180, dpr: 2 },
];

/** Landscape phones: short viewports are the other stress case. */
const LANDSCAPE = [
  { name: "iPhone SE landscape", w: 568, h: 320, dpr: 2 },
  { name: "iPhone 14 Pro landscape", w: 852, h: 393, dpr: 3 },
];

const PAGES = [
  { path: "/", name: "home" },
  { path: "/about/", name: "about" },
  { path: "/activities/", name: "activities" },
  { path: "/blog/", name: "blog" },
  { path: "/contact/", name: "contact" },
  { path: "/2026/05/10/post-1/", name: "post-1" },
];

const ISSUES = [];

/** Runs in the page. Collects layout facts that indicate a real defect. */
function collect() {
  const vw = document.documentElement.clientWidth;
  const out = {
    vw,
    docScrollW: document.documentElement.scrollWidth,
    bodyScrollW: document.body.scrollWidth,
    overflowing: [],
    smallTargets: [],
    tinyText: [],
    clipped: [],
    fixedOnScreen: [],
  };

  const describe = (el) => {
    const id = el.id ? `#${el.id}` : "";
    const cls =
      typeof el.className === "string" && el.className
        ? `.${el.className.trim().split(/\s+/).slice(0, 3).join(".")}`
        : "";
    return `${el.tagName.toLowerCase()}${id}${cls}`;
  };

  for (const el of document.body.querySelectorAll("*")) {
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    if (cs.position === "fixed" && cs.opacity === "0") continue;

    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;

    // 1. Horizontal overflow past the viewport.
    if (r.right > vw + 1 || r.left < -1) {
      // Ignore things inside a deliberately scrollable strip.
      let scroller = el.parentElement;
      let inScroller = false;
      while (scroller && scroller !== document.body) {
        const s = getComputedStyle(scroller);
        if (
          s.overflowX === "auto" ||
          s.overflowX === "scroll" ||
          s.overflowX === "hidden"
        ) {
          inScroller = true;
          break;
        }
        scroller = scroller.parentElement;
      }
      if (!inScroller) {
        out.overflowing.push({
          el: describe(el),
          left: Math.round(r.left),
          right: Math.round(r.right),
          over: Math.round(Math.max(0, r.right - vw)),
        });
      }
    }

    // 2. Interactive targets below the 44px minimum.
    //    Measured as the real hit area, not the border box: a transparent
    //    pseudo-element can extend a target past its own box, so probe with
    //    elementFromPoint just outside each edge and see what gets hit.
    const interactive =
      el.tagName === "BUTTON" ||
      (el.tagName === "A" && el.getAttribute("href")) ||
      el.tagName === "INPUT" ||
      el.tagName === "TEXTAREA" ||
      el.tagName === "SELECT";
    if (interactive && cs.display !== "inline") {
      const TARGET = 44;
      const probe = (x, y) => {
        const hit = document.elementFromPoint(x, y);
        return hit !== null && (hit === el || el.contains(hit));
      };
      const cx = Math.min(Math.max(r.left + r.width / 2, 1), vw - 1);
      const cy = Math.min(
        Math.max(r.top + r.height / 2, 1),
        window.innerHeight - 1,
      );

      // Walk outward from each edge while the probe keeps hitting this element,
      // so the result is the full contiguous reach rather than the first hit.
      let up = 0;
      while (up < 24 && r.top - (up + 1) >= 0 && probe(cx, r.top - (up + 1)))
        up++;

      let down = 0;
      while (
        down < 24 &&
        r.bottom + (down + 1) <= window.innerHeight &&
        probe(cx, r.bottom + (down + 1))
      )
        down++;

      let left = 0;
      while (left < 24 && r.left - (left + 1) >= 0 && probe(r.left - (left + 1), cy))
        left++;

      let right = 0;
      while (right < 24 && r.right + (right + 1) <= vw && probe(r.right + (right + 1), cy))
        right++;

      const hitH = r.height + up + down;
      const hitW = r.width + left + right;
      // A target is undersized if EITHER axis is short, however wide it is.
      // sr-only links are hidden until focused and are not tap targets.
      if (
        (hitH < TARGET || hitW < TARGET) &&
        !(el.className && String(el.className).includes("sr-only"))
      ) {
        out.smallTargets.push({
          el: describe(el),
          w: Math.round(r.width),
          h: Math.round(r.height),
          hitW: Math.round(hitW),
          hitH: Math.round(hitH),
          text: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 28),
        });
      }
    }

    // 3. Text too small to read comfortably.
    const fs = parseFloat(cs.fontSize);
    if (
      el.childElementCount === 0 &&
      (el.textContent || "").trim().length > 1 &&
      fs < 12
    ) {
      out.tinyText.push({ el: describe(el), px: Math.round(fs * 10) / 10 });
    }

    // 4. Content taller than a fixed-height box with no scroll escape.
    //    This only counts as a defect when TEXT is actually cut off. A scaled
    //    parallax image deliberately spilling past an overflow-hidden frame is
    //    the intended trim, so measure the text, not the container.
    const fixedH = /^\d+px$/.test(cs.height) && parseFloat(cs.height) > 0;
    if (fixedH && cs.overflow === "hidden" && el.scrollHeight > el.clientHeight + 2) {
      if (String(el.className).includes("sr-only")) continue;
      const cr = el.getBoundingClientRect();
      const cutText = [...el.querySelectorAll("*")]
        .filter(
          (c) =>
            c.tagName !== "IMG" &&
            c.tagName !== "VIDEO" &&
            c.children.length === 0 &&
            (c.textContent || "").trim().length > 0,
        )
        .find((c) => c.getBoundingClientRect().bottom > cr.bottom + 1);
      if (!cutText) continue;
      out.clipped.push({
        el: describe(el),
        scrollH: el.scrollHeight,
        clientH: el.clientHeight,
        hidden: el.scrollHeight - el.clientHeight,
        text: (cutText.textContent || "").trim().slice(0, 28),
      });
    }
  }

  return out;
}

function record(device, page, data) {
  const overflowBy = Math.max(
    data.docScrollW - data.vw,
    data.bodyScrollW - data.vw,
  );
  if (overflowBy > 1) {
    ISSUES.push({
      kind: "PAGE-SCROLL",
      device: device.name,
      page: page.name,
      detail: `document scrolls ${overflowBy}px wider than the ${data.vw}px viewport`,
    });
  }
  for (const o of data.overflowing) {
    if (o.over > 1) {
      ISSUES.push({
        kind: "OVERFLOW",
        device: device.name,
        page: page.name,
        detail: `${o.el} extends ${o.over}px past the right edge (right=${o.right})`,
      });
    }
  }
  for (const t of data.smallTargets) {
    ISSUES.push({
      kind: "TAP-TARGET",
      device: device.name,
      page: page.name,
      detail: `${t.el} box=${t.w}x${t.h} but real hit area ${t.hitW}x${t.hitH} ("${t.text}") - below 44x44`,
    });
  }
  for (const t of data.tinyText) {
    ISSUES.push({
      kind: "TINY-TEXT",
      device: device.name,
      page: page.name,
      detail: `${t.el} renders at ${t.px}px`,
    });
  }
  for (const c of data.clipped) {
    ISSUES.push({
      kind: "CLIPPED",
      device: device.name,
      page: page.name,
      detail: `${c.el} is ${c.clientH}px tall but holds ${c.scrollH}px - ${c.hidden}px cut off`,
    });
  }
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

const all = [
  ...DEVICES.map((d) => ({ ...d, orient: "portrait" })),
  ...LANDSCAPE.map((d) => ({ ...d, orient: "landscape" })),
];

// Full device sweep on the homepage (most complex layout), then the remaining
// pages at the narrowest, mid and widest portrait sizes.
const jobs = [];
for (const d of all) {
  jobs.push({ device: d, page: PAGES[0] });
}
const probe = [DEVICES[0], DEVICES[4], DEVICES[7]];
for (const d of probe) {
  for (const pg of PAGES.slice(1)) jobs.push({ device: d, page: pg });
}

console.log(`Auditing ${jobs.length} device/page combinations against ${BASE}\n`);

for (const job of jobs) {
  const page = await browser.newPage();
  await page.setViewport({
    width: job.device.w,
    height: job.device.h,
    deviceScaleFactor: job.device.dpr,
    isMobile: true,
    hasTouch: true,
  });
  await page.setUserAgent(
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  );
  try {
    await page.goto(`${BASE}${job.page.path}`, {
      waitUntil: "networkidle2",
      timeout: 45000,
    });
    // Let the reveal/parallax layer settle before measuring.
    await new Promise((r) => setTimeout(r, 700));
    const data = await page.evaluate(collect);
    record(job.device, job.page, data);
    const tag = `${job.device.name} (${job.device.w}px)`.padEnd(34);
    console.log(
      `  ${tag} ${job.page.name.padEnd(11)} doc=${data.docScrollW} vw=${data.vw}` +
        (data.docScrollW > data.vw + 1 ? "  <-- OVERFLOW" : ""),
    );
  } catch (err) {
    ISSUES.push({
      kind: "LOAD-FAIL",
      device: job.device.name,
      page: job.page.name,
      detail: err.message.split("\n")[0],
    });
    console.log(`  ${job.device.name} ${job.page.name} FAILED: ${err.message}`);
  }
  await page.close();
}

await browser.close();

console.log(`\n${"=".repeat(70)}`);
if (ISSUES.length === 0) {
  console.log("No issues found.");
} else {
  const byKind = {};
  for (const i of ISSUES) (byKind[i.kind] ??= []).push(i);
  for (const [kind, list] of Object.entries(byKind)) {
    console.log(`\n${kind}  (${list.length})`);
    const seen = new Set();
    for (const i of list) {
      const key = `${i.kind}|${i.detail.replace(/\d+px/g, "Npx").replace(/\d+/g, "N")}`;
      if (seen.has(key)) continue;
      seen.add(key);
      console.log(`  [${i.device} / ${i.page}] ${i.detail}`);
    }
  }
}
console.log(`\nTotal findings: ${ISSUES.length}`);
