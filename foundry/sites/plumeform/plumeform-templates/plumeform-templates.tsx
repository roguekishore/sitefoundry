import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformBadge } from "@foundry/plumeform-badge";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformLink } from "@foundry/plumeform-link";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformTemplate {
  title: string;
  href: string;
  /** a line under the title, e.g. "12 questions · 6 min" */
  meta?: string;
  /** a small line icon in the tile */
  icon?: ReactNode;
  /** a tier tag, e.g. "Plus" */
  badge?: string;
}

export interface PlumeformTemplatesProps {
  eyebrow?: string;
  /** the heading; a second part can be passed as `titleAside` and shows quieter */
  title: ReactNode;
  titleAside?: ReactNode;
  body?: ReactNode;
  /** topic pills over the cards; the first shows as selected */
  topics?: { label: string; href: string }[];
  templates: PlumeformTemplate[];
  link?: { label: string; href: string };
  id?: string;
  className?: string;
}

/** A template library on paper: heading, topic pills, then white link cards that lift on hover. */
export function PlumeformTemplates({ eyebrow, title, titleAside, body, topics, templates, link, id, className }: PlumeformTemplatesProps) {
  return (
    <section id={id} className={cn("bg-background pt-section pb-16 text-foreground lg:pb-20", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <PlumeformHeading
          eyebrow={eyebrow}
          title={
            <>
              {title}
              {titleAside && (
                <>
                  {" "}
                  <span className="text-muted-foreground">{titleAside}</span>
                </>
              )}
            </>
          }
          className="max-w-[40rem]"
        >
          {body}
        </PlumeformHeading>

        {topics && (
          <PlumeformReveal step={1} className="mt-10 flex flex-wrap gap-2">
            {topics.map((t, i) => (
              <a
                key={t.href}
                href={t.href}
                className={cn(
                  "inline-flex h-10 items-center rounded-full border px-4 text-[0.8125rem] font-bold transition-colors duration-200 motion-reduce:transition-none",
                  i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-secondary text-secondary-foreground hover:bg-accent",
                )}
              >
                {t.label}
              </a>
            ))}
          </PlumeformReveal>
        )}

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, i) => (
            <PlumeformReveal key={t.href} as="li" step={i % 3}>
              <a
                href={t.href}
                className="group flex h-full items-start gap-4 rounded-2xl border border-card/70 bg-linear-to-b from-card/95 to-card/75 p-6 text-card-foreground shadow-[inset_0_1px_0_var(--card),0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_20px_46px_-30px_color-mix(in_oklab,var(--foreground)_45%,transparent)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1 hover:border-highlight/30 hover:shadow-[inset_0_1px_0_var(--card),0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_28px_50px_-28px_color-mix(in_oklab,var(--foreground)_50%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {t.icon && <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground [&_svg]:size-5 [&_svg]:stroke-[1.75]">{t.icon}</span>}
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2 text-base font-bold tracking-[-0.01em]">
                    {t.title}
                    {t.badge && <PlumeformBadge>{t.badge}</PlumeformBadge>}
                  </span>
                  {t.meta && <span className="mt-1 block text-[0.8125rem] text-muted-foreground">{t.meta}</span>}
                </span>
                <ArrowUpRight aria-hidden className="size-4 shrink-0 text-muted-foreground transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-highlight" strokeWidth={1.75} />
              </a>
            </PlumeformReveal>
          ))}
        </ul>

        {link && (
          <PlumeformReveal className="mt-10">
            <PlumeformLink href={link.href}>{link.label}</PlumeformLink>
          </PlumeformReveal>
        )}
      </div>
    </section>
  );
}
