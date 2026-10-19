import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalOpusHeading } from "@foundry/halodental-opus-heading";

export interface HalodentalOpusNewsletterProps {
  /** the big heading on the left */
  title: string;
  /** the email field; its label floats on the field's top border */
  email: { label: string; name?: string };
  /** the consent sentence beside the checkbox (may hold links) */
  consent: ReactNode;
  /** the submit button's label */
  submit: string;
  /** where the form posts (leave out to handle it yourself) */
  action?: string;
  className?: string;
}

/**
 * Halo Dental's newsletter strip: white, a big heading over 8 columns, and a slim form in
 * the last 4: an outlined email field with its label sitting on the border, a checkbox with
 * small consent text, and a button that stays grey until the box is ticked (pure CSS,
 * no JavaScript). On phones the form sits under the heading.
 */
export function HalodentalOpusNewsletter({ title, email, consent, submit, action, className }: HalodentalOpusNewsletterProps) {
  return (
    <section className={cn("bg-card py-section text-card-foreground", className)}>
      <div className="mx-auto grid max-w-page grid-cols-1 gap-x-5 gap-y-5 px-gutter lg:grid-cols-12">
        <HalodentalOpusHeading title={title} className="lg:col-span-8 lg:max-w-[48rem]" />

        <form action={action} className="group/form lg:col-span-4 lg:col-start-9 lg:pt-1">
          <label className="relative block">
            <span className="absolute -top-2 left-3 bg-card px-1 text-xs leading-4">{email.label}</span>
            <input
              type="email"
              required
              name={email.name ?? "email"}
              className="h-10 w-full rounded-sm border border-input bg-transparent px-4 text-base focus:border-foreground focus:outline-none"
            />
          </label>

          <label className="mt-5 flex gap-4 text-xs leading-[1.5] [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-4 lg:mt-5">
            <input type="checkbox" required className="mt-0.5 size-5 shrink-0 appearance-none rounded-sm border border-input checked:border-primary checked:bg-primary focus-visible:outline-2 focus-visible:outline-ring" />
            <span>{consent}</span>
          </label>

          <button
            type="submit"
            className="mt-5 h-10 rounded-sm bg-muted px-[0.9375rem] text-base text-muted-foreground transition-colors group-has-[input[type=checkbox]:checked]/form:bg-primary group-has-[input[type=checkbox]:checked]/form:text-primary-foreground motion-reduce:transition-none"
          >
            {submit}
          </button>
        </form>
      </div>
    </section>
  );
}
