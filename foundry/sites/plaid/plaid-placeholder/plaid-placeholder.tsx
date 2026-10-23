import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a faint white wash with a hairline: illustrations sitting on the blue gradient bands */
  art: "bg-card/10 ring-1 ring-card/20 ring-inset",
  /** a frosted white panel with a white rim: product UI pictures inside the soft cards */
  panel: "bg-card/60 ring-4 ring-card/80 shadow-[0_14px_30px_-12px] shadow-foreground/15",
  /** a pale cyan-to-lavender wash: photos */
  photo: "bg-secondary bg-linear-to-br from-highlight/25 via-secondary to-accent",
  /** a soft blue glow: pictures on the navy bands */
  deep: "bg-linear-to-br from-glow/10 via-glow/25 to-glow/60",
} as const;

export interface PlaidPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function PlaidPlaceholder({ tone = "photo", className }: PlaidPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
