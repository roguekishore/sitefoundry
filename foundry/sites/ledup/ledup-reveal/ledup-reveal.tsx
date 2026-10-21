import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./ledup-reveal.css";

export interface LedupRevealProps {
  children?: ReactNode;
  /** the element to render (div by default) */
  as?: ElementType;
  /** how far it rises, in px (0 = fade only) */
  distance?: number;
  /** position in a staggered row: 0, 1, 2… each arrives 60px of scroll later */
  step?: number;
  className?: string;
}

/** Fades and lifts its content into place as it scrolls into view (CSS only). */
export function LedupReveal({ children, as: Tag = "div", distance = 24, step = 0, className }: LedupRevealProps) {
  return (
    <Tag
      className={cn("ledup-reveal", className)}
      style={{ "--ledup-reveal-y": `${distance}px`, "--ledup-reveal-step": step } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
