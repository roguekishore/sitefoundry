import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a cut-out on the page colour: a soft wash fading downwards */
  wash: "bg-linear-to-b from-highlight/25 via-highlight/12 to-highlight/5",
  /** a photograph: a flat mid-ink surface that reads on cream, white or midnight */
  photo: "bg-muted-foreground/30",
  /** an icon or line illustration: a faint tile with a hairline */
  icon: "bg-foreground/5 ring-1 ring-foreground/15 ring-inset",
} as const;

export interface EzraPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function EzraPlaceholder({ tone = "photo", className }: EzraPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
