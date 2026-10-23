import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a soft butter-to-sand wash: photos and video frames */
  photo: "bg-secondary bg-linear-to-br from-glow/40 via-accent/70 to-secondary",
  /** a flat quiet surface: small images, logos */
  flat: "bg-muted ring-1 ring-border ring-inset",
  /** a translucent veil of the text colour: signatures over photos or cards */
  veil: "bg-foreground/10 ring-1 ring-foreground/20 ring-inset",
} as const;

export interface ThirdwayPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius (default 2px) */
  className?: string;
}

/** Stands in for media (photo, video, signature). Decorative: never draws the subject. */
export function ThirdwayPlaceholder({ tone = "photo", className }: ThirdwayPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], "rounded-[2px]", className)} />;
}
