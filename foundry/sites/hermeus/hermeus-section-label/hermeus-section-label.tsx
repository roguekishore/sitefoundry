import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./hermeus-section-label.css";

export interface HermeusSectionLabelProps {
  /** the section's number, e.g. "01" */
  index: string;
  /** the section's name, e.g. "Purpose" */
  label: string;
  /** shown at the right end of the row, e.g. a button */
  action?: ReactNode;
  /** the heading level of the name (default h2) */
  as?: "h2" | "h3" | "p";
  className?: string;
}

/** Number, name and a full-width hairline; scrubs in as it scrolls into view. */
export function HermeusSectionLabel({ index, label, action, as: Name = "h2", className }: HermeusSectionLabelProps) {
  return (
    <div
      className={cn(
        "hermeus-section-label relative flex items-end justify-between gap-6 pb-2",
        className,
      )}
    >
      <div className="min-w-0">
        <p className="hermeus-section-label-index text-[clamp(0.58rem,0.519rem+0.257vw,0.75rem)]/none tracking-[0.06em]">
          {index}
        </p>
        <Name className="mt-[clamp(0.5rem,0.4rem+0.45vw,0.8rem)] -mb-[0.2em] overflow-clip pb-[0.2em] text-[clamp(0.92rem,0.704rem+0.884vw,1.5rem)]/none font-normal">
          <span className="hermeus-section-label-name block">{label}</span>
        </Name>
      </div>
      {action && <div className="shrink-0 pb-[clamp(0rem,-0.2rem+0.5vw,0.125rem)]">{action}</div>}
      <span aria-hidden className="hermeus-section-label-line absolute inset-x-0 bottom-0 h-px bg-border" />
    </div>
  );
}
