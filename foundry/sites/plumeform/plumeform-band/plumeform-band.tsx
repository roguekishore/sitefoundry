import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./plumeform-band.css";

export interface PlumeformBandProps {
  /** art behind the band (the original has a WebGL fluted-glass canvas); empty shows a soft glow placeholder */
  backdrop?: ReactNode;
  /** dark forces the dark colours (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  /** the element to render */
  as?: "section" | "div" | "footer";
  /** id, for in-page links */
  id?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * A full-bleed band in the theme's dark colours with a backdrop slot behind it. Marked
 * data-tone="dark" so plumeform-header turns dark while it sits over it.
 */
export function PlumeformBand({ backdrop, tone = "dark", as: Tag = "section", id, children, className }: PlumeformBandProps) {
  return (
    <Tag
      id={id}
      data-tone={tone === "dark" ? "dark" : undefined}
      className={cn(tone === "dark" && "dark", "relative isolate overflow-clip bg-background text-foreground", className)}
    >
      <div aria-hidden={backdrop ? undefined : true} className="plumeform-band-backdrop absolute inset-0 -z-10 overflow-clip [&>*]:size-full [&>*]:object-cover">
        {backdrop ?? (
          <div className="bg-[radial-gradient(70%_55%_at_65%_20%,color-mix(in_oklab,var(--glow)_45%,transparent),transparent_70%),radial-gradient(50%_45%_at_10%_85%,color-mix(in_oklab,var(--glow)_25%,transparent),transparent_70%)]" />
        )}
      </div>
      {children}
    </Tag>
  );
}
