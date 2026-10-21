import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./storeyarchitecture-rise.css";

export interface StoreyarchitectureRiseProps {
  children?: ReactNode;
  /** the element to render (div by default) */
  as?: ElementType;
  /** position in a staggered row: 0, 1, 2… each arrives 40px of scroll later */
  step?: number;
  className?: string;
}

export function StoreyarchitectureRise({ children, as: Tag = "div", step = 0, className }: StoreyarchitectureRiseProps) {
  return (
    <Tag className={cn("storeyarchitecture-rise", className)} style={{ "--storeyarchitecture-rise-step": step } as CSSProperties}>
      {children}
    </Tag>
  );
}
