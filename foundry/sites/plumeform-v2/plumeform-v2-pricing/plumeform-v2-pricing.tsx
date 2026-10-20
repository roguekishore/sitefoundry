import { useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2Eyebrow, PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2PlanPrice {
  /** the figure, e.g. "$12" */
  value: string;
  /** small text after the figure, e.g. "/mo" */
  suffix?: string;
  /** the line under the price */
  description: string;
}

export interface PlumeformV2Plan {
  name: string;
  /** the monthly price (or the only price) */
  price: PlumeformV2PlanPrice;
  /** the yearly price; plans that have one show the toggle */
  yearly?: PlumeformV2PlanPrice;
  features: string[];
  cta: { label: string; href: string };
  /** a small line under the button */
  ctaNote?: string;
  /** a small line at the foot of the card */
  footnote?: ReactNode;
  /** the deep teal card */
  featured?: boolean;
}

export interface PlumeformV2PricingProps {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  /** page: a 72px page title; section: a 48px section title */
  size?: "page" | "section";
  /** an underlined link at the right of the heading */
  link?: { label: string; href: string };
  /** small capitals above the cards */
  plansLabel?: string;
  plans: PlumeformV2Plan[];
  /** the toggle's two labels */
  periods?: { monthly: string; yearly: string };
  id?: string;
  className?: string;
}

function Price({ price, featured }: { price: PlumeformV2PlanPrice; featured?: boolean }) {
  return (
    <p className="shrink-0 font-display text-[2rem] leading-none font-extrabold tracking-[-0.03em]">
      {price.value}
      {price.suffix && <span className={cn("ml-0.5 text-sm font-semibold tracking-normal", !featured && "text-muted-foreground")}>{price.suffix}</span>}
    </p>
  );
}

function PlanCard({ plan, periods, step }: { plan: PlumeformV2Plan; periods?: { monthly: string; yearly: string }; step: number }) {
  const [yearly, setYearly] = useState(false);
  const price = yearly && plan.yearly ? plan.yearly : plan.price;
  const toggle = plan.yearly && periods;
  return (
    <PlumeformV2Reveal
      step={step}
      className={cn(
        "flex flex-col rounded-2xl p-7 sm:p-8",
        plan.featured
          ? "dark bg-[linear-gradient(170deg,var(--glow),color-mix(in_oklab,var(--glow)_50%,var(--background)))] text-foreground shadow-[0_32px_64px_-24px_color-mix(in_oklab,var(--background)_60%,transparent)]"
          : "border border-border bg-card text-card-foreground shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_8px_24px_-12px_color-mix(in_oklab,var(--foreground)_12%,transparent)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="pt-1 text-xl font-bold tracking-[-0.02em]">{plan.name}</h3>
        {!toggle && <Price price={price} featured={plan.featured} />}
      </div>
      {toggle && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex rounded-full bg-foreground p-1 text-[0.8125rem] font-bold text-background">
            {[false, true].map((y) => (
              <button
                key={String(y)}
                type="button"
                aria-pressed={yearly === y}
                onClick={() => setYearly(y)}
                className={cn("h-9 rounded-full px-4 transition-colors duration-200", yearly === y ? "bg-background text-foreground" : "hover:bg-background/10")}
              >
                {y ? periods.yearly : periods.monthly}
              </button>
            ))}
          </div>
          <Price price={price} featured={plan.featured} />
        </div>
      )}
      <p className={cn("mt-3 text-sm", plan.featured ? "text-foreground/90" : "text-muted-foreground")}>{price.description}</p>

      {plan.featured && (
        <div className="mt-8">
          <PlumeformV2Button href={plan.cta.href} arrow>
            {plan.cta.label}
          </PlumeformV2Button>
          {plan.ctaNote && <p className="mt-4 text-xs text-foreground/80">{plan.ctaNote}</p>}
        </div>
      )}

      <ul className={cn("space-y-3 text-[0.9375rem]", plan.featured ? "mt-8" : "mt-7 text-muted-foreground")}>
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3">
            <Check className={cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-foreground" : "text-primary")} strokeWidth={2.5} aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      {plan.footnote && <p className="mt-8 text-xs leading-relaxed text-foreground/85 [&_a]:font-bold [&_a]:underline">{plan.footnote}</p>}

      {!plan.featured && (
        <div className="mt-auto pt-12">
          <PlumeformV2Button href={plan.cta.href} arrow size="lg" className="px-6">
            {plan.cta.label}
          </PlumeformV2Button>
          {plan.ctaNote && <p className="mt-4 text-xs text-muted-foreground">{plan.ctaNote}</p>}
        </div>
      )}
    </PlumeformV2Reveal>
  );
}

export function PlumeformV2Pricing({
  eyebrow,
  title,
  body,
  size = "section",
  link,
  plansLabel,
  plans,
  periods,
  id,
  className,
}: PlumeformV2PricingProps) {
  return (
    <section
      id={id}
      className={cn(
        "bg-background px-gutter text-foreground",
        size === "page" ? "pt-[calc(var(--section-y)*0.85+3.75rem)] pb-16 lg:pt-[8.5rem]" : "pt-[calc(var(--section-y)*0.85)] pb-16 lg:pt-section",
        className,
      )}
    >
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <PlumeformV2Heading eyebrow={eyebrow} title={title} body={body} size={size} className={size === "page" ? "max-w-[42rem]" : "max-w-[40rem]"} />
          {link && (
            <PlumeformV2Reveal step={1} className="lg:pb-3">
              <PlumeformV2Button variant="link" href={link.href}>
                {link.label}
              </PlumeformV2Button>
            </PlumeformV2Reveal>
          )}
        </div>
        {plansLabel && <PlumeformV2Eyebrow className="mt-16 text-[0.6875rem]">{plansLabel}</PlumeformV2Eyebrow>}
        <div className={cn("grid gap-4 lg:grid-cols-2", plansLabel ? "mt-6" : "mt-16")}>
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} periods={periods} step={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
