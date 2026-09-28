"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { prefersReducedMotion, registerGsap } from "@/lib/motion";

/**
 * Scrub-linked drift for a full-bleed band background.
 *
 * The media is scaled up before it travels, so it can slide vertically without
 * ever exposing an edge inside the band's `overflow-hidden` frame. This is the
 * depth cue the reference gets from parallaxing its hero and CTA imagery
 * against the copy sitting on top of it.
 */
export default function MediaDrift({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    registerGsap();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -5, scale: 1.12 },
        {
          yPercent: 5,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} className="absolute inset-0">{children}</div>;
}
