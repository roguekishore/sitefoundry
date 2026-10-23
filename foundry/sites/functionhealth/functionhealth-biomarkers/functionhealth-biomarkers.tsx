import type { ReactNode } from "react";
import { TestTubes } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthButton } from "@foundry/functionhealth-button";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";
import { FunctionhealthMedia } from "@foundry/functionhealth-media";
import "./functionhealth-biomarkers.css";

export interface FunctionhealthCategory {
  /** category name, set large in serif */
  title: string;
  /** e.g. "16 markers" */
  count: string;
  /** test names; the last one fades out */
  items: string[];
}

export interface FunctionhealthBiomarkersProps {
  title: HeadingPart[];
  /** the expert's quote, avatar (media slot), name and role */
  quote: { text: string; name: string; role: string; avatar?: ReactNode };
  /** category cells, in reading order; the "more" tile follows the last one */
  categories: FunctionhealthCategory[];
  /** the last, cream tile */
  more: { kicker: string; title: string; cta: { label: string; href: string } };
  /** the row under the grid */
  share: {
    title: HeadingPart[];
    text: string;
    /** brand mark for the small hub tile */
    hub?: ReactNode;
    /** destination tiles, each with an optional icon */
    targets: { label: string; icon?: ReactNode }[];
  };
  className?: string;
}

export function FunctionhealthBiomarkers({ title, quote, categories, more, share, className }: FunctionhealthBiomarkersProps) {
  return (
    <section id="what-we-test" className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} />
        <figure className="mx-auto mt-10 flex max-w-[44rem] flex-col gap-5 px-3 text-base leading-snug font-light lg:mt-12 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:px-0">
          <blockquote className="lg:max-w-[22rem]">{quote.text}</blockquote>
          <figcaption className="flex items-center gap-3">
            <FunctionhealthMedia media={quote.avatar} ratio="size-[2.875rem] shrink-0" rounded="rounded-full" />
            <span className="block text-sm leading-snug font-light">
              <span className="block font-semibold">{quote.name}</span>
              {quote.role}
            </span>
          </figcaption>
        </figure>

        <ul className="mt-12 grid grid-cols-2 lg:mt-[5rem] lg:grid-cols-3">
          {categories.map((c, i) => (
            <li
              key={c.title}
              className={cn(
                "min-w-0 border-border pt-6 pb-10 pl-4 lg:pb-[5.5rem] lg:pl-8",
                i % 2 === 0 ? "pl-0 pr-4 lg:pr-8" : "border-l pr-0",
                "lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+2)]:pl-8 lg:[&:nth-child(3n)]:border-l lg:[&:nth-child(3n)]:pl-8",
                i >= 2 && "border-t lg:border-t-0",
                i >= 3 && "lg:border-t",
              )}
            >
              <h3 className="max-w-[6.4em] font-display text-[clamp(1.5rem,1.52vw+1.13rem,2.5rem)] leading-[1.03] font-light">{c.title}</h3>
              <p className="mt-4 flex items-center gap-2 text-sm leading-none font-semibold text-primary lg:font-light">
                <TestTubes className="size-4" strokeWidth={2} />
                {c.count}
              </p>
              <ul className="functionhealth-biomarkers-list mt-8 space-y-1 text-base leading-[1.5] font-light text-muted-foreground lg:text-[1.0625rem]">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
          <li className={cn("flex min-h-[26rem] min-w-0 flex-col bg-card px-4 pt-6 pb-10 lg:min-h-0 lg:px-8 lg:pb-12")}>
            <p className="font-display text-[1.75rem] leading-none font-light text-primary italic lg:text-[2.5rem]">{more.kicker}</p>
            <p className="mt-6 max-w-[5.5em] font-display text-[1.75rem] leading-[1.1] font-light text-primary italic lg:mt-12 lg:text-[2.5rem]">{more.title}</p>
            <FunctionhealthButton href={more.cta.href} variant="outline" className="mt-auto self-start">
              {more.cta.label}
            </FunctionhealthButton>
          </li>
        </ul>

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-border pt-10 text-center lg:flex-row lg:justify-between lg:gap-10 lg:text-start">
          <div>
            <FunctionhealthHeading title={share.title} align="start" className="text-center lg:text-start [&_h2]:text-[1.75rem] [&_h2]:tracking-normal [&_h2]:leading-tight lg:[&_h2]:text-[1.875rem]" />
            <p className="mt-2 text-sm leading-snug font-light">{share.text}</p>
          </div>
          <div className="flex items-center gap-3 lg:gap-0">
            <div className="hidden items-center lg:flex">
              <FunctionhealthMedia media={share.hub} ratio="size-[3.25rem]" rounded="rounded-md" className="bg-background" />
              <span aria-hidden className="mx-4 w-8 border-t border-dotted border-border" />
            </div>
            <ul className="grid w-full grid-cols-2 gap-3 lg:flex lg:w-auto lg:gap-3">
              {share.targets.map((t) => (
                <li key={t.label} className="flex h-14 items-center justify-center gap-2 rounded-md bg-card px-5 text-base font-semibold whitespace-nowrap lg:px-6">
                  {t.icon}
                  {t.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
