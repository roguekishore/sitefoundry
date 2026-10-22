import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface AspensearchLabelProps {
  /** the label text; shown in mono capitals after a small square */
  children: ReactNode;
  className?: string;
}

/** The small "■ SECTION NAME" tag that opens each of the original's sections. */
export function AspensearchLabel({ children, className }: AspensearchLabelProps) {
  return (
    <p className={cn("flex items-center gap-3 font-mono text-xs/none tracking-normal uppercase", className)}>
      <span aria-hidden className="size-2 shrink-0 bg-current" />
      <span>{children}</span>
    </p>
  );
}
