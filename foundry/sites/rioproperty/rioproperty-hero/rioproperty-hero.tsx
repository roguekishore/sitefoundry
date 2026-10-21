import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rioproperty-hero.css";

export interface RiopropertyHeroWord {
  /** the word (or words) */
  text: string;
  /** how far it flies sideways while the hero scrolls, in vw (negative: to the left) */
  drift?: number;
}

export interface RiopropertyHeroLine {
  /** the part held at the left edge */
  start?: RiopropertyHeroWord;
  /** the part pushed to the right edge (on phones it gets its own row) */
  end?: RiopropertyHeroWord;
}

export interface RiopropertyHeroProps {
  /** the giant headline, one entry per desktop row */
  lines: RiopropertyHeroLine[];
  /** the short stacked list at the left (e.g. the property types) */
  kicker: string[];
  /** the capitalised line across from it */
  blurb: string;
  /** an optional end of the blurb, underlined in yellow and linked */
  blurbLink?: { label: string; href: string };
  /** how far the kicker and the blurb fly, in vw */
  kickerDrift?: number;
  blurbDrift?: number;
  /** a photo or looping video; fills the window like object-fit cover. Empty: a placeholder */
  media?: ReactNode;
  /** desktop: the section is three windows tall and the stage stays pinned while the words
      fly apart (phones: always one window, the words fly as it scrolls away) */
  pinned?: boolean;
  /** a violet curtain that lifts off the hero on load */
  curtain?: boolean;
  className?: string;
}

function Word({ word, fallback, className }: { word: RiopropertyHeroWord; fallback: number; className?: string }) {
  return (
    <span className={cn("rioproperty-hero-fly block", className)} style={{ "--rioproperty-hero-drift": word.drift ?? fallback } as CSSProperties}>
      {word.text}
    </span>
  );
}

export function RiopropertyHero({
  lines,
  kicker,
  blurb,
  blurbLink,
  kickerDrift = -28,
  blurbDrift = 85,
  media,
  pinned = true,
  curtain = true,
  className,
}: RiopropertyHeroProps) {
  return (
    <section
      data-pinned={pinned ? "" : undefined}
      className={cn("rioproperty-hero relative bg-secondary text-background dark:text-foreground", pinned ? "h-svh lg:h-[300svh]" : "h-svh", className)}
    >
      <div className="sticky top-0 isolate h-svh overflow-clip">
        {/* the media drifts down as the section leaves, so the next section slides over it */}
        <div className="rioproperty-hero-media absolute inset-0 -z-10">
          {media ?? <div aria-hidden className="size-full bg-gradient-to-b from-secondary via-glow/60 to-secondary" />}
        </div>
        {/* a dark scrim so the light text reads; it clears as the words fly away */}
        <div aria-hidden className="rioproperty-hero-scrim absolute inset-0 -z-10 bg-secondary/40" />

        <div className="mx-auto flex h-full max-w-page flex-col justify-end px-gutter pb-12 lg:pb-[4.25rem]">
          <div className="flex flex-col gap-8 text-[1.117rem] leading-normal uppercase lg:grid lg:grid-cols-12 lg:gap-x-4 lg:text-base">
            <ul className="rioproperty-hero-fly lg:col-span-7" style={{ "--rioproperty-hero-drift": kickerDrift } as CSSProperties}>
              {kicker.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p
              className="rioproperty-hero-fly max-w-[17rem] self-end text-right lg:col-span-4 lg:max-w-none lg:self-start lg:text-left"
              style={{ "--rioproperty-hero-drift": blurbDrift } as CSSProperties}
            >
              {blurb}
              {blurbLink && (
                <>
                  {" "}
                  <a href={blurbLink.href} className="border-b border-highlight transition-colors duration-500 hover:text-highlight">
                    {blurbLink.label}
                  </a>
                </>
              )}
            </p>
          </div>

          <h1 className="mt-14 font-display text-[12.7vw] leading-[0.966] font-semibold uppercase lg:mt-16 lg:text-[min(8.5vw,10.2rem)]">
            {lines.map((line, i) => (
              <span key={i} className="flex flex-col lg:flex-row lg:justify-between lg:gap-[0.5em]">
                {line.start && <Word word={line.start} fallback={-30 - i * 15} className="whitespace-nowrap" />}
                {line.end && <Word word={line.end} fallback={50 + i * 15} className="self-end whitespace-nowrap lg:ml-auto" />}
              </span>
            ))}
          </h1>
        </div>

        {curtain && <div aria-hidden className="rioproperty-hero-curtain pointer-events-none absolute inset-0 z-10 bg-primary" />}
      </div>
    </section>
  );
}
