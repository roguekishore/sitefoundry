import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./superpower-reveal.css";

export interface SuperpowerRevealProps {
  children?: ReactNode;
  /** the element to render (div by default; li inside lists, tr in tables) */
  as?: ElementType;
  /** position in a staggered row: 0, 1, 2… each arrives a little later */
  step?: number;
  /** how far it rises, in px (22 for cards, 12 for table rows) */
  rise?: number;
  className?: string;
}

export function SuperpowerReveal({ children, as: Tag = "div", step = 0, rise = 22, className }: SuperpowerRevealProps) {
  return (
    <Tag
      className={cn("superpower-reveal", className)}
      style={{ "--superpower-reveal-step": step, "--superpower-reveal-rise": `${rise}px` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
