import { useEffect, useRef, useState } from "react";
import { cn } from "@foundry/foundry-utils";

export type AndurilScrambleTrigger = "load" | "view" | "hover";

export interface AndurilScrambleProps {
  /** the words to show */
  text: string;
  /** when to decode: on mount, each time it scrolls into view, and/or on hover of the nearest [data-scramble-host] */
  triggers?: AndurilScrambleTrigger[];
  /** how long the decode takes, in milliseconds */
  duration?: number;
  className?: string;
}

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = LOWER.toUpperCase();

// A random letter of the same case as the original one; spaces and punctuation stay put.
function noise(ch: string) {
  if (/[a-z]/.test(ch)) return LOWER[Math.floor(Math.random() * 26)];
  if (/[A-Z]/.test(ch)) return UPPER[Math.floor(Math.random() * 26)];
  return ch;
}

/** Text whose letters flicker and settle left to right, like a readout decoding. */
export function AndurilScramble({ text, triggers = ["view"], duration = 800, className }: AndurilScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(text);

  useEffect(() => {
    setShown(text);
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const settled = Math.floor(t * text.length);
        setShown(text.slice(0, settled) + Array.from(text.slice(settled), noise).join(""));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const cleanups: (() => void)[] = [];
    if (triggers.includes("load")) run();
    if (triggers.includes("view")) {
      const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && run()), { threshold: 0.6 });
      io.observe(el);
      cleanups.push(() => io.disconnect());
    }
    if (triggers.includes("hover")) {
      const host = el.closest("[data-scramble-host]") ?? el;
      host.addEventListener("pointerenter", run);
      cleanups.push(() => host.removeEventListener("pointerenter", run));
    }
    return () => {
      cancelAnimationFrame(frame);
      cleanups.forEach((c) => c());
    };
  }, [text, duration, triggers.join(",")]);

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>{shown}</span>
    </span>
  );
}
