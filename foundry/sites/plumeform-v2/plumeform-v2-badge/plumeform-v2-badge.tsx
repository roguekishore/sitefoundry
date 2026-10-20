import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PlumeformV2BadgeProps {
  /** the short label, e.g. a plan name */
  children: ReactNode;
  className?: string;
}

export function PlumeformV2Badge({ children, className }: PlumeformV2BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-4 shrink-0 items-center rounded-full bg-highlight px-1.5 align-middle text-[0.5625rem] leading-none font-extrabold tracking-[0.14em] text-highlight-foreground uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
