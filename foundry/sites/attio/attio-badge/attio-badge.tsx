import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface AttioBadgeProps {
  /** the label: one or two words naming the section */
  children: ReactNode;
  className?: string;
}

/** The small section label: blue text on a faint blue tint, 6px corners. */
export function AttioBadge({ children, className }: AttioBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md bg-highlight/10 px-1.5 text-sm leading-none font-medium tracking-[-0.01em] text-highlight dark:bg-highlight/15",
        className,
      )}
    >
      {children}
    </span>
  );
}
