import type { ReactNode } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanyPricingPreview {
  /** the small pill on the plan card */
  badge: string;
  /** the plan's name */
  plan: string;
  /** the price lines on the plan card: a small label and a big figure */
  prices: { label: string; value: string }[];
  /** the lime bar under the prices */
  highlight: string;
  /** the ticked lines on the plan card */
  features: string[];
  /** the two buttons at the foot of the card */
  buttons: [string, string];
  /** the eyebrow and big line on the right */
  eyebrow: string;
  headline: string;
  /** the short points under it */
  points: { title: string; body: string }[];
}

export interface BasepowercompanyPricingGateProps {
  /** a small icon at the top of the card (lucide), shown in lime */
  icon?: ReactNode;
  /** the card's heading */
  title: string;
  /** a line under it */
  subtitle?: string;
  /** the utility picker: placeholder, screen-reader label, form action and the choices */
  select: { placeholder: string; label: string; action: string; name?: string; options: { label: string; value: string }[] };
  /** the pricing that shows, blurred, behind the card (decoration: hidden from screen readers) */
  preview: BasepowercompanyPricingPreview;
  className?: string;
}

function Preview({ p }: { p: BasepowercompanyPricingPreview }) {
  return (
    <div aria-hidden inert className="pointer-events-none grid gap-10 blur-[7px] select-none lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
      <div className="rounded-[calc(var(--radius)*2.5)] bg-card/70 p-6">
        <span className="inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">{p.badge}</span>
        <p className="mt-3 text-xl font-bold">{p.plan}</p>
        <div className="mt-6 grid grid-cols-2 gap-6 border-t border-border pt-6">
          {p.prices.map((x) => (
            <div key={x.label}>
              <p className="text-xs text-muted-foreground">{x.label}</p>
              <p className="mt-1 text-2xl font-bold text-primary">{x.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-lg bg-accent/70 px-4 py-2 text-sm font-bold text-accent-foreground">{p.highlight}</p>
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {p.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <span className="rounded-lg border border-border py-3 text-center text-sm font-bold">{p.buttons[0]}</span>
          <span className="rounded-lg bg-accent py-3 text-center text-sm font-bold text-accent-foreground">{p.buttons[1]}</span>
        </div>
      </div>
      <div className="hidden lg:block lg:pt-6">
        <p className="text-sm text-muted-foreground uppercase">{p.eyebrow}</p>
        <p className="mt-4 max-w-[30rem] text-[2.5rem] leading-[1.1] font-bold">{p.headline}</p>
        <ul className="mt-10 space-y-6">
          {p.points.map((x) => (
            <li key={x.title} className="flex gap-4">
              <span className="mt-1 size-6 shrink-0 rounded-full bg-accent" />
              <span>
                <span className="block font-bold">{x.title}</span>
                <span className="block text-sm text-muted-foreground">{x.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/*
 * A pricing table you can't read yet: the plans sit blurred across the band, and a deep green
 * card in the middle asks for your utility before showing them.
 */
export function BasepowercompanyPricingGate({ icon, title, subtitle, select, preview, className }: BasepowercompanyPricingGateProps) {
  return (
    <section className={cn("relative bg-background px-gutter pt-6 pb-10 text-foreground lg:pt-6 lg:pb-14", className)}>
      <div className="relative mx-auto max-w-[calc(var(--page-width)-var(--page-gutter)*2)]">
        <div className="rounded-[calc(var(--radius)*3)] bg-card/40 px-0 py-12 opacity-70 lg:px-6 lg:py-[5.5rem]">
          <Preview p={preview} />
        </div>

        <div className="absolute inset-x-0 top-[7.5rem] flex justify-center lg:top-[9.75rem]">
          <form
            action={select.action}
            className="w-full max-w-[36.125rem] rounded-[calc(var(--radius)*4)] bg-primary px-8 pt-14 pb-14 text-center text-primary-foreground shadow-[0_12px_32px_color-mix(in_oklab,var(--foreground)_16%,transparent)] lg:px-[3.25rem] lg:pt-[3.75rem]"
          >
            {icon && <span className="flex justify-center text-accent [&_svg]:size-10 [&_svg]:stroke-[1.5]">{icon}</span>}
            <h2 className="mt-4 font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em]">{title}</h2>
            {subtitle && <p className="mx-auto mt-3 max-w-[20rem] text-sm leading-[1.5] font-semibold text-primary-foreground/85">{subtitle}</p>}
            <label className="relative mt-9 block">
              <span className="sr-only">{select.label}</span>
              <select
                name={select.name ?? "utility"}
                defaultValue=""
                className="h-[3.625rem] w-full cursor-pointer appearance-none rounded-lg bg-card pr-12 pl-5 text-base text-card-foreground/70 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" disabled>
                  {select.placeholder}
                </option>
                {select.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 text-card-foreground/60" />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
