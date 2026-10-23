import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PilotBrushNote } from "@foundry/pilot-brush-note";
import { PilotHeading } from "@foundry/pilot-heading";
import { PilotPlaceholder } from "@foundry/pilot-placeholder";

export interface PilotFeature {
  /** a large line icon or small illustration (about 100px) */
  icon?: ReactNode;
  /** the feature's title */
  title: string;
  /** one or two lines under it */
  text: string;
  /** the product screenshot set inside the cyan card; a placeholder panel when empty */
  media?: ReactNode;
}

export interface PilotFeaturesProps {
  /** the section heading; \n sets the desktop line breaks */
  title: string;
  /** the paragraph under it */
  lede?: string;
  /** the rows, alternating card left / card right */
  items: PilotFeature[];
  /** the handwritten closing line */
  note?: string;
  className?: string;
}

/** Pilot's 50/50 features: alternating dotted cyan cards and icon-led copy on a pale cyan band. */
export function PilotFeatures({ title, lede, items, note, className }: PilotFeaturesProps) {
  return (
    <section className={cn("bg-accent/20 text-foreground", className)}>
      <div className="mx-auto max-w-page border-border px-gutter pt-12 pb-16 lg:border-x lg:pt-20 lg:pb-20">
        <PilotHeading title={title} lede={lede} className="max-w-[40rem] lg:max-w-[50rem]" />

        <div className="mx-auto mt-16 grid max-w-[66.25rem] gap-16 lg:mt-20 lg:gap-10">
          {items.map((it, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={it.title}
                className={cn(
                  "grid items-center gap-6 lg:gap-14",
                  flip ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,43rem)]" : "lg:grid-cols-[minmax(0,43rem)_minmax(0,1fr)]",
                )}
              >
                <div className={cn("relative order-2 aspect-[342/210] overflow-clip rounded-2xl bg-accent lg:aspect-[688/422]", !flip && "lg:order-1")}>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent-foreground)_28%,transparent)_1px,transparent_1.6px)] bg-[size:1.5625rem_1.5625rem] bg-[position:0.75rem_0.75rem]"
                  />
                  <div className="absolute top-[13%] left-[12.5%] h-[74%] w-[70%]">
                    {it.media ?? <PilotPlaceholder tone="screen" className="size-full rounded-sm" />}
                  </div>
                </div>
                <div className={cn("order-1 text-center lg:max-w-[20rem] lg:text-left", !flip && "lg:order-2")}>
                  {it.icon && (
                    <div className="mx-auto flex size-20 items-center justify-center text-foreground lg:mx-0 lg:size-32 [&_svg]:size-14 lg:[&_svg]:size-24">
                      {it.icon}
                    </div>
                  )}
                  <h3 className="mt-3 font-display text-[1.75rem] leading-[1.05] font-medium lg:mt-7 lg:text-[2rem]">{it.title}</h3>
                  <p className="mx-auto mt-4 max-w-[18rem] text-base leading-6 lg:mx-0 lg:mt-5 lg:max-w-none">{it.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {note && <PilotBrushNote variant="script" stroke="accent" text={note} className="mt-16 lg:mt-28" />}
      </div>
    </section>
  );
}
