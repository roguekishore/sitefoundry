import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanButton } from "@foundry/ultrahuman-button";
import { UltrahumanPlaceholder } from "@foundry/ultrahuman-placeholder";
import { UltrahumanReveal } from "@foundry/ultrahuman-reveal";

export interface UltrahumanProductFeature {
  /** a small icon (lucide or svg), about 24px */
  icon: ReactNode;
  /** the feature's title */
  title: string;
  /** one or two lines under it */
  body: string;
}

export interface UltrahumanProductStat {
  /** small line above the figure, e.g. "Up to" */
  before?: string;
  /** the figure, e.g. "40 Days" or "2.6" */
  value: string;
  /** line under the figure, e.g. "grams" */
  after?: string;
  /** md: an 88px figure (a figure with a word) · xl: a ~150px figure (a bare number) */
  scale?: "md" | "xl";
}

export interface UltrahumanProductProps {
  /** dark: the black band with charcoal cards · light: white with pale grey cards */
  tone?: "dark" | "light";
  /** the product's name (heading, desktop row and phone bar) */
  name: string;
  /** a grey line under the name */
  tagline: string;
  /** the large statement in the first card */
  statement: string;
  /** the big figure in the second card */
  stat: UltrahumanProductStat;
  /** the mono eyebrow over the feature list, e.g. "Inside Halo Max" */
  featuresTitle: string;
  /** the list in the third card (four on the original) */
  features: UltrahumanProductFeature[];
  /** the blue buy button */
  primary: { label: string; href: string };
  /** the outline second button */
  secondary: { label: string; href: string };
  /** the product video or render beside the cards; a placeholder when empty */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
  /** art behind the big figure (rings, ripples); a faint wash when empty */
  statArt?: ReactNode;
  className?: string;
}

/**
 * A product band: name and grey tagline, then on desktop a sticky left column (media, name, two
 * buttons) beside a stack of cards (statement, big figure, feature list). On phones everything
 * stacks and the name with its buttons rides along as a bar pinned to the bottom of the window
 * (the bar is the band's last child, so sticky bottom-0 holds it there while the band is on screen).
 */
