import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface CastelionPlaceholderProps {
  /** a real image or video; it is stretched to cover the slot. Empty: a plain token surface */
  media?: ReactNode;
  /** muted: flat surface · dusk: muted into the warm glow (film) · sky: navy into the highlight blue (photo cards) */
  tone?: "muted" | "dusk" | "sky";
  /** what the slot will show, for screen readers (only used while it is empty) */
  label?: string;
  className?: string;
}

const tones = {
  muted: "bg-muted",
  dusk: "bg-muted bg-[linear-gradient(180deg,var(--muted)_0%,color-mix(in_oklab,var(--glow)_60%,var(--muted))_100%)]",
  sky: "bg-secondary bg-[linear-gradient(180deg,var(--secondary)_0%,var(--highlight)_100%)]",
};

/** A media slot; empty, a token-coloured surface standing in for the picture. */
export function CastelionPlaceholder({ media, tone = "muted", label, className }: CastelionPlaceholderProps) {
  return (
    <div
      role={media ? undefined : "img"}
      aria-label={media ? undefined : label}
      className={cn(
        "relative block overflow-clip",
        !media && tones[tone],
        "[&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:absolute [&>video]:inset-0 [&>video]:size-full [&>video]:object-cover",
        className,
      )}
    >
      {media}
    </div>
  );
}
