import { useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformButton } from "@foundry/plumeform-button";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformReveal, plumeformSwapIn } from "@foundry/plumeform-reveal";

export interface PlumeformPlanPrice {
  /** the toggle's label for this price, e.g. "Monthly" (only used when a plan has several) */
  label?: string;
  /** the amount, e.g. "$12" */
  amount: string;
  /** small text after the amount, e.g. "/mo" */
  suffix?: string;
  /** a line under the price */
  note?: ReactNode;
}

export interface PlumeformPlan {
  name: string;
  /** a line under the name */
  description?: ReactNode;
  /** one price, or several to switch between with a pill toggle */
  prices: PlumeformPlanPrice[];
  /** the featured plan is the teal card */
  featured?: boolean;
  cta: { label: string; href: string };
  /** small print under the button */
  ctaNote?: ReactNode;
  /** what's included, one line each */
  features: string[];
  /** small print at the card's foot */
  footnote?: ReactNode;
}

export interface PlumeformCompareTable {
  eyebrow?: string;
  /** an optional heading over the table */
  title?: ReactNode;
  /** the column headings */
  columns: string[];
  /** one row per tool; `ours` marks the highlighted row */
  rows: { cells: string[]; ours?: boolean }[];
  /** a hand-written mark next to the highlighted row's name, e.g. "← us" */
  oursMark?: string;
  /** small print under the table */
  note?: ReactNode;
  /** a line of links under it ("Want the long version? …") */
  links?: { lead?: string; items: { label: string; href: string }[] };
}

export interface PlumeformPricingProps {
  eyebrow?: string;
  title: ReactNode;
  /** h1 on a pricing page, h2 on a landing page */
  as?: "h1" | "h2";
  /** a paragraph under the title */
  intro?: ReactNode;
  /** an underlined link on the right of the heading */
  sideLink?: { label: string; href: string };
  /** small capitals over the plan cards, e.g. "The plans" */
  plansLabel?: string;
  /** usually two: a white card and a featured teal card */
  plans: PlumeformPlan[];
  compare?: PlumeformCompareTable;
  id?: string;
  className?: string;
}

