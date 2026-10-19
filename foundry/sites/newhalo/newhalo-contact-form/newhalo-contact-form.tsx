import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloField, type NewhaloFieldProps } from "@foundry/newhalo-field";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloContactFormProps {
  /** the 64px heading above the form */
  title: string;
  /** the form fields, top to bottom */
  fields: NewhaloFieldProps[];
  /** the consent sentence beside the checkbox (may contain links) */
  consent: ReactNode;
  /** the submit button's label; greyed out until the form is valid */
  submitLabel: string;
  /** where the form posts */
  action?: string;
  /** the white card on the right: a 32px line and a full-width orange button */
  card?: { title: string; cta: { label: string; href: string } };
  className?: string;
}

/**
 * A contact section on paper: a big heading and a column of outlined fields on the left, a
 * tall white card with a prompt and a full-width orange button on the right.
 */
export function NewhaloContactForm({ title, fields, consent, submitLabel, action, card, className }: NewhaloContactFormProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-12 px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-5">
          <h2 className="max-w-[24rem] font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:text-[4rem] lg:leading-none">{title}</h2>
          <form action={action} className="group/form mt-9 grid gap-[2.6rem] lg:mt-12">
            {fields.map((f, i) => (
              <div key={f.name} className={newhaloReveal("fade")} style={newhaloRevealStyle(i)}>
                <NewhaloField {...f} />
              </div>
            ))}
            <label className={cn("-mt-4 flex items-start gap-4 text-sm leading-normal lg:text-base [&_a]:underline [&_a]:underline-offset-2", newhaloReveal("fade"))}>
              <input type="checkbox" required className="mt-1 size-5 shrink-0 appearance-none rounded-sm border border-input checked:border-primary checked:bg-primary" />
              <span>{consent}</span>
            </label>
            <NewhaloButton
              label={submitLabel}
              type="submit"
              className="-mt-2 justify-self-start group-has-[:invalid]/form:pointer-events-none group-has-[:invalid]/form:bg-foreground/5 group-has-[:invalid]/form:text-foreground/30"
            />
          </form>
        </div>
        {card && (
          <div className={cn("flex min-h-60 flex-col justify-between gap-10 rounded-lg bg-card p-gutter text-card-foreground lg:col-span-3 lg:col-start-10 lg:min-h-[25rem] lg:self-start lg:p-5", newhaloReveal("rise"))}>
            <p className="font-display text-[1.56rem] leading-[1.1] lg:text-[2rem]">{card.title}</p>
            <NewhaloButton label={card.cta.label} href={card.cta.href} block />
          </div>
        )}
      </div>
    </section>
  );
}
