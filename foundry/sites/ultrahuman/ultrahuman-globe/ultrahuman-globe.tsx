import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanButton } from "@foundry/ultrahuman-button";
import { UltrahumanPlaceholder } from "@foundry/ultrahuman-placeholder";
import { UltrahumanReveal } from "@foundry/ultrahuman-reveal";
import "./ultrahuman-globe.css";

export interface UltrahumanGlobeStat {
  /** the figure, e.g. "98,417,302" */
  value: string;
  /** what it counts */
  label: string;
}

export interface UltrahumanGlobeCard {
  /** the small mono label, e.g. "Average sleep score" */
  label: string;
  /** the figure */
  value: string;
  /** the place it belongs to */
  place: string;
}

export interface UltrahumanGlobeProps {
  /** the headline (two lines on desktop) */
  title: string;
  /** one or two lines under it */
  body: string;
  /** the outline button */
  action: { label: string; href: string };
  /** the figures under the copy, split by a hairline (two on the original) */
  stats: UltrahumanGlobeStat[];
  /** small glass cards floating over the globe (desktop, two on the original) */
  cards?: UltrahumanGlobeCard[];
  /** the globe (a round render or canvas); a round placeholder when empty */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
  className?: string;
}

// where the glass cards sit over the globe (desktop), as % of the globe box
const cardSpots = ["left-[39%] top-[12%]", "left-[34%] top-[29.5%]"];

/** Copy and two big figures beside a round globe that fades into the page at the bottom; on
 *  phones the copy is centred and the globe, wider than the screen, rises from below. Two dark
 *  glass score cards float over it, fading in and then shrinking as the section scrolls past. */
export function UltrahumanGlobe({ title, body, action, stats, cards = [], media, mediaLabel, className }: UltrahumanGlobeProps) {
  return (
    <section className={cn("relative overflow-clip bg-background text-foreground", className)}>
      <div className="mx-auto flex h-[52.75rem] max-w-[90rem] flex-col items-center pt-[4.75rem] text-center lg:h-auto lg:min-h-[51.25rem] lg:flex-row lg:items-center lg:px-[4.75rem] lg:pt-0 lg:text-left">
        <div className="relative z-10 px-gutter lg:w-[41%] lg:px-0">
          <UltrahumanReveal as="h2" className="mx-auto max-w-[15ch] text-2xl leading-[1.18] tracking-[-0.03em] lg:mx-0 lg:max-w-[12ch] lg:text-5xl lg:leading-[3.625rem] lg:tracking-[-0.045em]">
            {title}
          </UltrahumanReveal>
          <p className="mx-auto mt-3 max-w-[16.5rem] text-sm leading-[1.25rem] tracking-[-0.01em] text-foreground/60 lg:mx-0 lg:max-w-[26.5rem] lg:text-base lg:leading-5">{body}</p>
          <UltrahumanButton href={action.href} variant="outline" className="mt-6 lg:mt-6">
            {action.label}
          </UltrahumanButton>
          <dl className="mt-14 grid grid-cols-2 lg:mt-[4.5rem] lg:flex">
            {stats.map((stat, i) => (
              <div key={stat.label} className={cn("flex flex-col-reverse px-3 lg:px-0", i > 0 && "border-l border-foreground/15 lg:ml-7 lg:pl-7")}>
                <dt className="mx-auto mt-2.5 max-w-[10rem] text-sm leading-[1.125rem] tracking-[-0.01em] text-foreground/60 lg:mx-0 lg:mt-5 lg:max-w-none lg:text-base">{stat.label}</dt>
                <dd className="text-xl leading-none tracking-[-0.03em] lg:text-[2.5rem] lg:tracking-[-0.04em]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mt-11 aspect-square w-[150%] max-w-none shrink-0 lg:mt-0 lg:ml-auto lg:w-[40.75%] lg:translate-x-[-1.5rem]">
          <div className="size-full overflow-clip rounded-full [mask-image:linear-gradient(black_55%,transparent_100%)] lg:[mask-image:linear-gradient(black_45%,transparent_98%)]">
            {media ?? <UltrahumanPlaceholder tone="photo" label={mediaLabel} className="bg-[color-mix(in_oklab,var(--muted-foreground)_55%,var(--foreground))]" />}
          </div>
          {cards.slice(0, 2).map((card, i) => (
            <div
              key={card.place}
              className={cn(
                "ultrahuman-globe-card dark absolute hidden w-[27%] rounded-xl border border-foreground/20 bg-background/45 px-4 pt-3.5 pb-3 text-foreground backdrop-blur-md lg:block",
                cardSpots[i],
              )}
            >
              <p className="font-mono text-[0.5625rem] leading-none tracking-[0.12em] text-foreground/60 uppercase">{card.label}</p>
              <p className="mt-3.5 text-base leading-none tracking-[-0.02em]">{card.value}</p>
              <p className="mt-1 text-[0.6875rem] leading-tight">{card.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
