import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface StructureengineeringMediaProps {
  /** a real image or video; it is cropped to the frame like object-fit: cover. Empty: a placeholder */
  media?: ReactNode;
  /** light: a muted surface (images on paper) · dark: the dark stone used under white type */
  tone?: "light" | "dark";
  /** lay a dark veil over it, as the original does under white headings */
  veil?: boolean;
  className?: string;
}

// A media frame: the given image/video filling it, or a flat token-coloured placeholder.
export function StructureengineeringMedia({ media, tone = "light", veil = false, className }: StructureengineeringMediaProps) {
  return (
    <div className={cn("relative overflow-clip", className)}>
      {media ? (
        <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">{media}</div>
      ) : (
        <div aria-hidden className={cn("absolute inset-0", tone === "light" ? "bg-muted" : "bg-glow")} />
      )}
      {veil && <div aria-hidden className="absolute inset-0 bg-foreground/35 dark:bg-background/45" />}
    </div>
  );
}
