import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AttioButton } from "@foundry/attio-button";

export interface AttioCtaLink {
  label: string;
  href: string;
}

export interface AttioCtaProps {
  /** the closing line, two short lines at most */
  title: string;
  /** the outline button (desktop) and the text link under the form (phones) */
  secondary?: AttioCtaLink;
  /** the graphite button (desktop) */
  primary?: AttioCtaLink;
  /** the email form shown instead of the buttons on phones */
  form?: { placeholder: string; submitLabel: string; action?: string };
  className?: string;
}

/**
 * The closing call to action on the dark pinstriped band: a big centred white line and two
 * buttons (an email field, a full-width button and a text link on phones).
 */
export function AttioCta({ title, secondary, primary, form, className }: AttioCtaProps) {
  return (
    <section data-header-tone="dark" className={cn("dark bg-background text-foreground lg:px-gutter", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center border-b border-border bg-[repeating-linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_3%,transparent)_0_1px,transparent_1px_8px)] px-gutter pt-[5.25rem] pb-24 text-center lg:border-x lg:pt-[7.5rem] lg:pb-[7.5rem]">
        <h2 className="max-w-[16rem] font-display text-4xl leading-[1.05] font-medium tracking-[-0.035em] text-balance sm:max-w-[24rem] lg:max-w-[26rem] lg:text-[3.5rem] lg:leading-[1]">{title}</h2>

        {form && (
          <form action={form.action} className="mt-9 flex w-full max-w-[20rem] flex-col gap-2 sm:hidden">
            <input
              type="email"
              name="email"
              required
              placeholder={form.placeholder}
              aria-label={form.placeholder}
              className="h-10 rounded-[0.625rem] border border-input bg-background px-3.5 text-[0.9375rem] text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
            />
            <AttioButton type="submit" variant="primary" size="lg" className="border border-input">
              {form.submitLabel}
            </AttioButton>
            {secondary && (
              <a href={secondary.href} className="mt-4 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-medium">
                {secondary.label}
                <ArrowRight aria-hidden className="size-3.5" />
              </a>
            )}
          </form>
        )}

        <div className={cn("mt-8 items-center gap-2.5", form ? "hidden sm:flex" : "flex")}>
          {secondary && (
            <AttioButton href={secondary.href} className="bg-background font-semibold">
              {secondary.label}
            </AttioButton>
          )}
          {primary && (
            <AttioButton href={primary.href} variant="primary" className="border border-input font-semibold">
              {primary.label}
            </AttioButton>
          )}
        </div>
      </div>
    </section>
  );
}
