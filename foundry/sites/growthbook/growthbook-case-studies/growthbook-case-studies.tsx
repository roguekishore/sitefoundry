import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";
import { GrowthbookRail } from "@foundry/growthbook-rail";
import { GrowthbookTrack } from "@foundry/growthbook-track";
import "./growthbook-case-studies.css";

export interface GrowthbookCaseStudy {
  /** customer name, for screen readers */
  name: string;
  /** customer wordmark (svg, img or styled text), about 32px tall, light on dark */
  logo?: ReactNode;
  /** one or two lines: what they did */
  story: string;
  /** the big figure, e.g. "+18%" */
  figure: string;
  /** what the figure measures */
  figureLabel: string;
  /** mono link at the bottom */
  link: { label: string; href: string };
}

export interface GrowthbookCaseStudiesProps {
  /** the heading; each string starts a new line */
  title: string[];
  /** outline button opposite the heading */
  cta?: { label: string; href: string };
  stories: GrowthbookCaseStudy[];
  /** accessible name of the carousel */
  carouselLabel: string;
  /** ms between automatic moves; 0 turns autoplay off */
  autoplay?: number;
  className?: string;
}

export function GrowthbookCaseStudies({ title, cta, stories, carouselLabel, autoplay = 4500, className }: GrowthbookCaseStudiesProps) {
  return (
    <section className={cn("bg-secondary text-secondary-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="relative border-x border-border pt-12 pb-12 lg:pt-20 lg:pb-20">
          <GrowthbookRail />
          {/* the middle rule fades out under the heading */}
          <span aria-hidden className="absolute top-0 left-1/2 hidden h-64 w-px bg-linear-to-b from-border to-transparent lg:block" />
          <div className="flex flex-col gap-8 px-10 lg:flex-row lg:items-start lg:justify-between lg:pr-10">
            <h2 className="max-w-[26rem] font-display text-4xl leading-[1.2] font-normal lg:text-[3.5rem]">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            {cta && (
              <GrowthbookButton href={cta.href} variant="outline" arrow blockOnMobile className="-mr-10 lg:mr-0">
                {cta.label}
              </GrowthbookButton>
            )}
          </div>
          <div className="growthbook-case-studies-cards mt-12 lg:mt-20">
            <GrowthbookTrack
              label={carouselLabel}
              autoplay={autoplay || undefined}
              slideClassName="w-[18.75rem] lg:w-[25rem]"
              trackClassName="gap-5 px-5 scroll-px-5 lg:gap-10"
              items={stories.map((s) => (
                <article
                  key={s.name}
                  className="dark flex h-[30.5rem] flex-col rounded-lg bg-card text-card-foreground lg:h-[29.125rem]"
                >
                  <div className="flex-1 px-6 pt-12 lg:px-9 lg:pt-11">
                    <div role="img" aria-label={s.name} className="growthbook-case-studies-logo flex h-10 items-center text-card-foreground">
                      {s.logo}
                    </div>
                    <p className="mt-9 text-lg leading-[1.5] font-medium lg:mt-10">{s.story}</p>
                  </div>
                  <div className="border-t border-foreground/10 px-6 py-6 lg:px-9">
                    <p className="font-display text-4xl leading-[1.3] lg:text-[2.5rem]">{s.figure}</p>
                    <p className="mt-2 text-base font-medium">{s.figureLabel}</p>
                  </div>
                  <a
                    href={s.link.href}
                    className="flex items-center gap-3 border-t border-foreground/10 px-6 py-7 font-mono text-sm transition-colors duration-250 hover:text-highlight motion-reduce:transition-none lg:px-9"
                  >
                    {s.link.label}
                    <ArrowRight aria-hidden className="size-5" strokeWidth={1.5} />
                  </a>
                </article>
              ))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
