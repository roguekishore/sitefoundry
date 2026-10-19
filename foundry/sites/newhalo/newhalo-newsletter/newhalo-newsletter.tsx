import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloField } from "@foundry/newhalo-field";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloNewsletterProps {
  /** the 64px heading on the left */
  title: string;
  /** the email field's label */
  emailLabel: string;
  /** the consent sentence next to the checkbox (may contain links) */
  consent: ReactNode;
  /** the submit button's label; it stays greyed out until the email and the box are filled in */
  submitLabel: string;
  /** where the form posts */
  action?: string;
  className?: string;
}

/**
 * A white sign-up band: a big heading on the left, and on the right an outlined email field,
 * a consent checkbox with small print, and a button that stays greyed out until the form is
 * valid (pure CSS). The form fades in as it scrolls into view.
 */
export function NewhaloNewsletter({ title, emailLabel, consent, submitLabel, action, className }: NewhaloNewsletterProps) {
  return (
    <section className={cn("bg-card py-section text-card-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-6 px-gutter lg:grid-cols-12 lg:items-center lg:gap-x-6">
        <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:col-span-7 lg:text-[4rem] lg:leading-none">{title}</h2>
        <form action={action} className="group/form lg:col-span-4 lg:col-start-9">
          <NewhaloField label={emailLabel} name="email" kind="email" required className={newhaloReveal("fade")} />
          <label className={cn("mt-7 flex items-start gap-4 text-xs leading-normal [&_a]:underline [&_a]:underline-offset-2", newhaloReveal("fade"))} style={newhaloRevealStyle(1)}>
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 size-5 shrink-0 appearance-none rounded-sm border border-input transition-colors checked:border-primary checked:bg-primary"
            />
            <span>{consent}</span>
          </label>
          <div className={newhaloReveal("fade")} style={newhaloRevealStyle(2)}>
            <NewhaloButton
              label={submitLabel}
              type="submit"
              className="mt-5 group-has-[:invalid]/form:pointer-events-none group-has-[:invalid]/form:bg-foreground/5 group-has-[:invalid]/form:text-foreground/30"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
