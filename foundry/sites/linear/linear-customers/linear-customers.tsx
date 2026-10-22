import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LinearArrowLink } from "@foundry/linear-arrow-link";
import "./linear-customers.css";

export interface LinearCustomerQuote {
  /** the quote, without quotation marks */
  quote: ReactNode;
  /** the speaker */
  name: string;
  /** their role and company */
  role: string;
  /** the company's mark or wordmark, left of the divider */
  logo?: ReactNode;
  /** glow: pale blue-to-lavender · highlight: the lime card */
  tone?: "glow" | "highlight";
  href?: string;
}

export interface LinearCustomersProps {
  /** the first is the wide card */
  quotes: LinearCustomerQuote[];
  /** the grey line under the cards (bold a figure with <strong>) */
  summary?: ReactNode;
  /** the link at the right of that line */
  link?: { label: string; href: string };
  className?: string;
}

const tones = {
  glow: "bg-linear-to-b from-glow to-chart-5",
  highlight: "bg-highlight",
};

/** Two big colour quote cards with a summary line under them. */
export function LinearCustomers({ quotes, summary, link, className }: LinearCustomersProps) {
  return (
    <section className={cn("bg-background pt-10 pb-24 text-foreground lg:pt-0 lg:pb-56", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] lg:px-gutter">
        <div className="lg:-mx-3 lg:rounded-2xl xl:-mx-8 lg:border lg:border-border/60 lg:p-3">
          <ul className="linear-customers-row flex snap-x snap-mandatory scroll-px-2 gap-2 overflow-x-auto px-2 [scrollbar-width:none] lg:grid lg:grid-cols-[minmax(0,880fr)_minmax(0,432fr)] lg:overflow-visible lg:px-0">
            {quotes.map((q, i) => {
              const Card = q.href ? "a" : "div";
              return (
                <li key={i} className="w-[82vw] max-w-[21rem] shrink-0 snap-start lg:w-auto lg:max-w-none">
                  <Card
                    href={q.href}
                    className={cn(
                      "flex h-[22.875rem] flex-col justify-between rounded-lg p-5 pt-6 text-highlight-foreground transition-[filter] duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:brightness-110 motion-reduce:transition-none lg:h-[30rem] lg:pt-8",
                      tones[q.tone ?? (i === 0 ? "glow" : "highlight")],
                    )}
                  >
                    <blockquote className="max-w-[16em] pl-[0.4em] -indent-[0.4em] text-2xl leading-8 tracking-[-0.012em] lg:text-[2rem] lg:leading-9 lg:tracking-[-0.02em]">
                      <span aria-hidden>“</span>
                      {q.quote}
                      <span aria-hidden>”</span>
                    </blockquote>
                    <div className="flex items-center gap-4 pl-2">
                      {q.logo && <span className="flex h-10 items-center border-r border-highlight-foreground/15 pr-4 [&_svg]:size-8">{q.logo}</span>}
                      <span className="text-sm leading-5">
                        <span className="block font-[510]">{q.name}</span>
                        <span className="block text-highlight-foreground/60">{q.role}</span>
                      </span>
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>

        {(summary || link) && (
          <div className="mt-8 flex flex-col gap-4 px-gutter sm:flex-row sm:items-baseline sm:justify-between lg:mt-[3.25rem] lg:px-0">
            {summary && <p className="text-[0.9375rem] leading-6 text-muted-foreground [&_strong]:font-[590] [&_strong]:text-foreground">{summary}</p>}
            {link && <LinearArrowLink href={link.href}>{link.label}</LinearArrowLink>}
          </div>
        )}
      </div>
    </section>
  );
}
