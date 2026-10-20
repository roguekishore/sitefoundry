import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./plumeform-v2-reveal.css";

export interface PlumeformV2RevealProps {
  children?: ReactNode;
  /** the element to render (div by default; li inside lists) */
  as?: ElementType;
  /** position in a staggered row: 0, 1, 2… each arrives a little later */
  step?: number;
  className?: string;
}

export function PlumeformV2Reveal({ children, as: Tag = "div", step = 0, className }: PlumeformV2RevealProps) {
  return (
    <Tag className={cn("plumeform-v2-reveal", className)} style={{ "--plumeform-v2-reveal-step": step } as CSSProperties}>
      {children}
    </Tag>
  );
}
