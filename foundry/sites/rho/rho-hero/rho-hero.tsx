import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RhoButton } from "@foundry/rho-button";
import { RhoEmailForm, type RhoEmailFormProps } from "@foundry/rho-email-form";
import { RhoHeading } from "@foundry/rho-heading";
import "./rho-hero.css";

export interface RhoHeroAction {
  /** button text */
  label: string;
  /** where it goes */
  href: string;
  /** outline (hairline) or inverse (light fill on dark) */
  variant: "outline" | "inverse";
}

export interface RhoHeroProps {
  /** the mono announcement in the hairline badge */
  badge: string;
  /** where the badge links to */
  badgeHref?: string;
  /** the headline */
  title: string;
  /** one or two sentences under the headline */
  lead: string;
  /** the email sign-up field */
  form: RhoEmailFormProps;
  /** up to two buttons beside the field */
  actions: RhoHeroAction[];
  /** small print under the buttons */
  fineprint?: string;
  /** the product screenshot; empty: a placeholder panel of the same shape */
  media?: ReactNode;
  /** anything behind the hero (a starfield, a video); empty: a faint glow */
  backdrop?: ReactNode;
  /** dark (as the original) or light */
  tone?: "dark" | "light";
  className?: string;
}

export function RhoHero({
  badge,
  badgeHref,
  title,
  lead,
  form,
  actions,
  fineprint,
  media,
  backdrop,
  tone = "dark",
  className,
}: RhoHeroProps) {
  const Badge = badgeHref ? "a" : "span";
  return (
    <section
      data-rho-tone={tone}
      className={cn(tone === "dark" && "dark", "relative overflow-clip bg-background text-foreground", className)}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {backdrop ?? (
          <div className="absolute inset-x-0 top-[22rem] h-[40rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,color-mix(in_oklab,var(--foreground)_9%,transparent),transparent_70%)] lg:top-[18rem]" />
        )}
      </div>

      <div className="relative mx-auto flex max-w-page flex-col items-center px-gutter pt-16 text-center lg:pt-[4.5rem]">
        <Badge
          {...(badgeHref ? { href: badgeHref } : {})}
          className="flex w-full items-center justify-center gap-3 rounded-md border border-border px-5 py-3 font-mono text-[0.8125rem] leading-[1.3] font-medium tracking-[0.04em] uppercase transition-colors duration-[620ms] ease-[cubic-bezier(0.32,0,0.24,1)] hover:bg-card sm:w-auto"
        >
          <span className="rho-hero-caret size-2.5 shrink-0 bg-primary" />
          <span>{badge}</span>
        </Badge>

        <RhoHeading as="h1" size="hero" text={title} reveal={false} className="mt-8 max-w-[22rem] lg:mt-8 lg:max-w-[40rem]" />

        <p className="mt-9 max-w-[43rem] text-[1.125rem] leading-[1.3] lg:mt-10 lg:text-xl lg:leading-[1.3]">{lead}</p>

        <div className="mt-8 flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
          <RhoEmailForm {...form} className="lg:w-[27.5rem]" />
          <div className="grid grid-cols-2 gap-3 lg:flex">
            {actions.map((a) => (
              <RhoButton key={a.label} href={a.href} variant={a.variant} size="lg" className="lg:px-[1.375rem]">
                {a.label}
              </RhoButton>
            ))}
          </div>
        </div>

        {fineprint && <p className="mt-9 max-w-[36.5rem] text-[0.6875rem] leading-[1.35] text-foreground/85 lg:mt-11">{fineprint}</p>}
      </div>

      <div className="relative mx-auto mt-16 max-w-page px-gutter pb-4 lg:mt-[4.5rem]">
        <div className="rho-hero-shot origin-top overflow-clip rounded-lg shadow-[0_2.5rem_7.5rem_color-mix(in_oklab,var(--background)_55%,transparent)]">
          {media ?? <div className="aspect-[1.57] w-full bg-foreground/95" />}
        </div>
      </div>
    </section>
  );
}
