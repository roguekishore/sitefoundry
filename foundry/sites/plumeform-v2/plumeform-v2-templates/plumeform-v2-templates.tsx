import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2Template {
  /** small capitals above the name */
  category: string;
  name: string;
  /** a quiet line, e.g. "9 questions · 2 min" */
  detail: string;
  href: string;
}

export interface PlumeformV2TemplatesProps {
  /** the first heading line */
  title: string;
  /** the second heading line, in slate */
  subtitle?: string;
  body?: ReactNode;
  /** filter pills; the first is shown as current */
  filters?: { label: string; href: string }[];
  templates: PlumeformV2Template[];
  link?: { label: string; href: string };
  id?: string;
  className?: string;
}

export function PlumeformV2Templates({ title, subtitle, body, filters, templates, link, id, className }: PlumeformV2TemplatesProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter pt-[calc(var(--section-y)*0.75)] pb-12 text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <PlumeformV2Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-balance lg:text-5xl">
            {title}
            {subtitle && <span className="block text-muted-foreground">{subtitle}</span>}
          </h2>
          {body && <div className="mt-6 text-base leading-[1.65] text-muted-foreground lg:text-[1.0625rem]">{body}</div>}
        </PlumeformV2Reveal>
        {filters && (
          <PlumeformV2Reveal step={1} className="mt-9 flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <a
                key={f.href}
                href={f.href}
                aria-current={i === 0 ? "page" : undefined}
                className={cn(
                  "flex h-9 items-center rounded-full px-4 text-[0.8125rem] font-semibold transition-colors duration-150",
                  i === 0 ? "bg-foreground text-background" : "border border-border bg-card/70 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {f.label}
              </a>
            ))}
          </PlumeformV2Reveal>
        )}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, i) => (
            <PlumeformV2Reveal as="li" key={t.href} step={i % 3}>
              <a
                href={t.href}
                className="group relative flex min-h-[9.5rem] flex-col rounded-lg border border-border bg-card/75 p-6 shadow-[inset_1px_1px_0_color-mix(in_oklab,var(--card)_85%,transparent),0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent)] backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_20px_46px_-30px_color-mix(in_oklab,var(--foreground)_45%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="text-[0.625rem] font-bold tracking-[0.2em] text-primary uppercase">{t.category}</span>
                <span className="mt-3 text-[1.0625rem] font-bold tracking-[-0.01em]">{t.name}</span>
                <span className="mt-auto pt-6 text-xs text-muted-foreground">{t.detail}</span>
                <ArrowUpRight
                  aria-hidden
                  className="absolute top-6 right-6 size-4 text-primary opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 motion-reduce:transition-none"
                  strokeWidth={2}
                />
              </a>
            </PlumeformV2Reveal>
          ))}
        </ul>
        {link && (
          <PlumeformV2Reveal className="mt-10">
            <PlumeformV2Button variant="link" href={link.href} arrow>
              {link.label}
            </PlumeformV2Button>
          </PlumeformV2Reveal>
        )}
      </div>
    </section>
  );
}
