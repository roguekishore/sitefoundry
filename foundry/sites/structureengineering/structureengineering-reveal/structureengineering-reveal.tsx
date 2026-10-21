import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./structureengineering-reveal.css";

export interface StructureengineeringRevealProps {
  children?: ReactNode;
  /** the element to render (div by default; li inside lists, span inside headings) */
  as?: ElementType;
  /** position in a staggered group: 0, 1, 2… each arrives a little later */
  step?: number;
  /** how far it rises, in px (the original uses 48) */
  rise?: number;
  className?: string;
}

// Fades in and rises as it enters the window, driven by the scroll (CSS only).
export function StructureengineeringReveal({ children, as: Tag = "div", step = 0, rise = 48, className }: StructureengineeringRevealProps) {
  return (
    <Tag
      className={cn("structureengineering-reveal", className)}
      style={{ "--se-reveal-step": step, "--se-reveal-rise": `${rise}px` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
