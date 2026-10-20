import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PlumeformGlassCardProps {
  children?: ReactNode;
  /** the element to render */
  as?: "div" | "li" | "article";
  className?: string;
}

/** The dark bands' card: a faint white-on-glass gradient, hairline border, lit top edge and a deep drop. */
export function PlumeformGlassCard({ children, as: Tag = "div", className }: PlumeformGlassCardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-foreground/10 bg-linear-to-b from-foreground/[0.07] to-foreground/[0.03] backdrop-blur-md",
        "shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_12%,transparent),0_20px_50px_-30px_color-mix(in_oklab,var(--background)_90%,transparent)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
