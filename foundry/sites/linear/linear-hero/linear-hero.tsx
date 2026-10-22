import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LinearPlaceholder } from "@foundry/linear-placeholder";
import "./linear-hero.css";

export interface LinearHeroAnnouncement {
  /** the short bold word (e.g. "New") */
  tag: string;
  /** what's new, shown grey with an arrow */
  label: string;
  href: string;
}

export interface LinearHeroProps {
  /** the headline; two lines on desktop, four on phones */
  title: ReactNode;
  /** one grey line under it */
  subtitle: ReactNode;
  /** the small "New · …" link, right-aligned on desktop */
  announcement?: LinearHeroAnnouncement;
  /** the product screenshot or video (~1.83:1); empty shows a placeholder panel */
  media?: ReactNode;
  /** a name for the placeholder, for screen readers */
  mediaLabel?: string;
  className?: string;
}

const frame = "mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter";

/** Headline, subtitle row and a big product window on a softly lit stage. */
export function LinearHero({ title, subtitle, announcement, media, mediaLabel, className }: LinearHeroProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className={cn(frame, "pt-[8.5rem] lg:pt-[12.5rem]")}>
        <h1 className="linear-hero-in max-w-[13em] font-display text-[2.375rem] leading-[1.1] font-[510] tracking-[-0.022em] text-foreground sm:text-5xl lg:text-[4rem] lg:leading-[1.06]">
          {title}
        </h1>
        <div
          className="linear-hero-in mt-6 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between lg:mt-6"
          style={{ animationDelay: "120ms" }}
        >
          <p className="max-w-[28rem] text-base leading-6 text-muted-foreground sm:max-w-none">{subtitle}</p>
          {announcement && (
            <a
              href={announcement.href}
              className="inline-flex shrink-0 items-center gap-2 text-[0.9375rem] transition-[filter] duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:brightness-130 motion-reduce:transition-none"
            >
              <span className="font-[590] text-foreground">{announcement.tag}</span>
              <span className="text-muted-foreground">
                {announcement.label} <span aria-hidden>→</span>
              </span>
            </a>
          )}
        </div>
      </div>

      <div
        className="linear-hero-in linear-hero-stage mt-4 overflow-clip pt-8 pb-8 sm:mx-3 sm:rounded-2xl lg:mt-9 lg:pt-10 lg:pb-12"
        style={{ animationDelay: "240ms" }}
      >
        <div className={frame}>
          <LinearPlaceholder
            label={media ? undefined : mediaLabel}
            className="-ml-1.5 aspect-[1.83] w-[41rem] max-w-none sm:-mx-5 sm:w-[calc(100%+2.5rem)]"
          >
            {media}
          </LinearPlaceholder>
        </div>
      </div>
    </section>
  );
}
