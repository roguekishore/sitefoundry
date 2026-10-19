import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalSonnetHeading } from "@foundry/halodental-sonnet-heading";

export interface HalodentalSonnetNewsletterProps {
  /** the heading; a list sets the line breaks */
  title: string | string[];
  /** the small label above the field */
  emailLabel: string;
  /** placeholder inside the field */
  emailPlaceholder?: string;
  /** the consent sentence next to the checkbox (links allowed) */
  consent: ReactNode;
  /** the button's label */
  submitLabel: string;
  /** the URL the form posts to */
  action?: string;
  className?: string;
}

/** A sign-up band: the heading on the left, the form on the right. */
export function HalodentalSonnetNewsletter({ title, emailLabel, emailPlaceholder, consent, submitLabel, action = "#", className }: HalodentalSonnetNewsletterProps) {
  return (
    <section className={cn("py-section", className)}>
      <div className="mx-auto grid max-w-page gap-10 px-gutter lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:px-10">
        <HalodentalSonnetHeading title={title} className="lg:col-span-7" />
        <form action={action} method="post" className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
          <label className="flex flex-col gap-1 text-xs">
            {emailLabel}
            <input type="email" required name="email" placeholder={emailPlaceholder} className="h-10 rounded-sm border border-border bg-transparent px-3 text-base text-foreground outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring" />
          </label>
          <label className="flex items-start gap-2 text-xs leading-[1.4]">
            <input type="checkbox" required name="consent" className="peer mt-0.5 size-4 shrink-0 appearance-none rounded-[2px] border border-border checked:bg-foreground" />
            <span>{consent}</span>
          </label>
          <button
            type="submit"
            className="inline-flex h-8 w-fit items-center rounded-sm border border-foreground/30 px-3 text-sm text-foreground/30 transition-colors hover:border-foreground hover:bg-foreground hover:text-background motion-reduce:transition-none"
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
