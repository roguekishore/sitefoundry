import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rho-reveal.css";

export interface RhoRevealProps {
  children: ReactNode;
  /** stagger step: 0 arrives first, 1 a little later, and so on */
  step?: number;
  /** element to render */
  as?: "div" | "li" | "p";
  className?: string;
}

export function RhoReveal({ children, step = 0, as: Tag = "div", className }: RhoRevealProps) {
  return (
    <Tag className={cn("rho-reveal", className)} style={{ "--rho-step": step } as CSSProperties}>
      {children}
    </Tag>
  );
}
