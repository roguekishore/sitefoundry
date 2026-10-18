import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalButton } from "@foundry/halodental-button";

export interface HalodentalNewsItem {
  /** article headline */
  title: string;
  /** excerpt paragraph */
  summary: string;
  /** article URL */
  href: string;
  /** accessible label for the outward arrow link */
  linkLabel?: string;
  /** custom 16:9 media card content */
  media?: ReactNode;
  /** publication wordmark text when rendering a press logo card placeholder */
  publicationMark?: string;
  /** optional subtitle under the publication wordmark */
  publicationSub?: string;
  /** dark product card style (as on the first news row) vs white press logo card */
  mediaTone?: "dark-studio" | "press-card";
}

export interface HalodentalNewsProps {
  /** section title ("Latest news") */
  title: string;
  /** top-right (desktop) / top-left (mobile) outlined media room CTA */
  headerCta?: { label: string; href: string };
  /** list of press/news rows */
  items: HalodentalNewsItem[];
  /** bottom centred "View more" outlined CTA */
  moreCta?: { label: string; href?: string; onClick?: () => void };
  /** fade the last item into a soft bottom mask as on the original */
  fadeLast?: boolean;
  className?: string;
}

function NewsMediaPlaceholder({ item }: { item: HalodentalNewsItem }) {
  if (item.mediaTone === "dark-studio") {
    return (
      <div className="dark relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg bg-background text-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_45%,var(--secondary)_0%,transparent_70%)] opacity-85" />
        <div className="relative flex h-[78%] w-7 rotate-[15deg] flex-col items-center">
          <div className="size-9 rounded-full border-2 border-foreground/90 bg-card shadow-[0_0_16px_var(--foreground)]" />
          <div className="-mt-0.5 w-2.5 flex-1 rounded-b-full border-x border-foreground/35 bg-secondary" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex aspect-[16/9] w-full flex-col items-center justify-center rounded-lg bg-card px-6 text-center text-card-foreground">
      {item.publicationMark && (
        <span className="font-display text-2xl font-bold leading-none tracking-[-0.03em] uppercase sm:text-3xl">
          {item.publicationMark}
        </span>
      )}
      {item.publicationSub && (
        <span className="mt-1.5 text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {item.publicationSub}
        </span>
      )}
    </div>
  );
}

/**
 * Halo Dental's press & news section ("Latest news"): warm stone background with
 * full-width horizontal hairline rows. On desktop each row is a 12-column grid:
 * 4 cols 16:9 media card, 3 cols article title, 4 cols excerpt, 1 col white square arrow button.
 */
export function HalodentalNews({
  title,
  headerCta,
  items,
  moreCta,
  fadeLast = true,
  className,
}: HalodentalNewsProps) {
  return (
    <section className={cn("bg-background py-16 text-foreground lg:py-24", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-10">
        {/* Heading + View Media Room button */}
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <h2 className="font-display text-[2.475rem] font-normal leading-[1.08] tracking-[-0.025em] lg:text-[4rem] lg:leading-none">
            {title}
          </h2>
          {headerCta && (
            <HalodentalButton variant="outline" href={headerCta.href}>
              {headerCta.label}
            </HalodentalButton>
          )}
        </div>

        {/* Hairline-divided article rows */}
        <div className="mt-10 border-t border-border lg:mt-14">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            const faded = fadeLast && isLast && items.length > 3;
            return (
              <article
                key={item.title}
                className={cn(
                  "relative grid grid-cols-1 gap-5 border-b border-border py-7 lg:grid-cols-12 lg:items-start lg:gap-8 lg:py-6",
                  faded && "hidden opacity-30 lg:grid",
                )}
              >
                {/* 4 cols: 16:9 media / press logo card */}
                <div className="lg:col-span-4">
                  {item.media ?? <NewsMediaPlaceholder item={item} />}
                </div>

                {/* 3 cols: Article title */}
                <div className="lg:col-span-3 lg:col-start-6">
                  <h3 className="font-display text-[1.5625rem] font-normal leading-[1.1] tracking-[-0.015em] lg:text-[1.75rem]">
                    <a
                      href={item.href}
                      className="transition-colors hover:text-primary motion-reduce:transition-none"
                    >
                      {item.title}
                    </a>
                  </h3>
                </div>

                {/* 3 cols: Summary paragraph */}
                <div className="lg:col-span-3 lg:col-start-9">
                  <p className="text-[0.9125rem] leading-[1.35] text-foreground/85 lg:text-base lg:leading-[1.25]">
                    {item.summary}
                  </p>
                </div>

                {/* 1 col: White square outward-arrow button */}
                <div className="flex items-start lg:col-span-1 lg:col-start-12 lg:justify-end">
                  <HalodentalButton
                    variant="icon-card"
                    href={item.href}
                    ariaLabel={item.linkLabel ?? item.title}
                  >
                    <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.5} />
                  </HalodentalButton>
                </div>

                {faded && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,var(--background)_92%)]"
                  />
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom centred "View more" button */}
        {moreCta && (
          <div className="mt-8 flex justify-center lg:mt-6">
            <HalodentalButton
              variant="outline"
              href={moreCta.href}
              onClick={moreCta.onClick}
            >
              {moreCta.label}
            </HalodentalButton>
          </div>
        )}
      </div>
    </section>
  );
}
