import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./aspensearch-odometer.css";

export interface AspensearchOdometerProps {
  /** the figure to show, e.g. "500+" or "$1M–5M"; each digit rolls, other characters stay put */
  value: string;
  className?: string;
}

// Two runs of 0–9 per reel, so every digit spins past at least one full turn before it lands.
const REEL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A figure whose digits roll into place like an odometer as it scrolls into view (scrubbed
 * with the scroll). Each digit is a clipped reel of numbers; the static HTML already shows
 * the final figure. Set the font size on the parent; line height is forced to 1.
 */
export function AspensearchOdometer({ value, className }: AspensearchOdometerProps) {
  return (
    <span className={cn("inline-flex leading-none whitespace-nowrap", className)}>
      <span className="sr-only">{value}</span>
      {Array.from(value).map((ch, i) => {
        if (!/\d/.test(ch)) {
          return (
            <span key={i} aria-hidden>
              {ch}
            </span>
          );
        }
        return (
          <span key={i} aria-hidden className="aspensearch-odometer-digit" style={{ "--aspensearch-odometer-d": Number(ch), "--aspensearch-odometer-i": i } as CSSProperties}>
            {/* the real digit, invisible, sizes the window to its own width */}
            <span className="invisible">{ch}</span>
            <span className="aspensearch-odometer-reel">
              {REEL.map((n, k) => (
                <span key={k}>{n}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
