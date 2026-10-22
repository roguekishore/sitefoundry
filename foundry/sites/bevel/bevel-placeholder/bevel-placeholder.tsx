import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a soft muted fill: photos, posts, the flat-lay */
  muted: "bg-muted",
  /** a white slab with a faint ring and a soft shadow: phone screenshots */
  phone: "bg-background ring-1 ring-foreground/10 shadow-[0_2px_16px_0_color-mix(in_oklab,var(--foreground)_15%,transparent)]",
  /** a lavender wash: AI personas, glowing art */
  glow: "bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--glow)_75%,var(--background)),color-mix(in_oklab,var(--glow)_25%,transparent)_70%)]",
  /** a white tile with a small shadow: logos and floating cards */
  tile: "bg-background shadow-[0_4px_16px_0_color-mix(in_oklab,var(--foreground)_12%,transparent)]",
  /** a translucent panel: UI clusters over a tinted card */
  panel: "bg-background/60 ring-1 ring-background/80",
} as const;

export interface BevelPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Purely decorative (aria-hidden); never draws the product. */
export function BevelPlaceholder({ tone = "muted", className }: BevelPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
