import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Shared motion vocabulary.
 *
 * The reference drives everything through Webflow IX2 on top of GSAP, with a
 * 400ms standard duration and an expo-out curve. These constants keep the
 * whole site on the same two values instead of scattering magic numbers.
 */

/** Expo-out, matching the curve their interactions use. */
export const EASE = "power3.out";

/** Standard transition length in seconds (their 400ms). */
export const DURATION = 0.9;

/**
 * Registers ScrollTrigger exactly once. Called from each effect that needs it
 * so components stay independent of mount order.
 */
let registered = false;
export function registerGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * All motion is opt-out. When this is true, every component in the motion
 * layer leaves the DOM in its final state and installs nothing.
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Coarse pointer with no hover. Pinned scroll sequences are skipped here:
 * scroll-jacking is a desktop-pointer affordance and fights touch momentum.
 */
export function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

/** The Lenis easing curve: expo-out, matching the reference. */
export function expoOut(t: number) {
  return Math.min(1, 1.001 - 2 ** (-10 * t));
}

/**
 * Scroll lock for the mobile menu.
 *
 * Locking `document.body` does nothing here: the scrolling element is `<html>`,
 * so only an overflow change on `<html>` (or `<body>` while it happens to be
 * the scroller) propagates to the viewport. Lenis additionally keeps its own
 * animated scroll position and will happily glide past a CSS lock, so it has to
 * be stopped directly. The gutter compensation prevents the scrollbar's
 * disappearance from shifting the layout sideways.
 */
type LenisLike = { stop: () => void; start: () => void };

let lenisRef: LenisLike | null = null;
let lockCount = 0;
let savedPaddingRight = "";

export function setLenis(instance: LenisLike | null) {
  lenisRef = instance;
}

export function lockScroll() {
  if (typeof document === "undefined") return;
  lockCount += 1;
  if (lockCount > 1) return;

  lenisRef?.stop();

  const root = document.documentElement;
  const gutter = window.innerWidth - root.clientWidth;
  if (gutter > 0) {
    savedPaddingRight = root.style.paddingRight;
    root.style.paddingRight = `${gutter}px`;
  }
  root.style.overflow = "hidden";
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0) return;

  lenisRef?.start();

  const root = document.documentElement;
  root.style.overflow = "";
  root.style.paddingRight = savedPaddingRight;
}
