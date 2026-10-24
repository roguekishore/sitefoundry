import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HermeusMedia } from "@foundry/hermeus-media";
import "./hermeus-hero.css";

export interface HermeusHeroProps {
  /** the one short headline; each letter flickers into focus */
  headline: string;
  /** the full-bleed render behind everything (an image or video); empty: a soft placeholder light */
  media?: ReactNode;
  /** what the media slot shows, for screen readers while it is empty */
  mediaLabel?: string;
  className?: string;
}

/** Scattered but fixed per-letter delays (no randomness, so server and browser agree). */
function delays(i: number): CSSProperties {
  return {
    "--hermeus-hero-in": `${150 + ((i * 37) % 17) * 50}ms`,
    "--hermeus-hero-flicker": `${1400 + ((i * 53) % 29) * 270}ms`,
  } as CSSProperties;
}

/** Window-tall grey hero with a full-bleed render slot and a flickering headline. */
export function HermeusHero({ headline, media, mediaLabel, className }: HermeusHeroProps) {
  let n = 0;
  const words = headline.split(" ").map((word) => Array.from(word).map((ch) => ({ ch, i: n++ })));

  return (
    <section className={cn("relative h-svh overflow-clip bg-secondary text-foreground", className)}>
      <HermeusMedia media={media} label={mediaLabel} look="soft" className="absolute inset-0" />
      <div className="absolute inset-x-0 top-[47%] lg:top-auto lg:bottom-[25%]">
        <div className="mx-auto max-w-page px-gutter">
          <h1
            className="max-w-[8.5em] text-[clamp(1.3125rem,1.196rem+0.476vw,1.625rem)]/[1.15] font-normal text-secondary-foreground lg:max-w-none"
          >
            <span className="sr-only">{headline}</span>
            {words.map((chars, w) => (
              <Fragment key={w}>
                <span aria-hidden className="inline-block whitespace-nowrap">
                  {chars.map(({ ch, i }) => (
                    <span key={i} className="hermeus-hero-char" style={delays(i)}>
                      {ch}
                    </span>
                  ))}
                </span>
                {w < words.length - 1 && " "}
              </Fragment>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}
