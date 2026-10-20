import type { ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformLink } from "@foundry/plumeform-link";
import { PlumeformPanel } from "@foundry/plumeform-panel";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformEmbedProps {
  eyebrow?: string;
  title: ReactNode;
  /** the paragraph on the right */
  body: ReactNode;
  /** a bolder short line under it */
  highlight?: ReactNode;
  link?: { label: string; href: string };
  /** the left panel (e.g. a page with the quiz on it); empty shows a placeholder */
  sourceMedia?: ReactNode;
  /** the right panel (e.g. where the answers land); empty shows a placeholder */
  resultMedia?: ReactNode;
  /** a small centred note under the panels */
  footnote?: ReactNode;
  id?: string;
  className?: string;
}

/** Heading left and copy right, then two glass panels joined by an arrow ("from here → to there"). */
export function PlumeformEmbed({ eyebrow, title, body, highlight, link, sourceMedia, resultMedia, footnote, id, className }: PlumeformEmbedProps) {
  return (
    <section id={id} className={cn("overflow-x-clip bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-x-[5.5rem]">
          <PlumeformHeading eyebrow={eyebrow} title={title} className="lg:pt-4" />
          <PlumeformReveal step={1} className="max-w-[28rem]">
            <p className="text-base leading-[1.625] text-muted-foreground">{body}</p>
            {highlight && <p className="mt-4 text-[0.9375rem] font-semibold text-foreground">{highlight}</p>}
            {link && <PlumeformLink href={link.href} className="mt-7">{link.label}</PlumeformLink>}
          </PlumeformReveal>
        </div>

        <div className="mt-16 grid items-start gap-6 lg:mt-20 lg:grid-cols-[1.1fr_auto_1fr] lg:gap-4 lg:px-8">
          <PlumeformReveal>
            <PlumeformPanel media={sourceMedia} aspect="510/600" clouds="c" padding="none" />
          </PlumeformReveal>
          <span aria-hidden className="grid place-items-center text-highlight lg:mt-80">
            <ArrowDown className="size-5 lg:hidden" strokeWidth={1.5} />
            <ArrowRight className="hidden size-5 lg:block" strokeWidth={1.5} />
          </span>
          <PlumeformReveal step={1}>
            <PlumeformPanel media={resultMedia} aspect="465/600" clouds="b" padding="none" />
          </PlumeformReveal>
        </div>

        {footnote && <PlumeformReveal className="mt-14 text-center text-[0.8125rem] text-muted-foreground">{footnote}</PlumeformReveal>}
      </div>
    </section>
  );
}
