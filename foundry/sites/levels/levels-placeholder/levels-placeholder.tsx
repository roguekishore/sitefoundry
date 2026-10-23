import { cn } from "@foundry/foundry-utils";

export interface LevelsPlaceholderProps {
  /** film: near-black (app screens, video) · photo: mid grey · wash: faint sage and green (charts) */
  tone?: "film" | "photo" | "wash";
  /** what the slot will hold, read to screen readers (e.g. "App screens") */
  label?: string;
  className?: string;
}

const tones = {
  // the film tone scopes itself to the dark palette, so it stays dark on any ground and in any mode
  film: "dark bg-card",
  photo: "bg-muted-foreground/30",
  wash: "bg-linear-to-b from-background/0 via-glow/15 to-highlight/15",
};

/** Stands in for media: a flat or softly washed surface in the theme's colours, no drawing. */
export function LevelsPlaceholder({ tone = "photo", label, className }: LevelsPlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-full", tones[tone], className)}
    />
  );
}
