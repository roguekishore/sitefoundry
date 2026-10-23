import { cn } from "@foundry/foundry-utils";

export interface VastspacePlaceholderProps {
  /** size, aspect ratio and radius, e.g. "aspect-square w-full" */
  className?: string;
}

/** Stands in for media. Purely decorative (aria-hidden); never draws the picture. */
export function VastspacePlaceholder({ className }: VastspacePlaceholderProps) {
  return <div aria-hidden className={cn("bg-muted", className)} />;
}
