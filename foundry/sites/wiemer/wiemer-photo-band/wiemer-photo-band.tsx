import { useId, type ReactNode } from "react";
import { Plus, X } from "lucide-react";
import { wiemerDriftFrame, wiemerReveal, wiemerRevealStyle } from "@foundry/wiemer-reveal";
import { cn } from "@foundry/foundry-utils";
import "./wiemer-photo-band.css";

export interface WiemerHotspot {
  /** from the left edge of the photo, in % */
  x: number;
  /** from the top edge of the photo, in % */
  y: number;
  /** the card's title */
  title: string;
  /** the card's line of text */
  text: string;
  /** the card's picture (an <img>, 4:3); empty shows a placeholder */
  media?: ReactNode;
}

export interface WiemerPhotoBandProps {
  /** the photo (an <img>, cover); empty shows a placeholder */
  media?: ReactNode;
  /** what the photo shows, for screen readers */
  label?: string;
  /** shape on wide screens: tall (1440:1035, the landing band) or wide (3:2) */
  shape?: "tall" | "wide";
  /** plus buttons on the photo, each opening a small card */
  hotspots?: WiemerHotspot[];
  /** label of the close button in the hotspot cards (screen readers) */
  closeLabel?: string;
  className?: string;
}

/** Full-bleed drifting photo with optional plus-button hotspots. */
export function WiemerPhotoBand({ media, label, shape = "tall", hotspots = [], closeLabel = "Close", className }: WiemerPhotoBandProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <section
      aria-label={label}
      className={cn(
        wiemerDriftFrame,
        "relative isolate aspect-[2/3] w-full overflow-clip bg-background",
        shape === "tall" ? "md:aspect-[1440/1035]" : "md:aspect-[3/2]",
        className,
      )}
    >
      <div
        className={cn(wiemerReveal("drift"), "absolute inset-x-0 -top-[9%] -z-10 h-[118%] bg-linear-to-b from-muted to-glow/45 [&>img]:size-full [&>img]:object-cover")}
        style={wiemerRevealStyle(0, 60)}
      >
        {media}
      </div>

      {hotspots.map((spot, i) => {
        const id = `wiemer-spot-${uid}-${i}`;
        return (
          <div key={id}>
            <button
              type="button"
              popoverTarget={id}
              aria-label={spot.title}
              className="absolute grid size-10 -translate-1/2 place-items-center rounded-full bg-background text-foreground transition-transform duration-300 ease-[cubic-bezier(0.38,0.005,0.215,1)] hover:scale-110 hover:rotate-45 motion-reduce:transition-none md:size-12"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            >
              <Plus aria-hidden="true" strokeWidth={1.5} className="size-4" />
            </button>
            <div
              id={id}
              popover="auto"
              className="wiemer-photo-band-card m-auto w-[min(calc(100vw-2*var(--page-gutter)),27rem)] rounded-2xl bg-card p-3 text-card-foreground"
            >
              <div className="aspect-[4/3] overflow-clip rounded-lg bg-muted [&>img]:size-full [&>img]:object-cover">{spot.media}</div>
              <div className="px-2 pt-4 pb-3">
                <h3 className="text-[max(20px,1.6vw)] leading-[1.2] font-medium tracking-[-0.03em]">{spot.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.35] font-medium tracking-[-0.015em]">{spot.text}</p>
              </div>
              <button
                type="button"
                popoverTarget={id}
                popoverTargetAction="hide"
                aria-label={closeLabel}
                className="absolute top-5 right-5 grid size-9 place-items-center rounded-full bg-background text-foreground transition-transform duration-300 hover:rotate-90 motion-reduce:transition-none"
              >
                <X aria-hidden="true" strokeWidth={1.5} className="size-4" />
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
