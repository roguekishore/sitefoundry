import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ReflectButton } from "@foundry/reflect-button";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";
import { ReflectStarfield } from "@foundry/reflect-starfield";
import "./reflect-hero.css";

export interface ReflectHeroAction {
  label: string;
  href: string;
}

export interface ReflectHeroProps {
  /** the pill above the heading */
  eyebrow?: string;
  /** a small icon inside the pill */
  eyebrowIcon?: ReactNode;
  eyebrowHref?: string;
  /** the opening line; "\n" breaks it on desktop only */
  title: string;
  /** one or two lines under the heading */
  lead: string;
  /** the violet button */
  primaryAction: ReflectHeroAction;
  /** the dark button next to it */
  secondaryAction?: ReflectHeroAction;
  /** small print under the buttons */
  note?: string;
  /** the light effect behind the app window (a looping video in the original); a glow wash when empty */
  backdrop?: ReactNode;
  /** the app screenshot inside the window (1.6:1 on desktop, a tall phone crop on phones) */
  screen?: ReactNode;
  /** accessible names of the empty placeholders */
  backdropLabel?: string;
  screenLabel?: string;
  /** the round play button over the window (opens a film in the original) */
  play?: ReflectHeroAction;
  className?: string;
}

/** A ring with four small square beads, turning slowly. */
function Orbit({ className, reverse }: { className: string; reverse?: boolean }) {
  const bead = "absolute size-1.5 rounded-[2px] border border-foreground/25 bg-background";
  return (
    <div
      aria-hidden
      className={cn(
        "reflect-hero-orbit absolute top-0 left-1/2 rounded-full border border-foreground/[0.07]",
        reverse && "reflect-hero-orbit-reverse",
        className,
      )}
    >
      <span className={cn(bead, "top-0 left-1/2 -translate-1/2")} />
      <span className={cn(bead, "top-[14.6%] left-[14.6%] -translate-1/2")} />
      <span className={cn(bead, "top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2")} />
      <span className={cn(bead, "top-1/2 right-0 translate-x-1/2 -translate-y-1/2")} />
      <span className={cn(bead, "top-1/2 left-0 -translate-1/2")} />
    </div>
  );
}

/** Centred heading and buttons over a glowing horizon, then the app window rising out of it. */
export function ReflectHero({
  eyebrow,
  eyebrowIcon,
  eyebrowHref,
  title,
  lead,
  primaryAction,
  secondaryAction,
  note,
  backdrop,
  screen,
  backdropLabel,
  screenLabel,
  play,
  className,
}: ReflectHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-clip bg-background text-foreground",
        // the faint violet light at the top of the page
        "bg-[radial-gradient(60%_40%_at_50%_0%,color-mix(in_oklab,var(--glow)_9%,transparent),transparent)]",
        className,
      )}
    >
      <div className="relative z-10 px-gutter pt-[6.75rem] lg:pt-[10.875rem]">
        <ReflectHeading
          as="h1"
          size="hero"
          eyebrow={eyebrow}
          eyebrowIcon={eyebrowIcon}
          eyebrowHref={eyebrowHref}
          title={title}
          lead={lead}
          leadClassName="max-w-[20.5rem] sm:max-w-[33.5rem]"
        >
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <ReflectButton href={primaryAction.href}>{primaryAction.label}</ReflectButton>
            {secondaryAction && (
              <ReflectButton href={secondaryAction.href} variant="secondary">
                {secondaryAction.label}
              </ReflectButton>
            )}
          </div>
        </ReflectHeading>
        {note && <p className="mx-auto mt-6 text-center text-sm/5 text-muted-foreground lg:mt-4 lg:text-[0.9375rem]/6">{note}</p>}
      </div>

      <div className="relative -mb-[4.875rem] mt-[7.5rem] px-2.5 lg:mt-[14.5rem] lg:px-gutter">
        {/* horizon: the light behind the window, the orbit rings and the stars, centred on its top edge */}
        <div aria-hidden={!backdrop} className="pointer-events-none absolute inset-x-0 top-0">
          <ReflectMedia
            tone="glow"
            label={backdropLabel}
            className="absolute top-0 left-1/2 aspect-video w-[60rem] -translate-1/2 lg:w-[90rem]"
          >
            {backdrop}
          </ReflectMedia>
          <div className="absolute top-[2.875rem] left-1/2 size-[50.625rem] -translate-1/2">
            <Orbit className="top-[12.25rem] size-[26.25rem] -translate-x-1/2" />
            <Orbit reverse className="size-[50.625rem] -translate-x-1/2" />
            <ReflectStarfield size={760} count={70} seed={3} className="rounded-full" />
          </div>
        </div>

        {/* the app window: a hairline frame with an 8px inner gutter */}
        <div className="reflect-hero-window-fade relative mx-auto max-w-[76rem] rounded-[1.5rem] border border-foreground/10 bg-background/60 p-2.5 shadow-[inset_0_0_0_8px_color-mix(in_oklab,var(--foreground)_3%,transparent)] lg:p-2">
          <ReflectMedia
            tone="panel"
            label={screenLabel}
            className="aspect-[350/658] rounded-2xl border border-border bg-card sm:aspect-[1198/748]"
          >
            {screen}
          </ReflectMedia>
        </div>
        {play && (
          <a
            href={play.href}
            aria-label={play.label}
            className="group absolute top-[14.3rem] left-1/2 grid size-[5.5rem] -translate-x-1/2 place-items-center lg:top-[15.3rem] lg:size-28"
          >
            <span className="absolute inset-0 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md transition-all duration-300 ease-in-out group-hover:scale-[1.07] motion-reduce:transition-none" />
            <span className="relative grid size-16 place-items-center rounded-full bg-background/80 text-foreground transition-all duration-300 ease-in-out group-hover:scale-[1.2] motion-reduce:transition-none lg:size-20">
              <Play aria-hidden className="size-5 fill-current" />
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
