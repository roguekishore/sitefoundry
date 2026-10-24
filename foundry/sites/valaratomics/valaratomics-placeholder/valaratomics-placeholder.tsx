import { cn } from "@foundry/foundry-utils";

export interface ValaratomicsPlaceholderProps {
  /** film: a dark diagonal fade (near the page colour) · photo: a mid-grey fade for pictures with detail · flat: a flat muted surface */
  tone?: "film" | "photo" | "flat";
  /** size and position of the slot it fills */
  className?: string;
}

const tones = {
  film: "bg-linear-to-br from-muted via-background to-muted/60",
  photo: "bg-linear-to-br from-foreground/30 via-foreground/12 to-foreground/22",
  flat: "bg-muted",
};

/** A token-coloured surface standing in for a video or photo until a real one fills the slot. */
export function ValaratomicsPlaceholder({ tone = "film", className }: ValaratomicsPlaceholderProps) {
  return <div aria-hidden className={cn("block size-full", tones[tone], className)} />;
}
