import type { ReactNode } from "react";
import { TrendingDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaV2Button } from "@foundry/roveia-v2-button";
import "./roveia-v2-hero.css";

export interface RoveiaV2Partner {
  /** the platform's name */
  name: string;
  /** a small icon shown in a white circle */
  icon?: ReactNode;
}

export interface RoveiaV2HeroProps {
  /** the headline: an ink start, a blue middle and an ink end */
  headline: { before?: string; accent: string; after?: string };
  /** the short line beside (desktop) or under (phones) the headline */
  lead: string;
  /** the blue pill button */
  cta: { label: string; href: string };
  /** the big number on the left (desktop only) */
  stat?: { value: string; label: string; note?: string; icon?: ReactNode };
  /** the label before the partner chips */
  partnersLabel?: string;
  /** the partner chips along the bottom */
  partners?: RoveiaV2Partner[];
  /** the video or picture; a placeholder of the same size shows when empty */
  media?: ReactNode;
  className?: string;
}

function Partners({ label, partners, className }: { label?: string; partners: RoveiaV2Partner[]; className?: string }) {
  return (
    <div className={cn("roveia-v2-hero-rise [animation-delay:0.35s]", className)}>
      {label && <p className="text-center text-base lg:shrink-0 lg:text-left">{label}</p>}
      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 px-2 lg:mt-0 lg:flex lg:flex-1 lg:justify-between lg:gap-4 lg:pl-10">
        {partners.map((p) => (
          <li key={p.name} className="flex items-center gap-2 text-base">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-card text-primary [&_svg]:size-3.5">{p.icon}</span>
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RoveiaV2Hero({ headline, lead, cta, stat, partnersLabel, partners = [], media, className }: RoveiaV2HeroProps) {
  return (
    <section className={cn("roveia-v2-hero relative bg-background text-foreground", className)}>
      <div className="px-2 lg:sticky lg:top-0 lg:px-5">
        <div className="relative overflow-clip rounded-b-[2rem] flex flex-col bg-[linear-gradient(to_bottom,var(--background),color-mix(in_oklab,var(--glow)_30%,var(--background)))] px-6 pt-[8.5rem] pb-20 lg:h-[calc(100svh-1rem)] lg:min-h-[42rem] lg:block lg:rounded-[2.5rem] lg:p-0">
          {/* the media slot: in the flow on phones; on desktop it grows over the panel */}
          <div className="roveia-v2-hero-media relative order-3 mt-10 aspect-video overflow-clip rounded-lg lg:mt-0 lg:aspect-auto">
            <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">
              {media ?? <div className="size-full bg-muted bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--glow)_35%,transparent),transparent_60%)]" />}
            </div>
            <div aria-hidden className="roveia-v2-hero-wash dark absolute inset-0 bg-background opacity-0" />
          </div>

          <div className="roveia-v2-hero-ink contents lg:absolute lg:inset-0 lg:block">
            <h1 className="roveia-v2-hero-rise order-1 text-center font-display text-[2rem] leading-[1.2] font-normal tracking-[-0.06em] text-balance lg:absolute lg:inset-x-0 lg:top-[9.5rem] lg:mx-auto lg:max-w-[66rem] lg:text-[4.375rem] lg:leading-[1.1] lg:tracking-[-0.03em]">
              {headline.before && <>{headline.before} </>}
              <span className="text-primary">{headline.accent}</span>
              {headline.after && <> {headline.after}</>}
            </h1>

            {/* phones: lead and a full-width button under the headline */}
            <div className="roveia-v2-hero-rise order-2 [animation-delay:0.15s] lg:hidden">
              <p className="mx-auto mt-8 max-w-[18rem] text-center text-base leading-6 opacity-60">{lead}</p>
              <RoveiaV2Button href={cta.href} block className="mt-10">
                {cta.label}
              </RoveiaV2Button>
            </div>

            {/* desktop: stat · (media) · lead and button, centred 5.5rem below the middle */}
            <div className="roveia-v2-hero-rise hidden [animation-delay:0.15s] lg:absolute lg:inset-x-0 lg:top-[calc(50%+5.5rem)] lg:grid lg:-translate-y-1/2 lg:grid-cols-[1fr_36.25rem_1fr] lg:items-center lg:px-[8.25rem]">
              <div className="justify-self-start">
                {stat && (
                  <>
                    <span className="block text-primary [&_svg]:size-11">{stat.icon ?? <TrendingDown aria-hidden strokeWidth={1.25} />}</span>
                    <p className="mt-4 text-[4rem] leading-none font-light tracking-[-0.03em]">{stat.value}</p>
                    <p className="mt-4 text-base">{stat.label}</p>
                    {stat.note && <p className="mt-10 text-base opacity-60">{stat.note}</p>}
                  </>
                )}
              </div>
              <div aria-hidden className="h-[20.375rem]" />
              <div className="w-[12.5rem] justify-self-end">
                <p className="text-base leading-6 opacity-60">{lead}</p>
                <RoveiaV2Button href={cta.href} block className="mt-10">
                  {cta.label}
                </RoveiaV2Button>
              </div>
            </div>

            {partners.length > 0 && (
              <Partners label={partnersLabel} partners={partners} className="order-4 mt-10 lg:absolute lg:inset-x-0 lg:bottom-[5.5rem] lg:mt-0 lg:flex lg:items-center lg:px-[8.25rem]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
