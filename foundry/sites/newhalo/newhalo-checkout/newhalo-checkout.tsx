import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import "./newhalo-checkout.css";

export interface NewhaloCheckoutProps {
  /** the wordmark at the top left */
  brand: string;
  /** an icon before the wordmark */
  brandIcon?: ReactNode;
  /** where the wordmark links to */
  brandHref?: string;
  /** the step names in the breadcrumb pill; the first is the current one */
  steps: string[];
  /** the 64px amber→red question */
  title: string;
  /** the paragraph under it */
  intro: string;
  /** the name shared by the choice radios */
  name: string;
  /** the choice cards */
  choices: string[];
  /** the bottom button: greyed out until a choice is picked (pure CSS) */
  continueLabel: string;
  /** where the form goes next */
  action?: string;
  /** the tall artwork on the right; empty shows a glow placeholder */
  art?: ReactNode;
  className?: string;
}

/**
 * The first step of a reservation flow on a window-tall black screen: a wordmark and a step
 * breadcrumb pill, a big gradient question, three dark choice cards with radio rings, and a
 * "continue" button that wakes up once a card is picked. A tall art column fills the right.
 */
export function NewhaloCheckout({ brand, brandIcon, brandHref = "/", steps, title, intro, name, choices, continueLabel, action, art, className }: NewhaloCheckoutProps) {
  return (
    <section className={cn("dark bg-background text-foreground", className)}>
      <form action={action} className="group/form mx-auto grid min-h-svh max-w-page px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="flex flex-col pt-5 pb-10 lg:col-span-7 lg:pt-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
            <a href={brandHref} className="flex items-center gap-2 font-display text-[2.25rem] leading-none tracking-[-0.02em] lg:gap-3 lg:text-5xl">
              {brandIcon && <span className="flex [&_svg]:size-9 lg:[&_svg]:size-11">{brandIcon}</span>}
              {brand}
            </a>
            <ol className="flex h-[2.6rem] items-center gap-2 overflow-x-auto rounded-sm bg-card px-5 text-[0.81rem] whitespace-nowrap text-foreground/70 [scrollbar-width:none]">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight aria-hidden strokeWidth={1} className="size-3.5" />}
                  <span aria-current={i === 0 ? "step" : undefined} className={cn(i === 0 && "font-bold text-foreground")}>
                    {s}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <h1 className="newhalo-checkout-title mt-14 max-w-[28rem] font-display text-[2.5rem] leading-none tracking-[-0.01em] lg:mt-[4.2rem] lg:text-[4rem]">{title}</h1>
          <p className="mt-5 max-w-[27.5rem] text-[0.91rem] leading-normal lg:mt-6 lg:text-base">{intro}</p>

          <fieldset className="mt-10 grid grid-cols-1 gap-0.5 sm:grid-cols-3 lg:max-w-[42.5rem]">
            {choices.map((c) => (
              <label
                key={c}
                className="relative flex h-24 cursor-pointer items-end rounded-lg bg-card p-5 text-base ring-primary transition-shadow duration-300 hover:ring-1 has-checked:ring-1 sm:aspect-square sm:h-auto"
              >
                <input type="radio" name={name} value={c} required className="peer sr-only" />
                <span aria-hidden className="absolute top-5 right-5 size-5 rounded-full border border-foreground/60 transition-colors peer-checked:border-[6px] peer-checked:border-primary" />
                {c}
              </label>
            ))}
          </fieldset>

          <button
            type="submit"
            className="mt-12 h-10 w-full rounded-sm bg-primary text-base text-primary-foreground transition-colors duration-300 group-has-[:invalid]/form:pointer-events-none group-has-[:invalid]/form:bg-card group-has-[:invalid]/form:text-foreground/40 sm:w-[13.1rem] lg:mt-auto"
          >
            {continueLabel}
          </button>
        </div>
        <NewhaloMedia tone="glow" className="hidden lg:col-span-4 lg:col-start-9 lg:block">
          {art}
        </NewhaloMedia>
      </form>
    </section>
  );
}
