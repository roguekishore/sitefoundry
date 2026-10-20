import { useId, type ReactNode } from "react";
import { Plus, X } from "lucide-react";
import { wiemerV2Reveal, wiemerV2RevealStyle } from "@foundry/wiemer-v2-reveal";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2Hotspot {
  /** where the button sits, in % of the photo's width from the left */
  x: number;
  /** where the button sits, in % of the photo's height from the top */
  y: number;
  /** the detail's title (also the button's label for screen readers) */
  title: string;
  /** a sentence or two about this detail */
  text: string;
  /** a close-up picture for the detail card (4:3, an <img>); grey when empty */
  media?: ReactNode;
}

export interface WiemerV2HotspotsProps {
  /** the full-bleed photo (an <img>), cropped to fill; a soft placeholder when empty */
  media?: ReactNode;
  /** for screen readers: what the photo shows */
  label: string;
  /** the round "+" buttons on the photo; leave empty for a plain photo band */
  hotspots?: WiemerV2Hotspot[];
  /** how tall it is from lg: "window" = 115% of the window, "photo" = a 3:2 frame (phones are 2:3) */
  height?: "window" | "photo";
  /** let the photo drift inside the band as you scroll (default on) */
  drift?: boolean;
  /** screen-reader label for the detail card's close button */
  closeLabel?: string;
  className?: string;
}

/**
 * A full-bleed photo band with small white round "+" buttons pinned to details in the picture.
 * A button grows and turns 45° on hover; a click opens a small card with a close-up and a few
 * words (a native popover, no JavaScript). The photo drifts slowly as you scroll.
 */
export function WiemerV2Hotspots({ media, label, hotspots = [], height = "window", drift = true, closeLabel, className }: WiemerV2HotspotsProps) {
  const id = useId().replace(/:/g, "");
  return (
    <section aria-label={label} className={cn("relative aspect-[2/3] w-full overflow-clip bg-muted", height === "window" ? "lg:aspect-auto lg:h-[115svh]" : "lg:aspect-[3/2]", className)}>
      <div
        className={cn(drift && wiemerV2Reveal("drift"), "absolute inset-x-0", drift ? "-top-[8%] h-[116%]" : "inset-y-0", "[&>img]:size-full [&>img]:object-cover")}
        style={drift ? wiemerV2RevealStyle(0, [-80, 40]) : undefined}
      >
        {media ?? <div className="size-full bg-[radial-gradient(ellipse_at_45%_55%,color-mix(in_oklab,var(--glow)_35%,transparent),transparent_70%)]" />}
      </div>

      {hotspots.map((h, i) => (
        <div key={i} className="absolute" style={{ left: `${h.x}%`, top: `${h.y}%` }}>
          <button
            type="button"
            popoverTarget={`${id}-spot-${i}`}
            aria-label={h.title}
            className="-translate-x-1/2 -translate-y-1/2 grid size-8 place-items-center rounded-full bg-card text-card-foreground transition-transform duration-300 ease-[cubic-bezier(0.38,0.005,0.215,1)] hover:scale-110 hover:rotate-45 motion-reduce:transition-none lg:size-12"
          >
            <Plus aria-hidden="true" strokeWidth={1.5} className="size-3.5 lg:size-4" />
          </button>
          <div
            id={`${id}-spot-${i}`}
            popover="auto"
            className="fixed inset-0 m-auto h-fit w-[min(28rem,calc(100vw-2rem))] rounded-xl bg-background p-3 text-foreground backdrop:bg-foreground/30"
          >
            <div className="aspect-[4/3] overflow-clip rounded-md bg-muted [&>img]:size-full [&>img]:object-cover">{h.media}</div>
            <div className="flex items-start justify-between gap-4 px-1 pt-4 pb-1">
              <div>
                <p className="text-xl leading-[1.2] font-medium tracking-[-0.02em]">{h.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-[1.35]">{h.text}</p>
              </div>
              <button type="button" popoverTarget={`${id}-spot-${i}`} popoverTargetAction="hide" aria-label={closeLabel} className="grid size-8 shrink-0 place-items-center rounded-full border border-border transition-colors hover:bg-muted">
                <X aria-hidden="true" strokeWidth={1.5} className="size-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
