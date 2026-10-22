import { useEffect } from "react";
import Lenis from "lenis";

export interface AndurilSmoothScrollProps {
  /** how long one wheel step glides, in seconds */
  duration?: number;
}

/** Turns on gliding wheel scrolling for the whole page. Renders nothing; off under reduced motion. */
export function AndurilSmoothScroll({ duration = 1.2 }: AndurilSmoothScrollProps) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // expo-out, the curve the original's own transitions use
    const lenis = new Lenis({ duration, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [duration]);
  return null;
}
