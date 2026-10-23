import { cn } from "@foundry/foundry-utils";

const tones = {
  /** the lavender-grey panel that holds product illustrations */
  panel: "bg-accent",
  /** a soft peach-to-grey wash: photos and video frames */
  photo: "bg-accent bg-linear-to-br from-glow/40 to-accent",
  /** a flat quiet surface: small images and cards */
  flat: "bg-muted ring-1 ring-border ring-inset",
} as const;

export interface BrexPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function BrexPlaceholder({ tone = "photo", className }: BrexPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
