import { cn } from "@foundry/foundry-utils";
import "./growthbook-v2-rail-accent.css";

export interface GrowthbookV2RailAccentProps {
  /** classes for the outer column (positioning; defaults to the parent's full height on its left edge) */
  className?: string;
  /** classes for the bar itself, e.g. its height (default 12rem on phones, 28rem from 1024px) */
  barClassName?: string;
}

/**
 * The gradient accent on the left rail. Its column fills the parent's height, so the bar can
 * stick to the top of the window until the parent ends.
 */
export function GrowthbookV2RailAccent({ className, barClassName }: GrowthbookV2RailAccentProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-y-0 -left-px w-1", className)}>
      <div className={cn("growthbook-v2-rail-accent sticky top-0 h-48 w-1 lg:h-[28rem]", barClassName)} />
    </div>
  );
}
