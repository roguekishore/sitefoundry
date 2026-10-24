import type { ReactNode } from "react";
import { CfsMedia } from "@foundry/cfs-media";
import { CfsRingLink } from "@foundry/cfs-ring-link";
import { CfsSectionTitle } from "@foundry/cfs-section-title";
import { cn } from "@foundry/foundry-utils";

export interface CfsValue {
  /** the value's name, set in monospace */
  label: string;
  /** a sentence or two about it */
  text: string;
}

export interface CfsValuesProps {
  /** the section title */
  title: string;
  /** the team photo. Empty: a placeholder */
  media?: ReactNode;
  /** the quote in the navy card */
  quote: {
    /** the quote itself (no quotation marks) */
    text: string;
    /** who said it */
    name: string;
    /** their role */
    role: string;
    /** the decorative quote mark above it (an icon) */
    mark?: ReactNode;
  };
  /** the values, one per column on wide screens (four in the original) */
  values: CfsValue[];
  /** the ring-arrow link at the end */
  link: { label: string; href: string };
  className?: string;
}

/** Title, team photo with an overlapping navy quote card, four values and a ring link. */
export function CfsValues({ title, media, quote, values, link, className }: CfsValuesProps) {
  return (
    <section className={cn("overflow-x-clip bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <CfsSectionTitle>{title}</CfsSectionTitle>

        <div className="relative mt-[1.625rem] lg:mt-[4.375rem]">
          <CfsMedia media={media} className="-mx-gutter aspect-[390/422] lg:mx-0 lg:aspect-[844/755] lg:w-[61.6%]" />

          <figure className="dark relative -mt-[2.2rem] flex flex-col items-center justify-center border-t-[3px] border-primary bg-card px-[1.875rem] py-10 text-center text-foreground lg:absolute lg:top-[51px] lg:right-0 lg:bottom-[52px] lg:mt-0 lg:w-[49%] lg:border-t-0 lg:border-l-[3px] lg:px-20">
            {quote.mark && <span className="text-primary [&_svg]:size-12 lg:[&_svg]:size-[3.25rem]">{quote.mark}</span>}
            <blockquote className="mt-7 max-w-[31rem] font-display text-2xl leading-[1.5] font-light lg:mt-10 lg:text-[1.9rem]">
              {quote.text}
            </blockquote>
            <span aria-hidden className="mt-7 h-10 w-px bg-primary lg:mt-12 lg:h-20" />
            <figcaption className="mt-[1.375rem] font-mono text-sm leading-[1.5] lg:mt-7">
              <span className="block">{quote.name}</span>
              <span className="block">{quote.role}</span>
            </figcaption>
          </figure>
        </div>

        <ul className="mt-9 grid gap-y-10 lg:mt-[4.125rem] lg:grid-cols-4 lg:gap-x-5">
          {values.map((value) => (
            <li key={value.label}>
              <p className="font-mono text-sm leading-[1.2]">{value.label}</p>
              <p className="mt-4 ml-5 max-w-[19rem] border-l border-border pl-5 text-base leading-[1.5]">{value.text}</p>
            </li>
          ))}
        </ul>

        <CfsRingLink {...link} className="mt-10 lg:mt-20" />
      </div>
    </section>
  );
}
