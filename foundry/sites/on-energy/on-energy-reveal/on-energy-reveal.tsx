import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./on-energy-reveal.css";

export interface OnEnergyRevealProps {
  /** what fades in */
  children: ReactNode;
  /** the element to render (default "div") */
  as?: ElementType;
  /** how far it rises while fading in, in px (0 = fade only) */
  rise?: number;
  /** pushes the start later, in % of the scroll range: staggers siblings */
  delay?: number;
  className?: string;
}

/**
 * Wraps content that fades in (and optionally rises) as it scrolls into view, scrubbed with
 * the scroll by a CSS view timeline. Static HTML shows the content in place.
 */
export function OnEnergyReveal({ children, as: Tag = "div", rise = 0, delay = 0, className }: OnEnergyRevealProps) {
  return (
    <Tag
      className={cn("on-energy-reveal", className)}
      style={{ "--on-energy-rise": `${rise}px`, "--on-energy-reveal-delay": delay } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
