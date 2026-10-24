import { useState, type CSSProperties, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HermeusButton } from "@foundry/hermeus-button";
import { HermeusMedia } from "@foundry/hermeus-media";
import { HermeusReveal } from "@foundry/hermeus-reveal";
import { HermeusSectionLabel } from "@foundry/hermeus-section-label";
import "./hermeus-product.css";

export interface HermeusProductHotspot {
  /** horizontal position, % of the render's width */
  x: number;
  /** vertical position, % of the render's height */
  y: number;
  /** what this point is, shown on hover */
  label: string;
}

export interface HermeusProductProps {
  /** the section's number, e.g. "02" */
  index: string;
  /** the section's name in the label row */
  label: string;
  /** the short paragraph under the label */
  body: string;
  /** the button at the right of the paragraph */
  action: { label: string; href: string };
  /** the huge pale name behind the render, one entry per line (two short words read best) */
  backdrop: string[];
  /** the wide cut-out render (2.58:1); empty: a soft placeholder light */
  media?: ReactNode;
  /** what the render shows, for screen readers while it is empty */
  mediaLabel?: string;
  /** amber + points pinned on the render */
  hotspots: HermeusProductHotspot[];
  /** accessible names of the phone arrows */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

/** Product band: copy and button, then a render over a huge pale name, with pulsing hotspots. */
export function HermeusProduct({
  index,
  label,
  body,
  action,
  backdrop,
  media,
  mediaLabel,
  hotspots,
  prevLabel,
  nextLabel,
  className,
}: HermeusProductProps) {
  // the hotspot stepped to with the phone arrows (none at first, like the original)
  const [active, setActive] = useState<number | null>(null);
  const step = (by: number) =>
    setActive((a) => (a === null ? (by > 0 ? 0 : hotspots.length - 1) : (a + by + hotspots.length) % hotspots.length));

  const arrow =
    "absolute top-1/2 z-10 grid h-10 w-6 -translate-y-1/2 cursor-pointer place-items-center text-muted-foreground transition-colors duration-250 ease-in-out hover:text-primary motion-reduce:transition-none lg:hidden";

  return (
    <section className={cn("overflow-x-clip bg-muted pt-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <HermeusSectionLabel index={index} label={label} />
        <HermeusReveal className="mt-[clamp(1.94rem,1.24rem+2.86vw,3.81rem)] flex flex-col items-start gap-[clamp(1.25rem,1rem+1vw,2rem)] lg:flex-row lg:justify-between">
          <p className="max-w-[38em] text-[clamp(0.79rem,0.667rem+0.509vw,1.125rem)]/[1.3] text-pretty">{body}</p>
          <HermeusButton label={action.label} href={action.href} tone="secondary" />
        </HermeusReveal>

        {/* the stage: the pale name, with the render centred over it */}
        <div className="relative mt-[clamp(0rem,3.3rem-3.8vw,2.5rem)] mb-[clamp(6.25rem,3.93rem+9.52vw,12.5rem)]">
          <p
            aria-hidden
            className="text-center font-display text-[min(19.9vw,17.9rem)]/[0.93] font-normal tracking-[-0.01em] text-secondary select-none"
          >
            {backdrop.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="absolute inset-x-0 top-1/2 aspect-[2.58/1] -translate-y-[56%]">
            <HermeusMedia media={media} label={mediaLabel} look="soft" className="size-full" />

            {hotspots.map((h, i) => (
              <div
                key={h.label}
                className={cn(
                  "group absolute -translate-x-1/2 -translate-y-1/2",
                  active === i ? "max-lg:block" : "max-lg:hidden",
                )}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                <span
                  aria-hidden
                  className="hermeus-product-pulse pointer-events-none absolute inset-0 bg-primary"
                  style={{ "--hermeus-product-delay": `${i * 0.45}s` } as CSSProperties}
                />
                <button
                  type="button"
                  aria-label={h.label}
                  onClick={() => setActive((a) => (a === i ? null : i))}
                  className="relative grid size-[clamp(1.125rem,0.9rem+0.6vw,1.5rem)] cursor-pointer place-items-center bg-primary text-primary-foreground transition-transform duration-250 ease-in-out hover:scale-115 motion-reduce:transition-none"
                >
                  <Plus aria-hidden strokeWidth={1.25} className="size-3/5" />
                </button>
                <span
                  className={cn(
                    "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 bg-card px-2 py-1.5 text-[0.6875rem]/none tracking-[0.06em] whitespace-nowrap text-card-foreground uppercase opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none",
                    active === i && "opacity-100",
                  )}
                >
                  {h.label}
                </span>
              </div>
            ))}

            {hotspots.length > 0 && (
              <>
                <button type="button" aria-label={prevLabel} onClick={() => step(-1)} className={cn(arrow, "-left-4")}>
                  <ChevronLeft aria-hidden strokeWidth={1} className="size-8" />
                </button>
                <button type="button" aria-label={nextLabel} onClick={() => step(1)} className={cn(arrow, "-right-4")}>
                  <ChevronRight aria-hidden strokeWidth={1} className="size-8" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
