// foundry-allow-text: the square brackets round a label are decorative glyphs.
import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HelionenergyEyebrowProps {
  /** the label, set in uppercase mono */
  children: ReactNode;
  /** wrap the label in square brackets: [ LABEL ] */
  bracket?: boolean;
  className?: string;
}

/** A 12px uppercase mono label that sits over headings and beside dates, optionally in brackets. */
export function HelionenergyEyebrow({ children, bracket = false, className }: HelionenergyEyebrowProps) {
  return (
    <p className={cn("font-mono text-xs/none tracking-[-0.01em] uppercase", className)}>
      {bracket ? (
        <span className="inline-flex gap-[1ch]">
          <span aria-hidden>[</span>
          <span>{children}</span>
          <span aria-hidden>]</span>
        </span>
      ) : (
        children
      )}
    </p>
  );
}
