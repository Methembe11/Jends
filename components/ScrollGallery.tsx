"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Horizontal scroll-snap row. Native scrolling (so it keeps momentum on
 * touch) with a progress-driven pair of arrow controls, plus soft edge fades
 * that retract as you reach either end.
 */
export default function ScrollGallery({
  items,
  fadeTone = "surface",
}: {
  items: { src: string; alt: string }[];
  /** Background the edge fades blend into - must match the section tone. */
  fadeTone?: "surface" | "surface-alt";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const node = trackRef.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth;
    setAtStart(node.scrollLeft <= 2);
    setAtEnd(node.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    sync();
    node.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      node.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const nudge = (direction: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({
      left: direction * Math.round(node.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  const fade = fadeTone === "surface-alt" ? "bg-surface-alt" : "bg-surface";

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <figure
            key={item.src}
            className="media-frame aspect-portrait w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[31vw]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>

      {/* Edge fades, hidden once the row is scrolled to that side. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r ${fade} to-transparent transition-opacity duration-300 ${
          atStart ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l ${fade} to-transparent transition-opacity duration-300 ${
          atEnd ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => nudge(-1)}
          disabled={atStart}
          aria-label="Previous images"
          className="grid h-12 w-12 place-items-center rounded-full border border-surface-inverse text-ink transition-colors duration-200 hover:bg-surface-inverse hover:text-ink-inverse disabled:pointer-events-none disabled:opacity-35"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          disabled={atEnd}
          aria-label="Next images"
          className="grid h-12 w-12 place-items-center rounded-full border border-surface-inverse text-ink transition-colors duration-200 hover:bg-surface-inverse hover:text-ink-inverse disabled:pointer-events-none disabled:opacity-35"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
