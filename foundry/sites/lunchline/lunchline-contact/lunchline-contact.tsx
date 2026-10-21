import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LunchlineLetterRise } from "@foundry/lunchline-letter-rise";
import { LunchlineDrawRule } from "@foundry/lunchline-draw-rule";
import { LunchlineScribbleLink } from "@foundry/lunchline-scribble-link";

export interface LunchlineContactField {
  /** the form field's name */
  name: string;
  /** shown as the placeholder (and read out as the label) */
  label: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  required?: boolean;
  /** wide screens: take half the row (two halves sit side by side) */
  half?: boolean;
  /** a tall message box instead of a one-line field */
  multiline?: boolean;
}

export interface LunchlineContactProps {
  /** the small tracked label above the heading */
  eyebrow: string;
  /** the light heading; its letters rise in as it scrolls into view */
  heading: string;
  /** a short line about the company, at the bottom of the left half */
  blurb: string;
  /** a social link under the blurb, with its icon */
  social?: { label: string; href: string; icon?: ReactNode };
  /** where the form posts */
  action?: string;
  method?: "get" | "post";
  fields: LunchlineContactField[];
  /** the small print under the fields; the link sits between `before` and `after` */
  consent?: { before: string; linkLabel: string; linkHref: string; after: string };
  submitLabel: string;
  /** section id, for in-page links */
  id?: string;
  className?: string;
}

export function LunchlineContact({
  eyebrow,
  heading,
  blurb,
  social,
  action,
  method = "post",
  fields,
  consent,
  submitLabel,
  id,
  className,
}: LunchlineContactProps) {
  return (
    <section id={id} className={cn("relative grid text-foreground lg:min-h-[35.75rem] lg:grid-cols-2", className)}>
      <LunchlineDrawRule className="z-10" />
      <div className="flex flex-col justify-between gap-4 border-b border-border bg-secondary px-gutter pt-10 pb-10 text-secondary-foreground lg:border-r lg:border-b-0 lg:pt-[5.1rem] lg:pb-[5.2rem] lg:pl-[max(var(--page-gutter),calc((100vw_-_var(--page-width))/2_+_var(--page-gutter)))]">
        <div>
          <p className="text-sm leading-none font-bold tracking-[0.08em] uppercase lg:text-base">{eyebrow}</p>
          <LunchlineLetterRise
            text={heading}
            className="mt-4 max-w-[34rem] font-display text-xl leading-[1.2] font-light lg:mt-[1.1rem] lg:text-[2.5rem]"
          />
        </div>
        <div>
          <p className="max-w-[27rem] text-lg leading-[1.4] lg:text-[1.3125rem]">{blurb}</p>
          {social && (
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 text-lg leading-none transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none lg:mt-[1.15rem] lg:text-[1.3125rem]"
            >
              {social.icon && <span className="size-7 [&>svg]:size-full">{social.icon}</span>}
              {social.label}
            </a>
          )}
        </div>
      </div>

      <form action={action} method={method} className="bg-muted px-gutter py-12 text-foreground lg:px-[3.8rem] lg:pt-20 lg:pb-16">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-3">
          {fields.map((field) => {
            const shared = cn(
              "w-full bg-card px-4 text-lg leading-none font-normal text-card-foreground outline-none placeholder:text-foreground/45 focus-visible:ring-1 focus-visible:ring-ring",
            );
            return (
              <label key={field.name} className={cn("block", !field.half && "lg:col-span-2")}>
                <span className="sr-only">{field.label}</span>
                {field.multiline ? (
                  <textarea name={field.name} placeholder={field.label} required={field.required} className={cn(shared, "h-[8.75rem] resize-none py-3 lg:h-[11.4rem]")} />
                ) : (
                  <input
                    name={field.name}
                    type={field.type ?? "text"}
                    placeholder={field.label}
                    autoComplete={field.autoComplete}
                    required={field.required}
                    className={cn(shared, "h-12 lg:h-11")}
                  />
                )}
              </label>
            );
          })}
        </div>
        {consent && (
          <p className="mt-3.5 max-w-[37rem] text-sm leading-[1.45]">
            {consent.before}
            <a href={consent.linkHref} className="underline underline-offset-2 transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none">
              {consent.linkLabel}
            </a>
            {consent.after}
          </p>
        )}
        <LunchlineScribbleLink type="submit" className="mt-5 lg:mt-6">
          {submitLabel}
        </LunchlineScribbleLink>
      </form>
    </section>
  );
}
