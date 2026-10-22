import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanySwashProps {
  /** the phrase that gets the hand-drawn underline */
  children: ReactNode;
  /** stroke colour: highlight (orange, on light bands) · accent (lime, on photo bands) */
  tone?: "highlight" | "accent";
  className?: string;
}

// A single loose pen stroke under a phrase: slightly lower at the right, thicker in the middle.
export function BasepowercompanySwash({ children, tone = "highlight", className }: BasepowercompanySwashProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <svg
        aria-hidden
        viewBox="0 0 200 8"
        preserveAspectRatio="none"
        className={cn(
          "pointer-events-none absolute -bottom-[0.12em] left-0 h-[0.18em] w-full overflow-visible",
          tone === "highlight" ? "text-highlight" : "text-accent",
        )}
      >
        <path d="M1 3.5C48 2 104 1.6 150 2.6C170 3 186 4.4 199 6.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </span>
  );
}
