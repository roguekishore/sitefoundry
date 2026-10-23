import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LithicContoursProps {
  /** centre of the rings, as a CSS position (e.g. "80% 20%") */
  at?: string;
  /** circle, or ellipse (stretched to the box: tall boxes give tall ovals) */
  shape?: "circle" | "ellipse";
  /** distance between rings in px */
  gap?: number;
  /** fade the rings out towards the edges of the box (default true) */
  fade?: boolean;
  /** position, size and colour (a text-* class sets the line colour) */
  className?: string;
}

/** Thin concentric rings in currentColor. Decorative and aria-hidden. */
export function LithicContours({ at = "50% 50%", shape = "circle", gap = 28, fade = true, className }: LithicContoursProps) {
  const line = `transparent 0 ${gap - 1}px, currentColor ${gap - 1}px ${gap}px`;
  const style: CSSProperties = {
    backgroundImage: `repeating-radial-gradient(${shape} at ${at}, ${line})`,
    ...(fade
      ? {
          maskImage: `radial-gradient(${shape} at ${at}, var(--foreground) 25%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(${shape} at ${at}, var(--foreground) 25%, transparent 75%)`,
        }
      : {}),
  };
  return <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)} style={style} />;
}
