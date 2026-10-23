import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a faint raised panel with a hairline ring: screenshots and windows */
  panel: "bg-linear-to-br from-foreground/[0.06] to-foreground/[0.02] ring-1 ring-foreground/10",
  /** the grid floor of the developer figures: a dot every 16px */
  dots: "bg-[radial-gradient(color-mix(in_oklab,var(--foreground)_14%,transparent)_0.5px,transparent_0.5px)] [background-size:16px_16px]",
  /** a soft crimson wash that fades to nothing: the streak art behind the hero, community band and footer */
  glow: "bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,color-mix(in_oklab,var(--glow)_55%,transparent),color-mix(in_oklab,var(--glow)_15%,transparent)_55%,transparent_75%)]",
  /** a flat muted fill: avatars and thumbnails */
  muted: "bg-muted ring-1 ring-foreground/10",
} as const;

export interface RaycastPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Purely decorative (aria-hidden); never draws the product. */
export function RaycastPlaceholder({ tone = "panel", className }: RaycastPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
