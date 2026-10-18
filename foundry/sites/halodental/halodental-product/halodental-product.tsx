import { useState, type ReactNode } from "react";
import { Camera, Feather, Sun, Wind } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalButton } from "@foundry/halodental-button";

export type HalodentalSpecIcon = "light" | "defog" | "camera" | "weight";

export interface HalodentalSpecItem {
  /** icon identifier for the specification row */
  icon?: HalodentalSpecIcon;
  /** custom icon node if overriding the built-in spec icons */
  customIcon?: ReactNode;
  /** concise specification text */
  label: string;
}

export interface HalodentalProductSlide {
  /** accessible label for the thumbnail button */
  alt: string;
  /** optional custom full-size media slot */
  media?: ReactNode;
  /** optional custom thumbnail slot */
  thumbnail?: ReactNode;
  /** placeholder visual variant when media is not supplied */
  placeholderVariant?: "dark-handheld" | "light-Macro" | "light-detail";
}

export interface HalodentalProductProps {
  /** large two-line product heading */
  title: string;
  /** lead description paragraph below the heading */
  description: string;
  /** hairline-divided specification rows */
  specs: HalodentalSpecItem[];
  /** primary vermilion CTA button */
  cta: { label: string; href: string };
  /** gallery slides (main square stage + thumbnail strip) */
  slides: HalodentalProductSlide[];
  /** optional award badge text inside the bottom-right of the first slide */
  awardBadge?: { highlightText: string; restText: string };
  className?: string;
}

function SpecIcon({ name }: { name?: HalodentalSpecIcon }) {
  switch (name) {
    case "light":
      return <Sun aria-hidden className="size-[1.125rem] shrink-0 text-foreground/80" strokeWidth={1.4} />;
    case "defog":
      return <Wind aria-hidden className="size-[1.125rem] shrink-0 text-foreground/80" strokeWidth={1.4} />;
    case "camera":
      return <Camera aria-hidden className="size-[1.125rem] shrink-0 text-foreground/80" strokeWidth={1.4} />;
    case "weight":
    default:
      return <Feather aria-hidden className="size-[1.125rem] shrink-0 text-foreground/80" strokeWidth={1.4} />;
  }
}

function SlidePlaceholder({
  variant = "dark-handheld",
  compact = false,
}: {
  variant?: HalodentalProductSlide["placeholderVariant"];
  compact?: boolean;
}) {
  if (variant === "light-Macro") {
    return (
      <div className="relative flex size-full items-center justify-center overflow-hidden bg-secondary text-foreground">
        <div
          className={cn(
            "rotate-[-18deg] rounded-full border border-foreground/25 bg-card/80 shadow-xs",
            compact ? "h-5 w-12" : "h-24 w-64",
          )}
        />
        <div
          className={cn(
            "absolute rounded-full border-2 border-foreground/35 bg-background",
            compact ? "size-5 right-2" : "size-28 right-16",
          )}
        />
      </div>
    );
  }

  if (variant === "light-detail") {
    return (
      <div className="relative flex size-full items-center justify-center overflow-hidden bg-muted text-foreground">
        <div
          className={cn(
            "rotate-[24deg] rounded-full border border-foreground/20 bg-background/75",
            compact ? "h-3 w-12" : "h-12 w-72",
          )}
        />
        <div
          className={cn(
            "absolute rounded-full border border-primary/50 bg-primary/15",
            compact ? "size-4" : "size-20",
          )}
        />
      </div>
    );
  }

  return (
    <div className="dark relative flex size-full items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Radial studio glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,var(--secondary)_0%,transparent_68%)] opacity-85" />
      {/* Slanted optical wand silhouette */}
      <div
        className={cn(
          "relative flex rotate-[16deg] flex-col items-center",
          compact ? "h-14 w-3" : "h-[74%] w-10",
        )}
      >
        {/* Illuminated optical ring head */}
        <div
          className={cn(
            "rounded-full border-2 border-foreground/90 bg-card shadow-[0_0_24px_var(--foreground)]",
            compact ? "size-3.5" : "size-14",
          )}
        />
        {/* Slender neck + wand body */}
        <div
          className={cn(
            "w-[38%] flex-1 rounded-b-full border-x border-foreground/35 bg-[linear-gradient(90deg,var(--card),var(--secondary),var(--card))]",
            compact ? "-mt-0.5" : "-mt-1",
          )}
        />
        {/* Base LED ring */}
        <div className={cn("w-[44%] bg-foreground/90", compact ? "h-0.5" : "mb-3 h-1.5 rounded-full")} />
      </div>
    </div>
  );
}

