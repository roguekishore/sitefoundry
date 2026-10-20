import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherV2Button, hhhusherV2Ease } from "@foundry/hhhusher-v2-button";
import { HhhusherV2RevealText, hhhusherV2Reveal, hhhusherV2RevealStyle } from "@foundry/hhhusher-v2-reveal";

export interface HhhusherV2Slide {
  /** shown on the tab, in caps (e.g. "Studio") */
  tab: string;
  /** the big title at the card's top left */
  title: string;
  /** the line under the title */
  subtitle?: string;
  /** the open tab's paragraph */
  text: string;
  /** the open tab's read-more link */
  link?: { label: string; href: string };
  /** the slide's picture or video, cropped like cover; a placeholder when empty */
  media?: ReactNode;
}

export interface HhhusherV2OverviewProps {
  /** the big tagline above the card; its lines rise in one by one */
  tagline: string;
  /** two or three slides; the first starts open */
  slides: HhhusherV2Slide[];
  id?: string;
  className?: string;
}

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function HhhusherV2Overview({ tagline, slides, id, className }: HhhusherV2OverviewProps) {
  const [active, setActive] = useState(0);
  const current = slides[active] ?? slides[0];

  return (
    <section id={id} className={cn("bg-secondary pt-section text-secondary-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <HhhusherV2RevealText
          as="h2"
          text={tagline}
          className="max-w-[82rem] font-display text-[2.08rem] leading-[1.05] font-[570] tracking-[-0.02em] lg:text-[3.5625rem] lg:leading-[1.05]"
        />

        <div className="dark relative isolate mt-16 flex h-[43.4rem] flex-col justify-between overflow-clip rounded-lg bg-card p-5 text-foreground lg:mt-[7.5rem] lg:h-[45rem] lg:p-10">
          {/* slides: stacked, the open one on top; each drifts inside the frame */}
          {slides.map((slide, i) => (
            <div
              key={slide.tab}
              aria-hidden={i !== active}
              className={cn("absolute inset-0 -z-10 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.94,0.6,1)] motion-reduce:transition-none", i === active ? "opacity-100" : "opacity-0")}
            >
              <div className={cn(hhhusherV2Reveal("drift"), "absolute -inset-y-[4.5rem] inset-x-0 [&>*]:size-full [&>*]:object-cover")}>
                {slide.media ?? <div className="size-full bg-muted" />}
              </div>
            </div>
          ))}

          <div>
            <h3 className="font-display text-[1.56rem] leading-[1.1] font-[570] tracking-[-0.02em] lg:text-[1.8rem]">{current.title}</h3>
            {current.subtitle && <p className="mt-3 font-display text-[1.04rem] leading-[1.3] font-[570] lg:mt-4 lg:text-base">{current.subtitle}</p>}
          </div>

          {/* tabs: the open one a yellow card, the rest narrow glass tiles */}
          <div className={cn(hhhusherV2Reveal("fade"), "flex flex-col gap-2.5 lg:flex-row lg:items-stretch")} role="tablist">
            {slides.map((slide, i) =>
              i === active ? (
                <div
                  key={slide.tab}
                  role="tab"
                  aria-selected
                  className="flex min-h-[11rem] rounded-lg bg-primary p-2 pr-5 text-primary-foreground lg:min-h-[9.5rem] lg:w-[35rem] lg:p-6 lg:pr-24"
                >
                  <div className="flex flex-col lg:flex-row">
                    <span className="font-mono text-[0.75rem] font-bold lg:w-[3.75rem] lg:shrink-0 lg:pt-0.5">{pad(i)}</span>
                    <div className="mt-1 pl-4 lg:mt-0 lg:pl-0">
                      <p className="font-mono text-[0.85rem] font-bold uppercase lg:text-[0.875rem]">{slide.tab}</p>
                      <p className="mt-4 text-[0.78rem] leading-[1.3] font-[570] lg:mt-3.5 lg:text-[0.875rem] lg:leading-[1.15]">{slide.text}</p>
                      {slide.link && (
                        <HhhusherV2Button variant="link" href={slide.link.href} className="mt-4 lg:mt-3">
                          {slide.link.label}
                        </HhhusherV2Button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={slide.tab}
                  type="button"
                  role="tab"
                  aria-selected={false}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex h-[4.5rem] items-center justify-between rounded-lg border-2 border-transparent bg-foreground/15 px-5 font-mono text-[0.75rem] font-bold uppercase backdrop-blur-md transition-[background-color,border-color] hover:border-foreground hover:bg-transparent",
                    "lg:h-auto lg:w-[8.75rem] lg:flex-col lg:items-start lg:p-6",
                    hhhusherV2Ease,
                  )}
                >
                  <span>{pad(i)}</span>
                  <span>{slide.tab}</span>
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
