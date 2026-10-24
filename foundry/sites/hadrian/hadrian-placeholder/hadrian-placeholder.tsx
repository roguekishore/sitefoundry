import { cn } from "@foundry/foundry-utils";

export interface HadrianPlaceholderProps {
  /** blueprint: a card-to-page diagonal fade · muted: a flat muted surface */
  tone?: "blueprint" | "muted";
  /** size and position of the slot it fills */
  className?: string;
}

const tones = {
  blueprint: "bg-linear-to-br from-card to-background",
  muted: "bg-muted",
};

/** A token-coloured surface standing in for media until a real image or video fills the slot. */
export function HadrianPlaceholder({ tone = "blueprint", className }: HadrianPlaceholderProps) {
  return <div aria-hidden className={cn("block size-full", tones[tone], className)} />;
}
