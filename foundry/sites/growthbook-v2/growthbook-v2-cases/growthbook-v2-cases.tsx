import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2RailAccent } from "@foundry/growthbook-v2-rail-accent";
import "./growthbook-v2-cases.css";

export interface GrowthbookV2Case {
  /** the customer's wordmark, about 32px tall */
  logo: ReactNode;
  /** the customer's name, for screen readers */
  name: string;
  /** one sentence: what they did */
  story: string;
  /** the big result, e.g. "+18%" */
  stat: string;
  /** what the result measures */
  statLabel: string;
  /** the mono link at the bottom */
  link: { label: string; href: string };
}

export interface GrowthbookV2CasesProps {
  /** the heading; \n for line breaks */
  title: string;
  /** the outline button beside the heading */
  action: { label: string; href: string };
  /** the cards; four or more make the slide worthwhile */
  cases: GrowthbookV2Case[];
  className?: string;
}

export function GrowthbookV2Cases({ title, action, cases, className }: GrowthbookV2CasesProps) {
  return (
    <section className={cn("bg-secondary text-secondary-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="relative border-x border-border pt-12 pb-16 [timeline-scope:--growthbook-v2-cases] lg:pt-20 lg:pb-20">
          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-0">
            <GrowthbookV2RailAccent className="-left-px" barClassName="h-full lg:h-full" />
            <GrowthbookV2Heading className="pl-10 lg:whitespace-pre-line">{title}</GrowthbookV2Heading>
            {/* the mid-page hairline, fading out below the heading row */}
            <span aria-hidden className="absolute -top-20 bottom-0 left-1/2 hidden w-px bg-linear-to-b from-border to-transparent lg:block" />
            <div className="pl-10 lg:flex lg:justify-end lg:pr-10 lg:pl-0">
              <GrowthbookV2Button href={action.href} variant="outline" arrow className="w-full lg:w-auto">
                {action.label}
              </GrowthbookV2Button>
            </div>
          </div>

          <div className="growthbook-v2-cases-viewport @container mt-12 pl-5 lg:mt-20 [view-timeline-name:--growthbook-v2-cases]">
            <ul className="growthbook-v2-cases-track dark flex w-max gap-10 pr-5">
              {cases.map((c) => (
                <li
                  key={c.name}
                  className="flex w-[18.75rem] flex-col rounded-xl bg-card text-card-foreground lg:w-[25.0625rem]"
                >
                  <div className="h-[17rem] px-6 pt-12 lg:h-[15.75rem] lg:px-9 lg:pt-12">
                    <span role="img" aria-label={c.name} className="growthbook-v2-cases-logo flex h-10 items-center [&_svg]:h-8 [&_svg]:w-auto">
                      {c.logo}
                    </span>
                    <p className="mt-10 text-lg/[1.5]">{c.story}</p>
                  </div>
                  <div className="border-t border-border px-6 py-6 lg:px-9">
                    <p className="text-[2.25rem]/[1.3] lg:text-[2.5rem]/[1.3]">{c.stat}</p>
                    <p className="mt-1 text-base">{c.statLabel}</p>
                  </div>
                  <a
                    href={c.link.href}
                    className="flex items-center gap-3 border-t border-border px-6 py-8 font-mono text-sm transition-colors duration-250 hover:text-accent-foreground motion-reduce:transition-none lg:px-9"
                  >
                    {c.link.label}
                    <ArrowRight aria-hidden className="size-5" strokeWidth={1.75} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div aria-hidden className="growthbook-v2-cases-progress @container mx-5 mt-4 h-1 rounded-full bg-border lg:hidden">
            <div className="growthbook-v2-cases-thumb h-full w-1/3 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
