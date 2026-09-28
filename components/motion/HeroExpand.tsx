"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { DURATION, EASE, isTouchDevice, prefersReducedMotion, registerGsap } from "@/lib/motion";
import { Container, Eyebrow } from "@/components/ui";
import HeroVideo from "@/components/HeroVideo";

type HeroExpandProps = {
  /** Full-bleed photograph. Also serves as the video poster. */
  background: string;
  video?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

/**
 * Hero whose media expands out of an inset frame to full bleed as you scroll.
 *
 * The effect is driven by a scrubbed ScrollTrigger rather than by capturing
 * wheel and touch events, so normal scrolling is never interrupted. That is
 * the difference between this and a naive implementation: the page keeps
 * behaving like a document, which is what lets smooth scrolling, the pinned
 * gallery further down, keyboard navigation and deep links all keep working.
 *
 * The expansion is a `clip-path` interpolation rather than a width/height or
 * scale tween, so the media is never resampled mid-animation and the rounded
 * frame stays geometrically true on its way out.
 *
 * On touch devices and under `prefers-reduced-motion` the pin and scrub are
 * skipped entirely and this renders as an ordinary full-bleed hero.
 */
export default function HeroExpand({
  background,
  video,
  eyebrow,
  title,
  subtitle,
  children,
}: HeroExpandProps) {
  const section = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = section.current;
    if (!el) return;

    registerGsap();
    if (prefersReducedMotion() || isTouchDevice()) return;

    const frame = el.querySelector<HTMLElement>("[data-expand-frame]");
    const backdrop = el.querySelector<HTMLElement>("[data-expand-backdrop]");
    const copy = el.querySelectorAll<HTMLElement>("[data-expand-copy]");
    const hint = el.querySelector<HTMLElement>("[data-expand-hint]");
    if (!frame) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // The frame opens out to full bleed and loses its radius as it grows.
      timeline.fromTo(
        frame,
        { clipPath: "inset(13% 17% 13% 17% round 6px)" },
        { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" }
      );

      // The photograph behind it hands off to the media and gets out of the way.
      if (backdrop) {
        timeline.to(backdrop, { opacity: 0, ease: "none" }, 0);
      }

      // Copy clears the frame early, so the expanding media lands on a clean
      // plate. The next section scrolls over the finished full-bleed media.
      if (copy.length) {
        timeline.to(copy, { opacity: 0, y: -40, ease: "none", stagger: 0.04 }, 0);
      }

      if (hint) {
        timeline.to(hint, { opacity: 0, ease: "none" }, 0);
      }

      // The scroll cue breathes until the expansion starts.
      if (hint && !prefersReducedMotion()) {
        gsap.to(hint, {
          y: 5,
          duration: 0.9,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  // The copy stages in on load, independent of the scroll timeline above.
  useLayoutEffect(() => {
    const el = section.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const items = el.querySelectorAll<HTMLElement>("[data-hero-item]");
    if (!items.length) return;

    const ctx = gsap.context(() => {
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

  return (
    <section
      ref={section}
      className="relative h-[100svh] w-full overflow-hidden bg-surface-inverse"
    >
      {/* Photograph behind the frame, shown only when a video is playing.
          The video then hands off to it as the frame expands. Without a video
          the same photograph would be drawn twice and the cross-fade would be
          invisible, so the frame is left to open out over the dark surface. */}
      {video ? (
        <div data-expand-backdrop className="absolute inset-0">
          <Image
            src={background}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* The reference sits a single 10%-black filter over its hero media
              (rgba(0,0,0,.1)) and relies on type contrast alone. */}
          <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
        </div>
      ) : null}

      {/* The expanding media. Sits above the photograph, below the copy. */}
      <div className="absolute inset-0">
        <div
          data-expand-frame
          className="absolute inset-0 overflow-hidden bg-surface-inverse shadow-[0_20px_80px_rgba(0,0,0,0.28)]"
        >
          {video ? (
            <HeroVideo
              src={video}
              poster={background}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={background}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      <div className="relative z-10 flex h-full items-end">
        <Container>
          <div className="flex flex-col items-start pb-[6.25rem] pt-32">
            {eyebrow ? (
              <span data-hero-item data-expand-copy className="block">
                <Eyebrow tone="light">{eyebrow}</Eyebrow>
              </span>
            ) : null}
            <h1
              data-hero-item
              data-expand-copy
              className="mt-6 max-w-[726px] text-display text-ink-inverse"
            >
              {title}
            </h1>
            {subtitle ? (
              <p
                data-hero-item
                data-expand-copy
                className="mt-6 max-w-[416px] text-body text-ink-inverse"
              >
                {subtitle}
              </p>
            ) : null}
            {children ? (
              <div data-hero-item data-expand-copy className="mt-8">
                {children}
              </div>
            ) : null}
          </div>
        </Container>
      </div>

      {/* Purely graphical scroll cue. No new copy is introduced. */}
      <div
        data-expand-hint
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <svg
          viewBox="0 0 24 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="h-8 w-5 text-ink-inverse"
        >
          <path d="M12 4v30" />
          <path d="m5 27 7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
