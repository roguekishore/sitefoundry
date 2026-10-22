import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyButton } from "@foundry/basepowercompany-button";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";
import { BasepowercompanyRating, type BasepowercompanyRatingProps } from "@foundry/basepowercompany-rating";
import "./basepowercompany-hero.css";

export interface BasepowercompanyHeroProps {
  /** the review score above the headline */
  rating: BasepowercompanyRatingProps;
  /** the headline: one line on desktop, two on phones */
  title: string;
  /** one sentence under the headline */
  subtitle: string;
  /** the zip-code form: where it submits, the field's placeholder and label, and the button */
  form: { action: string; placeholder: string; fieldLabel: string; fieldName?: string; button: string };
  /** a small line under the form */
  caption?: string;
  /** the full-bleed photo or video behind everything */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
  className?: string;
}

/*
 * A full-bleed photo hero, 90% of the window tall. Phones stack the content at the top,
 * centred; desktop sets it bottom-left over a dark scrim from the left. The photo settles from
 * a slight zoom over 7s; the content rises in on load.
 */
export function BasepowercompanyHero({ rating, title, subtitle, form, caption, media, mediaLabel, className }: BasepowercompanyHeroProps) {
  return (
    <section className={cn("dark relative isolate h-[90svh] min-h-[38rem] overflow-clip bg-background text-foreground", className)}>
      <div className="bp-hero-zoom absolute inset-0 -z-10">
        <BasepowercompanyMedia media={media} tone="photo" label={mediaLabel} className="size-full" />
      </div>
      {/* scrims: top and bottom on phones, from the left on desktop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(color-mix(in_oklab,var(--background)_64%,transparent),transparent_40%,transparent_46%,color-mix(in_oklab,var(--background)_62%,transparent)_84%)] lg:bg-[linear-gradient(90deg,color-mix(in_oklab,var(--background)_45%,transparent),color-mix(in_oklab,var(--background)_31%,transparent)_45%,transparent_71%)]"
      />

      <div className="mx-auto flex h-full max-w-page flex-col items-center px-gutter pt-[4.75rem] text-center lg:items-start lg:justify-end lg:pt-0 lg:pb-24 lg:text-left">
        <BasepowercompanyRating {...rating} className="bp-hero-rise" />
        <h1 className="bp-hero-rise mt-2 max-w-[20rem] font-display text-[2.5rem] leading-[1.1] font-bold tracking-[-0.035em] [animation-delay:60ms] sm:max-w-none lg:mt-3 lg:text-5xl lg:leading-[1.15]">
          {title}
        </h1>
        <p className="bp-hero-rise mt-5 max-w-[22rem] text-base leading-6 font-semibold tracking-[-0.005em] [animation-delay:120ms] sm:max-w-none lg:mt-6">
          {subtitle}
        </p>

        <form
          action={form.action}
          className="bp-hero-rise mt-7 flex w-full flex-col gap-2 [animation-delay:180ms] sm:max-w-[38.5rem] lg:mt-9 lg:flex-row lg:items-center lg:rounded-lg lg:border lg:border-foreground lg:bg-foreground lg:p-2"
        >
          <label className="flex h-[3.125rem] items-center lg:flex-1 gap-2.5 rounded-lg border border-foreground bg-foreground px-4 text-background lg:h-[2.875rem] lg:border-0 lg:px-2">
            <MapPin aria-hidden className="size-5 shrink-0 stroke-[1.5] text-primary" />
            <span className="sr-only">{form.fieldLabel}</span>
            <input
              name={form.fieldName ?? "zip"}
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder={form.placeholder}
              className="w-full bg-transparent text-base text-background outline-none placeholder:text-background/50"
            />
          </label>
          <BasepowercompanyButton type="submit" block className="h-[2.875rem] lg:w-auto lg:px-5">
            {form.button}
          </BasepowercompanyButton>
        </form>
        {caption && <p className="bp-hero-rise mt-4 text-xs leading-[1.5] font-semibold [animation-delay:240ms] lg:mt-2 lg:ml-2">{caption}</p>}
      </div>
    </section>
  );
}
