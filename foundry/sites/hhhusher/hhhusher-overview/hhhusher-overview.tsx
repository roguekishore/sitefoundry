import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherButton, hhhusherEase, hhhusherLabel } from "@foundry/hhhusher-button";
import "./hhhusher-overview.css";

export interface HhhusherOverviewLink {
  label: string;
  href: string;
}

export interface HhhusherOverviewTab {
  /** the small number in the tab, e.g. "01" */
  index: string;
  /** the tab's name, in mono capitals */
  label: string;
  /** the big title at the card's top-left while this tab is open */
  title: string;
  /** one line under the title */
  subtitle: string;
  /** the paragraph inside the open (yellow) tab */
  text: string;
  /** the small arrow link inside the open tab */
  link?: HhhusherOverviewLink;
  /** the photo or video behind the card while this tab is open */
  media?: ReactNode;
}

export interface HhhusherOverviewCard {
  title: string;
  text: string;
  /** the small yellow arrow link under the text */
  link?: HhhusherOverviewLink;
  /** the image filling the card */
  media?: ReactNode;
}

export interface HhhusherOverviewProps {
  /** the tabs of the wide card (two to four) */
  tabs: HhhusherOverviewTab[];
  /** three cards below: a tall one on the left, two stacked on the right */
  cards: HhhusherOverviewCard[];
  className?: string;
}

/** A quiet placeholder for a missing photo: a dark surface with a soft wash, taller than its frame so it can drift. */
function MediaSlot({ media }: { media?: ReactNode }) {
  return (
    <div className="hhhusher-overview-media absolute inset-x-0 -inset-y-[4.5rem] [&>*]:size-full [&>*]:object-cover">
      {media ?? <div aria-hidden className="bg-muted bg-[linear-gradient(160deg,var(--muted),var(--card)_70%)]" />}
    </div>
  );
}

/**
 * Use-case cards on a camel band. A wide dark card shows a photo with a title top-left and a
 * row of tabs at the bottom: the open tab is a wide yellow panel with a number, a paragraph
 * and an arrow link, the others are narrow glass tiles. Below, a tall card left and two
 * stacked cards right, each a photo with a title, a paragraph and a yellow arrow link.
 * Cards fade in as they enter and their photos drift slowly against the scroll.
 */
export function HhhusherOverview({ tabs, cards, className }: HhhusherOverviewProps) {
  const [active, setActive] = useState(0);
  const current = tabs[active] ?? tabs[0];
  const aspects = ["aspect-[0.87]", "aspect-square", "aspect-[1.15]"];

  return (
    <section className={cn("bg-secondary pb-section text-secondary-foreground lg:pb-[11.5rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col gap-[1.3rem] px-gutter lg:gap-10">
        <article className="hhhusher-overview-card dark relative flex aspect-[0.5] flex-col overflow-clip rounded-lg bg-card text-foreground lg:aspect-[1.89]">
          {tabs.map((tab, i) => (
            <div key={i} className={cn("absolute inset-0 transition-opacity duration-700", hhhusherEase, i === active ? "opacity-100" : "opacity-0")}>
              <MediaSlot media={tab.media} />
            </div>
          ))}
          <div className="relative p-[1.3rem] lg:p-10">
            <h3 className="font-display text-[1.6rem] leading-[1.1] font-medium tracking-[-0.01em] lg:text-[1.8125rem]">{current.title}</h3>
            <p className="mt-3 text-[1.04rem] font-medium lg:mt-5 lg:text-base">{current.subtitle}</p>
          </div>

          <div className="relative mt-auto flex flex-col gap-2.5 p-[1.3rem] lg:flex-row lg:p-10">
            {tabs.map((tab, i) =>
              i === active ? (
                <div
                  key={i}
                  className="flex flex-col gap-3 rounded-lg bg-primary p-[0.45rem] pb-6 text-primary-foreground lg:w-[35rem] lg:shrink-0 lg:flex-row lg:gap-0 lg:p-6"
                >
                  <span className={cn(hhhusherLabel, "font-medium lg:w-[3.8rem] lg:shrink-0")}>{tab.index}</span>
                  <div className="flex flex-col items-start gap-4 px-4 lg:max-w-[23.5rem] lg:gap-3 lg:px-0">
                    <span className={cn(hhhusherLabel, "text-[0.86rem] lg:text-[0.875rem]")}>{tab.label}</span>
                    <p className="text-[0.82rem] leading-[1.15] font-medium lg:text-sm lg:leading-[1.15]">{tab.text}</p>
                    {tab.link && (
                      <HhhusherButton href={tab.link.href} variant="link">
                        {tab.link.label}
                      </HhhusherButton>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex h-[4.5rem] items-center justify-between rounded-lg border-2 border-transparent bg-foreground/15 px-6 text-left text-foreground backdrop-blur-sm",
                    "transition-[background-color,border-color] duration-300 hover:border-foreground hover:bg-transparent motion-reduce:transition-none",
                    "lg:h-auto lg:min-h-[9.5rem] lg:w-[8.625rem] lg:flex-col lg:items-start lg:py-7",
                    hhhusherEase,
                  )}
                >
                  <span className={cn(hhhusherLabel, "font-medium")}>{tab.index}</span>
                  <span className={hhhusherLabel}>{tab.label}</span>
                </button>
              ),
            )}
          </div>
        </article>

        <div className="grid gap-[1.3rem] lg:grid-cols-[835fr_485fr] lg:gap-x-10 lg:gap-y-14">
          {cards.map((card, i) => (
            <article
              key={i}
              className={cn(
                "hhhusher-overview-card dark relative overflow-clip rounded-lg bg-card text-foreground",
                aspects[i % 3],
                i === 0 && "lg:row-span-2 lg:aspect-auto",
              )}
            >
              <MediaSlot media={card.media} />
              <div className="relative flex flex-col items-start p-[1.3rem] lg:max-w-[23rem] lg:p-10">
                <h3 className="font-display text-[1.6rem] leading-[1.1] font-medium tracking-[-0.01em] lg:text-[1.8125rem]">{card.title}</h3>
                <p className="mt-2 text-[1.04rem] leading-[1.3] font-medium lg:mt-6 lg:text-base lg:leading-[1.3]">{card.text}</p>
                {card.link && (
                  <HhhusherButton href={card.link.href} variant="link" className="mt-4 text-primary lg:mt-6">
                    {card.link.label}
                  </HhhusherButton>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
