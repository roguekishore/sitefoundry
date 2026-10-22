import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanyTagProps {
  /** the short uppercase label */
  children: ReactNode;
  /** card: a white chip on light bands · inverse: a light chip inside a dark-scoped photo band */
  tone?: "card" | "inverse";
  className?: string;
}

export function BasepowercompanyTag({ children, tone = "card", className }: BasepowercompanyTagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-2 py-0.5 font-sans text-sm leading-[1.4] font-normal tracking-[0.02em] uppercase",
        tone === "card" ? "bg-card text-card-foreground" : "bg-foreground text-background",
        className,
      )}
    >
      {children}
    </span>
  );
}
