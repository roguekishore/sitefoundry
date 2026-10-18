import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeHeading } from "@foundry/stripe-heading";
import { StripeRibbon } from "@foundry/stripe-ribbon";
import "./stripe-hero.css";

export interface StripeHeroLogo {
  /** the customer's name; shown as a text wordmark when no logo is given */
  name: string;
  /** a real logo (svg or img) to show instead of the text */
  logo?: ReactNode;
  /** how the text wordmark is set, so a row of them looks like a logo wall */
  style?: "bold" | "light" | "serif" | "caps" | "rounded";
}

export interface StripeHeroProps {
  /** the dark first sentence of the headline */
  title: string;
  /** the softer sentences after it (hidden on phones, as on the original) */
  rest?: string;
  /** a small live-figure line above the headline */
  figure?: { label: string; value: string };
  /** the indigo call to action */
  action?: { label: string; href: string };
  /** customer wordmarks in the strip under the hero */
  logos?: StripeHeroLogo[];
  /** how far the ribbon reaches up behind a transparent header, in px (0 for none) */
  underHeader?: number;
  className?: string;
}

const logoStyles = {
  bold: "font-sans font-bold tracking-[-0.04em]",
  light: "font-sans font-light tracking-[-0.02em]",
  serif: "font-serif italic font-semibold",
  caps: "font-sans font-extrabold uppercase tracking-[0.08em] text-[0.8em]",
  rounded: "font-display font-semibold tracking-[-0.03em] lowercase",
};

function Wordmark({ logo }: { logo: StripeHeroLogo }) {
  return (
    <span className="flex h-8 shrink-0 items-center justify-center text-foreground [&_img]:h-7 [&_svg]:h-7 [&_svg]:w-auto">
      {logo.logo ?? <span className={cn("text-[1.375rem] leading-none whitespace-nowrap", logoStyles[logo.style ?? "bold"])}>{logo.name}</span>}
    </span>
  );
}

/**
 * Stripe's hero: a flowing ribbon of colour sweeping down the top right, a small live figure,
 * a light two-tone headline, an indigo button, and a strip of customer wordmarks.
 */
export function StripeHero({ title, rest, figure, action, logos = [], underHeader = 76, className }: StripeHeroProps) {
  return (
    <section className={cn("relative overflow-x-clip bg-background font-sans text-foreground", className)}>
      {/* the ribbon reaches up behind a transparent header and stops at the logo strip */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0" style={{ top: -underHeader }}>
        <StripeRibbon className="absolute inset-0 size-full" />
        {/* soft white veil on the left so the headline stays readable where the ribbon passes */}
        <div className="absolute inset-0 bg-linear-to-r from-background/70 via-background/10 via-45% to-transparent lg:from-background/40" />
      </div>

      <div className="relative mx-auto max-w-page px-gutter sm:border-x sm:border-border">
        <div className="pt-18 pb-22 sm:pt-24 lg:pt-32 lg:pr-56 lg:pb-36 lg:pl-26">
          {figure && (
            <p className="text-xs font-normal text-foreground lg:text-sm">
              {figure.label} <span className="ml-1 font-light text-muted-foreground tabular-nums">{figure.value}</span>
            </p>
          )}
          <StripeHeading
            as="h1"
            size="hero"
            lead={title}
            rest={rest ? <span className="hidden sm:inline">{rest}</span> : undefined}
            className="mt-6 max-w-[60rem] lg:mt-12"
          />
          {action && (
            <div className="mt-10 lg:mt-10">
              <StripeButton href={action.href} fullOnMobile>
                {action.label}
              </StripeButton>
            </div>
          )}
        </div>
      </div>

      {logos.length > 0 && (
        <div className="relative border-y border-border bg-background">
          <div className="relative mx-auto max-w-page overflow-hidden sm:border-x sm:border-border">
            {/* phones: a slow marquee; desktop: one evenly spaced row */}
            <div className="flex w-max animate-[stripe-hero-marquee_36s_linear_infinite] items-center gap-14 py-4 pl-gutter motion-reduce:animate-none lg:hidden">
              {[...logos, ...logos].map((l, i) => (
                <Wordmark key={i} logo={l} />
              ))}
            </div>
            <div className="hidden h-[4.5rem] items-center justify-between px-gutter lg:flex">
              {logos.slice(0, 8).map((l) => (
                <Wordmark key={l.name} logo={l} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
