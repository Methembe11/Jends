"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { DURATION, EASE, prefersReducedMotion, registerGsap } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Milliseconds, as before. */
  delay?: number;
  /** Stagger the wrapper's direct children instead of the wrapper itself. */
  stagger?: number;
  /** Rise distance in pixels. */
  y?: number;
};

/**
 * Fade + rise, triggered once when the block enters the viewport.
 *
 * Runs in a layout effect so the hidden start state is applied before the
 * browser paints. That keeps the animation from flashing visible content,
 * while leaving the server-rendered HTML fully readable if JavaScript never
 * arrives. `prefers-reduced-motion` skips the tween entirely.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  stagger,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    registerGsap();
    if (prefersReducedMotion()) return;

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: DURATION,
          delay: delay / 1000,
          ease: EASE,
          stagger: stagger ?? 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
