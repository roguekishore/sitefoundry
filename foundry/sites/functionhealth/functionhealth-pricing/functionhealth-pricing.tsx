import { CircleCheck, Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthButton } from "@foundry/functionhealth-button";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";

export interface FunctionhealthPricingProps {
  title: HeadingPart[];
  text?: string;
  plan: {
    /** small badge with a check, e.g. "HSA/FSA eligible" */
    badge?: string;
    name: string;
    /** the big figure, e.g. "$1" */
    price: string;
    /** small unit next to it, e.g. "/day" */
    unit: string;
    /** billing note under the price */
    note: string;
    cta: { label: string; href: string };
    /** what's included */
    features: string[];
  };
  /** short member reviews under the card */
  reviews: string[];
  className?: string;
}

export function FunctionhealthPricing({ title, text, plan, reviews, className }: FunctionhealthPricingProps) {
  return (
    <section id="pricing" className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} text={text} textClassName="text-base lg:text-xl" />
        <div className="mx-auto mt-12 max-w-[68rem] rounded-3xl border border-border bg-background px-6 py-7 shadow-[12px_32px_80px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:mt-[4.25rem] lg:grid lg:grid-cols-2 lg:px-14 lg:py-14">
          <div className="lg:pr-14">
            {plan.badge && (
              <p className="flex items-center gap-2 text-base leading-none font-semibold text-primary">
                <CircleCheck className="size-[1.125rem]" strokeWidth={1.5} />
                {plan.badge}
              </p>
            )}
            <h3 className="mt-2 font-display text-[1.75rem] leading-tight font-light lg:text-[2.5rem]">{plan.name}</h3>
            <p className="mt-7 flex items-baseline gap-1.5 lg:mt-14">
              <span className="font-display text-[3.5rem] leading-none font-light lg:text-[5rem]">{plan.price}</span>
              <span className="text-lg font-light lg:text-xl">{plan.unit}</span>
            </p>
            <p className="mt-3 text-base leading-snug font-light text-muted-foreground">{plan.note}</p>
            <FunctionhealthButton href={plan.cta.href} className="mt-7 w-full lg:mt-8">
              {plan.cta.label}
            </FunctionhealthButton>
          </div>
          <ul className="mt-7 space-y-3 border-t border-border pt-7 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-base leading-6 font-light">
                <CircleCheck className="mt-0.5 size-[1.125rem] shrink-0 text-primary" strokeWidth={1.5} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="mx-auto mt-12 flex max-w-[68rem] snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-[var(--page-gutter)] px-gutter [scrollbar-width:none] lg:mt-[4.25rem] lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
        {reviews.map((r) => (
          <li key={r} className="w-[17.5rem] shrink-0 snap-start border-t border-border pt-4 lg:w-auto lg:border-t-0 lg:pt-0 lg:text-center">
            <p className="flex gap-0.5 text-primary lg:justify-center" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-2.5 fill-current" strokeWidth={0} />
              ))}
            </p>
            <p className="mx-auto mt-2 max-w-[21rem] text-base leading-6 font-light">{r}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
