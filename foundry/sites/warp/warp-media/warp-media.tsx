import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WarpMediaProps {
  /** the real image, video or chart; the slot shows a plain surface while empty */
  children?: ReactNode;
  /** what the media shows, for screen readers, while the slot is empty */
  label?: string;
  /** size, ratio, border and radius of the slot */
  className?: string;
}

/** A media slot: real media when given, otherwise a muted surface with a faint dot grid. */
export function WarpMedia({ children, label, className }: WarpMediaProps) {
  if (children)
    return <div className={cn("relative overflow-clip [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover", className)}>{children}</div>;
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn(
        "bg-muted bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--foreground)_12%,transparent)_1.2px,transparent_0)] bg-[size:16px_16px]",
        className,
      )}
    />
  );
}
