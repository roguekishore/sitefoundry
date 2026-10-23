import { cn } from "@foundry/foundry-utils";

export interface PaxosPlaceholderProps {
  /** muted: pale grey frame · wash: a faint glow-to-highlight light · field: a deeper glow-to-highlight surface · film: dark slate */
  tone?: "muted" | "wash" | "field" | "film";
  /** what the slot will hold, read to screen readers (e.g. "Product render") */
  label?: string;
  className?: string;
}

const tones = {
  muted: "bg-muted",
  wash: "bg-linear-to-br from-glow/10 via-muted/60 to-highlight/25",
  field: "bg-linear-to-br from-glow/70 via-chart-2/50 to-highlight/60",
  film: "bg-foreground/85",
};

/** Stands in for media: a flat or softly washed surface in the theme's colours, no drawing. */
export function PaxosPlaceholder({ tone = "muted", label, className }: PaxosPlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-full", tones[tone], className)}
    />
  );
}
