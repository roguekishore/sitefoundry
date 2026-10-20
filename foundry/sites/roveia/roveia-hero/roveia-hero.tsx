import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaButton } from "@foundry/roveia-button";
import "./roveia-hero.css";

export interface RoveiaHeadlinePart {
  text: string;
  /** set this part in the brand blue */
  highlight?: boolean;
}

export interface RoveiaPartner {
  name: string;
  /** a small icon shown in a white disc (e.g. a lucide icon) */
  icon?: ReactNode;
}

export interface RoveiaHeroProps {
  /** the headline, in parts; highlighted parts are blue */
  headline: RoveiaHeadlinePart[];
  /** the short line beside the media (desktop) or under the headline (phones) */
  description: string;
  cta: { label: string; href: string };
  /** the stat on the left (desktop only): icon, big figure, label and a quieter note */
  stat?: { icon?: ReactNode; value: string; label: string; note?: string };
  /** label in front of the partner row */
  partnersLabel?: string;
  partners?: RoveiaPartner[];
  /** the 16:9 video or image in the middle; a placeholder of the same size when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A rounded, inset hero card washed from white to pale blue: a centred two-line headline with
 * blue words, then a row of stat · 16:9 media · copy and a blue pill, then a row of partners.
 * On desktop it is pinned for a window's worth of scrolling while the media grows to fill the
 * card under a darkening veil and the text turns light. Phones get one centred column.
 */
export function RoveiaHero({ headline, description, cta, stat, partnersLabel, partners = [], media, className }: RoveiaHeroProps) {
  return (
    <section className={cn("roveia-hero relative bg-background text-foreground lg:h-[210svh]", className)}>
      <div className="lg:sticky lg:top-0 lg:h-svh lg:pb-4">
        <div className="roveia-hero-card relative mx-2 overflow-clip rounded-b-[calc(var(--radius)+1rem)] bg-[radial-gradient(circle_at_50%_150%,color-mix(in_oklab,var(--primary)_40%,transparent),transparent)] px-8 pt-36 pb-16 lg:mx-5 lg:flex lg:h-full lg:flex-col lg:justify-center lg:px-gutter lg:pt-30 lg:pb-16">
          <div className="roveia-hero-ink mx-auto w-full max-w-[71rem] text-foreground">
            <h1 className="relative z-10 mx-auto max-w-[66rem] text-center font-display text-[2.1875rem] leading-[1.1] font-normal tracking-[-0.05em] text-balance lg:text-[4.375rem] lg:tracking-[-0.03em]">
              {headline.map((part, i) => (
                <span key={i} className={part.highlight ? "text-primary" : undefined}>
                  {part.text}
                </span>
              ))}
            </h1>

            <div className="mt-12 flex flex-col lg:mt-16 lg:grid lg:grid-cols-[1fr_2.2fr_1fr] lg:items-end lg:gap-12">
              {stat && (
                <div className="relative z-10 hidden flex-col lg:col-start-1 lg:row-start-1 lg:flex">
                  {stat.icon && <span className="mb-6 text-primary [&_svg]:size-11">{stat.icon}</span>}
                  <span className="text-[4rem] leading-none font-light tracking-[-0.04em]">{stat.value}</span>
                  <span className="mt-6 text-base">{stat.label}</span>
                  {stat.note && <span className="mt-8 text-base opacity-60">{stat.note}</span>}
                </div>
              )}

              <div className="relative z-10 order-1 flex flex-col items-center text-center lg:order-none lg:col-start-3 lg:row-start-1 lg:items-start lg:text-left">
                <p className="text-base leading-6 tracking-[-0.01em] opacity-60 lg:max-w-[12.5rem]">{description}</p>
                <RoveiaButton href={cta.href} block className="mt-8 lg:mt-10 lg:w-auto">
                  {cta.label}
                </RoveiaButton>
              </div>

              <div className="relative z-0 order-2 mt-10 lg:order-none lg:col-start-2 lg:row-start-1 lg:mt-0">
                <div className="roveia-hero-media relative aspect-video overflow-clip rounded-lg">
                  {media ?? <div className="size-full bg-muted bg-linear-to-br from-glow/35 via-muted to-background/60" />}
                  <div aria-hidden className="roveia-hero-veil dark pointer-events-none absolute inset-0 bg-background opacity-0" />
                </div>
              </div>
            </div>

            {partners.length > 0 && (
              <div className="relative z-10 mt-10 flex flex-col items-center gap-6 lg:mt-16 lg:flex-row lg:justify-between lg:gap-6">
                {partnersLabel && <span className="text-base tracking-[-0.02em]">{partnersLabel}</span>}
                <ul className="grid grid-cols-2 gap-x-12 gap-y-6 lg:flex lg:flex-1 lg:justify-between lg:gap-4 lg:pl-8">
                  {partners.map((p) => (
                    <li key={p.name} className="flex items-center gap-2 text-base lg:text-[1.0625rem]">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-card text-foreground [&_svg]:size-3.5">
                        {p.icon}
                      </span>
                      {p.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
