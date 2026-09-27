"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative, looping hero video.
 *
 * Muted + playsInline so mobile Safari will autoplay it. The poster frame is
 * the section's existing photograph, so the layout is correct before the
 * video loads and stays correct if it never loads at all.
 *
 * Accessibility: the element is hidden from assistive tech. Meaning is carried
 * by the hero heading and lede, never by the media itself.
 */
export default function HeroVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      // Honour the OS setting: hold on the poster frame.
      video.pause();
      return;
    }

    // Autoplay can still be refused (data saver, low-power mode, some
    // corporate policies). The poster frame remains visible in that case,
    // so a rejected play() is not a failure state.
    video.play().catch(() => {
      video.pause();
    });
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
