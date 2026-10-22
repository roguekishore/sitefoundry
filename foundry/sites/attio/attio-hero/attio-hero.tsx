import type { ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AttioButton } from "@foundry/attio-button";
import "./attio-hero.css";

export interface AttioHeroLink {
  label: string;
  href: string;
}

export interface AttioHeroProps {
  /** the small news pill above the headline */
  news?: AttioHeroLink;
  /** the headline (one short sentence) */
  title: string;
  /** one or two lines under it */
  subtitle?: string;
  /** the outline button (desktop) and the text link under the form (phones) */
  secondary?: AttioHeroLink;
  /** the dark button (desktop) */
  primary?: AttioHeroLink;
  /** the email form shown instead of the buttons on phones */
  form?: { placeholder: string; submitLabel: string; action?: string };
  /** the product shot in the window frame (1080×620); empty shows a placeholder */
  media?: ReactNode;
  /** accessible label for the media slot */
  mediaLabel?: string;
  className?: string;
}

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/**
 * A centred hero on white: a news pill with a light running along its edge, a big tight
 * headline, a grey line and two buttons; below, a wide app window on a lavender pinstriped
 * wash. The text stays pinned under the header and fades away as the window scrolls over it.
 */
export function AttioHero({ news, title, subtitle, secondary, primary, form, media, mediaLabel, className }: AttioHeroProps) {
  return (
    <section className={cn("relative isolate overflow-x-clip bg-background text-foreground", className)}>
      {/* the lavender pinstripe wash behind the lower half; on desktop scrolling uncovers all of it */}
      <div aria-hidden className="attio-hero-wash pointer-events-none absolute inset-x-0 top-[28.5rem] bottom-0 -z-10 lg:top-[22rem]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glow/30 via-40% to-glow/45" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,color-mix(in_oklab,var(--glow)_45%,transparent)_0_1px,transparent_1px_8px)] [mask-image:linear-gradient(to_bottom,transparent,black_45%)]" />
      </div>
      {/* the text block pins under the header while the window slides over it */}
      <div className="attio-hero-text sticky top-[6.25rem] z-0 px-gutter pt-16 lg:top-[7.25rem] lg:pt-24">
        <div className="mx-auto flex max-w-[50rem] flex-col items-center text-center">
          {news && (
            <a
              href={news.href}
              className="attio-hero-in group relative inline-flex h-[1.875rem] items-center gap-1 overflow-clip rounded-full border border-border bg-card pr-2.5 pl-3 text-sm font-medium tracking-[-0.01em] text-foreground transition-colors duration-300 hover:border-input motion-reduce:transition-none"
            >
              <span aria-hidden className="attio-hero-spark absolute top-0 left-0 h-px w-10 bg-gradient-to-r from-transparent via-highlight to-transparent" />
              {news.label}
              <ChevronRight aria-hidden className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
          )}
          <h1
            style={delay(80)}
            className="attio-hero-in mt-8 max-w-[20rem] font-display text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:max-w-none lg:mt-9 lg:text-[4rem] lg:leading-[1.02] lg:tracking-[-0.03em]"
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={delay(160)}
              className="attio-hero-in mt-7 max-w-[19rem] text-[1.0625rem] leading-[1.35] font-medium tracking-[-0.01em] text-muted-foreground sm:max-w-[26rem] lg:mt-9 lg:text-lg"
            >
              {subtitle}
            </p>
          )}

          {/* phones: an email field and a full-width button, then a text link */}
          {form && (
            <form action={form.action} style={delay(240)} className="attio-hero-in mt-7 flex w-full max-w-[20rem] flex-col gap-2 sm:hidden">
              <input
                type="email"
                name="email"
                required
                placeholder={form.placeholder}
                aria-label={form.placeholder}
                className="h-10 rounded-[0.625rem] border border-input bg-card px-3.5 text-[0.9375rem] text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
              />
              <AttioButton type="submit" variant="primary" size="lg">
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

          <div style={delay(240)} className={cn("attio-hero-in mt-6 flex items-center gap-2.5", form ? "hidden sm:flex" : "flex")}>
            {secondary && <AttioButton href={secondary.href}>{secondary.label}</AttioButton>}
            {primary && (
              <AttioButton href={primary.href} variant="primary" className="font-semibold">
                {primary.label}
              </AttioButton>
            )}
          </div>
        </div>
      </div>

      {/* the window */}
      <div className="relative z-10 mt-10 px-4 pb-6 sm:px-gutter lg:mt-24 lg:pb-[7.75rem]">
        <div className="attio-hero-window mx-auto w-[34rem] max-w-none origin-top sm:w-full sm:max-w-[67.5rem]">
          <div
            style={delay(360)}
            className="attio-hero-in rounded-xl border border-border bg-secondary p-1.5 pt-7 shadow-[0_0_1px_1px_color-mix(in_oklab,var(--foreground)_2%,transparent),0_4px_12px_-1px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_1px_3px_-1px_color-mix(in_oklab,var(--foreground)_16%,transparent)] lg:p-2 lg:pt-8"
          >
            <div role="img" aria-label={mediaLabel} className="aspect-[1080/580] overflow-clip rounded-lg border border-border bg-card [&>*]:size-full [&>img]:object-cover">
              {media}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
