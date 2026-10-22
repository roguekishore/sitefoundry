import { useEffect, useState } from "react";
import { cn } from "@foundry/foundry-utils";
import "./ramp-live-number.css";

export interface RampLiveNumberProps {
  /** the value shown first (and in static HTML) */
  start: number;
  /** the largest step per tick; each tick adds a random amount up to this */
  step: number;
  /** milliseconds between ticks */
  every?: number;
  /** digits after the decimal point */
  decimals?: number;
  /** text after the number, e.g. "%" */
  suffix?: string;
  className?: string;
}

function format(value: number, decimals: number) {
  return value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

/** A counter that keeps climbing; the characters that change remount and roll in. */
export function RampLiveNumber({ start, step, every = 1800, decimals = 0, suffix, className }: RampLiveNumberProps) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const add = decimals ? Math.random() * step : Math.ceil(Math.random() * step);
      setValue((v) => v + add);
    }, every);
    return () => window.clearInterval(id);
  }, [step, every, decimals]);

  const text = format(value, decimals);
  return (
    <span className={cn("inline-flex font-mono tabular-nums", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-flex overflow-clip">
        {text.split("").map((ch, i) => (
          <span key={`${i}-${ch}`} className="ramp-live-number-digit">
            {ch}
          </span>
        ))}
      </span>
      {suffix && <span aria-hidden>{suffix}</span>}
    </span>
  );
}
