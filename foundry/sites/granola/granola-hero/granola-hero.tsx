import type { ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GranolaButton } from "@foundry/granola-button";
import { GranolaMedia } from "@foundry/granola-media";
import "./granola-hero.css";

export interface GranolaHeroRow {
  /** a line icon at the start of the row (e.g. a lucide icon) */
  icon: ReactNode;
  /** the row text; wrap the words to stress in <strong> */
  text: ReactNode;
}

export interface GranolaHeroProps {
  /** the small pill above the headline: a highlighted tag, a label and its link */
  badge?: { tag: string; label: string; href: string };
  /** the big serif headline */
  title: string;
  /** one or two short lines under the headline (a line break starts the second) */
  lead: string;
  /** the olive call to action */
  cta: { label: string; href: string };
  /** the small line under the button, with an optional icon */
  note?: { label: string; icon?: ReactNode };
  /** the app window (a screenshot or video, portrait 4:6); a plain oat card while empty */
  app?: ReactNode;
  /** the narrow video-call strip that sits over the window's right edge */
  callStrip?: ReactNode;
  /** up to three art cards fanned out behind the window; plain surfaces while empty */
  art?: [ReactNode?, ReactNode?, ReactNode?];
  /** the second screen: a serif heading and a list of icon rows between hairlines */
  features: {
    heading: string;
    rows: GranolaHeroRow[];
    /** empty hairline rows drawn after the list, as a ruled-paper tail */
    emptyRows?: number;
  };
  className?: string;
}

/* Where each art card sits around the window (phone / desktop) and where it drifts to as it fades. */
const ART = [
  "left-[-4.5%] top-[-6%] h-[71%] w-[60%] [--gx:90px] [--gy:60px] lg:left-[-8.6%] lg:top-[1%] lg:h-[119%] lg:w-[98%] lg:[--gx:80px] lg:[--gy:20px]",
  "left-[66%] top-[-3%] h-[73%] w-[60%] [--gx:-120px] [--gy:60px] lg:left-[39%] lg:top-[-15.5%] lg:h-[142%] lg:w-[120%] lg:[--gx:-110px] lg:[--gy:30px]",
  "left-[74%] top-[66%] h-[67%] w-[80%] [--gx:-150px] [--gy:-150px] lg:left-[42.7%] lg:top-[98.6%] lg:h-[115%] lg:w-[138%] lg:[--gx:-150px] lg:[--gy:-200px]",
];
const ART_TONE = [
  "bg-[linear-gradient(180deg,color-mix(in_oklab,var(--highlight)_80%,var(--background))_0_58%,color-mix(in_oklab,var(--foreground)_88%,var(--background))_58%)]",
  "bg-[linear-gradient(160deg,color-mix(in_oklab,var(--chart-2)_75%,var(--foreground)),color-mix(in_oklab,var(--chart-3)_60%,var(--foreground))_60%,color-mix(in_oklab,var(--chart-4)_50%,var(--foreground)))]",
  "bg-muted",
];

