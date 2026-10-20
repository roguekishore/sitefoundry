import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./plumeform-reveal.css";

/** rise: fade + 22px lift + blur to sharp · fade: opacity only */
export type PlumeformRevealEffect = "rise" | "fade";

/** The class for an effect, to put straight on your own element. */
export function plumeformReveal(effect: PlumeformRevealEffect = "rise") {
  return `plumeform-reveal-${effect}`;
}

/** Inline style for a staggered item: each step starts 40px of scroll later. */
export function plumeformRevealStyle(step = 0): CSSProperties {
  return { "--plumeform-step": step } as CSSProperties;
}

/** Class for content that should replay a short 340ms swap-in when its React key changes. */
export const plumeformSwapIn = "plumeform-swap-in";

export interface PlumeformRevealProps {
  /** what happens as it enters the window */
  effect?: PlumeformRevealEffect;
  /** stagger position in a list (0, 1, 2 …) */
  step?: number;
  /** the element to render */
  as?: "div" | "li" | "p" | "span" | "section";
  children?: ReactNode;
  className?: string;
}

/** Wraps content in a CSS scroll-driven entrance. Static HTML and old browsers show it in place. */
export function PlumeformReveal({ effect = "rise", step = 0, as: Tag = "div", children, className }: PlumeformRevealProps) {
  return (
    <Tag className={cn(plumeformReveal(effect), className)} style={plumeformRevealStyle(step)}>
      {children}
    </Tag>
  );
}
