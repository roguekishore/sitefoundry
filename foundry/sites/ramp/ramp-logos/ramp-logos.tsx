import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RampButton } from "@foundry/ramp-button";
import { RampHeading } from "@foundry/ramp-heading";
import "./ramp-logos.css";

export interface RampLogo {
  /** the customer's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
  /** makes the tile a link and shows the arrow chip */
  href?: string;
}

export interface RampLogosProps {
  /** the line's first clause, in ink */
  lead: string;
  /** the rest, in hushed grey */
  rest?: string;
  /** the arrow link under it */
  link?: { label: string; href: string };
  /** twelve tiles read best (six by two on desktop, three by four on phones) */
  logos: RampLogo[];
  /** the tall card beside the tiles */
  story?: {
    /** the photo behind; empty shows a gradient placeholder */
    media?: ReactNode;
    /** a small label over the photo, e.g. the customer's name */
    label?: ReactNode;
    /** the big figure, e.g. "$2.4M" */
    stat: string;
    /** the line under it */
    caption: string;
    href?: string;
  };
  className?: string;
}

/** Ramp's customer wall: a statement, then hairline tiles of wordmarks and one photo stat card. */
export function RampLogos({ lead, rest, link, logos, story, className }: RampLogosProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[calc(var(--section-y)*2)] pb-section lg:px-[calc(var(--page-gutter)*4)] lg:pt-[calc(var(--section-y)*1.75)] lg:pb-[calc(var(--section-y)*1.5)]">
        <RampHeading size="row" lead={lead} rest={rest} className="max-w-[20rem] lg:max-w-[33rem]" />
        {link && (
          <RampButton variant="link" href={link.href} className="mt-6 lg:mt-8">
            {link.label}
          </RampButton>
        )}

        <div className="mt-12 grid grid-cols-3 gap-0.5 lg:mt-12 lg:grid-cols-8">
          {logos.map((l, i) => {
            const Tile = l.href ? "a" : "div";
            return (
              <Tile
                key={l.name}
                href={l.href}
                aria-label={l.name}
                className="ramp-logos-tile group relative grid aspect-square place-items-center rounded-lg border border-border bg-card px-3 text-muted-foreground/70 transition-colors duration-300 hover:bg-muted"
                style={{ "--ramp-logos-at": (i % 6) * 3 + Math.floor(i / 6) * 6 } as CSSProperties}
              >
                {l.logo}
                {l.href && (
                  <span aria-hidden className="absolute top-3 right-3 grid size-6 place-items-center rounded-full bg-muted text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                    <ArrowRight className="size-3" strokeWidth={2} />
                  </span>
                )}
              </Tile>
            );
          })}

          {story && (
            <a
              href={story.href}
              className="group relative col-span-3 mt-0.5 aspect-[4/3] overflow-clip rounded-lg bg-muted text-background lg:col-span-2 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:aspect-auto"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none">
                {story.media ?? <div aria-hidden className="size-full bg-gradient-to-b from-muted-foreground/50 via-foreground/70 to-foreground" />}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40" aria-hidden />
              <span aria-hidden className="absolute top-3 right-3 grid size-6 place-items-center rounded-full bg-background/20 backdrop-blur">
                <ArrowUpRight className="size-3" strokeWidth={2} />
              </span>
              <div className="absolute inset-x-6 bottom-6">
                {story.label && <div className="flex items-center gap-1.5 text-xs [&_svg]:size-3.5">{story.label}</div>}
                <p className="mt-1 font-display text-[3rem]/[1] tracking-[-0.02em] lg:text-[4rem]">{story.stat}</p>
                <p className="mt-2 text-base text-background/75">{story.caption}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
