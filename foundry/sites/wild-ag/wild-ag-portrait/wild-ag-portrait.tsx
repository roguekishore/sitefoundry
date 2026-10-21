import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgHeading } from "@foundry/wild-ag-heading";
import { WildAgMedia } from "@foundry/wild-ag-media";
import { WildAgReveal } from "@foundry/wild-ag-reveal";

export interface WildAgPortraitValue {
  /** short bold title */
  title: string;
  /** one or two lines */
  text: string;
}

export interface WildAgPortraitProps {
  /** an id for in-page links */
  id?: string;
  /** the first title */
  title: string;
  /** the paragraphs under it */
  paragraphs: string[];
  /** the second title, over the values */
  valuesTitle: string;
  /** the values */
  values: WildAgPortraitValue[];
  /** photo in the right column (second on phones) */
  mediaA?: ReactNode;
  /** photo under the text in the left column (last on phones) */
  mediaB?: ReactNode;
  className?: string;
}

const frame = "aspect-[1.33] w-full rounded-lg lg:aspect-[1.14]";

export function WildAgPortrait({ id, title, paragraphs, valuesTitle, values, mediaA, mediaB, className }: WildAgPortraitProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter py-section text-muted-foreground", className)}>
      {/* phones: one column, ordered text, photo, values, photo. Desktop: two columns that each keep their own pair */}
      <div className="mx-auto flex max-w-page flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-x-[4.9rem] lg:gap-y-0">
        <div className="contents lg:flex lg:flex-col">
          <div className="order-1">
            <WildAgHeading>{title}</WildAgHeading>
            <div className="mt-6 space-y-3 text-[1.0625rem] leading-[1.4] font-medium tracking-[-0.01em]">
              {paragraphs.map((p, i) => (
                <WildAgReveal as="p" key={i} step={i + 1}>
                  {p}
                </WildAgReveal>
              ))}
            </div>
          </div>
          <WildAgMedia media={mediaB} className={cn("order-4 lg:mt-[7.5rem]", frame)} />
        </div>

        <div className="contents lg:flex lg:flex-col">
          <WildAgMedia media={mediaA} className={cn("order-2 lg:mt-[4.8rem]", frame)} />
          <div className="order-3 lg:mt-[7.4rem]">
            <WildAgHeading>{valuesTitle}</WildAgHeading>
            <ul className="mt-6">
              {values.map((v, i) => (
                <WildAgReveal as="li" key={v.title} step={i}>
                  {i > 0 && (
                    <span aria-hidden className="-ml-gutter my-6 block h-[2px] w-[9.5rem] bg-linear-to-r from-primary/70 to-highlight/60 lg:-ml-10" />
                  )}
                  <h3 className="text-[1.4rem] leading-[1.4] font-semibold tracking-[-0.01em] text-foreground">{v.title}</h3>
                  <p className="mt-2 text-[1.0625rem] leading-[1.4] font-medium tracking-[-0.01em]">{v.text}</p>
                </WildAgReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
