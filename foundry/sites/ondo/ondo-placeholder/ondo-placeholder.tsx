import { cn } from "@foundry/foundry-utils";

export interface OndoPlaceholderProps {
  /** muted: the panel grey · deep: one step darker (nested frames) · photo: a mid-grey for full photos · faint: a light wash for charts */
  tone?: "muted" | "deep" | "photo" | "faint";
  /** what the slot will hold, read to screen readers (e.g. "Photo of a skyline") */
  label?: string;
  className?: string;
}

const tones = {
  muted: "bg-muted",
  deep: "bg-accent",
  photo: "bg-foreground/45",
  faint: "bg-muted/50",
};

/** Stands in for media: a flat surface in the theme's colours, no drawing. */
export function OndoPlaceholder({ tone = "muted", label, className }: OndoPlaceholderProps) {
  return <div role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} className={cn("size-full", tones[tone], className)} />;
}
