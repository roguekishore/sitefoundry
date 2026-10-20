import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerTagProps {
  /** the label, set in uppercase mono */
  children: ReactNode;
  /** chip: orange text on 20% orange · plain: ink on a light chip (over photos) */
  tone?: "chip" | "plain";
  className?: string;
}

/** Small uppercase mono label on a soft chip. */
export function WiemerTag({ children, tone = "chip", className }: WiemerTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-[0.7rem] py-[0.4rem] font-mono text-xs leading-none tracking-[0.02em] uppercase",
        tone === "chip" ? "bg-primary/20 text-primary" : "bg-background text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
