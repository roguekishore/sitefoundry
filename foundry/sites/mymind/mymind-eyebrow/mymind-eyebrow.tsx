import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MymindEyebrowProps {
  /** the label */
  children: ReactNode;
  /** "ink" (foreground), "primary" (tangerine) or "inherit" (the parent's colour) */
  tone?: "ink" | "primary" | "inherit";
  className?: string;
}

/** Small spaced capitals above a headline. */
export function MymindEyebrow({ children, tone = "ink", className }: MymindEyebrowProps) {
  return (
    <p
      className={cn(
        "font-[family-name:var(--mymind-round,var(--typeface-body))] text-[0.9375rem] leading-6 font-medium tracking-[0.1em] uppercase",
        tone === "ink" && "text-foreground",
        tone === "primary" && "text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}
