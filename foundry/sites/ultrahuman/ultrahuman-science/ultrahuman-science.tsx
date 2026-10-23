import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanButton } from "@foundry/ultrahuman-button";
import { UltrahumanHeading } from "@foundry/ultrahuman-heading";
import { UltrahumanPlaceholder } from "@foundry/ultrahuman-placeholder";
import "./ultrahuman-science.css";

export interface UltrahumanScienceProps {
  /** the centred title */
  title: string;
  /** one line under it */
  body: string;
  /** the dark pill button */
  action: { label: string; href: string };
  /** six photos for the tiles around the copy, in this order: top-left back, top-left front,
   *  top-right, bottom-left, bottom-right back, bottom-right front. Placeholders fill gaps. */
  photos?: ReactNode[];
  /** describes the placeholder tiles for screen readers */
  photoLabels?: string[];
  className?: string;
}

// Each tile: its place and size at 390 and at 1440 (as % of the section), its aspect ratio, and
// how far toward the middle it starts (vw / svh) before flying out to its place.
const tiles = [
  { spot: "left-[6.7%] top-[22.5%] w-[29.2%] lg:left-[9%] lg:top-[29.3%] lg:w-[12.85%]", ratio: "aspect-[185/202]", dx: 19, dy: 5 },
  { spot: "left-0 top-[19.7%] w-[40.5%] lg:left-[14.2%] lg:top-[26%] lg:w-[18%]", ratio: "aspect-[259/133]", dx: 15, dy: 9 },
  { spot: "left-[61.8%] top-[16.6%] w-[35.9%] lg:left-[67.9%] lg:top-[20%] lg:w-[16%]", ratio: "aspect-square", dx: -14, dy: 9.5 },
  { spot: "left-0 top-[71.2%] w-[38.7%] lg:left-[10.3%] lg:top-[66%] lg:w-[18.9%]", ratio: "aspect-[272/173]", dx: 16.5, dy: -14 },
  { spot: "left-[60.8%] top-[78.3%] w-[28.5%] lg:left-[74.4%] lg:top-[65.3%] lg:w-[12.85%]", ratio: "aspect-[185/176]", dx: -17, dy: -14 },
  { spot: "left-[68.5%] top-[74.8%] w-[31.5%] lg:left-[77.4%] lg:top-[61.1%] lg:w-[17.9%]", ratio: "aspect-[258/133]", dx: -20, dy: -10 },
];

/** A window-tall white section: a centred intro with a dark pill, ringed by six photo tiles in
 *  two overlapping pairs and two singles. As the section scrolls in, the tiles fly out from the
 *  middle to their corners and grow to full size. */
export function UltrahumanScience({ title, body, action, photos = [], photoLabels = [], className }: UltrahumanScienceProps) {
  return (
    <section className={cn("ultrahuman-science relative flex h-svh items-center justify-center overflow-clip bg-background text-foreground", className)}>
      {tiles.map((tile, i) => (
        <div
          key={tile.spot}
          className={cn("ultrahuman-science-tile absolute overflow-clip rounded-lg bg-background lg:rounded-xl", tile.spot, tile.ratio)}
          style={{ "--ultrahuman-science-dx": `${tile.dx}vw`, "--ultrahuman-science-dy": `${tile.dy}svh` } as CSSProperties}
        >
          {photos[i] ?? <UltrahumanPlaceholder tone="photo" label={photoLabels[i]} />}
        </div>
      ))}
      <UltrahumanHeading
        className="relative"
        title={title}
        body={body}
        actions={
          <UltrahumanButton href={action.href} variant="ink" className="lg:min-w-[9.375rem]">
            {action.label}
          </UltrahumanButton>
        }
      />
    </section>
  );
}
