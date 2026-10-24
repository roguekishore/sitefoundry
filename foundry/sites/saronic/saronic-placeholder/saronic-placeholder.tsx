import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SaronicPlaceholderProps {
  /** a real image or video to show; it is stretched to cover the frame */
  media?: ReactNode;
  /** size, aspect ratio, radius and position of the frame */
  className?: string;
}

/**
 * A media frame. Filled, it crops whatever it holds like `object-fit: cover`; empty, it is a
 * plain muted surface with a faint steel-blue wash from the top, never a drawing of the
 * vessel or scene it stands in for.
 */
export function SaronicPlaceholder({ media, className }: SaronicPlaceholderProps) {
  return (
    <div
      aria-hidden={media ? undefined : true}
      className={cn(
        "relative overflow-clip bg-muted",
        !media && "bg-linear-to-b from-glow/25 to-transparent",
        "[&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:absolute [&>video]:inset-0 [&>video]:size-full [&>video]:object-cover",
        className,
      )}
    >
      {media}
    </div>
  );
}
