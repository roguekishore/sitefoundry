import { cn } from "@foundry/foundry-utils";

export interface ParsleyhealthPlaceholderProps {
  /** photo: soft beige-to-seafoam wash · tint: a faint tint of the text colour (for coloured bands) */
  tone?: "photo" | "tint";
  /** what the slot will hold, read to screen readers (e.g. "Portrait") */
  label?: string;
  className?: string;
}

const tones = {
  photo: "bg-linear-to-br from-card via-card/70 to-accent/60",
  tint: "bg-foreground/10",
};

/** Stands in for media: a flat or softly washed surface in the theme's colours, no drawing. */
export function ParsleyhealthPlaceholder({ tone = "photo", label, className }: ParsleyhealthPlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-full", tones[tone], className)}
    />
  );
}