function PlanCard({ plan }: { plan: PlumeformPlan }) {
  const [index, setIndex] = useState(0);
  const price = plan.prices[index] ?? plan.prices[0];
  const toggle = plan.prices.length > 1;
  const featured = plan.featured;

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl p-8",
        featured
          ? "dark bg-linear-[160deg] from-[color-mix(in_oklab,var(--chart-1)_85%,var(--background))] via-[color-mix(in_oklab,var(--chart-1)_62%,var(--background))] to-[color-mix(in_oklab,var(--chart-1)_32%,var(--background))] text-foreground shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_24%,transparent),0_32px_64px_-24px_color-mix(in_oklab,var(--chart-1)_45%,transparent)]"
          : "border border-border bg-card text-card-foreground shadow-[inset_0_1px_0_var(--card),0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_20px_46px_-30px_color-mix(in_oklab,var(--foreground)_45%,transparent)]",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
        <div className="min-w-0">
          <h3 className="text-xl font-bold tracking-[-0.02em]">{plan.name}</h3>
          {toggle && (
            <div role="tablist" className="mt-4 inline-flex rounded-full bg-primary/90 p-1">
              {plan.prices.map((p, i) => (
                <button
                  key={p.label ?? i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-9 rounded-full px-4 text-[0.8125rem] font-bold transition-colors duration-200 motion-reduce:transition-none",
                    i === index ? "bg-primary-foreground text-primary" : "text-primary-foreground/80 hover:text-primary-foreground",
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <p key={index} className={cn(plumeformSwapIn, "flex items-baseline gap-0.5 text-4xl font-extrabold tracking-[-0.03em]", toggle && "lg:mt-12")}>
          {price.amount}
          {price.suffix && <span className="text-sm font-semibold tracking-normal opacity-80">{price.suffix}</span>}
        </p>
      </div>

      {(plan.description || price.note) && (
        <p key={`n${index}`} className={cn(plumeformSwapIn, "mt-2 text-sm", featured ? "text-foreground/90" : "text-muted-foreground")}>
          {toggle ? price.note : plan.description}
        </p>
      )}

      {featured && (
        <div className="mt-7">
          <PlumeformButton href={plan.cta.href} arrow className="h-10 px-5">
            {plan.cta.label}
          </PlumeformButton>
          {plan.ctaNote && <p className="mt-4 text-xs text-foreground/85">{plan.ctaNote}</p>}
        </div>
      )}

      <ul className={cn("space-y-3 text-sm", featured ? "mt-9" : "mt-8")}>
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Check aria-hidden className={cn("mt-0.5 size-4 shrink-0", featured ? "text-foreground" : "text-highlight")} strokeWidth={2.5} />
            <span className={featured ? "text-foreground/95" : "text-muted-foreground"}>{f}</span>
          </li>
        ))}
      </ul>

      {!featured && (
        <div className="mt-auto pt-12">
          <PlumeformButton href={plan.cta.href} arrow className="h-10 px-5">
            {plan.cta.label}
          </PlumeformButton>
          {plan.ctaNote && <p className="mt-4 text-xs text-muted-foreground">{plan.ctaNote}</p>}
        </div>
      )}

      {plan.footnote && <p className="mt-9 text-xs leading-5 text-foreground/85 [&_a]:font-bold [&_a]:underline">{plan.footnote}</p>}
    </div>
  );
}

const capsLabel = "text-[0.72rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase";

/**
 * Pricing on paper: heading (with a side link), a white plan card beside a deep teal featured
 * card with a Monthly / Yearly pill toggle, then a comparison table whose highlighted row is
 * set in ink, and its small print.
 */
export function PlumeformPricing({ eyebrow, title, as = "h2", intro, sideLink, plansLabel, plans, compare, id, className }: PlumeformPricingProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <PlumeformHeading eyebrow={eyebrow} title={title} as={as} size={as === "h1" ? "page" : "section"} className={as === "h1" ? "max-w-[50rem]" : "max-w-[40rem]"}>
            {intro && <div className="text-lg leading-[1.6]">{intro}</div>}
          </PlumeformHeading>
          {sideLink && (
            <a href={sideLink.href} className="self-start border-b-2 border-highlight pb-0.5 text-sm font-bold transition-colors duration-200 hover:text-highlight lg:mb-3 lg:self-auto">
              {sideLink.label}
            </a>
          )}
        </div>

        {plansLabel && <p className={cn(capsLabel, "mt-14")}>{plansLabel}</p>}
        <div className={cn("grid items-stretch gap-4 lg:grid-cols-2", plansLabel ? "mt-5" : "mt-16")}>
          {plans.map((plan, i) => (
            <PlumeformReveal key={plan.name} step={i}>
              <PlanCard plan={plan} />
            </PlumeformReveal>
          ))}
        </div>

        {compare && (
          <PlumeformReveal className="mt-20 lg:mt-24">
            {compare.eyebrow && <p className={capsLabel}>{compare.eyebrow}</p>}
            {compare.title && <h2 className="mt-6 font-display text-[2.25rem] leading-[1.06] font-bold tracking-[-0.025em] lg:text-[3rem]">{compare.title}</h2>}
            <div className={cn("overflow-x-auto rounded-2xl border border-border bg-card text-card-foreground shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_8px_24px_-12px_color-mix(in_oklab,var(--foreground)_12%,transparent)]", compare.title ? "mt-10" : "mt-5")}>
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead className="bg-secondary">
                  <tr>
                    {compare.columns.map((c) => (
                      <th key={c} scope="col" className="px-3 py-3 text-[0.625rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compare.rows.map((row) => (
                    <tr key={row.cells[0]} className={cn(row.ours ? "bg-primary font-bold text-primary-foreground" : "border-t border-border")}>
                      {row.cells.map((cell, ci) => (
                        <td key={ci} className={cn("px-3 py-4", ci === 0 && "font-bold", !row.ours && ci > 0 && "text-muted-foreground")}>
                          {cell}
                          {ci === 0 && row.ours && compare.oursMark && <span className="ml-2 font-normal text-glow italic">{compare.oursMark}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {compare.note && <p className="mt-6 text-xs leading-4 text-muted-foreground">{compare.note}</p>}
            {compare.links && (
              <p className="mt-6 text-sm text-muted-foreground">
                {compare.links.lead}{" "}
                {compare.links.items.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 && " · "}
                    <a href={l.href} className="border-b border-highlight font-bold text-foreground transition-colors duration-200 hover:text-highlight">
                      {l.label}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </PlumeformReveal>
        )}
      </div>
    </section>
  );
}
