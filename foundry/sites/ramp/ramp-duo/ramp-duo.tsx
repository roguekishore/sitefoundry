import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RampButton } from "@foundry/ramp-button";
import { RampHeading } from "@foundry/ramp-heading";

export interface RampDuoItem {
  /** the card's title */
  title: string;
  /** the grey paragraph under it */
  text: string;
  /** the arrow link under the paragraph */
  link?: { label: string; href: string };
  /** the art in the 5:4 frame; empty shows a dotted grey placeholder */
  media?: ReactNode;
}

export interface RampDuoProps {
  /** the statement's first line, in ink */
  lead: string;
  /** its second line, in grey */
  rest?: string;
  /** the short grey line under the statement */
  subtitle?: string;
  /** two items read best */
  items: RampDuoItem[];
  className?: string;
}

/** Ramp's "scale the team" pair: a centred statement over two media cards with copy. */
export function RampDuo({ lead, rest, subtitle, items, className }: RampDuoProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter py-section lg:px-[calc(var(--page-gutter)*4)] lg:py-[calc(var(--section-y)*1.5)]">
        <RampHeading align="center" lead={lead} rest={rest} breakBeforeRest />
        {subtitle && <p className="mx-auto mt-6 max-w-[16rem] text-center text-base/[1.4] text-muted-foreground sm:max-w-none">{subtitle}</p>}
        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {items.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[5/4] overflow-clip rounded-lg bg-muted">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none">
                  {item.media ?? (
                    <div
                      aria-hidden
                      className="size-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_14%,transparent)_1px,transparent_1.4px)] bg-[length:22px_22px] [mask-image:radial-gradient(closest-side,black,transparent)]"
                    />
                  )}
                </div>
              </div>
              <RampHeading as="h3" size="row" lead={item.title} className="mt-6 max-w-[20rem] lg:mt-10 lg:max-w-none" />
              <p className="mt-3 max-w-[24rem] text-base/[1.4] text-muted-foreground lg:mt-4 lg:max-w-[25.5rem]">{item.text}</p>
              {item.link && (
                <RampButton variant="link" href={item.link.href} className="mt-6">
                  {item.link.label}
                </RampButton>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
