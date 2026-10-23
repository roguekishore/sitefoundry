import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ThirdwayArrowLink } from "@foundry/thirdway-arrow-link";
import { ThirdwayCountPill } from "@foundry/thirdway-count-pill";
import { ThirdwayPlaceholder } from "@foundry/thirdway-placeholder";
import "./thirdway-projects.css";

export interface ThirdwayProject {
  /** the client or project name, set very large */
  name: string;
  /** where it is */
  location: string;
  /** the kind of work, e.g. "CAT B" */
  scope: string;
  /** the team that delivered it, set in the serif */
  team: string;
  /** a client quote (desktop only) */
  quote: string;
  /** who said it */
  author: string;
  /** their role */
  role: string;
  /** link to the project page */
  href: string;
  /** full-bleed photo; a placeholder when empty */
  image?: ReactNode;
}

export interface ThirdwayProjectsProps {
  /** the projects: the section is one window tall per project */
  projects: ThirdwayProject[];
  /** the link text ("View project"): centred on hover on desktop, at the bottom on phones */
  viewLabel: string;
  className?: string;
}

/**
 * A pinned showcase, one window-height per project (so 400svh for four). The first project fills
 * the window; as you scroll, each next photo wipes up from the bottom over the previous one,
 * carrying its own counter, name, details and quote.
 */
export function ThirdwayProjects({ projects, viewLabel, className }: ThirdwayProjectsProps) {
  const n = projects.length;
  const wipes = Math.max(n - 1, 1);
  const total = String(n).padStart(2, "0");
  // pinned phase of the section's view timeline (cover range = n + 1 window heights): from 1/(n+1) to n/(n+1)
  const pinFrom = 100 / (n + 1);
  const pinSpan = ((100 * n) / (n + 1) - pinFrom) / wipes;
  return (
    <section className={cn("thirdway-projects dark relative", className)} style={{ "--n": n } as CSSProperties}>
      <div className="thirdway-projects-stage">
        {projects.map((p, i) => (
          <article
            key={p.href + p.name}
            className={cn("thirdway-projects-item group", i > 0 && "thirdway-projects-wipe")}
            style={{ "--from": `${pinFrom + pinSpan * (i - 1)}%`, "--to": `${pinFrom + pinSpan * i}%` } as CSSProperties}
          >
            <div className="absolute inset-0">{p.image ?? <ThirdwayPlaceholder className="size-full rounded-none" />}</div>
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-background/70 via-background/30 via-30% to-transparent" />
            <a
              href={p.href}
              className="absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.66,0.01,0.12,0.98)] group-hover:opacity-100 focus-visible:opacity-100 md:flex motion-reduce:transition-none"
            >
              <span className="sr-only">{`${viewLabel}: ${p.name}`}</span>
              <span aria-hidden className="pointer-events-none">
                <ThirdwayArrowLink label={viewLabel} href={p.href} chip={false} />
              </span>
            </a>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[40svh] flex-col px-gutter text-foreground md:h-[38svh] md:px-[calc(var(--page-gutter)*2)]">
              <div className="border-t border-foreground/40" />
              <div className="flex flex-1 flex-col justify-between pt-4 pb-20 md:grid md:grid-cols-12 md:gap-x-4 md:pt-5 md:pb-0">
                <div className="md:contents">
                  <div className="flex items-center gap-1 text-sm font-[560] md:col-span-1 md:mt-1 md:self-start">
                    <ThirdwayCountPill value={String(i + 1).padStart(2, "0")} />
                    <span>/</span>
                    <ThirdwayCountPill value={total} />
                  </div>
                  <div className="mt-3 md:col-span-6 md:mt-0">
                    <h3 className="[word-spacing:-0.07em] text-[2.5rem] leading-[1] font-[560] tracking-[-0.06em] md:text-[clamp(2.75rem,5vw,4.5rem)] md:leading-[0.98]">{p.name}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-0 text-base leading-[1.3] font-[560] tracking-[-0.04em] md:mt-8 md:flex-col md:items-start md:text-base md:leading-[1.3]">
                      <span>{p.location}</span>
                      <span aria-hidden className="size-1 rounded-full bg-current md:hidden" />
                      <span>{p.scope}</span>
                      <span aria-hidden className="size-1 rounded-full bg-current md:hidden" />
                      <span className="font-[family-name:var(--typeface-serif,Georgia,serif)] text-sm font-[350] tracking-[-0.01em] md:mt-5">{p.team}</span>
                    </div>
                  </div>
                </div>
                <figure className="hidden md:col-span-5 md:col-start-8 md:block md:pl-14">
                  <blockquote className="text-lg leading-[1.2] font-[560] tracking-[-0.04em]">{p.quote}</blockquote>
                  <figcaption className="mt-4">
                    <span className="block text-sm leading-[1.2] font-[560] tracking-[-0.02em]">{p.author}</span>
                    <span className="block font-[family-name:var(--typeface-serif,Georgia,serif)] text-lg leading-[1.1] font-[350] tracking-[-0.02em] text-foreground/70">{p.role}</span>
                  </figcaption>
                </figure>
                <div className="pointer-events-auto md:hidden">
                  <ThirdwayArrowLink label={viewLabel} href={p.href} size="md" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
