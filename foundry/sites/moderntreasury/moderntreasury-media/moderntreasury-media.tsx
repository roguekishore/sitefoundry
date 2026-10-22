import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ModerntreasuryMediaProps {
  /** the real image, video or art; the slot shows a soft wash while empty */
  children?: ReactNode;
  /** what the media shows, for screen readers, while the slot is empty */
  label?: string;
  /** size, ratio and radius of the slot */
  className?: string;
}

/** A media slot: the real media when given, otherwise a plain pale wash of the same size. */
export function ModerntreasuryMedia({ children, label, className }: ModerntreasuryMediaProps) {
  if (children) return <div className={cn("relative overflow-clip [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover", className)}>{children}</div>;
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn("bg-linear-to-br from-glow/40 via-muted to-muted", className)}
    />
  );
}
