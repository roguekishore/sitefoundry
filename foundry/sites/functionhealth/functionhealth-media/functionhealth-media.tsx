import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface FunctionhealthMediaProps {
  /** the real image, video or illustration; an empty slot shows the placeholder */
  media?: ReactNode;
  /** Tailwind aspect or size classes, e.g. "aspect-[3/4]" or "h-full" */
  ratio?: string;
  /** Tailwind radius class; defaults to the 12px card radius */
  rounded?: string;
  className?: string;
}

export function FunctionhealthMedia({ media, ratio = "aspect-square", rounded = "rounded-lg", className }: FunctionhealthMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-clip",
        ratio,
        rounded,
        !media && "border border-border bg-linear-to-br from-muted to-accent",
        "[&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
        className,
      )}
      aria-hidden={media ? undefined : true}
    >
      {media}
    </div>
  );
}
