import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./eightsleep-reveal.css";

export interface EightsleepRevealProps {
  children: ReactNode;
  /** stagger position: each step starts 40px of scroll later */
  step?: number;
  /** how far it rises, in px (18 for text, 24 for list items) */
  rise?: number;
  /** the element to render */
  as?: "div" | "span" | "li" | "p";
  className?: string;
}

export function EightsleepReveal({ children, step = 0, rise = 18, as: Tag = "div", className }: EightsleepRevealProps) {
  const style = { "--eightsleep-step": step, "--eightsleep-rise": `${rise}px` } as CSSProperties;
  return (
    <Tag className={cn("eightsleep-reveal", Tag === "span" && "block", className)} style={style}>
      {children}
    </Tag>
  );
}
