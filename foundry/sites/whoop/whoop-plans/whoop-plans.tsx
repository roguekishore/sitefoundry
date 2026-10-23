import type { ReactNode } from "react";
import { CircleCheck, ShoppingBag } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WhoopButton } from "@foundry/whoop-button";
import { WhoopPlaceholder } from "@foundry/whoop-placeholder";
import { WhoopSectionHeading } from "@foundry/whoop-section-heading";
import { WhoopSnapTrack } from "@foundry/whoop-snap-track";

export interface WhoopPlan {
  /** the plan name, shown as spaced capitals */
  name: string;
  /** one centred line under the name */
  tagline: string;
  /** the product shot (object-contain); a glass placeholder when empty */
  media?: ReactNode;
  /** the price as shown, e.g. "$329.00" */
  price: string;
  /** the old price, struck through (e.g. "Was $359.00") */
  was?: string;
  /** a small line under the price (e.g. taxes) */
  priceNote?: string;
  /** a monthly-payment chip: "{lead} {amount}{text}" and a small badge */
  instalment?: { lead: string; amount: string; text: string; badge: string };
  /** the line in the coloured strip across the card */
  perk?: string;
  /** the line above the list; strong is set in bold after it */
  intro: { text: string; strong?: string; after?: string };
  /** what the plan includes */
  features: string[];
  /** the black buy button */
  buy: { label: string; href: string };
  /** the outline button */
  more: { label: string; href: string };
  /** the card's pastel wash */
  tint: "silver" | "sky" | "aurora";
}

export interface WhoopPlansProps {
  /** the heading above the cards */
  heading: string;
  /** the plans, usually three */
  plans: WhoopPlan[];
  /** the card shown first on phones (the middle one in the original) */
  start?: number;
  /** screen-reader labels of the track and its dots ("Show plan" → "Show plan 2") */
  labels: { track: string; dot: string };
  className?: string;
}

const tints = {
  silver: "bg-muted bg-linear-241 from-muted from-4% via-card via-50% to-muted/60",
  sky: "bg-muted bg-linear-59 from-muted via-muted via-35% to-chart-1",
  aurora: "bg-chart-4 bg-linear-56 from-chart-2/85 from-1% via-chart-4 via-32% to-chart-3 to-82%",
};

function PlanCard({ plan }: { plan: WhoopPlan }) {
  return (
    <article className={cn("flex h-full flex-col overflow-clip rounded-[1.5rem] text-foreground", tints[plan.tint])}>
      <header className="px-6 pt-10 text-center">
        <h3 className="pl-[0.25em] font-display text-[2rem] leading-none font-light tracking-[0.25em] uppercase">
          {plan.name}
        </h3>
        <p className="mx-auto mt-3 max-w-[17rem] text-base leading-[1.2]">{plan.tagline}</p>
      </header>
      <div className="mx-auto mt-7 aspect-[302/168] w-[94%] *:size-full *:object-contain">
        {plan.media ?? <WhoopPlaceholder tone="glass" className="rounded-t-lg" />}
      </div>
      <div className="bg-card/40 px-4 pt-3 pb-3.5 text-center">
        <p className="flex items-center justify-center gap-4">
          <span className="text-2xl font-bold">{plan.price}</span>
          {plan.was && (
            <>
              <span aria-hidden className="h-5 w-px bg-foreground/15" />
              <s className="text-sm text-muted-foreground">{plan.was}</s>
            </>
          )}
        </p>
        {plan.priceNote && <p className="mt-3 text-xs text-foreground/70">{plan.priceNote}</p>}
        {plan.instalment && (
          <p className="mx-auto mt-2 inline-flex items-center gap-1.5 rounded-sm bg-foreground/10 px-2 py-1 text-xs">
            <span>
              {plan.instalment.lead} <b className="font-semibold text-chart-5">{plan.instalment.amount}</b>
              {plan.instalment.text}
            </span>
            <span className="rounded-[0.1875rem] bg-secondary px-1.5 py-0.5 text-[0.625rem] font-semibold text-secondary-foreground">
              {plan.instalment.badge}
            </span>
          </p>
        )}
      </div>
      {plan.perk && (
        <p className="flex h-[2.625rem] items-center justify-center gap-3 bg-secondary px-4 text-sm font-semibold text-secondary-foreground">
          <CircleCheck aria-hidden className="size-[1.375rem]" strokeWidth={1.5} />
          {plan.perk}
        </p>
      )}
      <div className="flex flex-1 flex-col px-4 pt-6 pb-10">
        <p className="text-[1.0625rem] leading-[1.4]">
          {plan.intro.text}
          {plan.intro.strong && <b className="font-bold"> {plan.intro.strong}</b>}
          {plan.intro.after}
        </p>
        <ul className="mt-0.5 space-y-[0.1875rem]">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[1.0625rem] leading-[1.4]">
              <CircleCheck aria-hidden className="mt-[0.2rem] size-3.5 shrink-0 fill-foreground stroke-card" strokeWidth={3} />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-3 pt-6">
          <WhoopButton href={plan.buy.href} shape="block" icon={<ShoppingBag aria-hidden className="size-5" strokeWidth={1.75} />}>
            {plan.buy.label}
          </WhoopButton>
          <WhoopButton href={plan.more.href} shape="outline">
            {plan.more.label}
          </WhoopButton>
        </div>
      </div>
    </article>
  );
}

/** A black band of pastel membership cards: a centred snapping track on phones, a row on desktop. */
export function WhoopPlans({ heading, plans, start = 1, labels, className }: WhoopPlansProps) {
  return (
    <section
      className={cn(
        "bg-foreground pt-[3.4rem] pb-[4.25rem] text-background lg:py-24 dark:bg-card dark:text-card-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-page px-gutter">
        <WhoopSectionHeading heading={heading} />
      </div>
      <WhoopSnapTrack
        className="mt-[5.5rem] lg:mt-16"
        slides={plans.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
        slideClassName="w-[20.0625rem] lg:w-auto"
        align="center"
        start={start}
        tone="dark"
        label={labels.track}
        dotLabel={labels.dot}
        trackClassName="lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible"
        dotsClassName="mt-[3.75rem] lg:hidden"
      />
    </section>
  );
}
