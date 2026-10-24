import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";

export interface ParsleyhealthPlan {
  /** small capitals above the plan name */
  eyebrow?: string;
  /** the plan name */
  title: string;
  /** what the plan is (may hold an underlined link) */
  description: ReactNode;
  /** what is included, shown as a timeline of dots (the wide card) */
  steps?: string[];
  /** the price line, e.g. "$140/month" */
  price: string;
  /** small text after the price, e.g. "· $260/month without insurance" */
  priceAside?: string;
  /** the ochre line under the price */
  note?: string;
  /** the small grey print under that */
  fineprint?: string;
  /** the plan's pill */
  action: { label: string; href: string };
  /** filled (forest) or outlined pill */
  actionVariant?: "primary" | "outline";
}

export interface ParsleyhealthPlansProps {
  /** small capitals above the title */
  eyebrow?: string;
  /** the band's title */
  title: string;
  /** the plans: the first with steps is drawn wide (about 7 to 3 on desktop) */
  plans: ParsleyhealthPlan[];
  className?: string;
}

function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-6 lg:grid lg:grid-cols-6 lg:gap-0">
      {steps.map((step, i) => (
        <li key={step} className="relative flex items-center gap-5 lg:block lg:pr-4">
          {/* hairline to the next dot: vertical on phones, horizontal on desktop */}
          <span
            aria-hidden
            className={cn(
              "absolute top-[0.6875rem] left-[0.3125rem] h-[calc(100%+1.5rem)] w-px bg-primary/80 lg:top-[0.3125rem] lg:left-0 lg:h-px lg:w-full",
              i === steps.length - 1 && "max-lg:hidden",
            )}
          />
          <span aria-hidden className="relative block size-2.5 shrink-0 rounded-full bg-glow lg:mb-4 lg:size-[0.6875rem]" />
          <span className="text-[0.9625rem] leading-[1.409] lg:block lg:text-[1.0312rem]">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function Price({ plan }: { plan: ParsleyhealthPlan }) {
  return (
    <div>
      <p className="text-[1.3063rem] leading-[1.455] text-primary lg:text-[1.4438rem]">
        {plan.price}
        {plan.priceAside ? <span className="text-[0.9625rem] text-muted-foreground"> {plan.priceAside}</span> : null}
      </p>
      {plan.note ? <p className="mt-1 text-[1.1rem] leading-[1.455] text-highlight lg:text-[1.1688rem]">{plan.note}</p> : null}
      {plan.fineprint ? <p className="mt-1 text-[0.9625rem] leading-[1.455] text-muted-foreground">{plan.fineprint}</p> : null}
    </div>
  );
}

/** Two plan cards on the forest band. */
export function ParsleyhealthPlans({ eyebrow, title, plans, className }: ParsleyhealthPlansProps) {
  return (
    <section
      className={cn(
        "bg-primary px-gutter py-[calc(var(--section-y)*0.55)] text-primary-foreground lg:py-section",
        className,
      )}
    >
      <ParsleyhealthHeading eyebrow={eyebrow} title={title} align="center" tone="inherit" />
      <div className="mx-auto mt-8 grid max-w-page gap-6 lg:mt-21 lg:grid-cols-[7fr_3fr] lg:gap-3">
        {plans.map((plan) => {
          const wide = Boolean(plan.steps?.length);
          return (
            <article
              key={plan.title}
              className={cn(
                "flex flex-col bg-background p-6 text-foreground",
                wide ? "lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-x-12 lg:p-14" : "lg:p-10",
              )}
            >
              <ParsleyhealthHeading
                eyebrow={plan.eyebrow}
                title={plan.title}
                size="card"
                as="h3"
                className={cn("[&>p]:text-foreground", wide && "lg:col-span-2")}
                titleClassName="max-w-[13rem] lg:max-w-none"
              />
              <div
                className={cn(
                  "mt-8 text-[1.1rem] leading-[1.364] [&_a]:text-secondary [&_a]:underline [&_a]:underline-offset-4",
                  wide ? "lg:col-start-2 lg:row-start-3 lg:mt-0 lg:self-end lg:pb-1" : "lg:mt-11 lg:text-[1.0312rem] lg:leading-[1.318]",
                )}
              >
                {plan.description}
              </div>
              {wide ? (
                <div className="mt-8 lg:col-span-2 lg:row-start-2 lg:mt-14 lg:mb-16">
                  <Steps steps={plan.steps ?? []} />
                </div>
              ) : null}
              <div className={cn("mt-8 border-t border-foreground/12 pt-8", wide ? "lg:col-start-1 lg:row-start-3 lg:mt-0 lg:border-0 lg:pt-0" : "lg:mt-auto")}>
                <Price plan={plan} />
                <ParsleyhealthButton
                  href={plan.action.href}
                  variant={plan.actionVariant ?? "primary"}
                  block={wide ? "phone" : true}
                  className={cn("mt-6", wide && "lg:w-70")}
                >
                  {plan.action.label}
                </ParsleyhealthButton>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
