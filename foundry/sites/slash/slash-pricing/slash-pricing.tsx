import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SlashButton } from "@foundry/slash-button";
import { SlashHeading, type SlashHeadingPart } from "@foundry/slash-heading";

export interface SlashPlanLine {
  /** what is included ("Same-day transfers") */
  label: string;
  /** its price or detail, shown dimmer after a dash ("— $0") */
  value?: string;
}

export interface SlashPlan {
  /** the plan's name */
  name: string;
  /** the price ("$0") */
  price: string;
  /** the period after it ("/month") */
  period: string;
  /** one line on who it is for */
  description: string;
  /** the button */
  cta: { label: string; href: string };
  /** the featured plan gets the solid white button and gold ticks */
  featured?: boolean;
  /** what it includes */
  lines: SlashPlanLine[];
}

export interface SlashPricingProps {
  /** the heading, as runs; `{ italic: "Clear" }` sets a run in italic */
  heading: SlashHeadingPart[];
  /** the plans, side by side */
  plans: SlashPlan[];
  className?: string;
}

/** A left-aligned serif heading over a hairline, then plans in open columns: name, big price, line, pill button and a ticked list. */
export function SlashPricing({ heading, plans, className }: SlashPricingProps) {
  return (
    <section className={cn("bg-background pt-section text-foreground lg:pt-[calc(var(--section-y)*2+1.75rem)]", className)}>
      <div className="mx-auto max-w-[calc(60rem+2*var(--page-gutter))] px-gutter">
        <SlashHeading parts={heading} size="md" align="left" headingClassName="max-w-[22rem] lg:max-w-[38rem]" />
        <hr className="mt-8 border-border lg:mt-10" />
        <div className="mt-12 flex flex-col gap-20 lg:mt-16 lg:flex-row lg:justify-between lg:gap-12">
          {plans.map((plan) => (
            <div key={plan.name} className="lg:w-[24rem]">
              <h3 className="text-lg tracking-[-0.02em] lg:text-xl">{plan.name}</h3>
              <p className="mt-3 flex items-baseline gap-1.5">
                <span className="text-[2.75rem] leading-none tracking-[-0.03em] lg:text-5xl">{plan.price}</span>
                <span className="text-base tracking-[-0.02em] text-muted-foreground">{plan.period}</span>
              </p>
              <p className="mt-5 max-w-[20rem] text-[0.9375rem] leading-[1.45] tracking-[-0.02em] text-muted-foreground lg:mt-6 lg:text-lg lg:leading-[1.5]">{plan.description}</p>
              <SlashButton href={plan.cta.href} variant={plan.featured ? "solid" : "outline"} className="mt-6 w-full">
                {plan.cta.label}
              </SlashButton>
              <ul className="mt-7 space-y-3 lg:mt-8">
                {plan.lines.map((line) => (
                  <li key={line.label} className="flex items-center gap-2.5 text-[0.9375rem] tracking-[-0.02em]">
                    <Check aria-hidden strokeWidth={1.75} className={cn("size-3.5 shrink-0", plan.featured ? "text-highlight" : "text-foreground")} />
                    <span>
                      {line.label}
                      {line.value && <span className="text-muted-foreground"> {line.value}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
