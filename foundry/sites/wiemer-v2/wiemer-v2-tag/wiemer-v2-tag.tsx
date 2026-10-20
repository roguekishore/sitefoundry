import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2TagProps {
  /** the label, set in small uppercase mono */
  children: ReactNode;
  /** highlight: accent text on a pale accent chip (the "coming soon" tag) · card: ink on a white chip, for labels on photos */
  tone?: "highlight" | "card";
  className?: string;
}

/** A tiny uppercase mono chip with soft 6px corners. */
export function WiemerV2Tag({ children, tone = "highlight", className }: WiemerV2TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-1.5 font-mono text-xs leading-none font-medium uppercase",
        tone === "highlight" ? "bg-highlight/20 text-highlight" : "bg-card text-card-foreground tracking-[0.04em]",
        className,
      )}
    >
      {children}
    </span>
  );
}
