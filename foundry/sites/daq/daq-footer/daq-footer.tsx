import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { DaqEyebrow } from "@foundry/daq-eyebrow";
import { DaqWordmark } from "@foundry/daq-wordmark";

export interface DaqFooterLink {
  label: string;
  href: string;
}

export interface DaqFooterProps {
  /** the call to action's light first line and heavier second line */
  lead: string;
  payoff: string;
  /** the short line above the CTA bar */
  blurb: string;
  /** the long CTA bar */
  cta: { label: string; href: string };
  /** two link columns, each with a numbered heading, e.g. "01 / Practice" */
  columns: { heading: string; links: DaqFooterLink[] }[];
  /** the brand column */
  brand: { heading: string; name: string; sub?: string; href?: string; tagline: string; taglineStrong?: string; about: string };
  /** the small-print column */
  record: { heading: string; items: DaqFooterLink[]; top?: DaqFooterLink };
  className?: string;
}

const link =
  "group/link inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.15em] text-foreground/58 uppercase transition-colors duration-300 hover:text-foreground";
const arrow = "size-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none";
const small =
  "group/link inline-flex items-center gap-2.5 font-mono text-[0.5625rem] font-bold tracking-[0.2em] text-foreground/58 uppercase transition-colors duration-150 hover:text-foreground";

export function DaqFooter({ lead, payoff, blurb, cta, columns, brand, record, className }: DaqFooterProps) {
  return (
    <footer className={cn("relative flex flex-col lg:min-h-svh", className)}>
      <div className="flex flex-1 flex-col gap-10 px-gutter pt-section pb-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-12">
        <h2 className="font-display text-[clamp(2.1rem,5.6vw,7rem)] leading-[1.18] tracking-[-0.03em]">
          <span className="block font-light">{lead}</span>
          <span className="block font-medium">{payoff}</span>
        </h2>
        <div className="lg:w-[21.25rem] lg:shrink-0">
          <p className="max-w-[21rem] text-sm leading-[1.75] text-foreground/72 lg:text-[0.9375rem]">{blurb}</p>
          <a
            href={cta.href}
            className="group/cta mt-8 flex h-[4.25rem] items-stretch border border-foreground/20 bg-background/60 transition-colors duration-500 hover:border-foreground/60 lg:h-[4.625rem]"
          >
            <span className="flex flex-1 items-center px-6 text-base font-medium">{cta.label}</span>
            <span className="flex aspect-square items-center justify-center bg-primary text-primary-foreground">
              <ArrowUpRight aria-hidden strokeWidth={1.25} className="size-5 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>

      <div className="mx-gutter grid grid-cols-[1.4fr_1fr] border-t border-border lg:grid-cols-[3fr_2fr_4fr_3fr]">
        {columns.map((col, c) => (
          <div key={col.heading} className={cn("py-6 lg:py-12", c > 0 && "border-l border-border pl-4 lg:pl-8", c === 0 && "pr-4 lg:pr-8")}>
            <DaqEyebrow label={col.heading} />
            <ul className="mt-6 flex flex-col gap-4 lg:mt-8">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={link}>
                    {l.label}
                    <ArrowUpRight aria-hidden strokeWidth={1.75} className={arrow} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 border-t border-border py-6 lg:col-span-1 lg:border-t-0 lg:border-l lg:px-8 lg:py-12">
          <DaqEyebrow label={brand.heading} />
          <DaqWordmark name={brand.name} sub={brand.sub} href={brand.href} className="mt-6 lg:mt-7" />
          <p className="mt-5 text-xl tracking-[-0.02em] text-foreground/80 lg:text-2xl">
            {brand.tagline}
            {brand.taglineStrong && <span className="font-medium text-foreground"> {brand.taglineStrong}</span>}
          </p>
          <p className="mt-5 max-w-[23rem] text-sm leading-relaxed text-foreground/58">{brand.about}</p>
        </div>

        <div className="col-span-2 border-t border-border py-6 lg:col-span-1 lg:border-t-0 lg:border-l lg:pl-8 lg:py-12">
          <DaqEyebrow label={record.heading} />
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 lg:mt-8 lg:grid-cols-1 lg:gap-y-[0.95rem]">
            {record.items.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={small}>
                  {item.label}
                </a>
              </li>
            ))}
            {record.top && (
              <li>
                <a href={record.top.href} className={small}>
                  {record.top.label}
                  <ArrowUpRight aria-hidden strokeWidth={1.75} className={arrow} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
