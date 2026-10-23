import { cn } from "@foundry/foundry-utils";

export interface UltrahumanPlaceholderProps {
  /**
   * photo: a mid-grey ink wash that reads on any band · warm: a pale studio surface (product
   * shots) · soft: a faint radial wash for renders and art · glow: a soft band of the theme's glow
   */
  tone?: "photo" | "warm" | "soft" | "glow";
  /** what the slot will hold, read to screen readers (e.g. "Photo of a runner") */
  label?: string;
  className?: string;
}

const tones = {
  photo: "bg-muted-foreground/30",
  warm: "bg-[linear-gradient(160deg,color-mix(in_oklab,var(--muted-foreground)_45%,var(--background)),color-mix(in_oklab,var(--muted-foreground)_25%,var(--background)))]",
  soft: "bg-[radial-gradient(ellipse_at_50%_45%,var(--background),var(--muted)_70%)]",
  glow: "bg-[radial-gradient(ellipse_50%_100%_at_50%_100%,color-mix(in_oklab,var(--glow)_70%,transparent),transparent)]",
};

/** Stands in for media: a plain surface in the theme's colours, no drawing. Fills its box. */
export function UltrahumanPlaceholder({ tone = "photo", label, className }: UltrahumanPlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-full", tones[tone], className)}
    />
  );
}
