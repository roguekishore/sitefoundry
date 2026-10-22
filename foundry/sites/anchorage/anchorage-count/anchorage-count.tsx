import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";

export interface AnchorageCountProps {
  /** the final figure as shown, e.g. "5+", "1.4B", "$124,786.32"; the first number in it is counted */
  value: string;
  /** where the count starts, as a share of the value (0 = from zero) */
  from?: number;
  /** seconds the count takes */
  duration?: number;
  className?: string;
}

// "$124,786.32" → prefix "$", number 124786.32, suffix "", 2 decimals, commas on.
function parse(value: string) {
  const m = value.match(/^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/s);
  if (!m) return null;
  const digits = m[2];
  return {
    prefix: m[1],
    target: Number(digits.replace(/,/g, "")),
    suffix: m[3],
    decimals: digits.includes(".") ? digits.split(".")[1].length : 0,
    commas: digits.includes(","),
  };
}

/** Counts up to its value once, when it first enters the view. */
export function AnchorageCount({ value, from = 0, duration = 1.6, className }: AnchorageCountProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(value);
  const parts = parse(value);

  const format = (n: number) =>
    parts
      ? parts.prefix +
        n.toLocaleString("en-US", { minimumFractionDigits: parts.decimals, maximumFractionDigits: parts.decimals, useGrouping: parts.commas }) +
        parts.suffix
      : value;

  // Before it is seen: park at the start value (only once JavaScript runs).
  useEffect(() => {
    if (!parts || reduce || inView) return;
    setShown(format(parts.target * from));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!parts || reduce || !inView) return;
    const controls = animate(parts.target * from, parts.target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => setShown(format(n)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  return (
    <span ref={ref} className={cn("inline-grid tabular-nums", className)}>
      <span className="sr-only">{value}</span>
      {/* the final value, invisible, holds the width */}
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {value}
      </span>
      <span aria-hidden className="col-start-1 row-start-1">
        {shown}
      </span>
    </span>
  );
}
