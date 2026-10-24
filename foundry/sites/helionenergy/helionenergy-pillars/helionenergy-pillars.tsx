import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HelionenergyEyebrow } from "@foundry/helionenergy-eyebrow";
import { HelionenergyHeading } from "@foundry/helionenergy-heading";
import { HelionenergyPlaceholder } from "@foundry/helionenergy-placeholder";
import "./helionenergy-pillars.css";

export interface HelionenergyPillar {
  /** the bracketed mono label */
  label: ReactNode;
  /** one short line under it */
  lead: ReactNode;
  /** a few sentences, set small (beside the picture on desktop, under it on phones) */
  body: ReactNode;
  /** the 16:9 photo or film; empty, a placeholder */
  media?: ReactNode;
}

export interface HelionenergyPillarsProps {
  /** the heading's lines (broken on desktop only) */
  title: ReactNode[];
  /** the stacked rows, three in the original */
  items: HelionenergyPillar[];
  /** an id for the section, e.g. for a skip link to land on */
  id?: string;
  className?: string;
}

/** Per row: which sensor timeline drives it, and whether it shrinks/fades away (all but the last). */
function rowMotion(i: number, n: number): CSSProperties {
  const last = i === n - 1;
  return {
    "--hp-tl": `--helionenergy-pillars-${i}`,
    "--hp-media-anim": last ? "none" : "helionenergy-pillars-shrink",
    "--hp-text-anim": last ? "helionenergy-pillars-in" : "helionenergy-pillars-in, helionenergy-pillars-out",
    "--hp-text-range": last ? "entry 30% entry 85%" : "entry 30% entry 85%, contain 0% contain 100%",
    "--hp-text-fill": last ? "backwards" : "backwards, forwards",
  } as CSSProperties;
}

/**
 * A centred uppercase heading over a stack of rows: a bracketed mono label and a short line, a
 * 16:9 picture with 8px corners, and a few small sentences. Phones stack each row centred. On
 * desktop the heading sticks near the top and each row (label left, picture centre, text right)
 * sticks mid-window, so the next one slides up over it: the covered picture shrinks to 92% and
 * lifts while its words fade out, and the new row's words fade up 20px.
 */
export function HelionenergyPillars({ title, items, id, className }: HelionenergyPillarsProps) {
  const n = items.length;
  return (
    <section
      id={id}
      className={cn("helionenergy-pillars relative bg-background px-gutter pt-[4.5rem] pb-[5.25rem] text-foreground lg:pt-[calc(114.4svh-16.875rem)] lg:pb-[31.9svh]", className)}
    >
      <div className="lg:absolute lg:inset-x-0 lg:top-[7.5rem] lg:bottom-[88.9svh] lg:px-gutter">
        <HelionenergyHeading lines={title} className="text-center lg:sticky lg:top-[5.9rem]" />
      </div>

      <div
        role="list"
        className="helionenergy-pillars-list relative mx-auto mt-[5.2rem] flex max-w-page flex-col gap-[5.4rem] lg:mt-0 lg:block"
        style={{ "--hp-scope": items.map((_, i) => `--helionenergy-pillars-${i}`).join(", ") } as CSSProperties}
      >
        {items.map((item, i) => (
          <Fragment key={i}>
            <span
              aria-hidden
              className="helionenergy-pillars-sensor absolute inset-x-0 h-[76.67svh] max-lg:hidden"
              style={{ top: `${(i * 76.67).toFixed(2)}svh`, "--hp-name": `--helionenergy-pillars-${i}` } as CSSProperties}
            />
            <div
              role="listitem"
              className="grid justify-items-center text-center lg:sticky lg:top-[calc(50svh-8.75rem)] lg:mb-[calc(76.67svh-22.875rem)] lg:h-[22.875rem] lg:grid-cols-[1fr_minmax(0,40.5rem)_1fr] lg:items-center lg:justify-items-stretch lg:text-left lg:last:mb-0"
              style={rowMotion(i, n)}
            >
              <div className="helionenergy-pillars-text flex flex-col items-center lg:items-start lg:pl-[3.56rem]">
                <HelionenergyEyebrow bracket>{item.label}</HelionenergyEyebrow>
                <p className="mt-[1.6rem] max-w-[9.75rem] text-[clamp(0.9375rem,0.845rem+0.378vw,1.186rem)] leading-[1.17] tracking-[-0.01em] text-balance text-foreground/90 lg:mt-7 lg:max-w-[11rem]">
                  {item.lead}
                </p>
              </div>
              <HelionenergyPlaceholder
                media={item.media}
                className="helionenergy-pillars-media mt-8 aspect-[1.77] w-full rounded-lg lg:mt-0"
              />
              <p className="helionenergy-pillars-text mt-6 max-w-[18.75rem] text-[0.8125rem] leading-[1.38] tracking-[-0.01em] text-foreground/85 lg:mt-0 lg:max-w-[13.25rem] lg:pl-[4.8rem] lg:box-content">
                {item.body}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
