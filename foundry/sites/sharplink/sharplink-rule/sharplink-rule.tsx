import { cn } from "@foundry/foundry-utils";

export interface SharplinkRuleProps {
  /** show the small square at the left end */
  mark?: boolean;
  /** the square's colour: highlight (blue) or foreground (as on the footer) */
  markTone?: "highlight" | "foreground";
  className?: string;
}

/** A dotted hairline with a small square marking its start. */
export function SharplinkRule({ mark = true, markTone = "highlight", className }: SharplinkRuleProps) {
  return (
    <div aria-hidden className={cn("relative h-px border-t border-dotted border-foreground/20", className)}>
      {mark && (
        <span
          className={cn("absolute -top-[3.5px] left-0 size-1.5", markTone === "highlight" ? "bg-highlight" : "bg-foreground")}
        />
      )}
    </div>
  );
}
