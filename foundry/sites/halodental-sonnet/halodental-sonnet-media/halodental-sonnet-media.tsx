import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HalodentalSonnetMediaProps {
  /** the real image or video; it is cropped to fill the frame. Empty shows the placeholder. */
  children?: ReactNode;
  /** width / height as a CSS ratio, e.g. "16 / 10" or "1" */
  ratio?: string;
  /** light: muted paper surface · dark: graphite surface with an orange glow (for black panels) */
  tone?: "light" | "dark";
  className?: string;
}

/** A framed media slot. The ratio sets the height, so the page does not jump when the image loads. */
export function HalodentalSonnetMedia({ children, ratio = "1", tone = "light", className }: HalodentalSonnetMediaProps) {
  const style: CSSProperties = { aspectRatio: ratio };
  return (
    <div
      style={style}
      className={cn(
        "relative w-full overflow-hidden rounded-sm [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
        !children && tone === "light" && "bg-gradient-to-br from-muted via-muted to-glow/25",
        !children &&
          tone === "dark" &&
          "bg-gradient-to-b from-card via-background to-background before:absolute before:inset-x-0 before:top-1/3 before:h-1/2 before:bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--glow)_30%,transparent),transparent_70%)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
