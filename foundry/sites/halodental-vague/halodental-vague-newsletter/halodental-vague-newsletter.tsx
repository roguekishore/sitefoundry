import { cn } from "@foundry/foundry-utils";
import { HalodentalVagueButton } from "@foundry/halodental-vague-button";

export interface HalodentalVagueNewsletterProps {
  /** main heading on the left (columns 1–7) */
  title: string;
  /** floating label on the email input */
  emailLabel?: string;
  /** consent copy next to the checkbox */
  consentPrefix?: string;
  /** privacy policy link in the consent line */
  privacyLink?: { label: string; href: string };
  /** conjunction word between privacyLink and termsLink */
  consentJoiner?: string;
  /** terms of use link in the consent line */
  termsLink?: { label: string; href: string };
  /** submit button label */
  submitLabel?: string;
  className?: string;
}

/**
 * Halo Dental's crisp white newsletter signup band.
 */
export function HalodentalVagueNewsletter({
  title,
  emailLabel = "*Email address",
  consentPrefix = "By signing up to the newsletter, I agree to Sola processing my personal data in line with the",
  privacyLink = { label: "privacy policy", href: "#privacy" },
  consentJoiner = "and",
  termsLink = { label: "terms of use", href: "#terms" },
  submitLabel = "Keep me posted",
  className,
}: HalodentalVagueNewsletterProps) {
  return (
    <section
      className={cn(
        "bg-card py-[var(--section-y)] px-[var(--page-gutter)] text-card-foreground",
        className,
      )}
    >
      <div className="mx-auto grid max-w-[var(--page-width)] grid-cols-1 items-start gap-y-5 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-7">
          <h2 className="font-display text-[2.47rem] leading-[1.1] font-normal tracking-[-0.015em] text-card-foreground lg:text-[4rem] lg:leading-none">
            {title}
          </h2>
        </div>

        <div className="w-full lg:col-span-4 lg:col-start-9">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col"
          >
            <div className="relative pt-2.5">
              <label
                htmlFor="halodental-vague-newsletter-email"
                className="absolute top-0 left-2.5 bg-card px-1.5 text-xs font-normal text-card-foreground"
              >
                {emailLabel}
              </label>
              <input
                id="halodental-vague-newsletter-email"
                type="email"
                required
                className="h-10 w-full rounded-[var(--radius)] border border-border bg-transparent px-4 text-sm text-card-foreground focus:border-primary focus:outline-none"
              />
            </div>

            <label className="my-5 flex cursor-pointer items-start gap-3 text-xs leading-[1.45] font-normal text-card-foreground">
              <input
                type="checkbox"
                className="mt-0.5 size-4 shrink-0 rounded-[2px] border border-border accent-primary"
              />
              <span>
                {consentPrefix}{" "}
                <a
                  href={privacyLink.href}
                  className="underline decoration-card-foreground/60 underline-offset-2 hover:text-primary"
                >
                  {privacyLink.label}
                </a>{" "}
                {consentJoiner}{" "}
                <a
                  href={termsLink.href}
                  className="underline decoration-card-foreground/60 underline-offset-2 hover:text-primary"
                >
                  {termsLink.label}
                </a>
                .
              </span>
            </label>

            <div>
              <HalodentalVagueButton variant="muted" type="submit">
                {submitLabel}
              </HalodentalVagueButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
