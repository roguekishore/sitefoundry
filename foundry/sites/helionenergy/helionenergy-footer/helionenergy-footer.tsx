import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface HelionenergyFooterLink {
  /** the link text (uppercase mono) */
  label: ReactNode;
  href: string;
}

export interface HelionenergyFooterProps {
  /** the label over the email field */
  newsletterLabel: ReactNode;
  /** the email field's placeholder */
  emailPlaceholder: string;
  /** the submit button's text */
  submitLabel: ReactNode;
  /** where the form posts */
  formAction?: string;
  /** groups of links (three on desktop, side by side) */
  groups: HelionenergyFooterLink[][];
  /** legal links, under the first group on desktop */
  legal: HelionenergyFooterLink[];
  /** the copyright line, first in the bottom row */
  copyright: ReactNode;
  /** social links, spread along the bottom row */
  socials: HelionenergyFooterLink[];
  /** the name set as a giant wordmark across the full width */
  wordmark: string;
  className?: string;
}

/**
 * A near-black footer: a newsletter field with a small text button on the left, uppercase mono
 * link groups on the right (three columns at desktop, two on phones), a row of the copyright and
 * social links spread edge to edge, and the brand's name stretched across the full width as a
 * giant graphite wordmark. Links underline on hover; social links dim.
 */
export function HelionenergyFooter({
  newsletterLabel,
  emailPlaceholder,
  submitLabel,
  formAction = "#",
  groups,
  legal,
  copyright,
  socials,
  wordmark,
  className,
}: HelionenergyFooterProps) {
  const linkClass = "decoration-1 underline-offset-[3px] hover:underline";
  return (
    <footer className={cn("dark bg-background px-gutter pt-[4.25rem] pb-[1.1rem] text-foreground lg:pt-[5.25rem] lg:pb-[1.7rem]", className)}>
      <div className="mx-auto max-w-page">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <form action={formAction} className="lg:col-span-6">
            <label htmlFor="helionenergy-footer-email" className="block text-[0.8125rem]/none tracking-[-0.01em] uppercase">
              {newsletterLabel}
            </label>
            <div className="mt-1.5 flex items-center gap-[1.6rem] lg:mt-1 lg:gap-[2.1rem]">
              <input
                id="helionenergy-footer-email"
                type="email"
                name="email"
                placeholder={emailPlaceholder}
                className="h-[2.375rem] min-w-0 flex-1 rounded-md border border-input bg-transparent px-[0.9rem] text-sm tracking-[-0.01em] placeholder:text-muted-foreground focus:border-foreground focus:outline-none lg:w-[26.8rem] lg:flex-none"
              />
              <button type="submit" className="inline-flex shrink-0 items-center gap-2 text-[0.8125rem]/none tracking-[-0.01em] transition-opacity duration-200 ease-out hover:opacity-60">
                {submitLabel}
                <Play aria-hidden className="size-2 fill-current" strokeWidth={0} />
              </button>
            </div>
          </form>

          <nav className="mt-12 grid grid-cols-2 gap-x-5 gap-y-11 font-mono text-sm/none tracking-[-0.01em] uppercase lg:col-span-3 lg:col-start-10 lg:mt-1 lg:grid-cols-3">
            {[...groups, legal].map((group, g) => (
              <ul key={g} className={cn("flex flex-col gap-4", g === groups.length && "lg:col-start-1")}>
                {group.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-[10rem] flex flex-wrap justify-between gap-x-8 gap-y-3 font-mono text-sm/none tracking-[-0.01em] uppercase lg:mt-32">
          <p>{copyright}</p>
          {socials.map((link, i) => (
            <a key={i} href={link.href} className="transition-opacity duration-200 ease-out hover:opacity-60 motion-reduce:transition-none">
              {link.label}
            </a>
          ))}
        </div>

        <svg aria-hidden viewBox="0 0 1000 142" className="mt-4 block w-full overflow-visible fill-muted lg:mt-[1.1rem]">
          <text x="0" y="142" textLength="1000" lengthAdjust="spacingAndGlyphs" className="font-mono text-[200px] font-medium">
            {wordmark}
          </text>
        </svg>
      </div>
    </footer>
  );
}
