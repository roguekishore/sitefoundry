import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ValaratomicsMissionProps {
  /** the heading (two lines on desktop at this width) */
  title: string;
  /** the paragraphs under it */
  paragraphs: string[];
  /** the big plate-shaped link on the right */
  cta: { label: string; href: string };
  /** a texture or picture inside the plate (the original's is a fine lattice); empty leaves it plain */
  texture?: ReactNode;
  className?: string;
}

// The plate: a wide panel with chamfered corners, a raised tab on top and a recessed one
// underneath. Points in % of the plate box (620 × 404 at 1440px).
const PLATE =
  "polygon(8.9% 4.2%, 35% 4.2%, 38.2% 0, 67.7% 0, 71% 4.2%, 91.1% 4.2%, 100% 16.5%, 100% 87.7%, 91.1% 100%, 71% 100%, 67.7% 95.8%, 38.2% 95.8%, 35% 100%, 8.9% 100%, 0 87.7%, 0 16.5%)";

/**
 * On a white band: a heading and two paragraphs on the left, and on the right a big
 * plate-shaped link (chamfered corners, a raised tab on top, a notch below) outlined by a
 * hairline, with a mono caps label in its middle. Hovering the plate lights it with a soft
 * gold glow.
 */
export function ValaratomicsMission({ title, paragraphs, cta, texture, className }: ValaratomicsMissionProps) {
  return (
    <section
      className={cn("bg-card px-gutter pt-[calc(var(--section-y)*2)] pb-section text-card-foreground lg:py-[24svh]", className)}
    >
      <div className="mx-auto grid max-w-page items-center gap-y-9 lg:grid-cols-2 lg:gap-x-[2vw]">
        <div className="max-w-[31.5rem]">
          <h2 className="font-sans text-[2.625rem] leading-[0.9] font-medium tracking-[-0.02em] lg:text-5xl lg:leading-[0.9]">
            {title}
          </h2>
          <div className="mt-9 space-y-[1.375rem] text-lg leading-[1.1] tracking-[-0.01em] lg:mt-12 lg:text-[1.375rem] lg:leading-[1.1]">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <a
          href={cta.href}
          className={cn(
            "group relative block aspect-[620/404] w-full",
            "transition-[filter] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:drop-shadow-[0_6px_10px_color-mix(in_oklab,var(--glow)_35%,transparent)] motion-reduce:transition-none",
            "focus-visible:outline-none focus-visible:drop-shadow-[0_6px_10px_color-mix(in_oklab,var(--glow)_35%,transparent)]",
          )}
        >
          <span aria-hidden className="absolute inset-0 bg-border" style={{ clipPath: PLATE }} />
          <span
            aria-hidden
            className="absolute inset-px bg-card [&>*]:size-full [&_img]:object-cover"
            style={{ clipPath: PLATE }}
          >
            {texture}
          </span>
          <span className="absolute inset-0 grid place-items-center font-mono text-lg leading-none uppercase">
            {cta.label}
          </span>
        </a>
      </div>
    </section>
  );
}
