import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PlumeformBadgeProps {
  /** the word, e.g. "Pro" (shown in small capitals) */
  children: ReactNode;
  /** pill: a mint pill · text: the word alone in the accent colour (e.g. in a list) */
  variant?: "pill" | "text";
  className?: string;
}

/** A tiny tracked-out capital tag, like the original's PRO / FREE markers. */
export function PlumeformBadge({ children, variant = "pill", className }: PlumeformBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center text-[0.5625rem] leading-none font-bold tracking-[0.14em] uppercase align-middle",
        variant === "pill" && "h-[1.125rem] rounded-full bg-accent px-1.5 text-accent-foreground dark:bg-highlight dark:text-highlight-foreground",
        variant === "text" && "text-highlight",
        className,
      )}
    >
      {children}
    </span>
  );
}
