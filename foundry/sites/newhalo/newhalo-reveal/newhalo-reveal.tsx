import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./newhalo-reveal.css";

/**
 * fade: opacity 0→1 · rise: fade + 60px lift · rise-sm: fade + 50px lift · zoom: fade + scale
 * 1.15→1 · settle: scale 1.15→1 only (a picture inside its frame) · bloom: fade + scale
 * 1.1→1, scrubbed over a longer stretch · sweep: text wiped in from the left through a soft
 * mask · draw: a line growing from the left (scaleX 0→1) · drift: a parallax slide inside a
 * frame, scrubbed for the whole trip through the window
 */
export type NewhaloRevealEffect = "fade" | "rise" | "rise-sm" | "zoom" | "settle" | "bloom" | "sweep" | "draw" | "drift";

/** The class for an effect, to put straight on an element without a wrapper. */
export function newhaloReveal(effect: NewhaloRevealEffect) {
  return `newhalo-reveal-${effect}`;
}

/** Inline style for a staggered item (step 0, 1, 2 …) and/or a drift distance in px. */
export function newhaloRevealStyle(step = 0, drift?: number): CSSProperties {
  return { "--newhalo-step": step, ...(drift !== undefined && { "--newhalo-drift": `${drift}px` }) } as CSSProperties;
}

export interface NewhaloRevealProps {
  /** what happens as it enters the window */
  effect?: NewhaloRevealEffect;
  /** stagger position in a list: each step starts a little later */
  step?: number;
  /** for drift: how far the content slides each way, in px */
  drift?: number;
  /** the element to render */
  as?: "div" | "li" | "span" | "p";
  children?: ReactNode;
  className?: string;
}

/** Wraps content in a CSS scroll-driven reveal. Static HTML and old browsers show it in place. */
export function NewhaloReveal({ effect = "fade", step = 0, drift, as: Tag = "div", children, className }: NewhaloRevealProps) {
  return (
    <Tag className={cn(newhaloReveal(effect), className)} style={newhaloRevealStyle(step, drift)}>
      {children}
    </Tag>
  );
}
