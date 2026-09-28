"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { prefersReducedMotion, registerGsap } from "@/lib/motion";

type ParallaxProps = {
  children: ReactNode;
  /** Vertical travel in percent of the element's own height. */
  strength?: number;
  /** Oversize buffer so the drift never exposes an edge inside a clipped frame. */
  scale?: number;
  /** Which descendant to move. Media frames target their image. */
  target?: string;
  className?: string;
};

/**
 * Scrub-linked vertical drift, tied to scroll progress rather than time.
 *
 * The element is scaled up first so it has headroom to travel inside a frame
 * that clips to `overflow: hidden`. This is what gives the reference its
 * sense of depth: imagery slides past at a slightly different rate to the
 * text around it.
 */
export default function Parallax({
  children,
  strength = 6,
  scale = 1.16,
  target = "img",
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    registerGsap();
    if (prefersReducedMotion()) return;

    const node = el.querySelector<HTMLElement>(target) ?? el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { yPercent: -strength, scale },
        {
          yPercent: strength,
          scale,
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
  }, [strength, scale, target]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
