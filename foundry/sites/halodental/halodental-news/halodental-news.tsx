import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalButton } from "@foundry/halodental-button";

export interface HalodentalNewsItem {
  /** article headline */
  title: string;
  /** short summary paragraph */
  excerpt: string;
  /** article URL */
  href: string;
  /** optional custom thumbnail media node (325×180 on desktop, 348×193 on phones) */
  media?: ReactNode;
  /** built-in placeholder style when media is omitted */
  placeholderStyle?: "studio-dark" | "press-stacked" | "press-serif" | "press-tech";
  /** text rendered inside the press-card placeholder */
  placeholderLabel?: string;
}

export interface HalodentalNewsProps {
  /** section heading */
  title: string;
  /** top-right outline button */
  headerCta?: {
    label: string;
    href: string;
  };
  /** list of press/news rows */
  items: HalodentalNewsItem[];
  /** bottom centred outline button */
  moreCta?: {
    label: string;
    href: string;
  };
  /** fade the final item behind the 'View more' gradient veil (default true) */
  fadeLast?: boolean;
  className?: string;
}

function DefaultNewsMedia({
  style = "press-stacked",
  label = "PRESS",
}: {
  style?: HalodentalNewsItem["placeholderStyle"];
  label?: string;
}) {
  if (style === "studio-dark") {
    return (
      <div
        aria-hidden
        className="dark relative size-full overflow-hidden bg-background text-foreground"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_52%,var(--secondary)_0%,var(--background)_75%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[74%] w-3.5 rotate-18 rounded-full bg-foreground/35 ring-1 ring-foreground/30">
            <span className="absolute -top-5 left-1/2 size-7 -translate-x-1/2 rounded-full border-2 border-foreground/80" />
          </div>
        </div>
      </div>
    );
  }

  if (style === "press-serif") {
    return (
      <div
        aria-hidden
        className="grid size-full place-items-center bg-card px-6 text-center text-card-foreground"
      >
        <span className="font-display text-2xl leading-none font-bold tracking-tight uppercase lg:text-[1.7rem]">
          {label}
        </span>
      </div>
    );
  }

  if (style === "press-tech") {
    return (
      <div
        aria-hidden
        className="grid size-full place-items-center bg-card px-6 text-center text-card-foreground"
      >
        <span className="font-display text-xl leading-none font-normal tracking-[0.14em] text-muted-foreground uppercase">
          {label}
        </span>
      </div>
    );
  }

  const parts = label.split(" ");
  return (
    <div
      aria-hidden
      className="flex size-full flex-col items-start justify-center bg-card px-12 text-card-foreground lg:px-14"
    >
      {parts.map((part, i) => (
        <span
          key={i}
          className="font-display text-[2.25rem] leading-[0.92] font-bold tracking-tight uppercase lg:text-[2.5rem]"
        >
          {part}
        </span>
      ))}
    </div>
  );
}

/**
 * Halo Dental's 12-column press & news feed with hairline row dividers and a faded 'View more' footer.
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
    <section
      className={cn(
        "relative bg-background pt-[var(--section-y)] pb-5 text-foreground lg:pb-20",
        className,
      )}
    >
      <div className="mx-auto max-w-[var(--page-width)]">
        <header className="flex flex-wrap items-center justify-between gap-5 px-[var(--page-gutter)]">
          <h2 className="font-display text-[2.47rem] leading-[1.1] font-normal tracking-[-0.015em] lg:text-[4rem] lg:leading-none">
            {title}
          </h2>
          {headerCta && (
            <div className="w-full lg:w-auto lg:pt-3">
              <HalodentalButton variant="outline" href={headerCta.href}>
                {headerCta.label}
              </HalodentalButton>
            </div>
          )}
        </header>

        <ul className="mt-[30px] lg:mt-[60px]">
          {items.map((item, idx) => {
            const isFaded = fadeLast && idx === items.length - 1;
            return (
              <li
                key={item.title}
                className={cn(
                  "px-[var(--page-gutter)]",
                  isFaded &&
                    "max-h-[76px] overflow-hidden opacity-25 pointer-events-none select-none [mask-image:linear-gradient(to_bottom,black_10%,transparent_95%)] lg:max-h-[240px]",
                )}
              >
                <a
                  href={item.href}
                  className="group flex flex-col gap-y-5 border-t border-border py-[30px] transition-colors lg:grid lg:min-h-[240px] lg:grid-cols-12 lg:items-start lg:gap-x-5"
                >
                  <div className="h-[193px] w-full overflow-hidden rounded-lg bg-card lg:col-span-3 lg:h-[180px]">
                    {item.media ?? (
                      <DefaultNewsMedia
                        style={item.placeholderStyle}
                        label={item.placeholderLabel}
                      />
                    )}
                  </div>

                  <h3 className="font-display text-[1.56rem] leading-[1.1] font-normal tracking-[-0.01em] text-foreground lg:col-span-3 lg:col-start-6 lg:text-[1.75rem] lg:leading-[1.1]">
                    {item.title}
                  </h3>

                  <p className="text-[0.91rem] leading-[1.5] font-normal text-foreground lg:col-span-3 lg:col-start-9 lg:text-base lg:leading-[1.5]">
                    {item.excerpt}
                  </p>

                  <div className="flex lg:col-span-1 lg:col-start-12 lg:justify-end">
                    <span className="grid size-10 place-items-center rounded-[var(--radius)] bg-card text-card-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground lg:bg-transparent lg:text-foreground">
                      <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        {moreCta && (
          <footer className="relative z-10 flex justify-center px-[var(--page-gutter)] pt-6 pb-5 lg:-mt-28 lg:bg-gradient-to-t lg:from-background lg:via-background/90 lg:to-transparent lg:pt-24 lg:pb-3">
            <HalodentalButton variant="outline" href={moreCta.href}>
              {moreCta.label}
            </HalodentalButton>
          </footer>
        )}
      </div>
    </section>
  );
}
