import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalVagueButton } from "@foundry/halodental-vague-button";

export interface HalodentalVagueHeroProps {
  /** monumental display wordmark shown at the bottom-left on desktop */
  wordmark: string;
  /** primary hero headline (bottom-right on desktop, bottom-left on phones) */
  title: string;
  /** split orange video trigger button shown at the bottom-left on phones */
  videoCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  /** full-bleed background media slot inside the dark rounded frame */
  media?: ReactNode;
  className?: string;
}

/**
 * Default placeholder for the hero's full-bleed video/3D slot: pure black on desktop,
 * and a vertical cylindrical studio silhouette on phones matching the original's composition.
 */
function DefaultHeroMedia() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-background">
      {/* Vertical anodized cylinder silhouette shown on mobile viewports */}
      <div className="mx-auto flex h-[88%] w-[11.5rem] flex-col items-center lg:hidden">
        <div className="relative h-[70%] w-full border-x border-foreground/10 bg-gradient-to-r from-card via-muted-foreground/45 to-card">
          {/* Subtle engraved double-oval emblem in the middle of the handle */}
          <div className="absolute inset-x-0 bottom-16 flex justify-center opacity-35">
            <span className="h-7 w-12 -rotate-35 rounded-full border border-foreground/60" />
            <span className="-ml-4 h-7 w-12 -rotate-35 rounded-full border border-foreground/60" />
          </div>
        </div>
        {/* Translucent light-diffusing collar ring */}
        <div className="h-9 w-[96%] rounded-[2px] bg-foreground/70" />
        {/* Rounded bottom cap */}
        <div className="h-[22%] w-full rounded-b-[5.5rem] border-x border-b border-foreground/10 bg-gradient-to-b from-muted-foreground/35 via-secondary to-background" />
      </div>
    </div>
  );
}

/**
 * Halo Dental's framed full-screen hero: 844px tall on mobile, 900px on desktop.
 */
export function HalodentalVagueHero({ wordmark, title, videoCta, media, className }: HalodentalVagueHeroProps) {
  return (
    <section className={cn("bg-background p-[6px] lg:p-[10px]", className)}>
      <div className="dark relative mx-auto flex min-h-[832px] max-w-[var(--page-width)] flex-col justify-end overflow-hidden rounded-lg bg-background px-[15px] pt-[7.25rem] pb-3 text-foreground lg:min-h-[880px] lg:px-[30px] lg:pt-[7.5rem] lg:pb-[26px]">
        <div className="absolute inset-0 z-0">{media ?? <DefaultHeroMedia />}</div>

        <div className="relative z-10 grid grid-cols-1 items-end gap-y-3 lg:grid-cols-12 lg:gap-x-5">
          <div aria-hidden className="pointer-events-none hidden select-none lg:col-span-6 lg:block">
            <span className="-ml-2 block font-display text-[16.75rem] leading-[0.76] font-normal tracking-[-0.035em] text-foreground">
              {wordmark}
            </span>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <h1 className="font-display text-[2.47rem] leading-[1.1] font-normal tracking-[-0.015em] text-foreground lg:text-[4rem] lg:leading-none">
              {title}
            </h1>
          </div>

          {videoCta && (
            <div className="pt-0.5 lg:hidden">
              <HalodentalVagueButton variant="play" href={videoCta.href} onClick={videoCta.onClick}>
                {videoCta.label}
              </HalodentalVagueButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
