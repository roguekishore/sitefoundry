import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HelionenergyButton } from "@foundry/helionenergy-button";
import { HelionenergyEyebrow } from "@foundry/helionenergy-eyebrow";
import { HelionenergyPlaceholder } from "@foundry/helionenergy-placeholder";
import "./helionenergy-careers.css";

export interface HelionenergyCareersProps {
  /** the small mono label in the top-left corner */
  eyebrow: ReactNode;
  /** the heading's lines (two on desktop, one run-on line on phones) */
  title: ReactNode[];
  /** the outlined button's text */
  ctaLabel: ReactNode;
  /** where the button goes */
  ctaHref: string;
  /** the small film in the middle (aspect 1.48); empty, a placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A one-window call to action that darkens as it scrolls in: the page colour gives way to a
 * near-black ground lit by soft pale spotlights from below. A small film sits in the middle
 * with the heading to its left and an outlined button to its right (stacked and centred on
 * phones). The button's outline opens from the middle as it arrives.
 */
export function HelionenergyCareers({ eyebrow, title, ctaLabel, ctaHref, media, className }: HelionenergyCareersProps) {
  return (
    <section className={cn("helionenergy-careers relative isolate h-svh overflow-clip", className)}>
      <div aria-hidden className="helionenergy-careers-ground dark absolute inset-0 -z-10 bg-background">
        <div className="helionenergy-careers-glow absolute inset-0" />
      </div>

      <div className="dark relative h-full px-gutter text-foreground">
        <div className="relative mx-auto h-full max-w-page">
          <HelionenergyEyebrow className="absolute top-16 left-0">{eyebrow}</HelionenergyEyebrow>

          <div className="flex h-full flex-col items-center justify-center pt-20 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:pt-0">
            <h2 className="text-center font-display text-[clamp(1.275rem,0.981rem+1.208vw,2.068rem)] leading-[1.1] font-medium tracking-[-0.05em] lg:justify-self-start lg:text-left">
              {title.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && (
                    <>
                      <br className="max-lg:hidden" />{" "}
                    </>
                  )}
                  {line}
                </Fragment>
              ))}
            </h2>
            <HelionenergyPlaceholder
              media={media}
              tone="film"
              zoom
              className="mt-[5.5rem] aspect-[1.48] w-[20.625rem] max-w-full rounded-md lg:mt-0 lg:w-[23.8rem]"
            />
            <HelionenergyButton href={ctaHref} reveal className="mt-[10rem] lg:mt-0 lg:justify-self-center">
              {ctaLabel}
            </HelionenergyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
