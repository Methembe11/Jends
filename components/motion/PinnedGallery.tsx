"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "@/lib/motion";

type GalleryItem = { src: string; alt: string };

type PinnedGalleryProps = {
  items: GalleryItem[];
  /** Rendered above the row and pinned together with it. */
  header?: ReactNode;
};

const TOUCH = "(hover: none) and (pointer: coarse)";
const REDUCE = "(prefers-reduced-motion: reduce)";

/**
 * Pinned mode is a property of the visitor's environment, not of the app, so
 * it is read straight from the media queries rather than mirrored into state
 * from an effect. The server snapshot is `false`, so the first paint is
 * always the plain swipeable row and pinning only ever switches on afterwards.
 */
function subscribe(onStoreChange: () => void) {
  const touch = window.matchMedia(TOUCH);
  const reduce = window.matchMedia(REDUCE);
  touch.addEventListener("change", onStoreChange);
  reduce.addEventListener("change", onStoreChange);
  return () => {
    touch.removeEventListener("change", onStoreChange);
    reduce.removeEventListener("change", onStoreChange);
  };
}

function getPinned() {
  return !(
    window.matchMedia(TOUCH).matches || window.matchMedia(REDUCE).matches
  );
}

/**
 * The reference's signature scroll moment: a horizontal row that pins while
 * vertical scroll is scrubbed sideways across it.
 *
 * Pinned mode is deliberately narrow. It only engages for fine pointers that
 * report hover, and never under `prefers-reduced-motion`. On phones and
 * tablets the same markup degrades to an ordinary swipeable strip, so vertical
 * scrolling is never captured where it is most disruptive.
 */
export default function PinnedGallery({ items, header }: PinnedGalleryProps) {
  const section = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  const pinned = useSyncExternalStore(subscribe, getPinned, () => false);

  useLayoutEffect(() => {
    const el = section.current;
    const row = track.current;
    if (!el || !row || !pinned) return;

    registerGsap();

    const ctx = gsap.context(() => {
      // Trailing padding gives the last frame room to reach the right edge.
      const distance = () => Math.max(0, row.scrollWidth - window.innerWidth + 80);

      gsap.to(row, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [pinned]);

  // Switching on pinning changes the section to full height, which moves
  // everything below it. Re-measure once that has settled.
  useLayoutEffect(() => {
    if (pinned) ScrollTrigger.refresh();
  }, [pinned]);

  return (
    <section
      ref={section}
      className={
        pinned
          ? "flex min-h-[100svh] flex-col justify-center overflow-hidden bg-surface"
          : "overflow-hidden bg-surface py-24"
      }
    >
      {header}
      <div
        className={
          pinned
            ? "overflow-hidden"
            : "overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        }
      >
        <div ref={track} className="flex w-max gap-5 px-5 lg:px-10">
          {items.map((item) => (
            <figure
              key={item.src}
              className="media-frame relative aspect-portrait w-[78vw] shrink-0 sm:w-[46vw] lg:w-[27vw]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 27vw, (min-width: 640px) 46vw, 78vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
