import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./wild-ag-reveal.css";

export interface WildAgRevealProps {
  children?: ReactNode;
  /** the element to render (div by default; p, li, h2… where it replaces one) */
  as?: ElementType;
  /** position in a staggered column: 0, 1, 2… each arrives a little later */
  step?: number;
  /** how far it rises, in px */
  rise?: number;
  className?: string;
}

export function WildAgReveal({ children, as: Tag = "div", step = 0, rise = 40, className }: WildAgRevealProps) {
  return (
    <Tag
      className={cn("wild-ag-reveal", className)}
      style={{ "--wild-ag-reveal-step": step, "--wild-ag-reveal-rise": `${rise}px` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
