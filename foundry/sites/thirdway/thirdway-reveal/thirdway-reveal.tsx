import type { ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./thirdway-reveal.css";

export interface ThirdwayRevealProps {
  /** the content that fades and rises in */
  children: ReactNode;
  /** the element (default div) */
  as?: ElementType;
  className?: string;
}

/** Fades in and rises 24px as it scrolls into view (CSS scroll-driven, no JavaScript). */
export function ThirdwayReveal({ children, as: Tag = "div", className }: ThirdwayRevealProps) {
  return <Tag className={cn("thirdway-reveal", className)}>{children}</Tag>;
}
