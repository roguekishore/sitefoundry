import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./plumeform-v2-panel.css";

export interface PlumeformV2PanelProps {
  /** the panel's content (a demo, screenshot or form); empty shows a placeholder */
  children?: ReactNode;
  /** a strip across the top, above the padding (e.g. a browser bar) */
  header?: ReactNode;
  /** height of the empty placeholder, as a CSS length */
  placeholderHeight?: string;
  /** which colours lead the fog */
  fog?: "cool" | "warm" | "mint";
  /** padding inside the panel */
  padding?: "none" | "md" | "lg";
  className?: string;
}

// position and size, then colour token, of the three blobs for each fog
const fogs: Record<"cool" | "warm" | "mint", [string, string][]> = {
  cool: [
    ["left-[2%] top-[30%] size-[65%]", "chart-3"],
    ["right-[-4%] bottom-[0%] size-[60%]", "chart-4"],
    ["right-[10%] top-[-5%] size-[55%]", "glow"],
  ],
  warm: [
    ["left-[-4%] top-[15%] size-[65%]", "chart-5"],
    ["right-[0%] top-[-5%] size-[55%]", "chart-4"],
    ["right-[5%] bottom-[-5%] size-[55%]", "glow"],
  ],
  mint: [
    ["left-[0%] top-[5%] size-[65%]", "glow"],
    ["right-[-4%] top-[35%] size-[60%]", "chart-3"],
    ["left-[25%] bottom-[-5%] size-[50%]", "glow"],
  ],
};

const paddings = { none: "", md: "p-5 sm:p-7", lg: "p-6 sm:p-8" };

export function PlumeformV2Panel({
  children,
  header,
  placeholderHeight = "20rem",
  fog = "cool",
  padding = "md",
  className,
}: PlumeformV2PanelProps) {
  return (
    <div className={cn("relative isolate", className)}>
      <div aria-hidden className="pointer-events-none absolute -inset-12 -z-10">
        {fogs[fog].map(([place, colour], i) => (
          <span key={i} className={cn("plumeform-v2-panel-drift absolute", place)}>
            <span
              className="plumeform-v2-panel-float block size-full bg-[radial-gradient(closest-side,var(--plumeform-v2-fog),transparent)] opacity-90"
              style={{ "--plumeform-v2-fog": `var(--${colour})`, animationDelay: `${i * -4}s` } as CSSProperties}
            />
          </span>
        ))}
      </div>
      <div
        className={cn(
          "relative overflow-clip rounded-lg border border-card/70 bg-card/75",
          "shadow-[inset_1px_1px_0_color-mix(in_oklab,var(--card)_85%,transparent),0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_20px_46px_-30px_color-mix(in_oklab,var(--foreground)_45%,transparent)]",
        )}
      >
        {header}
        <div className={paddings[padding]}>
          {children ?? (
            <div className="rounded-[calc(var(--radius)/2)] bg-muted/60" style={{ height: placeholderHeight }} />
          )}
        </div>
      </div>
    </div>
  );
}
