import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingButton } from "@foundry/typesomething-button";
import { TypesomethingTypewriter } from "@foundry/typesomething-typewriter";

export interface TypesomethingHeroHighlight {
  /** small icon in a blush circle (a lucide icon) */
  icon?: ReactNode;
  title: string;
  text: string;
}

export interface TypesomethingHeroAction {
  label: string;
  href: string;
  /** primary: acid pill · outline: hairline pill */
  variant?: "primary" | "outline";
  /** icon after the label (e.g. an arrow) */
  icon?: ReactNode;
}

export interface TypesomethingHeroProps {
  /** small pill above the headline (an announcement); left out when empty */
  badge?: { label: string; href?: string };
  /** the headline, one string per line */
  title: string[];
  /** the bold word that starts the typing line (e.g. "Ask") */
  verb: string;
  /** the words typed after it, one after another */
  words: string[];
  /** paragraph under the typing line */
  lead?: string;
  /** one or two pills under the paragraph */
  actions?: TypesomethingHeroAction[];
  /** three short points in the white strip at the bottom edge */
  highlights?: TypesomethingHeroHighlight[];
  className?: string;
}

/**
 * Centred hero on white, lit by a blush glow top-left and an acid glow on the right. A huge
 * light headline, a typing line (bold verb + rotating words), a paragraph, pills, and a white
 * strip of three points hanging over the edge into the grey band below.
 */
export function TypesomethingHero({ badge, title, verb, words, lead, actions = [], highlights = [], className }: TypesomethingHeroProps) {
  const Badge = badge?.href ? "a" : "span";
  return (
    <section className={cn("relative isolate bg-muted px-gutter pb-14 text-foreground lg:pb-24", className)}>
      {/* the white part of the hero and its two glows; it stops part-way down the strip */}
      <div aria-hidden className="absolute inset-x-0 top-0 bottom-[12rem] -z-10 overflow-clip bg-background lg:bottom-[6.75rem]">
        <div className="absolute -top-[12%] -left-[18%] size-[34rem] rounded-full bg-highlight/45 blur-[90px] dark:bg-highlight/15 lg:-top-[20%] lg:-left-[6%] lg:size-[40rem]" />
        <div className="absolute top-[10%] -right-[30%] size-[30rem] rounded-full bg-glow/40 blur-[90px] dark:bg-glow/15 lg:-top-[4%] lg:-right-[8%] lg:size-[38rem]" />
      </div>

      <div className="mx-auto max-w-page pt-[4.75rem] text-center lg:pt-[8.5rem]">
        {badge && (
          <Badge
            {...(badge.href ? { href: badge.href } : {})}
            className="inline-flex h-8 items-center gap-2 rounded-full border border-foreground/14 bg-background/72 pr-2.5 pl-3 text-[0.72rem] font-semibold tracking-[0.04em] uppercase transition-[border-color] duration-[180ms] ease-[ease] hover:border-foreground [&_svg]:size-3.5"
          >
            <span className="size-2 rounded-full bg-primary shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_30%,transparent)]" />
            {badge.label}
            <ChevronRight aria-hidden className="opacity-50" />
          </Badge>
        )}

        <h1 className="mt-7 font-display text-[2.4375rem] leading-[1.05] font-normal tracking-[-0.055em] sm:text-6xl lg:mt-6 lg:text-[6rem] lg:leading-[1]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 font-display text-[2rem] leading-[1.25] tracking-[-0.04em] lg:mt-7 lg:text-[4rem]">
          <span className="font-bold">{verb} </span>
          <TypesomethingTypewriter words={words} reserve className="font-normal text-foreground/55" cursorClassName="text-primary" />
        </p>

        {lead && <p className="mx-auto mt-6 max-w-[34rem] text-[0.92rem] leading-[1.55] text-foreground/75 lg:mt-5 lg:max-w-[40rem] lg:text-[1.15rem]">{lead}</p>}

        {actions.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-7">
            {actions.map((a) => (
              <TypesomethingButton key={a.href} href={a.href} variant={a.variant ?? "primary"} icon={a.icon}>
                {a.label}
              </TypesomethingButton>
            ))}
          </div>
        )}
      </div>

      {highlights.length > 0 && (
        <div className="mx-auto mt-14 max-w-page lg:mt-12">
          <ul className="mx-auto grid max-w-[71.5rem] divide-y divide-foreground/14 rounded-lg border border-foreground/14 bg-background shadow-[0_28px_80px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {highlights.map((h) => (
              <li key={h.title} className="flex items-start gap-3.5 px-5 py-6 lg:px-8 lg:py-7">
                {h.icon && (
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-highlight text-highlight-foreground [&_svg]:size-3.5">{h.icon}</span>
                )}
                <span className="text-left">
                  <span className="block text-[0.92rem] leading-[1.5] font-bold">{h.title}</span>
                  <span className="mt-1 block text-[0.78rem] leading-[1.55] text-foreground/72">{h.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
