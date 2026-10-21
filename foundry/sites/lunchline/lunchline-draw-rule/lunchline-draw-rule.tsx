import { cn } from "@foundry/foundry-utils";
import "./lunchline-draw-rule.css";

export interface LunchlineDrawRuleProps {
  /** where the line sits in its (relative) parent: along the top edge or the bottom edge */
  edge?: "top" | "bottom";
  /** colour and thickness overrides (bg-border h-px by default) */
  className?: string;
}

/** A 1px hairline along the top (or bottom) of its parent that draws itself out from the
    middle, from 86% to the full width, as it scrolls into view. The parent needs `relative`. */
export function LunchlineDrawRule({ edge = "top", className }: LunchlineDrawRuleProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "lunchline-draw-rule pointer-events-none absolute inset-x-0 h-px bg-border",
        edge === "top" ? "top-0" : "bottom-0",
        className,
      )}
    />
  );
}
