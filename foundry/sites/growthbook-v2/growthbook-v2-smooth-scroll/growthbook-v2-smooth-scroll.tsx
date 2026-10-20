import { useEffect } from "react";
import Lenis from "lenis";

export interface GrowthbookV2SmoothScrollProps {
  /** how long one wheel step glides, in seconds */
  duration?: number;
}

/** Turns on gliding wheel scrolling for the whole page. Renders nothing; off under reduced motion. */
export function GrowthbookV2SmoothScroll({ duration = 1.1 }: GrowthbookV2SmoothScrollProps) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration, easing: (t) => 1 - Math.pow(1 - t, 3) });
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
