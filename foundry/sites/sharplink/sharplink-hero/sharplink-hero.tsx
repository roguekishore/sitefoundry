import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SharplinkButton } from "@foundry/sharplink-button";
import { SharplinkLabel } from "@foundry/sharplink-label";
import "./sharplink-hero.css";

export interface SharplinkHeroLink {
  /** the button text */
  label: string;
  /** where it goes */
  href: string;
}

export interface SharplinkHeroNews {
  /** small label, e.g. the kind of news */
  label: string;
  /** the date, as shown */
  date: string;
  /** the headline */
  title: string;
  /** where it goes */
  href: string;
}

export interface SharplinkHeroProps {
  /** the headline; "\n" breaks the line */
  title: string;
  /** the main button (solid, with the sliding arrow) */
  primary: SharplinkHeroLink;
  /** the second, tinted button under it */
  secondary?: SharplinkHeroLink;
  /** the small label before the exchange mark, e.g. "Listed on" */
  listedLabel?: string;
  /** the exchange's mark or name */
  exchange?: ReactNode;
  /** the lead paragraph in the bottom row */
  lead: string;
  /** a news card at the bottom right (below the first screen on phones) */
  news?: SharplinkHeroNews;
  /** full-bleed background: a video or image filling the window; a gradient placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Dark, window-tall first screen with a headline, stacked buttons and a news card. */
export function SharplinkHero({ title, primary, secondary, listedLabel, exchange, lead, news, media, className }: SharplinkHeroProps) {
  return (
    <section
      data-sharplink-tone="dark"
      className={cn("sharplink-hero dark relative isolate overflow-clip text-foreground", className)}
    >
      <div className="sharplink-hero-stage relative isolate flex min-h-svh flex-col bg-background">
        <div className="absolute inset-0 -z-10 [&>*]:h-full [&>*]:w-full [&>*]:object-cover">
          {media ?? (
            <div className="bg-[linear-gradient(to_bottom,var(--background)_8%,color-mix(in_oklab,var(--glow)_40%,var(--background))_42%,var(--glow)_72%,color-mix(in_oklab,var(--glow)_70%,var(--foreground))_100%)]" />
          )}
        </div>

        <div className="mx-auto w-full max-w-page px-gutter pt-[6.5rem]">
          <h1 className="font-display text-[3.25rem] leading-[1.04] font-medium tracking-[-0.025em] whitespace-pre-line lg:text-[5.5rem] lg:leading-[0.96] lg:tracking-[-0.03em]">
            {title}
          </h1>
          <div className="mt-8 inline-flex flex-col gap-1">
            <SharplinkButton href={primary.href} fullWidth>
              {primary.label}
            </SharplinkButton>
            {secondary && (
              <SharplinkButton href={secondary.href} variant="tint" fullWidth>
                {secondary.label}
              </SharplinkButton>
            )}
          </div>
        </div>

        <div className="mx-auto mt-auto grid w-full max-w-page gap-5 px-gutter pt-16 pb-8 lg:grid-cols-12 lg:items-end lg:gap-x-gutter lg:pb-6">
          {(listedLabel || exchange) && (
            <div className="flex items-center gap-3 lg:col-span-3">
              {listedLabel && <SharplinkLabel>{listedLabel}</SharplinkLabel>}
              {exchange && <span className="flex items-center text-foreground [&_svg]:h-6 [&_svg]:w-auto">{exchange}</span>}
            </div>
          )}
          <p className="max-w-[24rem] text-[1.1875rem] leading-[1.35] font-medium tracking-[-0.01em] lg:col-span-5 lg:col-start-4">
            {lead}
          </p>
          {news && (
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <NewsCard {...news} />
            </div>
          )}
        </div>
      </div>

      {news && (
        <div className="bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--glow)_70%,var(--foreground))_0%,color-mix(in_oklab,var(--glow)_70%,var(--foreground))_35%,transparent_100%)] px-gutter pt-2 pb-28 lg:hidden">
          <NewsCard {...news} />
        </div>
      )}
    </section>
  );
}

function NewsCard({ label, date, title, href }: SharplinkHeroNews) {
  return (
    <a href={href} className="group relative block bg-background/40 p-5 backdrop-blur-md">
      <span aria-hidden className="absolute top-0 left-0 size-1 bg-highlight" />
      <span className="flex items-center justify-between gap-4">
        <SharplinkLabel>{label}</SharplinkLabel>
        <SharplinkLabel tone="muted">{date}</SharplinkLabel>
      </span>
      <span className="mt-4 flex items-center justify-between gap-6">
        <span className="line-clamp-2 max-w-[17rem] text-base leading-[1.35] font-medium tracking-[-0.01em]">{title}</span>
        <span
          aria-hidden
          className="grid size-8 shrink-0 place-items-center bg-foreground/10 transition-colors duration-[250ms] group-hover:bg-primary group-hover:text-primary-foreground motion-reduce:transition-none"
        >
          <ArrowRight className="size-4" strokeWidth={1.5} />
        </span>
      </span>
    </a>
  );
}
