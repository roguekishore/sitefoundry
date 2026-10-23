import type { ReactNode } from "react";
import { BadgeCheck, Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SlashEmailField, type SlashEmailFieldProps } from "@foundry/slash-email-field";
import { SlashPlaceholder } from "@foundry/slash-placeholder";
import "./slash-hero.css";

export interface SlashHeroLogo {
  /** a customer's name, set as a plain wordmark */
  name: string;
  /** set this one in the serif instead of the sans, for variety */
  serif?: boolean;
}

export interface SlashHeroProps {
  /** the rating chip: score text ("4.9 rating") and a quieter count ("1,200+ reviews") */
  rating?: { score: string; count: string };
  /** the fixed start of the headline ("Banking built for") */
  title: string;
  /** the words that take turns at the end of the headline (two to five) */
  words: string[];
  /** the line under the headline */
  sub: string;
  /** a small footnote mark after the line */
  subNote?: string;
  /** the email field */
  email: SlashEmailFieldProps;
  /** the full-bleed render behind the content (desktop) / under it (phones); a soft light stands in when empty */
  media?: ReactNode;
  /** the line above the logo row */
  caption: string;
  /** customer names for the scrolling logo row */
  logos: SlashHeroLogo[];
  className?: string;
}

/** A window-tall black hero: rating chip, a serif headline whose last word rolls over, an email box, and a scrolling logo row. */
export function SlashHero({ rating, title, words, sub, subNote, email, media, caption, logos, className }: SlashHeroProps) {
  const loop = [...words, words[0]];
  return (
    <section className={cn("relative isolate flex flex-col overflow-clip bg-background text-foreground lg:h-svh lg:min-h-[42rem]", className)}>
      <div className="relative order-2 -mt-6 aspect-[390/459] w-full lg:absolute lg:inset-0 lg:order-none lg:mt-0 lg:aspect-auto">
        {media ?? <SlashPlaceholder tone="lit" className="absolute inset-0" />}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background to-transparent" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background to-transparent lg:hidden" />
      </div>

      <div className="relative order-1 mx-auto w-full max-w-page px-gutter pt-[6.75rem] lg:pt-[12.25rem]">
        {rating && (
          <p className="inline-flex h-7 items-center gap-1.5 rounded-full border border-foreground/12 bg-background/50 px-3 text-[0.8125rem] font-semibold tracking-[-0.02em]">
            <Star aria-hidden className="size-3.5 fill-current" strokeWidth={0} />
            <BadgeCheck aria-hidden className="size-4" strokeWidth={1.75} />
            <span className="ml-0.5">{rating.score}</span>
            <span className="text-[0.6875rem] font-normal tracking-[0.02em] text-foreground/60">{rating.count}</span>
          </p>
        )}
        <h1 className="mt-4 font-display text-[2rem] leading-[1.15] font-normal tracking-[-0.015em] lg:mt-5 lg:text-[4rem] lg:leading-[1.15]">
          {title}{" "}
          <span className="sr-only">{words[0]}</span>
          <span aria-hidden className="relative inline-block h-[1.15em] overflow-clip align-bottom">
            <span className="slash-hero-words block" data-count={words.length}>
              {loop.map((word, i) => (
                <span key={i} className="block h-[1.15em] whitespace-nowrap">
                  {word}
                </span>
              ))}
            </span>
          </span>
        </h1>
        <p className="mt-2.5 max-w-[17rem] text-base leading-[1.3] tracking-[-0.02em] text-foreground/80 sm:max-w-[25rem] lg:mt-3 lg:text-lg lg:leading-[1.4]">
          {sub}
          {subNote && <sup className="ml-0.5 text-[0.6em] text-foreground/60">{subNote}</sup>}
        </p>
        <SlashEmailField {...email} className="mt-5 max-w-[25rem] lg:mt-7" />
      </div>

      <div className="relative order-3 -mt-[6.5rem] pb-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:pb-9">
        <p className="mx-auto max-w-[15rem] px-gutter text-center text-sm leading-[1.3] tracking-[-0.02em] text-foreground/80 sm:max-w-none lg:text-[0.9375rem]">
          {caption}
        </p>
        <div className="slash-hero-window mx-auto mt-6 max-w-page overflow-clip lg:mt-7">
          <ul className="slash-hero-track flex w-max items-center">
            {[...logos, ...logos].map((logo, i) => (
              <li
                key={i}
                aria-hidden={i >= logos.length || undefined}
                className={cn(
                  "shrink-0 px-5 text-xl leading-none whitespace-nowrap text-foreground/65 lg:px-[1.375rem] lg:text-[1.75rem]",
                  logo.serif ? "font-display tracking-[0.02em]" : "font-sans font-bold tracking-[0.06em] uppercase",
                )}
              >
                {logo.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
