import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./ultrahuman-reveal.css";

export interface UltrahumanRevealProps {
  children: ReactNode;
  /** the element to render (div by default) */
  as?: ElementType;
  /** how far it rises while fading in: md 24px (headings, cards) · sm 12px (body copy) */
  rise?: "sm" | "md";
  /** stagger step: each step starts the reveal 40px of scroll later */
  step?: number;
  className?: string;
}

/**
 * Fades its children in and lifts them into place as they scroll into view (CSS scroll-driven,
 * no JavaScript). Browsers without scroll timelines, and reduced motion, show it in place.
 */
export function UltrahumanReveal({ children, as: Tag = "div", rise = "md", step = 0, className }: UltrahumanRevealProps) {
  const style = {
    "--ultrahuman-reveal-rise": rise === "sm" ? "12px" : "24px",
    "--ultrahuman-reveal-offset": `${step * 40}px`,
  } as CSSProperties;
  return (
    <Tag className={cn("ultrahuman-reveal", className)} style={style}>
      {children}
    </Tag>
  );
}
