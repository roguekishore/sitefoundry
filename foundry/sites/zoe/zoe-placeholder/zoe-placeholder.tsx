import { cn } from "@foundry/foundry-utils";
import "./zoe-placeholder.css";

const tones = {
  /** a warm cream-to-grey wash: photos */
  photo: "bg-accent bg-linear-to-br from-accent via-muted-foreground/15 to-muted-foreground/35",
  /** a faint ink tint: product shots sitting on cream cards */
  soft: "bg-foreground/[0.05]",
  /** a navy surface with a soft sheen: photos shot on navy */
  ink: "bg-foreground bg-linear-to-br from-foreground via-foreground to-background/15 dark:bg-card dark:from-card dark:via-card dark:to-foreground/10",
  /** a pale glass panel: composites on the yellow band */
  glass: "bg-background/30 ring-1 ring-background/50 ring-inset",
  /** flat yellow: covers that are the brand colour */
  sun: "bg-primary bg-linear-to-b from-primary to-glow",
} as const;

export interface ZoePlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** fade in as it enters view, like the site's lazily loaded pictures */
  fade?: boolean;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function ZoePlaceholder({ tone = "photo", fade = false, className }: ZoePlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], fade && "zoe-placeholder-fade", className)} />;
}