export function UltrahumanProduct({
  tone = "dark",
  name,
  tagline,
  statement,
  stat,
  featuresTitle,
  features,
  primary,
  secondary,
  media,
  mediaLabel,
  statArt,
  className,
}: UltrahumanProductProps) {
  const xl = stat.scale === "xl";
  return (
    <section className={cn(tone === "dark" && "dark", "bg-background text-foreground", className)}>
      <div className="px-gutter pt-[6.25rem] pb-[6.5rem] lg:pt-[5.5rem] lg:pb-36">
        <div className="mx-auto max-w-page">
          <UltrahumanReveal as="h2" className="text-[1.625rem] leading-[2rem] tracking-[-0.03em] lg:text-[2.5rem] lg:leading-[3rem] lg:tracking-[-0.025em]">
            {name}
            <span className="block text-foreground/40">{tagline}</span>
          </UltrahumanReveal>

          <div className="mt-10 grid gap-8 lg:mt-[4.5rem] lg:grid-cols-2 lg:items-start lg:gap-4">
            <div className="lg:sticky lg:top-[8.375rem]">
              <UltrahumanReveal className="aspect-[350/359] overflow-clip rounded-lg bg-background lg:aspect-[632/462]">
                {media ?? <UltrahumanPlaceholder tone={tone === "dark" ? "photo" : "soft"} label={mediaLabel} />}
              </UltrahumanReveal>
              <div className="mt-8 hidden items-center gap-3 lg:flex">
                <p className="flex-1 text-[2rem] leading-none tracking-[-0.03em]">{name}</p>
                <UltrahumanButton href={primary.href} className="min-w-36">
                  {primary.label}
                </UltrahumanButton>
                <UltrahumanButton href={secondary.href} variant="outline" className="min-w-36">
                  {secondary.label}
                </UltrahumanButton>
              </div>
            </div>

            <div className="grid gap-4">
              <UltrahumanReveal className="rounded-lg bg-muted p-6 text-foreground lg:h-[28.875rem] lg:p-12">
                <p className="text-lg leading-[1.875rem] tracking-[-0.025em] lg:text-2xl lg:leading-[2.8125rem]">{statement}</p>
              </UltrahumanReveal>

              <UltrahumanReveal className="relative isolate flex h-[21.25rem] flex-col items-center overflow-clip rounded-lg bg-muted px-6 pt-12 text-center text-foreground lg:h-[28.875rem] lg:pt-[5.5rem]">
                <div aria-hidden={statArt ? undefined : true} className={cn("absolute inset-x-0 -z-10", xl ? "inset-y-0 opacity-70" : "bottom-0 h-1/2 opacity-25")}>
                  {statArt ?? <UltrahumanPlaceholder tone={xl ? "soft" : "glow"} />}
                </div>
                {stat.before && (
                  <p className={cn("text-base leading-none tracking-[-0.02em] uppercase lg:text-xl", xl ? "text-foreground" : "text-foreground/50", xl && "lg:mt-1")}>
                    {stat.before}
                  </p>
                )}
                <UltrahumanReveal
                  as="p"
                  className={cn(
                    "leading-none whitespace-nowrap",
                    xl ? "mt-3 text-[4.25rem] tracking-[-0.04em] lg:text-[9.5rem] lg:tracking-[-0.05em]" : "mt-5 text-5xl tracking-[-0.03em] lg:mt-7 lg:text-[5.5rem]",
                  )}
                >
                  {stat.value}
                </UltrahumanReveal>
                {stat.after && (
                  <p className={cn("max-w-[19rem] text-lg leading-[1.375rem] tracking-[-0.025em] lg:text-[1.375rem] lg:leading-[2.0625rem]", xl ? "mt-2 lg:mt-1" : "mt-6 lg:mt-7")}>
                    {stat.after}
                  </p>
                )}
              </UltrahumanReveal>

              <UltrahumanReveal className="rounded-lg bg-muted p-6 text-foreground lg:px-12 lg:pt-14 lg:pb-12">
                <p className="font-mono text-[0.8125rem] leading-none tracking-[0.1em] text-foreground/60 uppercase lg:text-base">{featuresTitle}</p>
                <ul className="mt-3 lg:mt-5">
                  {features.map((feature, i) => (
                    <UltrahumanReveal
                      as="li"
                      rise="sm"
                      step={i}
                      key={feature.title}
                      className="flex items-center border-b border-foreground/10 py-6 last:border-0 last:pb-0 lg:py-10"
                    >
                      <span aria-hidden className="flex w-11 shrink-0 [&_svg]:size-5 lg:w-[3.875rem] lg:[&_svg]:size-6">
                        {feature.icon}
                      </span>
                      <span>
                        <span className="block text-lg leading-tight font-medium tracking-[-0.04em] lg:text-[1.375rem]">{feature.title}</span>
                        <span className="mt-2 block text-[0.8125rem] leading-[1.125rem] tracking-[0.005em] text-foreground/60 lg:mt-3 lg:text-sm lg:leading-[1.1875rem] lg:tracking-[0.01em]">
                          {feature.body}
                        </span>
                      </span>
                    </UltrahumanReveal>
                  ))}
                </ul>
              </UltrahumanReveal>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 z-10 flex h-[4.1875rem] items-center gap-2 border-t border-foreground/10 bg-background px-4 lg:hidden">
        <p className="min-w-0 flex-1 truncate text-sm tracking-[-0.01em]">{name}</p>
        <UltrahumanButton href={primary.href} className="h-10 w-32 min-w-0 px-0">
          {primary.label}
        </UltrahumanButton>
        <UltrahumanButton href={secondary.href} variant="outline" className="h-10 w-32 min-w-0 px-0">
          {secondary.label}
        </UltrahumanButton>
      </div>
    </section>
  );
}
