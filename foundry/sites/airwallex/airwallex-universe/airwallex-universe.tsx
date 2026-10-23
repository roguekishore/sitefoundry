import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, CirclePlay } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { gradientClass, type AirwallexTone } from "@foundry/airwallex-gradient";
import { AirwallexHeading } from "@foundry/airwallex-heading";
import { AirwallexPlaceholder } from "@foundry/airwallex-placeholder";
import "./airwallex-universe.css";

export interface AirwallexUniverseCard {
  /** the grey caps line ("Multi-currency") */
  eyebrow: string;
  /** what it does, one or two lines */
  title: string;
  /** where the card links to */
  href: string;
  /** the shot on the card; empty for a placeholder */
  media?: ReactNode;
}

export interface AirwallexUniverseTab {
  /** the tab's label */
  label: string;
  /** the gradient the active tab fills with */
  tone: AirwallexTone;
  /** the caps line over the big statement (desktop) */
  eyebrow: string;
  /** the big statement on the left (desktop) */
  title: string;
  /** the outline pill under the statement */
  video?: { label: string; href: string };
  /** the tall phone shot on the left; empty for a placeholder */
  phone?: ReactNode;
  /** three cards: the first is the wide one */
  cards: AirwallexUniverseCard[];
}

export interface AirwallexUniverseProps {
  /** the headline */
  title: string;
  /** the line under it */
  intro?: string;
  /** one tab per product */
  tabs: AirwallexUniverseTab[];
  /** the label the arrow grows into on hover ("Learn more") */
  moreLabel: string;
  className?: string;
}

function CardText({ card, moreLabel }: { card: AirwallexUniverseCard; moreLabel: string }) {
  return (
    <>
      <p className="text-sm font-semibold tracking-[0.06em] text-muted-foreground uppercase">{card.eyebrow}</p>
      <p className="mt-3 text-lg leading-[1.5] font-semibold text-foreground">{card.title}</p>
      <span className="mt-3 inline-flex items-center gap-2 text-base font-medium text-foreground/80">
        <span className="max-w-0 overflow-clip whitespace-nowrap opacity-0 transition-[max-width,opacity] duration-300 ease-out group-hover:max-w-32 group-hover:opacity-100 motion-reduce:transition-none">
          {moreLabel}
        </span>
        <ArrowRight aria-hidden className="size-4" strokeWidth={2.5} />
      </span>
    </>
  );
}

/** Tabs (desktop) or accordion (phones) over a bento of product cards. */
export function AirwallexUniverse({ title, intro, tabs, moreLabel, className }: AirwallexUniverseProps) {
  const [open, setOpen] = useState(0);
  const active = tabs[open] ?? tabs[0];
  if (!active) return null;
  const [wide, ...rest] = active.cards;
  return (
    <section className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-20 pb-20 lg:px-12 lg:pt-[5.75rem] lg:pb-10">
        <AirwallexHeading title={title} intro={intro} className="max-w-[22rem] lg:max-w-none [&_p]:lg:mt-7" />

        {/* desktop: a pill tab bar and one panel */}
        <div role="tablist" className="mx-auto mt-16 hidden w-fit items-center gap-10 rounded-full bg-card lg:flex">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={i === open}
              onClick={() => setOpen(i)}
              className={cn(
                "h-12 cursor-pointer rounded-full px-6 text-xl font-semibold text-foreground transition-colors duration-300",
                i === open ? gradientClass(tab.tone) : "hover:text-foreground/70",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div key={`panel-${open}`} role="tabpanel" className="airwallex-universe-panel mt-10 hidden grid-cols-[17.75rem_minmax(0,1fr)] gap-6.5 lg:grid">
          <div className="flex flex-col pt-8">
            <p className="text-sm font-bold tracking-[0.06em] uppercase">{active.eyebrow}</p>
            <h3 className="mt-5 font-display text-[2.375rem] leading-[1.25] font-semibold">{active.title}</h3>
            {active.video && (
              <a
                href={active.video.href}
                className="mt-6 inline-flex h-9 w-fit items-center gap-1.5 rounded-full border border-foreground/80 px-4 text-base font-semibold transition-colors duration-250 hover:bg-foreground/10 motion-reduce:transition-none"
              >
                {active.video.label}
                <CirclePlay aria-hidden className="size-4" strokeWidth={2} />
              </a>
            )}
            <div className="mt-8">{active.phone ?? <AirwallexPlaceholder tone="dim" className="aspect-[284/550] w-full rounded-[2.75rem]" />}</div>
          </div>
          <div className="grid grid-cols-2 content-start gap-6">
            {wide && (
              <a href={wide.href} className="group col-span-2 flex h-[29.875rem] items-center gap-8 rounded-[1rem] bg-card px-8">
                <div className="w-[22.5rem] shrink-0">
                  <CardText card={wide} moreLabel={moreLabel} />
                </div>
                <div className="min-w-0 flex-1">{wide.media ?? <AirwallexPlaceholder tone="dim" className="aspect-[570/280] w-full rounded-lg" />}</div>
              </a>
            )}
            {rest.map((card) => (
              <a key={card.eyebrow} href={card.href} className="group flex h-[29.875rem] flex-col rounded-[1rem] bg-card">
                <div className="px-8 pt-12">{card.media ?? <AirwallexPlaceholder tone="dim" className="aspect-[506/242] w-full rounded-lg" />}</div>
                <div className="mt-10 px-8 pb-12">
                  <CardText card={card} moreLabel={moreLabel} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* phones: an accordion of pills; the open one shows a swipe row of cards */}
        <div className="mt-14 flex flex-col gap-4 lg:hidden">
          {tabs.map((tab, i) => {
            const isOpen = i === open;
            return (
              <div key={tab.label}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={cn(
                    "flex h-[3.125rem] w-full cursor-pointer items-center justify-between rounded-full px-10 text-lg font-semibold text-foreground",
                    isOpen ? gradientClass(tab.tone) : "bg-card",
                  )}
                >
                  {tab.label}
                  <ChevronDown aria-hidden className={cn("size-4 transition-transform duration-300 motion-reduce:transition-none", isOpen && "rotate-180")} strokeWidth={2.5} />
                </button>
                {isOpen && (
                  <ul className="airwallex-universe-panel -mx-gutter mt-10 mb-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-gutter px-gutter [scrollbar-width:none]">
                    {tab.cards.map((card) => (
                      <li key={card.eyebrow} className="w-[15.5rem] shrink-0 snap-start">
                        <a href={card.href} className="group flex h-full flex-col rounded-[1rem] bg-card px-6 pt-6 pb-8">
                          {card.media ?? <AirwallexPlaceholder tone="dim" className="aspect-[2/1] w-full rounded-md" />}
                          <div className="mt-6">
                            <CardText card={card} moreLabel={moreLabel} />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
