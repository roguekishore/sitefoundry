import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a warm amber gradient: the hero banner */
  warm: "bg-background bg-linear-to-b from-glow/35 via-glow/75 to-glow",
  /** a neutral grey wash: photos */
  photo: "bg-muted bg-linear-to-br from-muted via-muted to-muted-foreground/35",
  /** grey into ink: photos that carry light text (inverts with dark mode, like the text) */
  shade: "bg-muted-foreground bg-linear-to-br from-muted-foreground/60 via-muted-foreground to-foreground/85",
  /** a faint white glass panel: product shots on the pastel plan cards */
  glass: "bg-card/35 ring-1 ring-card/60 ring-inset",
  /** a faint white wash: pictures on the black bands */
  band: "bg-background/10 dark:bg-foreground/10",
} as const;

export interface WhoopPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function WhoopPlaceholder({ tone = "photo", className }: WhoopPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}
