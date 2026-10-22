import type { CSSProperties, ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SharplinkButton } from "@foundry/sharplink-button";
import { SharplinkGuides } from "@foundry/sharplink-guides";
import { SharplinkLabel, sharplinkLabelType } from "@foundry/sharplink-label";
import { SharplinkRule } from "@foundry/sharplink-rule";
import "./sharplink-footer.css";

export interface SharplinkFooterLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface SharplinkFooterProps {
  /** the sign-up heading, e.g. "Stay in the loop:" */
  signupTitle: string;
  /** the email field's placeholder */
  emailPlaceholder: string;
  /** the sign-up button's text */
  signupButton: string;
  /** where the form posts */
  signupAction?: string;
  /** the label over the navigation links */
  navLabel: string;
  /** the navigation links (shown in two sub-columns) */
  nav: SharplinkFooterLink[];
  /** the label over the social links */
  socialLabel: string;
  /** the social links */
  social: SharplinkFooterLink[];
  /** the back-to-top label and target */
  backToTop?: SharplinkFooterLink;
  /** the exchange mark over the listing line */
  exchange?: ReactNode;
  /** the listing line (narrow uppercase); strong parts can be wrapped in <strong> */
  listing?: ReactNode;
  /** the legal links (underlined) */
  legal: SharplinkFooterLink[];
  /** the copyright line */
  copyright: string;
  /** the giant wordmark across the bottom (the company name) */
  wordmark: string;
  className?: string;
}

const linkClass =
  "relative w-fit text-[1.1875rem] leading-[1.35] font-medium tracking-[-0.01em] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full motion-reduce:after:transition-none";

/** Footer over a rising band of blue that deepens to the dark background, ending in a giant wordmark. */
export function SharplinkFooter({
  signupTitle,
  emailPlaceholder,
  signupButton,
  signupAction,
  navLabel,
  nav,
  socialLabel,
  social,
  backToTop,
  exchange,
  listing,
  legal,
  copyright,
  wordmark,
  className,
}: SharplinkFooterProps) {
  const style = { "--sl-paper": "var(--background)", "--sl-pale": "var(--accent)" } as CSSProperties;
  const half = Math.ceil(nav.length / 2);
  return (
    <footer className={cn("sharplink-footer relative isolate overflow-clip", className)} style={style}>
      <div data-sharplink-tone="dark" className="dark relative text-foreground">
        <div
          aria-hidden
          className="sharplink-footer-band absolute inset-x-0 top-0 -z-20 h-[135%] bg-[linear-gradient(to_bottom,transparent_0%,var(--sl-pale)_14%,color-mix(in_oklab,var(--glow)_75%,var(--sl-pale))_26%,var(--glow)_38%,color-mix(in_oklab,var(--glow)_35%,var(--background))_56%,var(--background)_72%)]"
        />
        <div aria-hidden data-sharplink-tone="light" className="absolute inset-x-0 top-0 h-[8rem]" />
        <SharplinkGuides mobile />
        <div className="mx-auto max-w-page px-gutter pt-28 lg:pt-[9.5rem]">
          <SharplinkRule markTone="foreground" className="max-lg:mx-4" />
          <div className="grid gap-x-gutter gap-y-14 px-4 pt-8 lg:grid-cols-3 lg:px-0 lg:pt-7">
            <form action={signupAction} className="min-w-0 lg:pr-7">
              <p className="text-2xl leading-[1.4] font-medium tracking-[-0.01em]">{signupTitle}</p>
              <div className="mt-8 flex items-center gap-4 border-b border-dotted border-foreground/30 pb-4 lg:mt-10">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={emailPlaceholder}
                  aria-label={emailPlaceholder}
                  className="w-full min-w-0 flex-1 bg-transparent text-[1.1875rem] leading-[1.35] font-medium tracking-[-0.01em] placeholder:text-foreground/40 focus:outline-none"
                />
                <SharplinkButton type="submit" variant="tint" arrow>
                  {signupButton}
                </SharplinkButton>
              </div>
            </form>

            <nav aria-label={navLabel} className="lg:pl-7">
              <SharplinkLabel tone="muted">{navLabel}</SharplinkLabel>
              <div className="mt-4 grid grid-cols-2 gap-x-gutter">
                {[nav.slice(0, half), nav.slice(half)].map((col, c) => (
                  <ul key={c} className="grid content-start gap-y-1">
                    {col.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className={linkClass}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </nav>

            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-6 lg:pl-7">
              <div>
                <SharplinkLabel tone="muted">{socialLabel}</SharplinkLabel>
                <ul className="mt-4 grid gap-y-1">
                  {social.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {backToTop && (
                <a href={backToTop.href} className="group flex items-center gap-3 lg:flex-col lg:items-end lg:gap-4">
                  <SharplinkLabel className="order-2 lg:order-1">{backToTop.label}</SharplinkLabel>
                  <span className="order-1 grid size-[2.125rem] place-items-center bg-foreground/10 transition-colors duration-[250ms] group-hover:bg-foreground/[0.18] motion-reduce:transition-none lg:order-2">
                    <ArrowUp className="size-4" strokeWidth={1.5} />
                  </span>
                </a>
              )}
            </div>
          </div>

          <div className="grid gap-x-gutter gap-y-10 px-4 pt-16 pb-8 lg:grid-cols-3 lg:items-end lg:px-0 lg:pt-20 lg:pb-7">
            <div className="grid gap-5">
              {exchange && <span className="flex text-foreground/80 [&_svg]:h-6 [&_svg]:w-auto">{exchange}</span>}
              {listing && <p className={cn(sharplinkLabelType, "text-foreground/60 [&_strong]:font-medium [&_strong]:text-foreground")}>{listing}</p>}
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-2 lg:pl-7">
              {legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={cn(sharplinkLabelType, "text-foreground/60 underline underline-offset-4 transition-colors duration-200 hover:text-foreground")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className={cn(sharplinkLabelType, "text-foreground/60 lg:pl-7")}>{copyright}</p>
          </div>
          <div className="border-y border-dotted border-foreground/15 py-[0.8125rem] max-lg:hidden" />
        </div>

        <div aria-hidden className="mx-auto mt-10 h-[0.68em] max-w-page overflow-clip px-gutter text-[min(24.5vw,22rem)] leading-[0.8] lg:mt-24">
          <p className="bg-[linear-gradient(to_bottom,var(--foreground)_10%,color-mix(in_oklab,var(--foreground)_25%,transparent)_70%)] bg-clip-text text-center font-display font-medium tracking-[-0.045em] text-transparent">
            {wordmark}
          </p>
        </div>
      </div>
    </footer>
  );
}
