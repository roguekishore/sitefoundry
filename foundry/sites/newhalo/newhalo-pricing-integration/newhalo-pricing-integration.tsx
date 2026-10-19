import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import "./newhalo-pricing-integration.css";

export interface NewhaloPricingIntegrationProps {
  /** the 100px heading over the picture */
  title: string;
  /** captions that take turns at the bottom left, switched with the arrows */
  slides: { title: string; text: string }[];
  /** screen-reader names of the arrows */
  controlLabels?: { previous: string; next: string };
  /** the big, pale room picture; empty shows the placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A pinned, window-tall picture of a pale treatment room: on desktop it stays put for about two
 * more screens of scrolling while the picture pans upward underneath a big dark heading. A
 * caption with two square arrows sits bottom-left.
 */
export function NewhaloPricingIntegration({ title, slides, controlLabels = { previous: "Previous", next: "Next" }, media, className }: NewhaloPricingIntegrationProps) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const arrow = "flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors duration-300 disabled:bg-foreground/5 disabled:text-foreground/30";

  return (
    <section className={cn("newhalo-pricing-integration relative bg-background text-foreground lg:h-[330svh]", className)}>
      <div className="relative min-h-svh overflow-clip lg:sticky lg:top-0 lg:h-svh">
        <NewhaloMedia className="absolute inset-x-0 top-0 h-full lg:h-[128%]" innerClassName="newhalo-pricing-integration-pan">
          {media}
        </NewhaloMedia>
        <div className="relative mx-auto flex min-h-svh max-w-page flex-col px-gutter pt-12 pb-10 lg:h-full lg:pt-[8.4rem]">
          <h2 className="max-w-[40rem] font-display text-[3.125rem] leading-[0.95] tracking-[-0.015em] lg:text-[6.25rem]">{title}</h2>
          {slide && (
            <div className="mt-auto max-w-[22rem]">
              <h3 className="font-display text-[1.3rem] leading-tight lg:text-2xl">{slide.title}</h3>
              <p className="mt-2 text-[0.91rem] leading-normal lg:text-base">{slide.text}</p>
              {slides.length > 1 && (
                <div className="mt-8 flex gap-2.5">
                  <button type="button" aria-label={controlLabels.previous} disabled={index === 0} onClick={() => setIndex((i) => i - 1)} className={arrow}>
                    <ArrowLeft aria-hidden strokeWidth={1.25} className="size-5" />
                  </button>
                  <button type="button" aria-label={controlLabels.next} disabled={index === slides.length - 1} onClick={() => setIndex((i) => i + 1)} className={arrow}>
                    <ArrowRight aria-hidden strokeWidth={1.25} className="size-5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
