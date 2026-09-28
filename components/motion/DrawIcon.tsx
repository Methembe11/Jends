"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { prefersReducedMotion, registerGsap } from "@/lib/motion";

type DrawIconProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Strokes a line icon on as its card scrolls into view.
 *
 * The reference uses Lottie for its icon work; a stroke-dash draw is the
 * dependency-free equivalent and reads the same at this weight. Only stroked
 * geometry is touched, so nothing about the mark's shape changes, and the
 * whole thing is skipped under `prefers-reduced-motion`.
 */
export default function DrawIcon({ children, className = "" }: DrawIconProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    registerGsap();
    if (prefersReducedMotion()) return;

    const shapes = el.querySelectorAll<SVGGeometryElement>(
      "path, circle, rect, line, polyline, polygon"
    );

    const ctx = gsap.context(() => {
      shapes.forEach((shape, index) => {
        const length = shape.getTotalLength?.();
        if (!length) return;

        gsap.fromTo(
          shape,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.3,
            ease: "power2.inOut",
            delay: index * 0.12,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
