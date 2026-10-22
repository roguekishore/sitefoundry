import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { OnEnergyBlurText } from "@foundry/on-energy-blur-text";
import { OnEnergyButton } from "@foundry/on-energy-button";
import "./on-energy-testimonials.css";

export interface OnEnergyTestimonial {
  /** the quote, without quotation marks (the block adds them) */
  quote: string;
  /** the customer's name, set as a bold wordmark */
  company: string;
  /** who said it */
  name: string;
  /** their role */
  role: string;
  /** optional button under the person, e.g. a case study */
  cta?: { label: string; href: string };
}

export interface OnEnergyTestimonialsProps {
  /** the section heading on the left; its letters blur in as it scrolls into view */
  title: string;
  /** one or more quotes; the arrows step through them */
  items: OnEnergyTestimonial[];
  /** screen-reader labels for the two arrow buttons */
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
}

/**
 * A light testimonial band: a big light heading on the left, and in the right half a
 * weight-300 quote in soft quotation marks, the customer's wordmark, the person's name and
 * role, and a black button. Two small dark arrow tiles on the far right step through quotes.
 */
export function OnEnergyTestimonials({ title, items, previousLabel = "Previous", nextLabel = "Next", className }: OnEnergyTestimonialsProps) {
  const [index, setIndex] = useState(0);
  const item = items[index] ?? items[0];
  const step = (by: number) => setIndex((i) => (i + by + items.length) % items.length);
  if (!item) return null;

  return (
    <section data-on-energy-tone="inverse" className={cn("bg-foreground text-background", className)}>
      <div className="mx-auto grid max-w-page gap-y-10 px-gutter pt-[7.75rem] pb-56 lg:grid-cols-2 lg:gap-x-[1.6vw] lg:pt-[7.5rem] lg:pb-44">
        <OnEnergyBlurText text={title} className="font-display text-[2.34rem]/[1.167] font-light tracking-[-0.02em] lg:text-5xl/[1.167] lg:tracking-[-0.04em]" />

        <div>
          <div key={index} className="on-energy-testimonials-slide">
            <blockquote className="text-xl/[1.25] font-light tracking-[-0.02em] lg:text-2xl/[1.167]">
              <span className="before:mr-2 before:inline-block before:align-top before:text-[1.5em]/[0.8] before:text-background/40 before:italic before:content-['\201C'] after:ml-2 after:inline-block after:align-top after:text-[1.5em]/[0.8] after:text-background/40 after:italic after:content-['\201D']">
                {item.quote}
              </span>
            </blockquote>

            <div className="mt-16 flex items-start justify-between gap-6 lg:mt-[5.5rem]">
              <div>
                <p className="font-display text-[1.6rem]/none font-semibold tracking-[-0.05em] lg:text-[1.75rem]">{item.company}</p>
                <p className="mt-5 text-xs/[1.5]">{item.name}</p>
                <p className="text-xs/[1.5] text-background/55">{item.role}</p>
              </div>
              {items.length > 1 && (
                <div className="flex flex-col gap-3 pt-1">
                  {[
                    { label: previousLabel, icon: <ArrowUp aria-hidden />, by: -1 },
                    { label: nextLabel, icon: <ArrowDown aria-hidden />, by: 1 },
                  ].map((b) => (
                    <button
                      key={b.label}
                      type="button"
                      aria-label={b.label}
                      onClick={() => step(b.by)}
                      className="flex size-7 items-center justify-center rounded-lg bg-background text-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground [&_svg]:size-4 [&_svg]:[stroke-dasharray:0.01_2.5] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-width:2]"
                    >
                      {b.icon}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {item.cta && (
              <div className="mt-10">
                <OnEnergyButton variant="solid" href={item.cta.href} className="font-sans font-semibold">
                  {item.cta.label}
                </OnEnergyButton>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
