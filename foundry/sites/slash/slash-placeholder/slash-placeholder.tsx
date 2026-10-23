import { cn } from "@foundry/foundry-utils";

const tones = {
  /** full-bleed artwork on the page: a soft grey light from the upper right, fading to the page */
  lit: "bg-radial-[ellipse_at_72%_38%] from-foreground/22 via-foreground/7 via-45% to-transparent to-75%",
  /** artwork inside a card: a faint light wash from the top, fading into the card */
  card: "bg-radial-[ellipse_at_50%_20%] from-foreground/10 via-foreground/3 via-50% to-transparent to-80%",
  /** a photo or video frame: a dim slate surface */
  dim: "bg-muted",
  /** a small round or square stand-in (avatars, thumbnails) on dark panels */
  chip: "bg-accent ring-1 ring-inset ring-foreground/10",
} as const;

export interface SlashPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for an image, video or 3D render. Decorative: it never draws the thing it replaces. */
export function SlashPlaceholder({ tone = "dim", className }: SlashPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
