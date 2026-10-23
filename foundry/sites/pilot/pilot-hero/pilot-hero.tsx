import type { ReactNode } from "react";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PilotButton } from "@foundry/pilot-button";
import { PilotLines } from "@foundry/pilot-heading";
import { PilotPlaceholder } from "@foundry/pilot-placeholder";

export interface PilotHeroLogo {
  /** the customer's name, set as a plain wordmark */
  name: string;
  /** a case-study link: makes the name a link and shows the tag under it */
  href?: string;
  /** the small handwritten tag under the name, e.g. "Case study" */
  tag?: string;
  /** the face the name is set in, so the row doesn't look like one company */
  face?: "sans" | "serif" | "mono";
}

export interface PilotHeroProps {
  /** the review score row above the headline; leave out to hide it */
  rating?: { score: string; count: string; stars?: number; source: string };
  /** the headline; \n sets the desktop line break */
  title: string;
  /** an optional paragraph under the headline */
  lede?: string;
  /** the yellow pill */
  cta: { label: string; href: string };
  /** a pink uppercase mono link beside the pill */
  link?: { label: string; href: string };
  /** the product picture (a screenshot composite); a placeholder when empty */
  media?: ReactNode;
  /** the mono line over the customer names */
  logosLabel: string;
  /** the customer names */
  logos: PilotHeroLogo[];
  className?: string;
}

const faces = {
  sans: "font-display font-semibold tracking-[-0.03em]",
  serif: "font-[family-name:var(--typeface-serif,Georgia)] font-semibold tracking-[-0.02em]",
  mono: "font-mono font-bold tracking-[-0.04em] uppercase text-lg",
};

/** Pilot's hero: rating, headline, product, yellow CTA and a customer row on the dark band. */
export function PilotHero({ rating, title, lede, cta, link, media, logosLabel, logos, className }: PilotHeroProps) {
  const stars = rating?.stars ?? 5;
  return (
    <section className={cn("relative isolate overflow-clip bg-secondary text-secondary-foreground", className)}>
      {/* the ledger grid on the right and the violet glow bottom-right */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--secondary-foreground)_9%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--secondary-foreground)_9%,transparent)_1px,transparent_1px)] bg-[size:5.75rem_3.125rem] [mask-image:linear-gradient(to_bottom,black_55%,transparent_82%)] lg:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(70%_60%_at_100%_100%,color-mix(in_oklab,var(--primary)_55%,transparent),transparent)]"
      />

      <div className="mx-auto max-w-page px-gutter pt-12 pb-14 lg:pt-20 lg:pb-12">
        <div className="lg:text-center">
          {rating && (
            <p className="mb-5 flex items-center gap-3 text-base font-medium lg:justify-center lg:text-lg">
              <span className="flex size-6 items-center justify-center rounded-full bg-glow text-xs font-bold text-secondary">{rating.source}</span>
              <span className="flex gap-1" role="img" aria-label={`${rating.score} / 5`}>
                {Array.from({ length: stars }, (_, i) => (
                  <Star key={i} aria-hidden className="size-4 fill-highlight text-highlight" strokeWidth={1.5} />
                ))}
              </span>
              <span>
                {rating.score} {rating.count}
              </span>
            </p>
          )}
          <h1 className="font-display text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] lg:text-[3.5rem] lg:leading-[1.12] lg:tracking-[-0.01em]">
            <PilotLines text={title} />
          </h1>
          {lede && <p className="mt-5 max-w-[42rem] text-base leading-[1.6] text-secondary-foreground/90 lg:mx-auto lg:text-xl lg:leading-normal">{lede}</p>}
        </div>

        <div className="mx-auto mt-10 max-w-[50rem] lg:mt-12">
          {media ?? <PilotPlaceholder tone="on-dark" className="aspect-[342/324] w-full rounded-2xl lg:aspect-[800/389]" />}
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 lg:mt-12 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
          <PilotButton href={cta.href} variant="sun" size="lg">
            {cta.label}
          </PilotButton>
          {link && (
            <a
              href={link.href}
              className="inline-flex items-center gap-1 border-b border-glow pb-0.5 font-mono text-base text-glow uppercase transition-opacity duration-150 hover:opacity-75 motion-reduce:transition-none"
            >
              {link.label}
              <ArrowRight aria-hidden className="size-4" strokeWidth={2} />
            </a>
          )}
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="text-center font-mono text-xs leading-[1.5] tracking-[0.06em] text-secondary-foreground/80 uppercase lg:text-left">
            {logosLabel}
          </p>
          <ul className="mt-6 flex flex-wrap items-start justify-center gap-x-9 gap-y-5 lg:mt-7 lg:flex-nowrap lg:justify-between">
            {logos.map((l) => {
              const name = <span className={cn("block text-[1.375rem] leading-none whitespace-nowrap", faces[l.face ?? "sans"])}>{l.name}</span>;
              const tag = l.tag && (
                <span className="mt-0.5 block pl-1 font-[family-name:var(--typeface-script,cursive)] text-sm leading-none text-glow opacity-70 transition-opacity duration-150 group-hover:opacity-100 motion-reduce:transition-none">
                  {l.tag}
                </span>
              );
              return (
                <li key={l.name}>
                  {l.href ? (
                    <a href={l.href} className="group block">
                      {name}
                      {tag}
                    </a>
                  ) : (
                    <>
                      {name}
                      {tag}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
