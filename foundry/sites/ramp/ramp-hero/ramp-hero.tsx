import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RampEmailForm, type RampEmailFormProps } from "@foundry/ramp-email-form";
import { RampHeading } from "@foundry/ramp-heading";
import { RampLiveNumber, type RampLiveNumberProps } from "@foundry/ramp-live-number";
import "./ramp-hero.css";

export interface RampHeroProps {
  /** the small uppercase line above the headline */
  eyebrow?: string;
  /** the live figure in a grey chip after the eyebrow (optional) */
  counter?: RampLiveNumberProps;
  /** the big headline */
  title: string;
  /** the grey line under it */
  subtitle?: string;
  /** the email sign-up bar */
  form: RampEmailFormProps;
  /** the product shot (image or video); empty shows a placeholder of the same frame */
  media?: ReactNode;
  className?: string;
}

/** Ramp's opening screen: left-aligned headline and sign-up over a dot grid, a wide product frame below. */
export function RampHero({ eyebrow, counter, title, subtitle, form, media, className }: RampHeroProps) {
  return (
    <section className={cn("relative isolate bg-background text-foreground", className)}>
      <div aria-hidden className="ramp-hero-dots absolute inset-0 -z-10" />
      <div className="mx-auto max-w-page px-gutter pt-12 pb-16 lg:px-[calc(var(--page-gutter)*4)] lg:pt-[5.25rem]">
        {eyebrow && (
          <p className="ramp-hero-rise flex flex-wrap items-center gap-2 text-xs text-muted-foreground uppercase">
            {eyebrow}
            {counter && (
              <span className="rounded-[calc(var(--radius)-9px)] bg-muted px-1.5 py-0.5 text-xs text-foreground normal-case">
                <RampLiveNumber {...counter} />
              </span>
            )}
          </p>
        )}
        <RampHeading as="h1" size="display" lead={title} className="ramp-hero-rise mt-6 lg:mt-7" />
        {subtitle && (
          <p className="ramp-hero-rise mt-3 text-lg/6 text-muted-foreground lg:text-xl/7" style={{ animationDelay: "80ms" }}>
            {subtitle}
          </p>
        )}
        <div className="ramp-hero-rise mt-6 lg:mt-8" style={{ animationDelay: "160ms" }}>
          <RampEmailForm {...form} />
        </div>
        <div
          className="ramp-hero-rise relative mt-10 aspect-square overflow-clip rounded-lg border border-border bg-muted sm:aspect-[16/9] lg:mt-12 lg:aspect-[1310/584]"
          style={{ animationDelay: "260ms" }}
        >
          {media ?? <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-muted to-accent" />}
        </div>
      </div>
    </section>
  );
}
