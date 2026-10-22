import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { OnEnergyBlurText } from "@foundry/on-energy-blur-text";
import { OnEnergyReveal } from "@foundry/on-energy-reveal";

export interface OnEnergyNewsStory {
  /** small mono kind label, e.g. "Announcement" */
  kind: string;
  /** the date, as shown */
  date: string;
  title: string;
  /** a short excerpt */
  excerpt: string;
  href: string;
  /** a 3:2 image; a placeholder panel when empty */
  media?: ReactNode;
}

export interface OnEnergyNewsRow {
  title: string;
  /** the date, as shown */
  date: string;
  href: string;
}

export interface OnEnergyNewsProps {
  /** the section heading; its letters blur in */
  title: string;
  /** one or two lines under the heading */
  intro?: string;
  /** two featured stories with images */
  featured: OnEnergyNewsStory[];
  /** more stories as plain rows: title, date, link */
  rows?: OnEnergyNewsRow[];
  /** the link text at the end of each row */
  readMoreLabel?: string;
  className?: string;
}

/**
 * A light news section: a big light heading, a short intro, two featured stories side by side
 * (a large rounded 3:2 image, then a mono kind/date column beside the title and excerpt), and
 * a ruled list of more stories with title, date and "read more". On hover a row fills grey,
 * its title slides right and its link slides left.
 */
export function OnEnergyNews({ title, intro, featured, rows = [], readMoreLabel = "Read more", className }: OnEnergyNewsProps) {
  return (
    <section data-on-energy-tone="inverse" className={cn("bg-foreground text-background", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[7.75rem] pb-52 lg:pt-[7.5rem] lg:pb-60">
        <OnEnergyBlurText text={title} className="font-display text-[2.34rem]/[1.167] font-light tracking-[-0.02em] lg:text-5xl/[1.167] lg:tracking-[-0.04em]" />
        {intro && (
          <OnEnergyReveal as="p" className="mt-48 max-w-[22rem] text-[0.91rem]/[1.375] font-light tracking-[-0.02em] lg:mt-[12.5rem] lg:max-w-[22.5rem] lg:text-base/[1.375]">
            {intro}
          </OnEnergyReveal>
        )}

        <ul className="mt-16 grid gap-y-20 lg:mt-10 lg:grid-cols-2 lg:gap-x-4">
          {featured.map((story, i) => (
            <OnEnergyReveal as="li" key={story.title} rise={40} delay={i * 5}>
              <a href={story.href} className="group/story block">
                <div className="aspect-[3/2] overflow-clip rounded-[1rem] transition-[filter] duration-200 group-hover/story:brightness-95 lg:rounded-[2rem]">
                  {story.media ?? <div className="size-full bg-background/15" />}
                </div>
                <div className="mt-8 grid gap-y-8 lg:mt-10 lg:grid-cols-[10.8rem_1fr]">
                  <p className="font-mono text-[0.6875rem]/[1.6] text-background/55 uppercase">
                    {story.kind}
                    <br />
                    {story.date}
                  </p>
                  <div className="lg:pr-12">
                    <h3 className="text-[1.3rem]/[1.2] font-light tracking-[-0.03em] lg:text-2xl/[1.167]">{story.title}</h3>
                    <p className="mt-3 text-[0.91rem]/[1.375] font-light tracking-[-0.02em] text-background/60 lg:text-base/[1.375]">{story.excerpt}</p>
                  </div>
                </div>
              </a>
            </OnEnergyReveal>
          ))}
        </ul>

        {rows.length > 0 && (
          <ul className="mt-36 lg:mt-[8.5rem]">
            {rows.map((row) => (
              <OnEnergyReveal as="li" key={row.title} rise={30}>
                <a
                  href={row.href}
                  className="group/row grid border-b border-background py-6 transition-colors duration-200 hover:bg-background/10 lg:grid-cols-2 lg:items-center lg:gap-x-[1.6vw] lg:py-[1.6rem]"
                >
                  <span className="text-[0.91rem]/[1.375] font-light tracking-[-0.02em] transition-transform duration-200 group-hover/row:translate-x-[0.8rem] motion-reduce:transition-none lg:pr-8 lg:text-base/[1.375]">
                    {row.title}
                  </span>
                  <span className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <span className="text-[0.91rem]/[1.375] font-light text-background/60 lg:text-base/[1.375]">{row.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-[0.91rem] font-light transition-transform duration-200 group-hover/row:-translate-x-[0.8rem] motion-reduce:transition-none lg:text-base [&_svg]:size-4 [&_svg]:[stroke-dasharray:0.01_2.5] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-width:2]">
                      {readMoreLabel}
                      <ArrowUpRight aria-hidden />
                    </span>
                  </span>
                </a>
              </OnEnergyReveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
