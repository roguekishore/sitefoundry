import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HadrianButton } from "@foundry/hadrian-button";
import { HadrianPlaceholder } from "@foundry/hadrian-placeholder";
import "./hadrian-hero.css";

export interface HadrianHeroAction {
  /** button text (shown uppercase) */
  label: string;
  /** where it goes */
  href: string;
  /** a small trailing icon, e.g. a thin arrow */
  icon?: ReactNode;
}

export interface HadrianHeroProps {
  /** the heading, one string per line (two short lines read best) */
  title: string[];
  /** one short line beside the heading on desktop, under it on phones */
  text?: string;
  /** up to two buttons sitting in the foot of the frame */
  actions?: HadrianHeroAction[];
  /** the frame's media (a video or image filling it, object-cover); a placeholder when empty */
  media?: ReactNode;
  /** stay pinned behind the following sections (sticky); off = scrolls away normally */
  pinned?: boolean;
  className?: string;
}

/** Window-tall hero: staggered two-line heading, chamfered media frame with two buttons. */
export function HadrianHero({ title, text, actions = [], media, pinned = true, className }: HadrianHeroProps) {
  let n = 0;
  return (
    <section
      className={cn(
        "flex h-svh min-h-[34rem] flex-col overflow-clip bg-background pt-[11rem] pb-[2.625rem] text-foreground lg:min-h-[40rem] lg:pt-[11.75rem]",
        pinned ? "sticky top-0" : "relative",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-page px-gutter lg:grid lg:grid-cols-12 lg:gap-x-6">
        <h1 className="font-sans text-[1.875rem] leading-none font-normal tracking-[-0.03em] lg:col-span-7 lg:text-[4.5rem]">
          {title.map((line) => (
            <span key={line} className="block">
              {line.split(" ").map((word, w) => {
                const i = n++;
                return (
                  <span key={w}>
                    {w > 0 && " "}
                    <span className="hadrian-hero-sink inline-block">
                      <span className="hadrian-hero-word inline-block" style={{ "--hadrian-i": i } as CSSProperties}>
                        {word}
                      </span>
                    </span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
        {text && (
          <div className="hadrian-hero-fade mt-[1.375rem] lg:col-span-4 lg:col-start-8 lg:mt-1">
            <p
              className="hadrian-hero-lede max-w-[20rem] text-lg leading-[1.2] tracking-[-0.02em] lg:max-w-none lg:text-xl lg:leading-[1.07]"
              style={{ "--hadrian-delay": `${n * 80 + 250}ms` } as CSSProperties}
            >
              {text}
            </p>
          </div>
        )}
      </div>
      <div className="mx-auto mt-[2.25rem] flex min-h-0 w-full max-w-page flex-1 px-4 lg:mt-10 lg:px-6">
        <div className="hadrian-hero-frame relative flex-1 rounded-t-lg bg-highlight">
          <div className="hadrian-hero-media absolute inset-px overflow-clip rounded-t-[calc(var(--radius)-1px)] bg-background [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
            {media ?? <HadrianPlaceholder />}
          </div>
          {actions.length > 0 && (
            <div className="absolute inset-x-[1.8125rem] bottom-[1.9375rem] flex flex-col gap-2 lg:inset-x-[8.875rem] lg:bottom-[1.875rem] lg:flex-row lg:gap-4">
              {actions.slice(0, 2).map((a) => (
                <HadrianButton key={a.href} label={a.label} href={a.href} icon={a.icon} size="lg" className="lg:flex-1" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
