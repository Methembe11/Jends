"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expoOut, prefersReducedMotion, registerGsap } from "@/lib/motion";

/**
 * Momentum scrolling for the whole site.
 *
 * This is the single largest reason the reference feels expensive: its HTML
 * loads Lenis for smooth scrolling and runs GSAP/ScrollTrigger for everything
 * else. Lenis is driven off the GSAP ticker so the two stay in lockstep, and
 * ScrollTrigger is refreshed once the hero video has settled its height.
 *
 * Lenis is imported dynamically so it never reaches the server bundle. If the
 * visitor prefers reduced motion nothing is installed at all and native
 * scrolling is left untouched.
 */
export default function SmoothScroll() {
  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    let dispose: (() => void) | undefined;
    let cancelled = false;

    void (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.1,
        easing: expoOut,
        smoothWheel: true,
        touchMultiplier: 1.6,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      // The hero video resolves its aspect ratio after hydration and shifts
      // everything below it, so pins and triggers need re-measuring.
      ScrollTrigger.refresh();

      dispose = () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    })();

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return null;
}
