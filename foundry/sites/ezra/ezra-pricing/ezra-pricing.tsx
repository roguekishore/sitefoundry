import { Fragment, type ReactNode } from "react";
import { ChevronDown, CircleCheck, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { EzraButton } from "@foundry/ezra-button";
import { EzraPlaceholder } from "@foundry/ezra-placeholder";

export interface EzraPricingLink {
  label: string;
  href: string;
}

export interface EzraPlan {
  /** the plan's name */
  title: string;
  /** what it covers, a short paragraph */
  description: string;
  /** the price as shown ("$1,050") */
  price: string;
  /** a small line under the price */
  priceNote?: string;
  /** the terracotta pill */
  action: EzraPricingLink;
  /** the visit length: a bold label and its value */
  time?: { label: string; value: string };
  /** the heading over the list ("What's included:") */
  includedLabel?: string;
  /** what the plan covers, one per check */
  included?: string[];
  /** a small note under the list */
  note?: string;
  /** the underlined link at the bottom */
  link?: EzraPricingLink;
  /** the icon row (e.g. <img>s joined by plus signs); placeholders when empty */
  icons?: ReactNode;
  /** how many 48px icon placeholders to show, joined by plus signs, when `icons` is empty */
  iconSlots?: number;
}

export interface EzraPlanGroup {
  /** the caps label over the group ("Body scans") */
  label: string;
  /** two or three plans */
  plans: EzraPlan[];
}

export interface EzraPricingProps {
  /** one or more groups of plans */
  groups: EzraPlanGroup[];
  /** the phone toggle that opens a card's details ("Show details") */
  detailsLabel: string;
  /** one centred pill after all groups */
  action?: EzraPricingLink;
  className?: string;
}

const groupWidth = ["", "max-w-[24rem]", "max-w-[58.25rem]", "max-w-[73.25rem]"];
const groupCols = ["", "lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3"];

function PlanIcons({ plan }: { plan: EzraPlan }) {
  if (plan.icons) return <div className="flex h-12 items-center">{plan.icons}</div>;
  const count = plan.iconSlots ?? 1;
  return (
    <div className="flex h-12 items-center gap-2">
      {Array.from({ length: count }, (_, i) => (
        <Fragment key={i}>
          {i > 0 && <Plus aria-hidden className="size-5 text-foreground/70" strokeWidth={1.5} />}
          <EzraPlaceholder tone="icon" className="size-12 rounded-full" />
        </Fragment>
      ))}
    </div>
  );
}

function PlanDetails({ plan }: { plan: EzraPlan }) {
  return (
    <>
      {plan.time && (
        <p className="mt-6 text-sm lg:mt-11">
          <strong className="font-semibold">{plan.time.label}</strong> {plan.time.value}
        </p>
      )}
      {plan.included && (
        <>
          {plan.includedLabel && <p className="mt-8 text-base font-semibold">{plan.includedLabel}</p>}
          <ul className="mt-3 flex flex-col gap-1">
            {plan.included.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-[1.6]">
                <CircleCheck aria-hidden className="mt-[0.3rem] size-4 shrink-0 text-primary" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
      {plan.note && <p className="mt-9 text-sm leading-[1.4]">{plan.note}</p>}
      {plan.link && (
        <a
          href={plan.link.href}
          className="mt-8 inline-block border-b border-foreground text-base leading-[1.4] transition-colors duration-200 hover:border-primary hover:text-primary motion-reduce:transition-none"
        >
          {plan.link.label}
        </a>
      )}
    </>
  );
}

function PlanCard({ plan, detailsLabel }: { plan: EzraPlan; detailsLabel: string }) {
  return (
    <li className="flex flex-col border border-border bg-card px-8 pt-8 pb-12 text-card-foreground">
      <PlanIcons plan={plan} />
      <div className="mt-9 lg:min-h-[12.5rem]">
        <h3 className="text-2xl leading-[1.2] tracking-[0.005em]">{plan.title}</h3>
        <p className="mt-4 text-base leading-[1.5]">{plan.description}</p>
      </div>
      <p className="mt-5 text-[2rem] leading-[1.15] lg:mt-7 lg:text-[2.25rem]">{plan.price}</p>
      {plan.priceNote && <p className="mt-1 text-sm">{plan.priceNote}</p>}
      <EzraButton href={plan.action.href} className="mt-6 self-start px-[1.0625rem] lg:px-6">
        {plan.action.label}
      </EzraButton>
      <details className="group mt-8 lg:hidden">
        <summary className="inline-flex cursor-pointer list-none items-center gap-2 border-b border-foreground text-base leading-[1.4] [&::-webkit-details-marker]:hidden">
          {detailsLabel}
          <ChevronDown aria-hidden className="size-4 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" strokeWidth={1.5} />
        </summary>
        <PlanDetails plan={plan} />
      </details>
      <div className="hidden lg:block">
        <PlanDetails plan={plan} />
      </div>
    </li>
  );
}

/** Groups of plan cards under hairline caps labels, with one closing pill. */
export function EzraPricing({ groups, detailsLabel, action, className }: EzraPricingProps) {
  return (
    <section className={cn("bg-background px-gutter pt-12 pb-24 text-foreground lg:pt-25", className)}>
      {groups.map((group, index) => {
        const n = Math.min(Math.max(group.plans.length, 1), 3);
        return (
          <div key={group.label} className={cn("mx-auto", groupWidth[n], index > 0 && "mt-12 lg:mt-14")}>
            <h2 className="border-b border-border pb-2.5 text-center text-lg font-medium uppercase">{group.label}</h2>
            <ul className={cn("mt-4 grid gap-4", groupCols[n])}>
              {group.plans.map((plan) => (
                <PlanCard key={plan.title} plan={plan} detailsLabel={detailsLabel} />
              ))}
            </ul>
          </div>
        );
      })}
      {action && (
        <div className="mt-16 text-center lg:mt-[9.25rem]">
          <EzraButton href={action.href}>{action.label}</EzraButton>
        </div>
      )}
    </section>
  );
}
