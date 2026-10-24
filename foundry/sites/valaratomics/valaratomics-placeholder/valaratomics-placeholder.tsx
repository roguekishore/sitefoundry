import { cn } from "@foundry/foundry-utils";

export interface ValaratomicsPlaceholderProps {
  /** film: a diagonal fade from the muted surface into the page colour · flat: a flat muted surface */
  tone?: "film" | "flat";
  /** size and position of the slot it fills */
  className?: string;
}

const tones = {
  film: "bg-linear-to-br from-muted via-background to-muted/60",
  flat: "bg-muted",
};

/** A token-coloured surface standing in for a video or photo until a real one fills the slot. */
export function ValaratomicsPlaceholder({ tone = "film", className }: ValaratomicsPlaceholderProps) {
  return <div aria-hidden className={cn("block size-full", tones[tone], className)} />;
}