export function GranolaHero({ badge, title, lead, cta, note, app, callStrip, art = [], features, className }: GranolaHeroProps) {
  return (
    <section className={cn("granola-hero relative overflow-clip bg-background text-foreground", className)}>
      <div className="mx-auto grid w-full max-w-[calc(var(--page-width)_+_2*var(--page-gutter))] px-gutter lg:grid-cols-2 lg:grid-rows-[100svh_100svh]">
        {/* first screen: the pitch */}
        <div className="flex flex-col pt-24 pb-12 lg:col-start-1 lg:row-start-1 lg:justify-center lg:pt-14 lg:pb-0">
          {badge && (
            <a
              href={badge.href}
              className="group/badge inline-flex w-fit items-center gap-2 rounded-full bg-accent py-1 pr-3 pl-1 text-[0.8125rem] transition-colors duration-150 hover:bg-secondary motion-reduce:transition-none"
            >
              <span className="rounded-full bg-highlight px-2 py-0.5 text-xs font-medium text-highlight-foreground">{badge.tag}</span>
              {badge.label}
              <ArrowRight aria-hidden className="size-3.5 transition-transform duration-150 group-hover/badge:translate-x-0.5 motion-reduce:transition-none" />
            </a>
          )}
          <h1 className="mt-6 font-display text-[clamp(2.5rem,12vw,4.5rem)] leading-[0.96] tracking-[-0.01em] text-balance lg:mt-8 lg:max-w-[12ch] lg:text-[min(6vw,6rem)] lg:leading-[0.95]">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-snug whitespace-pre-line lg:mt-10 lg:text-xl lg:leading-7">{lead}</p>
          <GranolaButton href={cta.href} variant="brand" size="lg" trailingIcon={<ArrowDown />} className="mt-8 w-full sm:w-fit lg:mt-9">
            {cta.label}
          </GranolaButton>
          {note && (
            <p className="mt-6 flex items-center gap-2 text-[0.8125rem] text-muted-foreground lg:mt-7 [&_svg]:size-[1.125rem] [&_svg]:stroke-[1.5]">
              {note.icon}
              {note.label}
            </p>
          )}
        </div>

        {/* the window: pinned while the page scrolls past it (on desktop across both screens) */}
        <div className="h-[125svh] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-auto">
          <div className="sticky top-36 lg:top-0 lg:flex lg:h-svh lg:items-center lg:justify-center lg:pt-6">
            <div className="relative aspect-[4/6] w-full lg:w-[min(64%,46svh)]">
              {ART.map((place, i) => (
                <div key={place} className={cn("granola-hero-art absolute", place)}>
                  <GranolaMedia className={cn("size-full rounded-sm", ART_TONE[i])}>{art[i]}</GranolaMedia>
                </div>
              ))}
              <div className="granola-hero-window absolute inset-0 z-10 origin-top">
                <GranolaMedia
                  tone="oat"
                  className="size-full rounded-2xl shadow-[0_20px_25px_-5px_color-mix(in_oklab,var(--foreground)_10%,transparent),0_8px_10px_-6px_color-mix(in_oklab,var(--foreground)_10%,transparent)]"
                >
                  {app}
                </GranolaMedia>
                <div className="granola-hero-strip absolute top-[34%] left-[80%] h-[34%] w-[24%] lg:top-[55%] lg:left-[86%] lg:h-[40%] lg:w-[28%]">
                  <GranolaMedia tone="ink" className="size-full rounded-xl ring-4 ring-foreground">
                    {callStrip}
                  </GranolaMedia>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second screen: the ruled list, drawn across the full frame under the pinned window */}
        <div className="relative -mx-gutter pt-16 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:-mx-gutter lg:pt-[25svh] xl:-mx-10">
          <span aria-hidden className="granola-hero-dash absolute inset-y-0 left-0 w-px" />
          <span aria-hidden className="granola-hero-dash absolute inset-y-0 right-0 w-px" />
          <h2 className="px-gutter font-display text-4xl leading-none tracking-[-0.01em] text-balance lg:max-w-[20ch] lg:px-gutter lg:text-5xl xl:px-10">
            {features.heading}
          </h2>
          <ul className="mt-16 lg:mt-24">
            {features.rows.map((row, i) => (
              <li
                key={i}
                className="flex min-h-20 items-center gap-4 border-t border-foreground/10 px-gutter py-3 text-base leading-snug lg:gap-5 lg:px-gutter lg:text-sm xl:px-10 [&_strong]:font-medium [&>svg]:size-10 [&>svg]:shrink-0 [&>svg]:stroke-[1.25]"
              >
                {row.icon}
                <p className="max-w-[34ch] lg:max-w-none">{row.text}</p>
              </li>
            ))}
            {Array.from({ length: features.emptyRows ?? 2 }, (_, i) => (
              <li key={`empty-${i}`} aria-hidden className="h-20 border-t border-foreground/10" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
