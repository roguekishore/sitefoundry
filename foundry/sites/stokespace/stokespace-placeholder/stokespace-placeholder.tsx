import { cn } from "@foundry/foundry-utils";

export interface StokespacePlaceholderProps {
  /** muted: a flat muted surface · sky: a dusk gradient from the page colour into the glow and highlight accents */
  tone?: "muted" | "sky";
  /** size and position of the slot it fills */
  className?: string;
}

const tones = {
  muted: "bg-muted",
  sky: "bg-linear-to-b from-background from-30% via-glow/45 via-65% to-highlight/70",
};

/** A token-coloured surface standing in for a photo, render or video until real media fills the slot. */
export function StokespacePlaceholder({ tone = "muted", className }: StokespacePlaceholderProps) {
  return <div aria-hidden className={cn("block size-full", tones[tone], className)} />;
}
