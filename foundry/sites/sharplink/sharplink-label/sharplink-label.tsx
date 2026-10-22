import type { ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

/** The label type on its own, for pieces that need it on another element (buttons, dates). */
export const sharplinkLabelType =
  "font-sans text-[0.8125rem] leading-[1.4] font-medium tracking-[0.08em] uppercase [font-stretch:80%]";

export interface SharplinkLabelProps {
  /** the label text */
  children: ReactNode;
  /** the element to render (span by default; p or h3 where it heads something) */
  as?: ElementType;
  /** strong: full text colour; muted: faded to 60% */
  tone?: "strong" | "muted";
  className?: string;
}

/** A small, narrow, uppercase label with wide tracking. */
export function SharplinkLabel({ children, as: Tag = "span", tone = "strong", className }: SharplinkLabelProps) {
  return (
    <Tag className={cn("block", sharplinkLabelType, tone === "muted" ? "text-foreground/60" : "text-foreground", className)}>
      {children}
    </Tag>
  );
}
