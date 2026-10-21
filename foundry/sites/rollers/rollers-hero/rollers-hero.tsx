import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RollersButton } from "@foundry/rollers-button";
import "./rollers-hero.css";

export interface RollersHeroAction {
  label: string;
  href: string;
}

export interface RollersHeroProps {
  /** the headline, one entry per line */
  heading: string[];
  /** the paragraph under the headline */
  lede: string;
  /** the full-bleed background (a looping video or a photo, object-cover); a placeholder when empty */
  media?: ReactNode;
  /** the centred play button's label and link (the showreel) */
  showreel: RollersHeroAction;
  /** wide screens: the photo of the card in the bottom-right corner; a placeholder when empty */
  cardMedia?: ReactNode;
  /** wide screens: the card's two buttons, charcoal pill then orange */
  secondaryAction: RollersHeroAction;
  primaryAction: RollersHeroAction;
  /** wide screens: the vertical word beside the scroll cue */
  scrollLabel: string;
  className?: string;
}

/** A full-window video hero under the sticky header: white headline and lede at the
    bottom-left over a charcoal fade, a play button in the middle that fades and shrinks away
    as you start scrolling, and on wide screens a photo card with two buttons in the
    bottom-right corner and a looping scroll cue on the right edge. */
export function RollersHero({
  heading,
  lede,
  media,
  showreel,
  cardMedia,
  secondaryAction,
  primaryAction,
  scrollLabel,
  className,
}: RollersHeroProps) {
  return (
    <section className={cn("dark relative h-[calc(100svh-4rem)] overflow-clip text-foreground", className)}>
      {/* the video: placeholder surface until media is passed */}
      <div className="absolute inset-0 bg-muted-foreground">{media}</div>
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-background/75 via-background/15 via-45% to-transparent" />

      <a
        href={showreel.href}
        className="rollers-hero-play absolute top-[32%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.875rem] leading-none lg:top-[54%] lg:flex-row lg:text-[1.125rem] lg:uppercase"
      >
        <span className="flex size-12 items-center justify-center rounded-full border-2 border-foreground lg:size-8">
          <Play className="ml-0.5 size-6 lg:size-4" strokeWidth={1.5} />
        </span>
        {showreel.label}
      </a>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-10 px-gutter pb-[7.5rem] lg:pb-11">
        <div className="max-w-[44rem]">
          <h1 className="font-display text-[2.05rem] leading-[1.1] font-[550] tracking-[-0.015em] lg:text-[4.25rem]">
            {heading.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-4 max-w-[42rem] font-display text-[0.875rem] leading-[1.5] lg:mt-6 lg:text-[1.125rem]">{lede}</p>
        </div>

        <div className="hidden w-[23.75rem] shrink-0 lg:-mb-1 lg:block">
          <div className="aspect-[1.72] overflow-hidden rounded-t-[4px] bg-muted">{cardMedia}</div>
          <div className="flex bg-foreground p-2.5">
            <RollersButton href={secondaryAction.href} variant="pill" size="wide" className="bg-background text-foreground">
              {secondaryAction.label}
            </RollersButton>
            <RollersButton href={primaryAction.href} size="wide">
              {primaryAction.label}
            </RollersButton>
          </div>
        </div>
      </div>

      {/* wide screens: the scroll cue */}
      <div aria-hidden className="absolute top-[43%] right-8 hidden flex-col items-center gap-4 lg:flex">
        <span className="text-[0.75rem] leading-none tracking-[0.25em] uppercase [writing-mode:vertical-rl]">{scrollLabel}</span>
        <span className="relative h-15 w-px overflow-clip bg-foreground/25">
          <span className="rollers-hero-cue absolute inset-x-0 top-0 h-5 bg-foreground" />
        </span>
      </div>
    </section>
  );
}
