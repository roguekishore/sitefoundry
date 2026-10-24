import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FramerButton } from "@foundry/framer-button";
import { FramerHeading } from "@foundry/framer-heading";
import { FramerPlaceholder } from "@foundry/framer-placeholder";

export interface FramerHeroAction {
  /** button text */
  label: string;
  /** where it goes */
  href: string;
  /** small icon after the label */
  icon?: ReactNode;
}

export interface FramerHeroProps {
  /** the page title; "\n" breaks on desktop only */
  title: string;
  /** two lines of grey copy under the title */
  subtitle: string;
  /** the white button */
  primary: FramerHeroAction;
  /** the dark-grey button beside it */
  secondary?: FramerHeroAction;
  /** the aside link on the right (below the buttons on phones): bold lead word, then grey text */
  news?: { lead: string; label: string; href: string };
  /** the video or product film; empty shows a placeholder of the same 16:9 frame */
  media?: ReactNode;
  /** screen-reader label for the media placeholder */
  mediaLabel?: string;
  className?: string;
}

/** Title, copy and buttons over a wide video frame. */
export function FramerHero({ title, subtitle, primary, secondary, news, media, mediaLabel, className }: FramerHeroProps) {
  return (
    <section className={cn("bg-background px-gutter pt-14 text-foreground lg:pt-24", className)}>
      <div className="mx-auto max-w-page">
        <FramerHeading as="h1" size="title" className="lg:max-w-[48rem]">
          {title}
        </FramerHeading>
        <p className="mt-3.5 max-w-[43rem] text-lg leading-[1.35] tracking-[-0.01em] text-muted-foreground lg:mt-5">
          {subtitle}
        </p>

        <div className="mt-5 flex flex-col items-start gap-8 lg:mt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2.5">
            <FramerButton href={primary.href} icon={primary.icon}>
              {primary.label}
            </FramerButton>
            {secondary && (
              <FramerButton href={secondary.href} variant="secondary" icon={secondary.icon}>
                {secondary.label}
              </FramerButton>
            )}
          </div>
          {news && (
            <a href={news.href} className="group inline-flex items-center gap-1 text-sm tracking-[-0.01em] text-muted-foreground">
              <span className="text-foreground">{news.lead}</span>
              <span className="transition-colors duration-150 group-hover:text-foreground motion-reduce:transition-none">
                {news.label}
              </span>
              <ArrowRight
                aria-hidden
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                strokeWidth={2}
              />
            </a>
          )}
        </div>

        <div className="-mx-gutter mt-12 aspect-[1200/674] overflow-clip border-y border-border lg:mx-0 lg:mt-10 lg:rounded-2xl lg:border">
          {media ?? <FramerPlaceholder tone="panel" label={mediaLabel} />}
        </div>
      </div>
    </section>
  );
}
