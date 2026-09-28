"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { DURATION, EASE, prefersReducedMotion, registerGsap } from "@/lib/motion";

type HeroStageProps = {
  children: ReactNode;
};

/**
 * Choreographs the hero copy on first paint.
 *
 * Anything marked `data-hero-item` rises into place in sequence, so the
 * eyebrow, headline, body copy and actions arrive in reading order instead of
 * all at once. The hero sits above the fold, so this deliberately runs on load
 * rather than waiting for a scroll that may never come.
 */
export default function HeroStage({ children }: HeroStageProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    registerGsap();
    if (prefersReducedMotion()) return;

    const items = el.querySelectorAll<HTMLElement>("[data-hero-item]");

    const ctx = gsap.context(() => {
      if (!items.length) return;

      gsap.fromTo(
        items,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: DURATION,
          ease: EASE,
          stagger: 0.11,
          delay: 0.15,
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