/**
 * Halo Dental's product showcase ("The Digital Mirror"): warm stone band with a left
 * specification column (4 hairline-separated icon rows + vermilion CTA) and a right
 * 1:1 square media gallery with vertical thumbnails on desktop and horizontal thumbnails on mobile.
 */
export function HalodentalProduct({
  title,
  description,
  specs,
  cta,
  slides,
  awardBadge,
  className,
}: HalodentalProductProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex] ?? slides[0];

  return (
    <section className={cn("bg-background py-16 text-foreground lg:py-24", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left specification column (4 of 12 columns on desktop) */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-4">
            <h2 className="max-w-[10ch] font-display text-[2.475rem] font-normal leading-[1.08] tracking-[-0.025em] lg:text-[4rem] lg:leading-none">
              {title}
            </h2>
            <p className="mt-4 max-w-[38ch] text-[0.9125rem] leading-[1.5] text-foreground/85 lg:mt-6 lg:text-base lg:leading-[1.5]">
              {description}
            </p>

            <ul className="mt-7 w-full border-t border-border lg:mt-10">
              {specs.map((spec) => (
                <li
                  key={spec.label}
                  className="flex items-center gap-3.5 border-b border-border py-3 text-[0.9125rem] leading-[1.2] text-foreground lg:py-3.5 lg:text-base"
                >
                  {spec.customIcon ?? <SpecIcon name={spec.icon} />}
                  <span>{spec.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 lg:mt-9">
              <HalodentalButton variant="primary" href={cta.href}>
                {cta.label}
              </HalodentalButton>
            </div>
          </div>

          {/* Right square stage + thumbnail strip (7 of 12 columns, offset by 1 column on desktop) */}
          <div className="flex flex-col items-center gap-3.5 lg:col-span-7 lg:col-start-6 lg:flex-row lg:items-center lg:gap-5">
            {/* Large 1:1 square media frame */}
            <div className="relative aspect-square w-full flex-1 overflow-hidden rounded-lg border border-border/15 bg-card">
              {current?.media ?? <SlidePlaceholder variant={current?.placeholderVariant} />}

              {awardBadge && activeIndex === 0 && (
                <div className="dark pointer-events-none absolute right-5 bottom-5 flex flex-col items-start gap-1.5 text-foreground lg:right-8 lg:bottom-7">
                  <span
                    aria-hidden
                    className="size-7 rounded-full bg-[radial-gradient(circle_at_35%_35%,var(--highlight),var(--glow)_70%)] lg:size-8"
                  />
                  <p className="text-[0.6875rem] font-normal tracking-[-0.01em] text-foreground lg:text-xs">
                    <span className="text-glow">{awardBadge.highlightText}</span>{" "}
                    <span>{awardBadge.restText}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Thumbnail switcher: horizontal below stage on mobile, vertical centered on right on desktop */}
            {slides.length > 1 && (
              <div className="flex flex-row items-center justify-center gap-2.5 lg:flex-col lg:gap-3">
                {slides.map((slide, idx) => {
                  const active = idx === activeIndex;
                  return (
                    <button
                      key={slide.alt}
                      type="button"
                      aria-label={slide.alt}
                      aria-pressed={active}
                      onClick={() => setActiveIndex(idx)}
                      className={cn(
                        "relative size-[4.25rem] overflow-hidden rounded-md p-0.5 transition-opacity duration-200 motion-reduce:transition-none lg:size-[4.5rem]",
                        active
                          ? "ring-2 ring-primary opacity-100"
                          : "opacity-55 hover:opacity-85",
                      )}
                    >
                      <div className="size-full overflow-hidden rounded-xs">
                        {slide.thumbnail ?? (
                          <SlidePlaceholder variant={slide.placeholderVariant} compact />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
