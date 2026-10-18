import type { ReactNode } from "react";
import { Check, CircleCheck, CircleHelp } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ClerkArrowLink } from "@foundry/clerk-arrow-link";
import { ClerkButton } from "@foundry/clerk-button";
import { ClerkHeading, type ClerkHeadingProps } from "@foundry/clerk-heading";

export interface ClerkBillingPlan {
  name: string;
  /** e.g. "$12" */
  price: string;
  /** small text after the price, e.g. "/ month" */
  period?: string;
  /** label next to the (decorative) toggle, e.g. "Billed yearly" */
  toggle?: string;
  /** button label */
  cta: string;
  features: string[];
}

export interface ClerkBillingProps {
  /** eyebrow, heading and paragraph on the left (its link is ignored; use `link`) */
  heading: ClerkHeadingProps;
  /** small lead-in above the checklist */
  listTitle?: string;
  /** ticked points on the left */
  list?: string[];
  /** caret link under the list */
  link?: { label: string; href: string };
  /** the mock browser window on the right */
  window: {
    /** text centred in the window's title bar */
    title: string;
    /** the mock app's logo mark */
    mark?: ReactNode;
    /** links in the mock app's nav */
    nav?: string[];
    /** small round avatar at the nav's right end */
    avatar?: ReactNode;
    heading: string;
    subheading?: string;
    plans: ClerkBillingPlan[];
  };
  className?: string;
}

function Plan({ plan }: { plan: ClerkBillingPlan }) {
  return (
    <div className="w-[15.875rem] shrink-0 snap-center overflow-hidden rounded-lg bg-card text-left shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_6%,transparent),0_4px_12px_color-mix(in_oklab,var(--foreground)_6%,transparent),0_16px_32px_-8px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
      <div className="bg-muted/50 px-4 pt-5 pb-4">
        <p className="text-[0.6875rem] font-semibold text-foreground">{plan.name}</p>
        <p className="mt-3 flex items-baseline gap-1.5">
          <span className="text-lg font-semibold text-foreground">{plan.price}</span>
          {plan.period && <span className="text-[0.625rem] text-muted-foreground">{plan.period}</span>}
        </p>
        {plan.toggle && (
          <p className="mt-1.5 flex items-center gap-2 text-[0.625rem] font-medium text-muted-foreground">
            <span className="flex h-3 w-5 items-center rounded-full bg-foreground/15 p-0.5">
              <span className="size-2 rounded-full bg-card shadow-sm" />
            </span>
            {plan.toggle}
          </p>
        )}
      </div>
      <div className="border-y border-border px-4 py-3">
        <ClerkButton block size="sm" className="h-[1.625rem] text-[0.6875rem] font-semibold">
          {plan.cta}
        </ClerkButton>
      </div>
      <ul className="space-y-2.5 px-4 py-4 text-[0.6875rem] text-foreground/85">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <Check className="size-3 text-muted-foreground" strokeWidth={2} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ClerkBilling({ heading, listTitle, list = [], link, window: win, className }: ClerkBillingProps) {
  return (
    <section className={cn("overflow-x-clip bg-background py-[calc(var(--section-y)*0.6)] text-foreground lg:py-section", className)}>
      <div className="mx-auto grid max-w-page items-center gap-14 px-gutter lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-20">
        <div>
          <ClerkHeading {...heading} link={undefined} />
          {listTitle && <p className="mt-6 text-[0.9375rem] leading-6 text-muted-foreground">{listTitle}</p>}
          {list.length > 0 && (
            <ul className="mt-2 space-y-2">
              {list.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[0.9375rem] leading-6 text-muted-foreground">
                  <CircleCheck className="size-3.5 shrink-0 opacity-70" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {link && <ClerkArrowLink {...link} className="mt-5" />}
        </div>

        {/* the mock browser window */}
        <div className="relative -mx-gutter overflow-hidden px-gutter sm:mx-0 sm:px-0">
          <div className="overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_7%,transparent)] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]">
            <div className="relative flex h-5 items-center justify-center border-b border-border bg-muted/40">
              <span className="absolute left-2.5 flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="size-[0.4375rem] rounded-full bg-foreground/10" />
                ))}
              </span>
              <span className="text-[0.625rem] font-medium text-foreground">{win.title}</span>
            </div>
            <div className="flex h-10 items-center gap-5 bg-muted/40 px-6 text-[0.6875rem] font-medium text-muted-foreground">
              <span className="text-foreground [&_svg]:size-5">{win.mark}</span>
              {win.nav?.map((n, i) => (
                <span key={n} className={cn(i > 1 && "max-sm:hidden")}>
                  {n}
                </span>
              ))}
              <span className="ml-auto flex items-center gap-3">
                <CircleHelp className="size-3.5" strokeWidth={1.75} />
                {win.avatar}
              </span>
            </div>
            <div className="relative px-4 pt-14 pb-20 text-center">
              <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 size-[28rem] -translate-1/2 rounded-full bg-glow/10 blur-3xl" />
              <p className="relative mx-auto max-w-[16rem] text-[1.375rem] leading-7 font-medium tracking-[-0.01em] text-balance text-foreground sm:max-w-none">
                {win.heading}
              </p>
              {win.subheading && <p className="relative mt-2 text-xs text-muted-foreground">{win.subheading}</p>}
              <div className="relative mt-14 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[calc(50%-7.9375rem)] pb-4 [scrollbar-width:none] sm:mx-0 sm:justify-center sm:px-0">
                {win.plans.map((p) => (
                  <Plan key={p.name} plan={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
