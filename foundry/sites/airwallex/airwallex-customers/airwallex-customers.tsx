import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AirwallexPlaceholder } from "@foundry/airwallex-placeholder";
import "./airwallex-customers.css";

export interface AirwallexCustomer {
  /** the company's name */
  company: string;
  /** its wordmark over the quote (styled text, svg or img); the name when empty */
  logo?: ReactNode;
  /** what they said */
  quote: string;
  /** the photo; empty for a placeholder */
  media?: ReactNode;
  /** a link to the story */
  href?: string;
}

export interface AirwallexCustomersProps {
  /** the headline */
  title: string;
  /** six or more keep both desktop rows full */
  customers: AirwallexCustomer[];
  className?: string;
}

function Logo({ c }: { c: AirwallexCustomer }) {
  return <span className="flex h-8 items-center text-base font-bold tracking-[0.08em] text-background/55 uppercase">{c.logo ?? c.company}</span>;
}

/** Headline and two drifting rows of customer photos (a swipe row on phones). */
export function AirwallexCustomers({ title, customers, className }: AirwallexCustomersProps) {
  const rows = [customers.filter((_, i) => i % 2 === 0), customers.filter((_, i) => i % 2 === 1)];
  const card = (c: AirwallexCustomer, copy: number) => (
    <li key={`${copy}-${c.company}`} aria-hidden={copy > 0 || undefined} className="w-[28.25rem] shrink-0 pr-8">
      <a href={c.href ?? "#"} tabIndex={copy > 0 ? -1 : undefined} className="group relative grid aspect-[452/314] overflow-clip rounded-[1rem]">
        <div className="[grid-area:1/1] transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none">
          {c.media ?? <AirwallexPlaceholder tone="dim" className="size-full" />}
        </div>
        <div className="flex flex-col gap-5 bg-foreground p-8 text-background opacity-0 transition-opacity duration-300 ease-out [grid-area:1/1] group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
          <Logo c={c} />
          <p className="line-clamp-6 text-base leading-[1.6] text-background/80">{c.quote}</p>
        </div>
      </a>
    </li>
  );
  return (
    <section className={cn("dark overflow-clip bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[76rem] px-gutter pt-16 lg:px-12 lg:pt-[3.75rem]">
        <h2 className="max-w-[22rem] font-display text-[1.75rem] leading-[1.25] font-bold lg:max-w-[38rem] lg:text-[2.375rem] lg:leading-[1.32]">{title}</h2>
      </div>

      {/* desktop: two drifting rows */}
      <div className="mt-[4.25rem] hidden flex-col gap-8 pb-[3.75rem] lg:flex">
        {rows.map((row, r) => (
          <div key={r} className="airwallex-customers-row">
            <ul className={cn("airwallex-customers-track flex w-max", r === 1 && "-ml-60")}>
              {row.map((c) => card(c, 0))}
              {row.map((c) => card(c, 1))}
            </ul>
          </div>
        ))}
      </div>

      {/* phones: a swipe row of quote cards */}
      <ul className="mt-11 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-12 px-12 pb-[5.75rem] [scrollbar-width:none] lg:hidden">
        {customers.map((c) => (
          <li key={c.company} className="w-[18.25rem] shrink-0 snap-start">
            <a href={c.href ?? "#"} className="flex h-full flex-col overflow-clip rounded-md bg-foreground text-background">
              <div className="px-4 pt-6 pb-8">
                <Logo c={c} />
                <p className="mt-5 line-clamp-5 text-sm leading-[1.6] text-background/80">{c.quote}</p>
              </div>
              <div className="mt-auto aspect-[293/205]">{c.media ?? <AirwallexPlaceholder tone="soft" className="size-full" />}</div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
