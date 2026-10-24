import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface CfsMediaProps {
  /** an <img> or <video>; it is stretched to cover the frame. Empty: a placeholder */
  media?: ReactNode;
  /** draw the 3px orange rule along the bottom edge */
  rule?: boolean;
  /** "photo": a muted surface; "drawing": a faint dashed outline (for line art on the page colour) */
  tone?: "photo" | "drawing";
  className?: string;
}

/** A photo slot (cover fit) with an optional orange bottom rule. */
export function CfsMedia({ media, rule, tone = "photo", className }: CfsMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-clip [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
        !media && (tone === "photo" ? "bg-muted" : "border border-dashed border-foreground/25 bg-foreground/5"),
        rule && "border-b-[3px] border-b-primary",
        className,
      )}
    >
      {media}
    </div>
  );
}
