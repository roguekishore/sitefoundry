import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a soft wash of the glow and highlight colours: blurred photographic backdrops */
  sky: "bg-linear-to-b from-glow/45 via-highlight/35 to-glow/30",
  /** a flat quiet surface: diagrams, embeds, screenshots */
  flat: "bg-muted",
} as const;

export interface BridgePlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio, radius and any fade mask */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function BridgePlaceholder({ tone = "sky", className }: BridgePlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
