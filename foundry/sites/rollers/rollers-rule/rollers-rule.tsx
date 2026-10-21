import { cn } from "@foundry/foundry-utils";
import "./rollers-rule.css";

export interface RollersRuleProps {
  /** horizontal: grows from the left edge · vertical: grows down from the top */
  orientation?: "horizontal" | "vertical";
  /** placement inside the (relative) parent, e.g. "inset-x-0 top-0" or "inset-y-0 left-1/2"; colour overrides */
  className?: string;
}

/** A 1px hairline of the ruled grid that draws itself as it scrolls into view: a horizontal one
    from the left, a vertical one from the top. Absolutely positioned: the parent needs `relative`. */
export function RollersRule({ orientation = "horizontal", className }: RollersRuleProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "rollers-rule pointer-events-none absolute bg-border",
        orientation === "horizontal" ? "rollers-rule-h h-px" : "rollers-rule-v w-px",
        className,
      )}
    />
  );
}
