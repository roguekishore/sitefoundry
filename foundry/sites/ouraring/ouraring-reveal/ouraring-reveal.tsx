import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./ouraring-reveal.css";

export interface OuraringRevealProps {
  children: ReactNode;
  /** rise: fade + 20px lift (text) · fade: opacity only · blur: blurred to sharp (pictures) */
  kind?: "rise" | "fade" | "blur";
  /** stagger position: each step starts 40px of scroll later */
  step?: number;
  /** the element to render */
  as?: "div" | "li" | "p";
  className?: string;
}

export function OuraringReveal({ children, kind = "rise", step = 0, as: Tag = "div", className }: OuraringRevealProps) {
  const style = { "--ouraring-reveal-step": step } as CSSProperties;
  return (
    <Tag className={cn("ouraring-reveal", `ouraring-reveal-${kind}`, className)} style={style}>
      {children}
    </Tag>
  );
}
