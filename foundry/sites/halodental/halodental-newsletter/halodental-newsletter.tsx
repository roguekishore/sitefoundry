import { cn } from "@foundry/foundry-utils";
import { HalodentalButton } from "@foundry/halodental-button";

export interface HalodentalNewsletterProps {
  /** large two-line heading on the left */
  title: string;
  /** floating notched label on the top border of the email input */
  emailLabel: string;
  /** optional placeholder inside the email field */
  emailPlaceholder?: string;
  /** leading consent text before the privacy policy link */
  consentLead: string;
  /** underlined privacy policy link */
  privacyLink: { label: string; href: string };
  /** conjunction word between the two links (e.g. "and") */
  consentMiddle: string;
  /** underlined terms of use link */
  termsLink: { label: string; href: string };
  /** submit button label ("Keep me posted") */
  submitLabel: string;
  className?: string;
}

/**
 * Halo Dental's newsletter band ("Keep connected to our team and progress."):
 * crisp white (`bg-card`) surface with a 64px display title on the left and a
 * bordered email input with a top-notched label, consent checkbox, and stone button on the right.
 */
export function HalodentalNewsletter({
  title,
  emailLabel,
  emailPlaceholder,
  consentLead,
  privacyLink,
  consentMiddle,
  termsLink,
  submitLabel,
  className,
}: HalodentalNewsletterProps) {
  return (
    <section className={cn("bg-card py-16 text-card-foreground lg:py-24", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="max-w-[16ch] font-display text-[2.475rem] font-normal leading-[1.08] tracking-[-0.025em] lg:text-[4rem] lg:leading-none">
              {title}
            </h2>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-start lg:col-span-4 lg:col-start-9"
          >
            {/* Input with notched top-left label */}
            <div className="relative w-full">
              <label
                htmlFor="halodental-newsletter-email"
                className="absolute -top-2.5 left-3 bg-card px-1.5 text-xs font-normal text-card-foreground/80"
              >
                {emailLabel}
              </label>
              <input
                id="halodental-newsletter-email"
                type="email"
                placeholder={emailPlaceholder}
                className="h-11 w-full rounded-md border border-input bg-transparent px-3.5 text-sm text-card-foreground focus:border-primary focus:outline-none"
              />
            </div>

            {/* Consent checkbox + fine print */}
            <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs leading-[1.5] text-card-foreground/80">
              <input
                type="checkbox"
                className="mt-0.5 size-4 shrink-0 rounded-xs border border-input accent-primary"
              />
              <span>
                {consentLead}{" "}
                <a
                  href={privacyLink.href}
                  className="underline decoration-card-foreground/50 underline-offset-2 hover:text-primary"
                >
                  {privacyLink.label}
                </a>{" "}
                {consentMiddle}{" "}
                <a
                  href={termsLink.href}
                  className="underline decoration-card-foreground/50 underline-offset-2 hover:text-primary"
                >
                  {termsLink.label}
                </a>
                .
              </span>
            </label>

            <div className="mt-5">
              <HalodentalButton
                type="submit"
                variant="secondary"
                className="text-secondary-foreground/45"
              >
                {submitLabel}
              </HalodentalButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
