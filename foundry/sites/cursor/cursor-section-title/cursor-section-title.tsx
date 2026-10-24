import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface CursorSectionTitleProps {
  /** the title text */
  children: ReactNode;
  className?: string;
}

/** 22px, weight 400, ink colour, 24px gap below. */
export function CursorSectionTitle({ children, className }: CursorSectionTitleProps) {
  return (
    <h2 className={cn("mb-6 font-display text-[1.375rem] leading-[1.3] tracking-[-0.005em] text-foreground", className)}>
      {children}
    </h2>
  );
}
