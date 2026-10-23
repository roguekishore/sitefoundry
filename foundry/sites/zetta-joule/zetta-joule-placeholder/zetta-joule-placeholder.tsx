import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a soft wash from the theme's glow into its highlight colour: photos, renders, video */
  wash: "bg-linear-to-br from-glow/45 to-highlight/20",
  /** a flat panel with a hairline: illustrations and screenshots on a plain page */
  panel: "bg-secondary ring-1 ring-border ring-inset",
  /** a translucent white veil: media placed over the sky gradient */
  veil: "bg-highlight-foreground/15 ring-1 ring-highlight-foreground/30 ring-inset",
  /** a deep surface: media inside a dark band */
  deep: "bg-card bg-linear-to-br from-glow/25 via-card to-card",
} as const;

export interface ZettaJoulePlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media (photo, video, render, illustration). Decorative: never draws the subject. */
export function ZettaJoulePlaceholder({ tone = "wash", className }: ZettaJoulePlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], "rounded-sm", className)} />;
}
