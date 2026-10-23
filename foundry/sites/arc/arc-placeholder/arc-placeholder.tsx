import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a quiet grey surface: illustrations and photos */
  muted: "bg-muted",
  /** a white raised surface with a hairline: product screenshots */
  card: "bg-card ring-1 ring-border ring-inset",
  /** a faint ink wash that sits on any coloured panel */
  wash: "bg-foreground/[0.06]",
} as const;

export interface ArcPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio, radius and shadow */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function ArcPlaceholder({ tone = "muted", className }: ArcPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
