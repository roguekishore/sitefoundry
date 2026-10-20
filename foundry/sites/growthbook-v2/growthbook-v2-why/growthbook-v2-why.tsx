import { useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2Panel } from "@foundry/growthbook-v2-panel";
import { GrowthbookV2RailAccent } from "@foundry/growthbook-v2-rail-accent";
import "./growthbook-v2-why.css";

export interface GrowthbookV2WhyCard {
  /** the short white title at the top */
  title: string;
  /** the card's wash */
  tone?: "navy" | "violet" | "teal";
  /** the art at the bottom (image); empty = a soft placeholder */
  media?: ReactNode;
}

export interface GrowthbookV2WhyTab {
  /** the tab's label */
  label: string;
  /** a tiny mono word before it, e.g. "For" */
  prefix?: string;
  /** the first tab of the original carries an arrow */
  arrow?: boolean;
  cards: GrowthbookV2WhyCard[];
}

export interface GrowthbookV2WhyProps {
  /** the heading; \n for line breaks */
  title: string;
  tabs: GrowthbookV2WhyTab[];
  className?: string;
}

export function GrowthbookV2Why({ title, tabs, className }: GrowthbookV2WhyProps) {
  const [active, setActive] = useState(0);
  const cards = tabs[active]?.cards ?? [];
  return (
    <section className={cn("overflow-x-clip bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="relative border-l border-border pt-12 lg:pt-20">
          <GrowthbookV2RailAccent />
          <GrowthbookV2Heading className="pl-10 lg:whitespace-pre-line">{title}</GrowthbookV2Heading>
          <div className="mt-10 lg:mt-28 lg:grid lg:grid-cols-[15.375rem_minmax(0,1fr)] lg:gap-8">
            <div role="tablist" className="-mr-gutter flex overflow-x-auto pl-10 [scrollbar-width:none] lg:mr-0 lg:flex-col lg:overflow-visible">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative flex h-[3.75rem] shrink-0 items-center gap-2 px-5 text-left text-base whitespace-nowrap transition-colors duration-300 motion-reduce:transition-none lg:h-[4.25rem] lg:border-b lg:border-border lg:px-2",
                    i === active
                      ? "border-b-4 border-b-primary bg-card lg:border-b lg:border-b-border lg:px-5"
                      : "hover:text-primary",
                    i === 0 && "lg:border-t",
                  )}
                >
                  {i === active && <GrowthbookV2RailAccent className="left-0 hidden lg:block" barClassName="h-full lg:h-full" />}
                  {t.prefix && <sup className="font-mono text-[0.625rem]">{t.prefix}</sup>}
                  {t.label}
                  {t.arrow && <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />}
                </button>
              ))}
            </div>
            <div className="growthbook-v2-why-viewport @container mt-12 -mr-gutter lg:mt-0 lg:-mr-[max(var(--page-gutter),calc((100vw-var(--page-width))/2))]">
              <ul key={active} className="growthbook-v2-why-track flex w-max gap-5 pr-gutter">
                {cards.map((c) => (
                  <li key={c.title} className="w-[16.125rem] shrink-0 lg:w-[19.8125rem]">
                    <GrowthbookV2Panel tone={c.tone ?? "navy"} className="flex h-[24.75rem] flex-col rounded-lg p-6">
                      <span aria-hidden className="absolute inset-x-6 bottom-6 h-px bg-card/10" />
                      <span aria-hidden className="absolute top-6 bottom-6 left-6 w-px bg-card/10" />
                      <p className="relative max-w-[12rem] text-lg/[1.5] text-primary-foreground">{c.title}</p>
                      <div className="relative mt-auto mb-8 ml-4 h-32 w-40 [&>*]:size-full [&>img]:object-contain">
                        {c.media ?? <div aria-hidden className="size-full rounded-xl bg-linear-to-br from-card/45 to-card/0" />}
                      </div>
                    </GrowthbookV2Panel>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
