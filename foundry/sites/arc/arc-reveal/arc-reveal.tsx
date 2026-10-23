import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./arc-reveal.css";

export interface ArcRevealProps {
  children: ReactNode;
  /** stagger position in a row (0, 1, 2…): each step starts the fade 40px of scroll later */
  step?: number;
  className?: string;
}

/** Wraps anything that should fade in and rise 15px as it scrolls into view (CSS only). */
export function ArcReveal({ children, step = 0, className }: ArcRevealProps) {
  return (
    <div className={cn("arc-reveal", className)} style={{ "--arc-reveal-step": step } as CSSProperties}>
      {children}
    </div>
  );
}
