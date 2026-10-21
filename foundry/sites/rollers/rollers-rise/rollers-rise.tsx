import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rollers-rise.css";

export interface RollersRiseProps {
  children?: ReactNode;
  /** the element to render (div by default) */
  as?: ElementType;
  /** below: rise 40px into place (the original's fadeInUp) · right: slide in 60px from the right (fadeInRight) */
  from?: "below" | "right";
  /** position in a staggered row: 0, 1, 2… each arrives 40px of scroll later */
  step?: number;
  className?: string;
}

/** A wrapper that fades its content in and moves it into place over the first 220px of scroll
    after it enters the window (CSS view timeline). */
export function RollersRise({ children, as: Tag = "div", from = "below", step = 0, className }: RollersRiseProps) {
  return (
    <Tag
      className={cn("rollers-rise", from === "right" && "rollers-rise-right", className)}
      style={{ "--rollers-rise-step": step } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
