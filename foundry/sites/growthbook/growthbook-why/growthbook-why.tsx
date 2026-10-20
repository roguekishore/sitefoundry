import { useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookRail } from "@foundry/growthbook-rail";
import { GrowthbookTrack } from "@foundry/growthbook-track";

export interface GrowthbookWhyCard {
  /** one or two lines at the top of the card */
  title: string;
  /** navy fading to the second chart colour, violet, or teal */
  tone?: "navy" | "violet" | "teal";
  /** art in the lower-left (~150px); a soft translucent square when empty */
  art?: ReactNode;
}

export interface GrowthbookWhyTab {
  label: string;
  /** tiny mono word before the label, e.g. "For" */
  prefix?: string;
  cards: GrowthbookWhyCard[];
}

export interface GrowthbookWhyProps {
  /** the heading; each string starts a new line */
  title: string[];
  tabs: GrowthbookWhyTab[];
  /** accessible name of the carousel */
  carouselLabel: string;
  /** ms between automatic moves; 0 turns autoplay off */
  autoplay?: number;
  className?: string;
}

const tones = {
  navy: "bg-linear-to-b from-background to-chart-2/80",
  violet: "bg-linear-[160deg] from-card from-10% to-primary",
  teal: "bg-linear-[160deg] from-chart-3 to-highlight",
};

export function GrowthbookWhy({ title, tabs, carouselLabel, autoplay = 4000, className }: GrowthbookWhyProps) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className={cn("overflow-x-clip bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="border-l border-border pt-12 pb-[6.25rem] lg:pt-[5.5rem] lg:pb-20">
          <h2 className="max-w-[40rem] pr-4 pl-10 font-display text-4xl leading-[1.2] font-normal lg:text-[3.5rem]">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-12 grid gap-12 lg:mt-[6.75rem] lg:grid-cols-[15.375rem_minmax(0,1fr)] lg:gap-[2.125rem] lg:pl-10">
            <div role="tablist" className="flex overflow-x-auto pl-10 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pl-0 [&::-webkit-scrollbar]:hidden">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative flex h-[3.75rem] shrink-0 items-center gap-2 border-b-2 px-5 text-left text-sm whitespace-nowrap transition-colors duration-250 motion-reduce:transition-none lg:h-[4.25rem] lg:border-b lg:text-base",
                    i === active
                      ? "border-primary bg-card text-card-foreground lg:border-border"
                      : "border-transparent text-foreground hover:text-primary lg:border-border lg:px-2",
                  )}
                >
                  {i === active && <GrowthbookRail fixed className="left-0 hidden lg:block" />}
                  {t.prefix && <span className="-mt-2 font-mono text-[0.625rem]">{t.prefix}</span>}
                  {t.label}
                  {i === active && <ArrowRight aria-hidden className="hidden size-[1.125rem] lg:block" strokeWidth={1.5} />}
                </button>
              ))}
            </div>
            {/* the row runs past the frame to the window's right edge */}
            <div className="min-w-0 lg:-mr-[calc((100vw-min(100vw,var(--page-width)+var(--page-gutter)*4))/2+var(--page-gutter)*2)]">
              <GrowthbookTrack
                key={active}
                label={carouselLabel}
                autoplay={autoplay || undefined}
                slideClassName="w-[17.5rem] lg:w-[19.8125rem]"
                trackClassName="gap-5 pl-5 scroll-pl-5 lg:pl-0 lg:scroll-pl-0"
                items={tab.cards.map((c) => (
                  <article
                    key={c.title}
                    className={cn("dark relative flex h-[24.75rem] flex-col overflow-clip rounded-lg p-6 text-foreground", tones[c.tone ?? "navy"])}
                  >
                    {/* the thin inner guide lines */}
                    <span aria-hidden className="absolute top-20 bottom-6 left-6 w-px bg-linear-to-b from-transparent to-foreground/15" />
                    <span aria-hidden className="absolute right-0 bottom-6 left-6 h-px bg-foreground/15" />
                    <h3 className="max-w-[13rem] text-lg leading-[1.5] font-medium">{c.title}</h3>
                    <div className="mt-auto mb-8 size-[9.5rem] [&>*]:size-full">
                      {c.art ?? <div className="rounded-xl bg-foreground/15 [mask-image:radial-gradient(circle,black_40%,transparent_72%)]" />}
                    </div>
                  </article>
                ))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
