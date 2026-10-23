import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a soft colour wash from the theme's glow and highlight: product screens and backgrounds */
  wash: "bg-popover bg-linear-to-br from-glow/45 via-highlight/35 to-secondary/50",
  /** a faint panel with a hairline ring, tinted by the surrounding text colour: windows and screenshots */
  panel: "bg-current/[0.07] ring-1 ring-current/15",
  /** a flat tint of the surrounding text colour */
  tint: "bg-current/10",
} as const;

export interface SuperhumanPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Purely decorative (aria-hidden); never draws the product. */
export function SuperhumanPlaceholder({ tone = "panel", className }: SuperhumanPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
