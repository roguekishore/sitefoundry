import type { ReactNode } from "react";
import { LeomeAndPartnersCornerMarks } from "@foundry/leome-and-partners-corner-marks";
import { cn } from "@foundry/foundry-utils";
import "./leome-and-partners-media-panel.css";

export interface LeomeAndPartnersMediaPanelProps {
  /**
   * A photo or video filling the panel; give it `className="size-full object-cover"`. It sits
   * in a layer 20% taller than the panel that drifts with the scroll. A placeholder when empty.
   */
  media?: ReactNode;
  /** what sits at the bottom of the panel, over the dark scrim (a statement, a heading and a link…) */
  children?: ReactNode;
  /** show the two small corner squares near the top */
  marks?: boolean;
  className?: string;
}

/**
 * A full-bleed photo panel, at least the window's height and otherwise 3:2 (960px tall at
 * 1440), with two corner marks near the top, a scrim darkening the lower half, and content at
 * the bottom-left. The photo drifts against the scroll (parallax) by about 8% each way.
 */
export function LeomeAndPartnersMediaPanel({ media, children, marks = true, className }: LeomeAndPartnersMediaPanelProps) {
  return (
    <section
      className={cn(
        "leome-and-partners-media-panel relative isolate flex aspect-[3/2] min-h-svh w-full flex-col justify-end overflow-clip bg-card font-sans text-foreground",
        className,
      )}
    >
      <div className="leome-and-partners-media-panel-layer absolute inset-x-0 -top-[10%] -bottom-[10%] -z-10">
        {media ?? <div className="size-full bg-linear-to-b from-muted via-muted to-card" />}
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-b from-transparent to-card/80" />
      {marks && <LeomeAndPartnersCornerMarks />}
      <div className="px-gutter pb-20">{children}</div>
    </section>
  );
}
