import { cn } from "@foundry/foundry-utils";

export interface FormenergyPlaceholderProps {
  /** light: muted to a faint ink wash (photos on light bands) · dark: a deep grey diagonal (photo bands under white text) */
  tone?: "light" | "dark";
  /** size and position of the slot it fills */
  className?: string;
}

const tones = {
  light: "bg-linear-to-br from-muted to-foreground/15",
  dark: "bg-linear-to-br from-muted to-background",
};

/** A token-coloured surface standing in for media until a real image or video fills the slot. */
export function FormenergyPlaceholder({ tone = "light", className }: FormenergyPlaceholderProps) {
  return <div aria-hidden className={cn("block size-full", tones[tone], className)} />;
}
