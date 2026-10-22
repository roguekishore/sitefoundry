import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NekoButton } from "@foundry/neko-button";
import { NekoSlot } from "@foundry/neko-slot";

export interface NekoScanItem {
  /** short label, shown in capitals */
  title: string;
  /** one-line caption under it */
  caption: string;
  /** the square thumbnail; empty shows a placeholder */
  media?: ReactNode;
}

export interface NekoScanProps {
  /** small tracked line above the title */
  eyebrow: string;
  title: string;
  /** one or two sentences under the title */
  intro: string;
  /** the stacked rows */
  items: NekoScanItem[];
  /** the white card under the rows */
  card: {
    eyebrow: string;
    title: string;
    /** square-bulleted points */
    points: string[];
    /** the wide photo at the top of the card */
    media?: ReactNode;
  };
  /** the charcoal button under the card */
  cta?: { label: string; href: string };
  className?: string;
}

export function NekoScan({ eyebrow, title, intro, items, card, cta, className }: NekoScanProps) {
  return (
    <section className={cn("bg-linear-to-b from-background via-highlight/45 to-highlight pt-section pb-[calc(var(--section-y)*0.85)] font-sans text-foreground", className)}>
      <div className="mx-auto max-w-[calc(37.5rem+2*var(--page-gutter))] px-gutter">
        <div className="text-center">
          <p className="text-sm tracking-[0.04em] uppercase lg:text-base">{eyebrow}</p>
          <h2 className="mt-6 font-display text-[2.5rem] leading-[1.1] tracking-[-0.025em] lg:mt-8 lg:text-[4.25rem] lg:leading-[1.15]">{title}</h2>
          <p className="mx-auto mt-6 max-w-[32rem] text-base leading-6 lg:mt-10 lg:text-lg">{intro}</p>
        </div>

        <ul className="mt-11 flex flex-col gap-3 lg:mt-15">
          {items.map((item) => (
            <li key={item.title} className="flex items-center gap-4 rounded-2xl bg-card p-1 lg:gap-6">
              <NekoSlot media={item.media} className="size-[4.875rem] shrink-0 rounded-[0.875rem] lg:size-25 lg:rounded-2xl" />
              <div className="py-2 pr-4">
                <p className="text-sm tracking-[0.04em] uppercase lg:text-base">{item.title}</p>
                <p className="mt-1.5 text-sm leading-5 text-muted-foreground lg:text-base">{item.caption}</p>
              </div>
            </li>
          ))}
        </ul>

        <article className="mt-10 overflow-clip rounded-2xl bg-card lg:mt-15">
          <NekoSlot media={card.media} className="aspect-[600/338] rounded-b-[1.8rem]" />
          <div className="px-6 pt-7 pb-10 lg:px-10 lg:pt-8 lg:pb-10">
            <p className="text-sm tracking-[0.04em] uppercase lg:text-base">{card.eyebrow}</p>
            <h3 className="mt-3 max-w-[16ch] font-display text-[1.75rem] leading-8 tracking-[-0.02em] lg:max-w-none lg:text-[2rem] lg:leading-10">{card.title}</h3>
            <ul className="mt-8 flex flex-col gap-6">
              {card.points.map((p) => (
                <li key={p} className="flex items-center gap-4 text-sm leading-5 lg:text-base">
                  <span aria-hidden className="size-3 shrink-0 rounded-[3px] bg-foreground" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {cta && (
          <div className="mt-10 flex justify-center lg:mt-15">
            <NekoButton href={cta.href}>{cta.label}</NekoButton>
          </div>
        )}
      </div>
    </section>
  );
}
