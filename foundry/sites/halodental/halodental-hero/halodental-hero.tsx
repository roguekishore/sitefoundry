import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalButton } from "@foundry/halodental-button";

export interface HalodentalHeroProps {
  /** oversized lower-left brand display wordmark shown on desktop */
  displayWordmark: string;
  /** tagline anchored at the bottom-right on desktop and above the CTA on mobile */
  tagline: string;
  /** mobile video button label and link */
  videoCta?: { label: string; href?: string; onClick?: () => void };
  /** custom media slot for the central vertical hardware render */
  media?: ReactNode;
  /** force dark tokens (as on the original) or inherit from page */
  tone?: "dark" | "inherit";
  className?: string;
}

/**
 * Halo Dental's hero: a rounded black studio stage framed by a narrow outer margin,
 * with a vertical cylindrical instrument column down the centre, an oversized display
 * wordmark at the bottom-left on desktop, "We All Shine" at the bottom-right, and a
 * vermilion "Play the video" button on mobile.
 */
export function HalodentalHero({
  displayWordmark,
  tagline,
  videoCta,
  media,
  tone = "dark",
  className,
}: HalodentalHeroProps) {
  return (
    <section className={cn("px-1.5 pt-1.5 lg:px-2.5 lg:pt-2.5", className)}>
      <div
        className={cn(
          "relative isolate flex min-h-[51.75rem] flex-col justify-end overflow-hidden rounded-lg bg-background text-foreground lg:min-h-[55.25rem]",
          tone === "dark" && "dark",
        )}
      >
        {/* Central vertical studio hardware placeholder slot */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center overflow-hidden"
        >
          {media ?? (
            <div className="relative flex h-[86%] w-[13.75rem] flex-col items-center sm:w-[16rem] lg:h-full lg:w-[22.75rem]">
              {/* Anodised upper shaft with smooth cylindrical studio highlight */}
              <div className="relative flex w-full flex-1 items-center justify-center border-x border-border/25 bg-[linear-gradient(90deg,var(--card)_0%,var(--secondary)_18%,var(--muted-foreground)_38%,var(--secondary)_62%,var(--card)_100%)] opacity-85">
                {/* Top directional studio falloff */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,var(--background)_95%)] opacity-35" />
                {/* Embossed double-oval emblem near the lower third of the upper shaft */}
                <div className="relative mt-44 flex items-center justify-center lg:mt-48">
                  <svg
                    viewBox="0 0 96 60"
                    className="h-16 w-auto lg:h-20"
                    fill="none"
                  >
                    <ellipse
                      cx="33"
                      cy="30"
                      rx="24"
                      ry="11.5"
                      transform="rotate(-38 33 30)"
                      className="fill-background/55 stroke-foreground/45"
                      strokeWidth="2.25"
                    />
                    <ellipse
                      cx="63"
                      cy="30"
                      rx="24"
                      ry="11.5"
                      transform="rotate(-38 63 30)"
                      className="fill-background/55 stroke-foreground/45"
                      strokeWidth="2.25"
                    />
                  </svg>
                </div>
              </div>
              {/* Matte light-diffuser collar */}
              <div className="h-14 w-[97%] rounded-xs border-y border-background/80 bg-[linear-gradient(90deg,var(--muted-foreground)_0%,var(--foreground)_42%,var(--muted-foreground)_100%)] opacity-65 lg:h-[4.75rem]" />
              {/* Lower rounded handle cap (visible on mobile, bleeds off bottom on desktop) */}
              <div className="h-44 w-full rounded-b-[7rem] border-x border-b border-border/25 bg-[linear-gradient(90deg,var(--card)_0%,var(--secondary)_22%,var(--muted-foreground)_40%,var(--secondary)_65%,var(--card)_100%)] opacity-85 lg:h-28 lg:rounded-b-none" />
            </div>
          )}
        </div>

        {/* Bottom foreground lockup */}
        <div className="relative z-10 mx-auto flex w-full max-w-page flex-col justify-end px-4 pb-5 lg:px-8 lg:pb-2">
          {/* Desktop giant wordmark + right-aligned tagline */}
          <div className="hidden items-end justify-between lg:flex">
            <p
              aria-hidden
              className="-ml-2 select-none font-display text-[17.5rem] font-normal leading-[0.76] tracking-[-0.045em] text-foreground xl:text-[19.5rem]"
            >
              {displayWordmark}
            </p>
            <h1 className="pb-2 pr-16 font-display text-[4rem] font-normal leading-none tracking-[-0.025em] text-foreground">
              {tagline}
            </h1>
          </div>

          {/* Mobile tagline + split-icon video button */}
          <div className="flex flex-col items-start gap-3.5 lg:hidden">
            <h1 className="font-display text-[3.125rem] font-normal leading-none tracking-[-0.025em] text-foreground">
              {tagline}
            </h1>
            {videoCta && (
              <HalodentalButton
                variant="primary"
                href={videoCta.href}
                onClick={videoCta.onClick}
                leadingIcon={<Play className="size-4" strokeWidth={1.75} />}
              >
                {videoCta.label}
              </HalodentalButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
