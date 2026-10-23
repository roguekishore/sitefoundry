import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface UnitChipProps {
  children: ReactNode;
  /** muted: the tinted capability pill · solid: the black compliance badge */
  tone?: "muted" | "solid";
  className?: string;
}

/** A flat pill label: product capabilities, compliance badges. */
export function UnitChip({ children, tone = "muted", className }: UnitChipProps) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center rounded-full px-3.5 text-[0.8125rem] leading-none tracking-[0.01em] whitespace-nowrap lg:h-9 lg:px-4 lg:text-sm",
        tone === "muted" ? "bg-muted text-foreground" : "bg-primary text-primary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
