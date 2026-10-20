import { useEffect } from "react";
import Lenis from "lenis";

export interface HhhusherSmoothScrollProps {
  /** how long one wheel step glides, in seconds */
  duration?: number;
}

/**
 * Makes wheel scrolling glide with an exponential ease-out (Lenis), as the original does.
 * Renders nothing; place it once on a page. Off when the visitor prefers reduced motion.
 */
export function HhhusherSmoothScroll({ duration = 1.2 }: HhhusherSmoothScrollProps) {
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
