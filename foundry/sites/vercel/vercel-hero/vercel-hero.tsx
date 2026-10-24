import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VercelButton } from "@foundry/vercel-button";
import { VercelHeading } from "@foundry/vercel-heading";
import { VercelPlaceholder } from "@foundry/vercel-placeholder";
import "./vercel-hero.css";

export interface VercelHeroLogo {
  /** the company's name, for screen readers */
  name: string;
  /** its wordmark (an svg, img or styled text), about 24px tall */
  logo: ReactNode;
}

export interface VercelHeroProps {
  /** the page title; breaks onto two lines on its own at this width */
  title: string;
  /** the ink pill button */
  primary: { label: string; href: string };
  /** the white pill button */
  secondary?: { label: string; href: string };
  /** three short lines: a list on the right on desktop, one cycling mono line on phones */
  lines: string[];
  /** customer wordmarks along the bottom (seven on the original) */
  logos: VercelHeroLogo[];
  /** the large artwork behind the hero (image, video, canvas); a soft haze when empty */
  media?: ReactNode;
  /** screen-reader label for the artwork placeholder */
  mediaLabel?: string;
  className?: string;
}

/** Window-tall monochrome hero with centred artwork, side lines and a logo row. */
export function VercelHero({ title, primary, secondary, lines, logos, media, mediaLabel, className }: VercelHeroProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col overflow-clip bg-background px-gutter text-foreground lg:h-[calc(100svh-4rem)] lg:min-h-[40rem]",
        className,
      )}
    >
      <div className="relative flex flex-1 flex-col items-center lg:flex-row lg:items-center">
        {/* artwork: on top on phones, centred behind everything on desktop */}
        <div className="-mx-gutter h-[25rem] w-[calc(100%+2*var(--page-gutter))] lg:pointer-events-none lg:absolute lg:top-1/2 lg:left-1/2 lg:mx-0 lg:h-[45rem] lg:w-[67.5rem] lg:-translate-x-1/2 lg:-translate-y-1/2">
          {media ?? <VercelPlaceholder tone="haze" label={mediaLabel} />}
        </div>

        <div className="relative -mt-6 flex w-full flex-col items-center text-center lg:mt-0 lg:w-auto lg:flex-1 lg:items-start lg:text-left">
          <VercelHeading as="h1" size="title" className="max-w-[7em] lg:max-w-[6em]">
            {title}
          </VercelHeading>

          {/* phones: one mono line at a time */}
          <p className="mt-4 grid font-mono text-base text-muted-foreground lg:hidden">
            {lines.map((line, i) => (
              <span key={line} className="vercel-hero-line [grid-area:1/1]" style={{ animationDelay: `${i * 3}s` }}>
                {line}
              </span>
            ))}
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 lg:mt-8 lg:w-auto lg:flex-row">
            <VercelButton href={primary.href} block className="lg:w-auto">
              {primary.label}
            </VercelButton>
            {secondary ? (
              <VercelButton href={secondary.href} variant="secondary" block className="lg:w-auto">
                {secondary.label}
              </VercelButton>
            ) : null}
          </div>
        </div>

        <ul className="relative hidden w-[22.5rem] shrink-0 flex-col text-base leading-8 lg:flex">
          {lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="relative -mx-gutter mt-12 overflow-clip pb-10 max-lg:mask-x-from-85% max-lg:mask-x-to-100% lg:mx-0 lg:mt-0">
        <ul className="vercel-hero-marquee flex w-max items-center gap-16 lg:w-full lg:justify-between lg:gap-6">
          {[0, 1].map((copy) =>
            logos.map((item) => (
              <li
                key={`${copy}-${item.name}`}
                aria-hidden={copy === 1 ? true : undefined}
                className={cn("flex h-11 shrink-0 items-center text-foreground", copy === 1 && "lg:hidden")}
              >
                <span role={copy === 0 ? "img" : undefined} aria-label={copy === 0 ? item.name : undefined} className="flex items-center">
                  {item.logo}
                </span>
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
