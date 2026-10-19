import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal } from "@foundry/newhalo-reveal";
import "./newhalo-page-hero.css";

export interface NewhaloPageHeroStep {
  title: string;
  text: string;
}

export interface NewhaloPageHeroProps {
  /** the 100px amber→red page title */
  title: string;
  /** a 32px line under the title (an email address, a short claim) */
  detail?: string;
  /** a question and an underlined arrow link on the right (desktop) */
  aside?: { title?: string; link: { label: string; href: string } };
  /** numbered steps in a row, joined by a dotted line (a column on phones) */
  steps?: NewhaloPageHeroStep[];
  /** show a photo slot on the right half (on top on phones) */
  withMedia?: boolean;
  /** the photo for that slot; empty shows the placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * The black band that opens every inner page. A big gradient title that sweeps in on load,
 * with either a question-and-link aside, a row of numbered steps, or a large rounded photo on
 * the right. The site header floats over its top.
 */
export function NewhaloPageHero({ title, detail, aside, steps, withMedia, media, className }: NewhaloPageHeroProps) {
  return (
    <section className={cn("dark bg-background text-foreground", className)}>
      <div
        className={cn(
          "mx-auto grid max-w-page px-gutter lg:grid-cols-12 lg:gap-x-6",
          withMedia ? "pb-20 lg:pt-30 lg:pb-30" : "pt-[7.4rem] pb-8 lg:pt-[12.6rem] lg:pb-8",
        )}
      >
        {withMedia && (
          <NewhaloMedia
            tone="deep"
            className="-mx-gutter aspect-[0.98] lg:order-last lg:col-span-6 lg:col-start-7 lg:-mr-5 lg:ml-0 lg:aspect-[1.03] lg:rounded-lg"
            innerClassName={cn("-inset-y-[34px]", newhaloReveal("drift"))}
          >
            {media}
          </NewhaloMedia>
        )}
        <div className={cn(withMedia ? "mt-10 lg:col-span-6 lg:mt-[4.4rem]" : "lg:col-span-8")}>
          <h1 className="newhalo-page-hero-title font-display text-[3.125rem] leading-[0.95] tracking-[-0.015em] lg:text-[6.25rem]">{title}</h1>
          {detail && <p className="mt-8 font-display text-[1.56rem] leading-tight lg:mt-12 lg:text-[2rem]">{detail}</p>}
        </div>
        {aside && (
          <div className="hidden lg:col-span-4 lg:col-start-9 lg:block lg:pt-3">
            {aside.title && <p className="font-display text-[1.75rem] leading-[1.1]">{aside.title}</p>}
            <a href={aside.link.href} className="group/link mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-base leading-none">
              {aside.link.label}
              <ArrowRight aria-hidden strokeWidth={1} className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </div>
        )}
        {steps && (
          <ol className="mt-8 grid gap-8 lg:col-span-12 lg:mt-16 lg:grid-cols-3 lg:gap-5 lg:pb-[2.7rem]">
            {steps.map((s, i) => (
              <li key={s.title} className="relative grid grid-cols-[2.5rem_1fr] gap-x-[1.4rem] lg:block">
                {/* phones: a vertical dotted line down to the next step */}
                {i < steps.length - 1 && <span aria-hidden className="absolute top-11 -bottom-7 left-5 border-l border-dotted border-foreground/60 lg:hidden" />}
                {/* desktop: a horizontal dotted line from the square to the next one */}
                <span aria-hidden className={cn("absolute top-5 left-11 hidden border-t border-dotted border-foreground/60 lg:block", i < steps.length - 1 ? "-right-4" : "right-0")} />
                <span className={cn("relative flex size-10 items-center justify-center rounded-sm text-base", i === 0 ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground")}>{i + 1}</span>
                <div className="lg:mt-[1.1rem]">
                  <h2 className="font-display text-[1.3rem] leading-tight font-bold lg:text-2xl">{s.title}</h2>
                  <p className="mt-2.5 font-display text-[1.3rem] leading-[1.1] lg:text-2xl">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
