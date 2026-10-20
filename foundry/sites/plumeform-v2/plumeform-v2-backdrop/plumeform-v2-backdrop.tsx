import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./plumeform-v2-backdrop.css";

export interface PlumeformV2BackdropProps {
  /** a video, canvas or image filling the band; empty shows the placeholder */
  media?: ReactNode;
  /** fade in once on page load (hero) or as the band scrolls into view */
  entrance?: "load" | "view" | "none";
  /** darken the middle and the edges so text on top stays readable */
  veil?: boolean;
  className?: string;
}

export function PlumeformV2Backdrop({ media, entrance = "view", veil = false, className }: PlumeformV2BackdropProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-clip bg-background", className)}>
      <div
        className={cn(
          "absolute inset-0 [&>*]:size-full [&>*]:object-cover",
          entrance === "load" && "plumeform-v2-backdrop-load",
          entrance === "view" && "plumeform-v2-backdrop-view",
        )}
      >
        {media ?? (
          <div className="bg-[radial-gradient(45%_60%_at_25%_30%,color-mix(in_oklab,var(--glow)_32%,transparent),transparent_75%),radial-gradient(40%_55%_at_75%_65%,color-mix(in_oklab,var(--glow)_22%,transparent),transparent_75%)]" />
        )}
      </div>
      {veil && (
        <div className="absolute inset-0 bg-[radial-gradient(62%_64%_at_50%_42%,color-mix(in_oklab,var(--background)_72%,transparent),transparent_78%),linear-gradient(color-mix(in_oklab,var(--background)_55%,transparent),transparent_24%,transparent_62%,var(--background))]" />
      )}
    </div>
  );
}
