import type { ReactNode } from "react";
import { SquareChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface WarpMarkProps {
  /** the company name, shown in lowercase */
  name: string;
  /** where the mark links to */
  href?: string;
  /** replaces the default icon tile */
  icon?: ReactNode;
  /** show only the icon (the name stays for screen readers) */
  iconOnly?: boolean;
  className?: string;
}

/** Wordmark: icon tile + lowercase name in the display face. */
export function WarpMark({ name, href = "#", icon, iconOnly, className }: WarpMarkProps) {
  return (
    <a href={href} aria-label={iconOnly ? name : undefined} className={cn("inline-flex items-center gap-1.5 text-foreground", className)}>
      {icon ?? <SquareChevronRight aria-hidden className="size-[1.6rem] fill-foreground stroke-background" strokeWidth={2} />}
      {!iconOnly && <span className="font-display text-[1.45rem] leading-none font-semibold tracking-[-0.03em] lowercase">{name}</span>}
    </a>
  );
}
