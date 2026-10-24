import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HelionenergyArrowButton } from "@foundry/helionenergy-arrow-button";
import { HelionenergyButton } from "@foundry/helionenergy-button";
import { HelionenergyEyebrow } from "@foundry/helionenergy-eyebrow";
import { HelionenergyPlaceholder } from "@foundry/helionenergy-placeholder";

export interface HelionenergyNewsItem {
  /** the headline */
  title: ReactNode;
  /** the date, shown in brackets */
  date: ReactNode;
  /** the kind of item (news, press…), shown after the date */
  kind: ReactNode;
  /** a short summary */
  summary: ReactNode;
  /** where the full story is */
  href: string;
  /** the arrow button's label, for screen readers */
  linkLabel: string;
  /** the picture (aspect 1.27); empty, a placeholder */
  media?: ReactNode;
}

export interface HelionenergyNewsProps {
  /** the bracketed mono label over the heading */
  eyebrow: ReactNode;
  /** the heading's lines (two on every width) */
  title: ReactNode[];
  /** one or two sentences beside the heading */
  intro: ReactNode;
  /** the outlined button's text (all news) */
  ctaLabel: ReactNode;
  /** where it goes */
  ctaHref: string;
  /** the stories, newest first */
  items: HelionenergyNewsItem[];
  className?: string;
}

/**
 * A news list on the light page: a bracketed eyebrow, a tight two-line heading and, beside it, a
 * small intro and an outlined button, over hairline-separated rows. Each row (on a 12-column
 * grid) has the headline and a mono date line, a 1.27 picture with 8px corners, a plus mark and
 * summary, and a square arrow button at the bottom right; phones stack them. Pictures settle
 * from 110% as they arrive and a fill sweeps across each arrow with the scroll.
 */
export function HelionenergyNews({ eyebrow, title, intro, ctaLabel, ctaHref, items, className }: HelionenergyNewsProps) {
  return (
    <section className={cn("bg-background px-gutter pt-section pb-20 text-foreground", className)}>
      <div className="mx-auto max-w-page">
        <HelionenergyEyebrow bracket>{eyebrow}</HelionenergyEyebrow>
        <div className="mt-[1.4rem] grid grid-cols-2 gap-x-5 border-b border-border pb-8 lg:mt-[1.25rem] lg:grid-cols-12 lg:pb-10">
          <h2 className="font-display text-[clamp(1.275rem,0.981rem+1.208vw,2.068rem)] leading-[1.1] font-medium tracking-[-0.05em] uppercase lg:col-span-4">
            {title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-[0.8125rem] leading-[1.32] tracking-[-0.01em] text-foreground/90 lg:col-span-3 lg:col-start-8 lg:max-w-[19rem]">
            {intro}
          </p>
          <div className="col-start-2 mt-5 lg:col-span-2 lg:col-start-11 lg:row-start-1 lg:mt-0 lg:justify-self-end">
            <HelionenergyButton href={ctaHref} className="w-[9.6rem]">
              {ctaLabel}
            </HelionenergyButton>
          </div>
        </div>

        <ul>
          {items.map((item, i) => (
            <li
              key={i}
              className="flex flex-col border-b border-border pt-10 pb-8 last:border-b-0 lg:grid lg:grid-cols-12 lg:gap-x-5 lg:py-10"
            >
              <div className="lg:col-span-4">
                <h3 className="text-[1.125rem] leading-none tracking-[-0.05em] lg:text-[1.185rem]">
                  <a href={item.href} className="decoration-1 underline-offset-2 hover:underline">
                    {item.title}
                  </a>
                </h3>
                <div className="mt-4 flex gap-5 lg:mt-[1.1rem]">
                  <HelionenergyEyebrow bracket>{item.date}</HelionenergyEyebrow>
                  <HelionenergyEyebrow>{item.kind}</HelionenergyEyebrow>
                </div>
              </div>
              <HelionenergyPlaceholder media={item.media} zoom className="mt-3.5 aspect-[1.27] w-full rounded-lg lg:col-span-3 lg:col-start-5 lg:mt-0" />
              <div className="mt-7 flex gap-5 lg:col-span-4 lg:col-start-8 lg:mt-0 lg:flex-col lg:gap-6">
                <Plus aria-hidden strokeWidth={1.5} className="mt-0.5 size-[0.9375rem] shrink-0 lg:mt-0" />
                <p className="text-[0.9375rem] leading-[1.35] tracking-[-0.01em] text-foreground/85">{item.summary}</p>
              </div>
              <HelionenergyArrowButton
                href={item.href}
                label={item.linkLabel}
                className="mt-1 self-end lg:col-start-12 lg:mt-0 lg:justify-self-end"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
