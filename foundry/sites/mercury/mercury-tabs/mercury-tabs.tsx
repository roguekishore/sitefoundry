import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MercuryButton } from "@foundry/mercury-button";
import { MercuryHeading } from "@foundry/mercury-heading";

export interface MercuryTab {
  /** the row's title; bold when open, muted when closed */
  title: string;
  /** shown under the title when the row is open */
  text: ReactNode;
  /** an underlined link under the text when open */
  link?: { label: string; href: string };
  /** the picture for this row (art, mock UI, an image); falls back to the block's media */
  media?: ReactNode;
}

export interface MercuryTabsProps {
  /** the heading over the list; pass a list of lines to choose the breaks */
  title: string | string[];
  /** the rows */
  items: MercuryTab[];
  /** the picture used when a row has none of its own */
  media?: ReactNode;
  /** which side the picture sits on from lg up */
  mediaSide?: "start" | "end";
  /** a link under the whole list, e.g. "Take the tour" */
  link?: { label: string; href: string };
  /** which row starts open */
  defaultOpen?: number;
  /**
   * spread: heading at the top, list at the bottom of a tall column (beside portrait art) ·
   * grouped: heading and list together, centred beside the picture (beside a wide mock)
   */
  layout?: "spread" | "grouped";
  className?: string;
}

/**
 * Mercury's feature tabs: a heading, then a list of rows split by hairlines. The open row
 * gets a bright rule, a small pale-blue dot, its text and a link; its picture fills the
 * other half on wide screens and sits inside the row on phones.
 */
export function MercuryTabs({ title, items, media, mediaSide = "end", link, defaultOpen = 0, layout = "spread", className }: MercuryTabsProps) {
  const [open, setOpen] = useState(defaultOpen);
  const current = items[open]?.media ?? media;

  return (
    <section className={cn("py-[calc(var(--section-y)*0.6)] lg:py-[calc(var(--section-y)*0.6)]", className)}>
      <div className="mx-auto grid max-w-page items-stretch gap-8 px-gutter lg:grid-cols-2">
        <div
          className={cn(
            "flex flex-col gap-10 lg:min-h-[38.75rem]",
            layout === "spread" ? "justify-between" : "justify-center lg:gap-16",
            mediaSide === "start" && "lg:order-2",
          )}
        >
          <MercuryHeading size="sub" title={title} className="max-w-[30rem]" />

          <div>
            <ul>
              {items.map((item, i) => {
                const isOpen = i === open;
                return (
                  <li key={item.title} className={cn("relative border-t", isOpen ? "border-foreground" : "border-border")}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(i)}
                      className={cn(
                        "w-full text-left text-[0.875rem] font-[560] transition-colors duration-200 motion-reduce:transition-none lg:text-base",
                        isOpen ? "pt-5 text-foreground" : "py-3.5 text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {isOpen && <span aria-hidden className="absolute top-[1.625rem] -left-4 size-1.5 rounded-full bg-highlight lg:top-7" />}
                      {item.title}
                    </button>
                    {isOpen && (
                      <div className="pb-8">
                        <p className="mt-1 max-w-[28rem] text-[0.875rem] leading-[1.4] text-muted-foreground lg:text-base">{item.text}</p>
                        {item.link && (
                          <MercuryButton variant="link" href={item.link.href} className="mt-5 text-[0.875rem] lg:text-base">
                            {item.link.label}
                          </MercuryButton>
                        )}
                        {/* phones: the picture lives inside the open row */}
                        {current && <div className="mt-6 aspect-square overflow-hidden rounded-xl lg:hidden">{current}</div>}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            {link && (
              <MercuryButton variant="link" href={link.href} className="mt-6 text-[0.875rem] lg:mt-8 lg:text-base">
                {link.label}
              </MercuryButton>
            )}
          </div>
        </div>

        {current && <div className="hidden overflow-hidden rounded-xl lg:block">{current}</div>}
      </div>
    </section>
  );
}
