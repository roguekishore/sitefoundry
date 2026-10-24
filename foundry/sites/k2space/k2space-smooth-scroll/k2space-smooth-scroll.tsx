import { useEffect } from "react";
import Lenis from "lenis";

export interface K2spaceSmoothScrollProps {
  /** how long one wheel step glides, in seconds */
  duration?: number;
}

/**
 * Turns on eased, gliding wheel scrolling for the whole page (Lenis). Renders nothing; place it
 * once on a page. Off when the visitor prefers reduced motion.
 */
export function K2spaceSmoothScroll({ duration = 1.2 }: K2spaceSmoothScrollProps) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
