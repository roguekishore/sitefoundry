import { useState, type CSSProperties, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2RailAccent } from "@foundry/growthbook-v2-rail-accent";

export interface GrowthbookV2Testimonial {
  /** the customer's wordmark, about 30px tall */
  logo: ReactNode;
  /** the company's name, for screen readers */
  company: string;
  quote: string;
  name: string;
  role: string;
}

export interface GrowthbookV2TestimonialsProps {
  testimonials: GrowthbookV2Testimonial[];
  /** labels of the arrow buttons, for screen readers */
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
}

export function GrowthbookV2Testimonials({ testimonials, previousLabel = "Previous", nextLabel = "Next", className }: GrowthbookV2TestimonialsProps) {
  const [active, setActive] = useState(0);
  const last = testimonials.length - 1;
  const arrow =
    "flex size-[3.25rem] items-center justify-center rounded-full border border-input text-foreground transition-colors duration-250 hover:bg-foreground/10 disabled:opacity-40 motion-reduce:transition-none";
  return (
    <section
      className={cn(
        "dark overflow-x-clip bg-linear-[160deg] from-[color-mix(in_oklab,var(--background)_85%,var(--chart-2))] to-background text-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="border-l border-border pt-12 pb-40 lg:pt-20 lg:pb-40">
          <div className="flex justify-end gap-2">
            <button type="button" aria-label={previousLabel} disabled={active === 0} onClick={() => setActive((a) => Math.max(0, a - 1))} className={arrow}>
              <ArrowLeft className="size-5" strokeWidth={1.5} />
            </button>
            <button type="button" aria-label={nextLabel} disabled={active === last} onClick={() => setActive((a) => Math.min(last, a + 1))} className={arrow}>
              <ArrowRight className="size-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="relative mt-20 lg:mt-24">
            <GrowthbookV2RailAccent className="-left-px" barClassName="h-full lg:h-full" />
            <div className="@container [clip-path:inset(0_-100vw_0_0)]">
              <ul
                className="flex gap-10 pl-10 transition-transform duration-600 ease-[cubic-bezier(0.25,0.8,0.25,1)] [transform:translateX(calc(var(--i)*-100cqw))] motion-reduce:transition-none lg:gap-[5.5rem] lg:[transform:translateX(calc(var(--i)*-33rem))]"
                style={{ "--i": active } as CSSProperties}
              >
                {testimonials.map((t, i) => (
                  <li
                    key={t.name}
                    aria-hidden={i !== active || undefined}
                    className={cn(
                      "w-[calc(100cqw-2.5rem)] shrink-0 transition-opacity duration-300 motion-reduce:transition-none lg:w-[27.5rem]",
                      i === active ? "opacity-100" : "opacity-45",
                    )}
                  >
                    <span role="img" aria-label={t.company} className="flex h-[1.875rem] items-center pl-3 [&_svg]:h-7 [&_svg]:w-auto">
                      {t.logo}
                    </span>
                    <blockquote className="mt-[4.5rem] text-lg/[1.95] lg:mt-20 lg:text-xl/[1.75]">{t.quote}</blockquote>
                    <p className="mt-8 text-base/[1.7] text-muted-foreground lg:text-lg/[1.55]">
                      {t.name}
                      <br />
                      {t.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
