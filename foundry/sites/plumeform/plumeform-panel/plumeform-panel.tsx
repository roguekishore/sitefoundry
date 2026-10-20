import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./plumeform-panel.css";

/** where the three colour clouds sit: mint + sky + peach in different corners */
export type PlumeformPanelClouds = "a" | "b" | "c" | "none";

export interface PlumeformPanelProps {
  /** a picture, video or live demo for the panel; empty shows a placeholder of `aspect` */
  media?: ReactNode;
  /** built content instead of media (e.g. a form); fills the padded panel */
  children?: ReactNode;
  /** the placeholder's width / height, e.g. "390/400" */
  aspect?: string;
  /** cloud arrangement behind the panel */
  clouds?: PlumeformPanelClouds;
  /** inner padding: none lets media run to the panel's edge */
  padding?: "none" | "md";
  className?: string;
}

const cloudSets: Record<Exclude<PlumeformPanelClouds, "none">, string[]> = {
  a: ["left-[8%] top-[45%] bg-chart-2", "right-[2%] bottom-[2%] bg-chart-3", "right-[18%] top-[-4%] bg-glow"],
  b: ["right-[6%] top-[4%] bg-chart-3", "left-[4%] top-[26%] bg-chart-4", "right-[12%] bottom-[0%] bg-glow"],
  c: ["left-[10%] top-[14%] bg-glow", "right-[0%] top-[34%] bg-chart-2", "left-[30%] bottom-[-6%] bg-glow"],
};

/** Plumeform's light panel: translucent white glass with a soft drop, over drifting colour clouds. */
export function PlumeformPanel({ media, children, aspect = "4/3", clouds = "a", padding = "md", className }: PlumeformPanelProps) {
  return (
    <div className={cn("relative isolate", className)}>
      {clouds !== "none" && (
        <div aria-hidden className="plumeform-panel-clouds pointer-events-none absolute -inset-x-16 -inset-y-12 -z-10">
          {cloudSets[clouds].map((c) => (
            <span key={c} className={cn("plumeform-panel-cloud absolute size-[55%] rounded-full opacity-70 blur-3xl dark:opacity-20", c)} />
          ))}
        </div>
      )}
      <div
        className={cn(
          "relative overflow-clip rounded-2xl border border-card/70 bg-linear-to-b from-card/95 to-card/75 text-card-foreground backdrop-blur-sm",
          "shadow-[inset_0_1px_0_var(--card),0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_20px_46px_-30px_color-mix(in_oklab,var(--foreground)_45%,transparent)]",
          padding === "md" && "p-6 lg:p-7",
        )}
      >
        {children ??
          media ?? (
            <div
              className={cn("w-full bg-muted/70", padding === "md" && "rounded-[calc(var(--radius)/2)]")}
              style={{ aspectRatio: aspect } as CSSProperties}
            />
          )}
      </div>
    </div>
  );
}
