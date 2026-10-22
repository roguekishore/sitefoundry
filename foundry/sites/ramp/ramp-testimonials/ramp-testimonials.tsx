import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RampButton } from "@foundry/ramp-button";
import { RampHeading } from "@foundry/ramp-heading";
import "./ramp-testimonials.css";

export interface RampTestimonial {
  /** the person's name */
  name: string;
  /** their role and company */
  role: string;
  /** their words */
  quote: string;
  /** the company's mark for the small square chip (a logo or initials) */
  logo: ReactNode;
}

export interface RampTestimonialsProps {
  /** the small grey line above the headline */
  eyebrow?: string;
  /** the headline */
  title: string;
  /** the grey button under it */
  cta?: { label: string; href: string };
  /** up to three rows of cards; each row loops on its own */
  rows: RampTestimonial[][];
  className?: string;
}

const speeds = ["90s", "100s", "180s"];
const offsets = ["0s", "-35s", "-60s"];

function Card({ t }: { t: RampTestimonial }) {
  return (
    <li className="flex h-[12rem] w-[17.5rem] shrink-0 flex-col rounded-xl border border-border bg-card p-5 sm:w-[20rem]">
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center overflow-clip rounded-[calc(var(--radius)-6px)] border border-border text-xs text-foreground">{t.logo}</span>
        <span className="min-w-0">
          <span className="block truncate text-base/5 text-foreground">{t.name}</span>
          <span className="block truncate text-base/5 text-muted-foreground">{t.role}</span>
        </span>
      </div>
      <p className="mt-4 line-clamp-4 text-base/5 text-muted-foreground">{t.quote}</p>
    </li>
  );
}

/** Ramp's "receipts" wall: three drifting rows of quote cards. */
export function RampTestimonials({ eyebrow, title, cta, rows, className }: RampTestimonialsProps) {
  return (
    <section className={cn("overflow-clip bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-section lg:px-[calc(var(--page-gutter)*4)] lg:pt-[calc(var(--section-y)*1.5)]">
        {eyebrow && <p className="text-center text-base text-muted-foreground">{eyebrow}</p>}
        <RampHeading align="center" lead={title} className="mt-2 lg:mt-3" />
        {cta && (
          <div className="mt-4 flex justify-center lg:mt-5">
            <RampButton href={cta.href} variant="secondary">
              {cta.label}
            </RampButton>
          </div>
        )}
      </div>
      <div className="mx-auto mt-12 grid max-w-page grid-cols-1 gap-4 pb-section lg:mt-[4.75rem] lg:px-[calc(var(--page-gutter)*4)]">
        {rows.slice(0, 3).map((row, r) => (
          <div key={r} className="ramp-testimonials-row min-w-0 overflow-clip">
            <div
              className="ramp-testimonials-track flex w-max"
              style={{ "--ramp-testimonials-speed": speeds[r], "--ramp-testimonials-offset": offsets[r] } as CSSProperties}
            >
              <ul className="flex gap-4 pr-4">
                {row.map((t) => (
                  <Card key={t.name} t={t} />
                ))}
              </ul>
              <ul aria-hidden className="flex gap-4 pr-4">
                {row.map((t) => (
                  <Card key={t.name} t={t} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
