import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./prenuvo-reveal.css";

export interface PrenuvoRevealProps {
  children?: ReactNode;
  /** the element to render (div by default; li inside lists) */
  as?: ElementType;
  /** how far it rises into place, in px (the original uses 64, 80 and 96) */
  rise?: number;
  /** position in a staggered row: 0, 1, 2… each arrives a little later */
  step?: number;
  className?: string;
}

export function PrenuvoReveal({ children, as: Tag = "div", rise = 80, step = 0, className }: PrenuvoRevealProps) {
  return (
    <Tag
      className={cn("prenuvo-reveal", className)}
      style={{ "--prenuvo-reveal-step": step, "--prenuvo-reveal-rise": `${rise}px` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
