import type { ReactNode } from "react";
import { WiemerV2PromoCard, type WiemerV2PromoCardProps } from "@foundry/wiemer-v2-promo-card";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2FooterColumn {
  /** the pale heading over the list */
  title: string;
  /** the links */
  links: { label: string; href: string }[];
}

export interface WiemerV2FooterProps {
  /** the wordmark: the brand's name, an optional icon before it, and where it links */
  brand: { name: string; icon?: ReactNode; href: string };
  /** one or two lines beside the wordmark */
  tagline: string;
  /** up to three link lists */
  columns: WiemerV2FooterColumn[];
  /** the small card on the right */
  promo: WiemerV2PromoCardProps;
  /** the small print at the bottom left (copyright) */
  legal: string;
  /** the small print at the bottom right */
  credit?: string;
  className?: string;
}

/**
 * A grey footer: a large wordmark left and a two-line tagline in the right third; below, three
 * slim link lists under pale headings and the promo card; then a row of small print. Links
 * underline from the left on hover.
 */
export function WiemerV2Footer({ brand, tagline, columns, promo, legal, credit, className }: WiemerV2FooterProps) {
  return (
    <footer className={cn("bg-muted px-gutter pt-12 pb-9 text-foreground lg:pb-6", className)}>
      <div className="mx-auto max-w-page lg:grid lg:grid-cols-3 lg:gap-x-4">
        <a href={brand.href} className="flex w-fit items-center gap-2.5 text-[2.5rem] leading-none font-medium tracking-[-0.03em] lg:col-span-2 [&_svg]:size-8">
          {brand.icon}
          <span>{brand.name}</span>
        </a>
        <p className="mt-10 max-w-[28rem] text-xl leading-[1.2] font-medium tracking-[-0.02em] lg:mt-0 lg:max-w-none lg:pr-4 lg:text-[1.6vw]">{tagline}</p>

        <WiemerV2PromoCard {...promo} className="mt-8 lg:col-start-3 lg:row-start-2 lg:mt-[5.25rem]" />

        <nav className="mt-10 flex flex-col gap-10 lg:col-span-2 lg:row-start-2 lg:mt-[5.5rem] lg:flex-row lg:gap-0">
          {columns.map((col) => (
            <div key={col.title} className="lg:w-[16vw]">
              <p className="text-[0.9375rem] leading-[1.2] font-medium text-muted-foreground">{col.title}</p>
              <ul className="mt-4 space-y-4 text-[0.9375rem] leading-[1.2]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100 motion-reduce:after:transition-none"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-14 flex flex-col gap-4 text-[0.9375rem] leading-[1.2] lg:col-span-3 lg:mt-[6.5rem] lg:flex-row lg:justify-between">
          <p>{legal}</p>
          {credit && <p>{credit}</p>}
        </div>
      </div>
    </footer>
  );
}
