import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface VardaPlaceholderProps {
  /** a real image or video; it is stretched to cover the slot. Empty: a plain token surface */
  media?: ReactNode;
  /** chrome laid over the slot, centred (e.g. a play button) */
  children?: ReactNode;
  /** what the slot will show, for screen readers (only used while it is empty) */
  label?: string;
  className?: string;
}

/** A flat media slot with square corners; empty, a muted surface with a faint warm corner light. */
export function VardaPlaceholder({ media, children, label, className }: VardaPlaceholderProps) {
  return (
    <div
      role={media ? undefined : "img"}
      aria-label={media ? undefined : label}
      className={cn(
        "relative grid place-items-center overflow-clip bg-muted",
        !media &&
          "bg-[radial-gradient(90%_80%_at_85%_10%,color-mix(in_oklab,var(--glow)_22%,transparent),transparent_70%)]",
        "[&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:absolute [&>video]:inset-0 [&>video]:size-full [&>video]:object-cover",
        className,
      )}
    >
      {media}
      {children && <div className="relative">{children}</div>}
    </div>
  );
}
