import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HermeusButton } from "@foundry/hermeus-button";
import { HermeusMedia } from "@foundry/hermeus-media";
import { HermeusReveal } from "@foundry/hermeus-reveal";
import { HermeusSectionLabel } from "@foundry/hermeus-section-label";

export interface HermeusNewsItem {
  title: string;
  href: string;
  /** the category name next to the coloured square, e.g. "News" */
  category: string;
  /** the square's colour: "primary" (amber) or "muted" (grey) */
  tone?: "primary" | "muted";
  /** the date, already formatted (optional) */
  date?: string;
  /** the square image; empty: a grey placeholder */
  media?: ReactNode;
  /** what the image shows, for screen readers while it is empty */
  mediaLabel?: string;
}

export interface HermeusNewsGridProps {
  /** the section's number, e.g. "04" */
  index: string;
  /** the section's name in the label row */
  label: string;
  /** the button at the right end of the label row */
  action: { label: string; href: string };
  /** the stories (three fill the desktop row) */
  items: HermeusNewsItem[];
  className?: string;
}

/** Recent stories: square image cards in a row on desktop, a snap rail on phones. */
export function HermeusNewsGrid({ index, label, action, items, className }: HermeusNewsGridProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <HermeusSectionLabel index={index} label={label} action={<HermeusButton label={action.label} href={action.href} />} />
        <HermeusReveal className="mt-[clamp(1.94rem,1.24rem+2.86vw,3.81rem)]">
          <ul className="-mx-gutter flex snap-x snap-mandatory scroll-px-gutter gap-4 overflow-x-auto px-gutter [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0">
            {items.map((item) => (
              <li key={item.title} className="w-4/5 shrink-0 snap-start sm:w-[45%] lg:w-auto">
                <a href={item.href} className="group block">
                  <HermeusMedia media={item.media} label={item.mediaLabel} className="aspect-square w-full" />
                  <div className="flex h-[clamp(6.69rem,5.69rem+4.1vw,9.375rem)] flex-col justify-between bg-card p-[clamp(0.75rem,0.5625rem+0.762vw,1.25rem)]">
                    <h3 className="line-clamp-3 text-[clamp(0.79rem,0.667rem+0.509vw,1.125rem)]/[1.1] font-normal text-pretty transition-colors duration-200 ease-in-out group-hover:text-primary motion-reduce:transition-none">
                      {item.title}
                    </h3>
                    <p className="flex items-center justify-between gap-3 text-[clamp(0.58rem,0.519rem+0.257vw,0.75rem)]/none">
                      <span className="flex items-center gap-[0.4em] text-card-foreground">
                        <span aria-hidden className={cn("size-[0.85em]", item.tone === "muted" ? "bg-muted-foreground" : "bg-primary")} />
                        {item.category}
                      </span>
                      {item.date && <span className="text-muted-foreground">{item.date}</span>}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </HermeusReveal>
      </div>
    </section>
  );
}
