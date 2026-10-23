import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./zetta-joule-reveal.css";

export interface ZettaJouleRevealProps {
  /** rise: fade in and lift 16px (buttons, cards); lines: a text block that lifts 30px and uncovers top to bottom */
  variant?: "rise" | "lines";
  /** how far it lifts, in px (default 16 for rise, 30 for lines) */
  distance?: number;
  /** the tag to render */
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

/** Wraps content so it reveals while it scrolls into view (CSS scroll-driven animation, no JavaScript). */
export function ZettaJouleReveal({ variant = "rise", distance, as: Tag = "div", children, className }: ZettaJouleRevealProps) {
  const style = distance ? ({ "--zetta-joule-rise": `${distance}px` } as CSSProperties) : undefined;
  return (
    <Tag className={cn(variant === "lines" ? "zetta-joule-lines" : "zetta-joule-rise", className)} style={style}>
      {children}
    </Tag>
  );
}
