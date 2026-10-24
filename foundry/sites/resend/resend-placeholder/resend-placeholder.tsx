import { cn } from "@foundry/foundry-utils";

export interface ResendPlaceholderProps {
  /** panel: a muted surface (screenshots, scenes) · tile: a glossy app-icon square with a glow under it · round: a circle (avatars, marks) */
  shape?: "panel" | "tile" | "round";
  /** size, radius and position of the slot it fills */
  className?: string;
}

const shapes = {
  panel: "rounded-lg border border-border bg-linear-to-b from-muted to-muted/25",
  tile: "rounded-[2rem] border border-border bg-linear-to-b from-muted via-background to-muted shadow-[0_14px_36px_-14px_var(--highlight)]",
  round: "rounded-full border border-border bg-linear-to-br from-muted to-muted/40",
};

/** A token-coloured surface standing in for media until a real image or video fills the slot. */
export function ResendPlaceholder({ shape = "panel", className }: ResendPlaceholderProps) {
  return <div aria-hidden className={cn("block", shapes[shape], className)} />;
}
