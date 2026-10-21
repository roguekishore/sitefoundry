import { cn } from "@foundry/foundry-utils";

export interface DaqEyebrowProps {
  /** the label, e.g. "01 / How it flows" (shown uppercase) */
  label: string;
  /** a hairline after the label: none, a 280px rule (full width on phones) or one to the row's end */
  rule?: "none" | "short" | "fill";
  /** bold, full-strength label (the manifesto's) instead of the quiet 58% one */
  strong?: boolean;
  /** classes for a fill line inside the rule, for a parent to animate (e.g. a scroll progress) */
  ruleFillClassName?: string;
  className?: string;
}

/** The site's section label: 9–10px monospace capitals, tracked out, with an optional rule. */
export function DaqEyebrow({ label, rule = "none", strong = false, ruleFillClassName, className }: DaqEyebrowProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span
        className={cn(
          "shrink-0 font-mono text-[0.625rem] leading-none tracking-[0.3em] uppercase",
          strong ? "font-bold text-foreground" : "font-medium text-muted-foreground",
        )}
      >
        {label}
      </span>
      {rule !== "none" && (
        <span
          aria-hidden
          className={cn("relative h-px bg-foreground/15", rule === "fill" ? "flex-1" : "flex-1 lg:w-[17.5rem] lg:flex-none")}
        >
          {ruleFillClassName && <span className={cn("absolute inset-0 origin-left bg-foreground/70", ruleFillClassName)} />}
        </span>
      )}
    </div>
  );
}
