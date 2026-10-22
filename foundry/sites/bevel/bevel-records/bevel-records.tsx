import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BevelCard, type BevelTint } from "@foundry/bevel-card";
import { bevelLead, bevelTitle } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";
import "./bevel-records.css";

export interface BevelRecordsProps {
  /** the big title (three lines on desktop) */
  title: ReactNode;
  /** the grey paragraph under it */
  text: ReactNode;
  /** the icons on the white tiles around the ring (lucide icons; up to ten) */
  tiles: ReactNode[];
  /** the phone screenshot; a phone-shaped placeholder when empty */
  media?: ReactNode;
  /** up to two small cards floating by the phone (images); white placeholders when empty */
  floaters?: ReactNode[];
  /** the colour rising from the card's foot */
  tint?: BevelTint;
  className?: string;
}

/**
 * Tile spots: angle in degrees (0 = towards the text on desktop, upwards on phones) and the
 * ring's radius as a share of the ring box (inner 30%, outer 45%).
 */
const spots: [number, number][] = [
  [-36, 30], [-15, 30], [2, 30], [24, 30], [42, 30],
  [-26, 45], [-4, 45], [12, 45], [29, 45], [-48, 45],
];

/**
 * A full-width pale card with a teal wash: a phone on the left running off the bottom, a big
 * title and paragraph on the right, and between them white tiles on two faint concentric
 * rings that turn a few degrees as the card scrolls through the window. On phones the text
 * sits on top, the rings arc above the phone.
 */
export function BevelRecords({ title, text, tiles, media, floaters = [], tint = "teal", className }: BevelRecordsProps) {
  return (
    <section className={cn("bg-background pt-2 pb-section text-foreground lg:pt-4 lg:pb-[calc(var(--section-y)*2)]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)*2)]">
        <BevelCard tint={tint} className="h-[44rem] lg:h-[41.125rem]">
          {/* the ring box, centred on a point: below the text on phones (turned to arc upwards), left of centre on desktop */}
          <div aria-hidden className="absolute top-[40rem] left-1/2 size-[52rem] -translate-1/2 -rotate-90 lg:top-[52%] lg:left-[16.5%] lg:size-[88rem] lg:rotate-0">
            <div className="bevel-records-ring absolute inset-0">
              <div className="absolute inset-[20%] rounded-full border-2 border-background/60" />
              <div className="absolute inset-[5%] rounded-full border-2 border-background/50" />
              {tiles.slice(0, 10).map((icon, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-0 origin-left"
                  style={{ width: `${spots[i][1]}%`, transform: `rotate(${spots[i][0]}deg)` }}
                >
                  <div
                    className="absolute top-0 right-0 flex size-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-background text-foreground/75 shadow-[0_4px_16px_0_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:size-20 [&_svg]:size-6 lg:[&_svg]:size-8"
                    style={{ transform: `rotate(${-spots[i][0] + (i % 2 ? 10 : -12)}deg)` }}
                  >
                    <span className="flex rotate-90 lg:rotate-0">{icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative px-10 pt-10 lg:absolute lg:top-1/2 lg:left-[68.6%] lg:w-[28%] lg:-translate-y-1/2 lg:p-0">
            <h2 className={cn(bevelTitle.lg, "max-w-[12ch]")}>{title}</h2>
            <p className={cn(bevelLead, "mt-4 max-w-[17rem] lg:max-w-[22rem]")}>{text}</p>
          </div>

          <div className="absolute top-[26.5rem] left-1/2 aspect-[338/689] w-[16rem] -translate-x-1/2 lg:top-[7.25rem] lg:left-[4.65%] lg:w-[22.75rem] lg:translate-x-0">
            {media ?? <BevelPlaceholder tone="phone" className="size-full rounded-[2.75rem]" />}
            <div className="bevel-records-float absolute top-[3%] -right-[22%] w-[30%] rotate-[4deg]">
              {floaters[0] ?? <BevelPlaceholder tone="tile" className="aspect-[108/135] w-full rounded-lg" />}
            </div>
            <div className="bevel-records-float absolute top-[52%] -left-[16%] hidden w-[24%] -rotate-[8deg] lg:block">
              {floaters[1] ?? <BevelPlaceholder tone="tile" className="aspect-[108/150] w-full rounded-lg" />}
            </div>
          </div>
        </BevelCard>
      </div>
    </section>
  );
}
