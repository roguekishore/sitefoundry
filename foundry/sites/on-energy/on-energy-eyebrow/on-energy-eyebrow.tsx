import { useEffect, useRef, useState } from "react";
import { cn } from "@foundry/foundry-utils";

export interface OnEnergyEyebrowProps {
  /** the label, shown in mono capitals after a small dot */
  label: string;
  /** scramble the label through random glyphs when it first scrolls into view */
  scramble?: boolean;
  className?: string;
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#*%&/";
const DURATION = 700;

/**
 * A small mono section label with a dot before it. When it first enters the window its
 * letters run through random glyphs and settle left to right. Static HTML shows the final
 * label; the effect is skipped under reduced motion.
 */
export function OnEnergyEyebrow({ label, scramble = true, className }: OnEnergyEyebrowProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(label);

  useEffect(() => {
    setShown(label);
    const el = ref.current;
    if (!scramble || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION);
        const settled = Math.floor(t * label.length);
        setShown(
          [...label]
            .map((ch, i) => (i < settled || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
            .join(""),
        );
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 1 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [label, scramble]);

  return (
    <p ref={ref} aria-label={label} className={cn("flex items-center gap-2 font-mono text-xs uppercase", className)}>
      <span aria-hidden className="size-1 rounded-full bg-current" />
      <span aria-hidden>{shown}</span>
    </p>
  );
}
