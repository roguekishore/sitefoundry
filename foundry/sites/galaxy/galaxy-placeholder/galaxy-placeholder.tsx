import { cn } from "@foundry/foundry-utils";

export interface GalaxyPlaceholderProps {
  /** muted: a flat raised fill (images, video, art) · glow: a faint wash of the glow colour low in the box (full-bleed backdrops) */
  tone?: "muted" | "glow";
  /** what the slot will hold, read to screen readers (e.g. "Portrait video") */
  label?: string;
  className?: string;
}

/** Stands in for media: a flat surface in the theme's colours, no drawing. */
export function GalaxyPlaceholder({ tone = "muted", label, className }: GalaxyPlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "size-full",
        tone === "muted"
          ? "bg-muted"
          : "bg-[radial-gradient(60%_45%_at_50%_78%,color-mix(in_oklab,var(--glow)_12%,transparent),transparent_70%)]",
        className,
      )}
    />
  );
}
