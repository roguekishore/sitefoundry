import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GranolaMediaProps {
  /** the real image, video or screenshot; it is cropped to the frame like object-fit: cover */
  children?: ReactNode;
  /**
   * the placeholder surface while no media is given: muted (warm grey) · oat (the card surface,
   * with a hairline) · glow (a soft wash from highlight to glow) · ink (dark) · field (a wide
   * two-tone highlight and lilac field for full-bleed art)
   */
  tone?: "muted" | "oat" | "glow" | "ink" | "field";
  /** size, aspect ratio, radius and shadow of the frame */
  className?: string;
}

const tones = {
  muted: "bg-muted",
  oat: "border border-border bg-card",
  glow: "bg-[linear-gradient(150deg,color-mix(in_oklab,var(--highlight)_45%,var(--muted)),var(--muted)_55%,color-mix(in_oklab,var(--glow)_30%,var(--muted)))]",
  ink: "bg-foreground/85",
  field: "bg-[linear-gradient(90deg,var(--highlight)_0%,var(--highlight)_23%,color-mix(in_oklab,var(--chart-2)_70%,var(--chart-3))_23%,var(--chart-3)_100%)]",
};

/** A media slot: the given media cropped to the frame, or a token-coloured placeholder of the same size. */
export function GranolaMedia({ children, tone = "muted", className }: GranolaMediaProps) {
  if (children) {
    return <div className={cn("relative overflow-hidden [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover", className)}>{children}</div>;
  }
  return <div aria-hidden className={cn("relative", tones[tone], className)} />;
}
