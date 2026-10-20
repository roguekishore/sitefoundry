import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./wiemer-v2-reveal.css";

/**
 * fade: opacity 0→1 as it comes into view · rise: fade + a 25px lift · drift: a picture
 * sliding inside its frame (parallax), scrubbed for its whole trip through the window
 */
export type WiemerV2RevealEffect = "fade" | "rise" | "drift";

/** The class for an effect, to put straight on an element without a wrapper. */
export function wiemerV2Reveal(effect: WiemerV2RevealEffect) {
  return `wiemer-v2-reveal-${effect}`;
}

/** Inline style: a stagger step (0, 1, 2 …) and, for drift, where it starts and ends in px. */
export function wiemerV2RevealStyle(step = 0, drift?: [number, number]): CSSProperties {
  return {
    "--wiemer-v2-step": step,
    ...(drift && { "--wiemer-v2-drift-from": `${drift[0]}px`, "--wiemer-v2-drift-to": `${drift[1]}px` }),
  } as CSSProperties;
}

export interface WiemerV2RevealProps {
  /** what happens as it enters the window */
  effect?: WiemerV2RevealEffect;
  /** stagger position in a list: each step starts a little later */
  step?: number;
  /** for drift: the vertical offset in px at the start and at the end of the trip */
  drift?: [number, number];
  /** the element to render */
  as?: "div" | "p" | "span" | "li";
  children?: ReactNode;
  className?: string;
}

/** Wraps content in a CSS scroll-driven reveal. Static HTML and old browsers show it in place. */
export function WiemerV2Reveal({ effect = "fade", step = 0, drift, as: Tag = "div", children, className }: WiemerV2RevealProps) {
  return (
    <Tag className={cn(wiemerV2Reveal(effect), className)} style={wiemerV2RevealStyle(step, drift)}>
      {children}
    </Tag>
  );
}
