"use client";

import { useEffect, useState } from "react";
import { whatsapp } from "@/lib/site";

/**
 * Floating WhatsApp entry point. Sits above the mobile action bar and clears
 * the footer, fading in once the visitor has committed to the page.
 */
export default function FloatingContact() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jends Safaris on WhatsApp"
      className={`fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-surface-inverse text-ink-inverse shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out-expo sm:right-6 bottom-[88px] lg:bottom-8 lg:right-8 ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.25 8.25-8.25m-2.6 4.09c-.15 0-.4.06-.61.29-.21.22-.8.78-.8 1.91 0 1.12.82 2.21.93 2.36.11.15 1.6 2.45 3.88 3.44.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.43-.06 1.34-.55 1.53-1.08.19-.53.19-.99.13-1.08-.06-.09-.2-.15-.43-.26-.22-.11-1.34-.66-1.55-.74-.2-.07-.36-.11-.51.12-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.12-.94-.35-1.79-1.1-.66-.59-1.11-1.31-1.24-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.4-.06-.11-.5-1.22-.69-1.67-.18-.43-.36-.37-.5-.38z" />
      </svg>
    </a>
  );
}
