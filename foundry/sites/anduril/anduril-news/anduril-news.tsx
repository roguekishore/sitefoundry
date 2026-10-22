import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AndurilLink } from "@foundry/anduril-link";
import "./anduril-news.css";

export interface AndurilNewsArticle {
  /** the date line, e.g. "10/06/2026" */
  date: string;
  /** the headline */
  title: string;
  /** one or two lines under the headline */
  excerpt: string;
  /** link words, e.g. "Read more" */
  linkLabel: string;
  href: string;
  /** the lead image (16:9); empty shows a placeholder */
  media?: ReactNode;
}

export interface AndurilNewsProps {
  /** the section heading */
  heading: string;
  /** the link to every article, beside the heading */
  allLabel: string;
  allHref: string;
  /** the lead story */
  article: AndurilNewsArticle;
  className?: string;
}

/** Cream news band: heading and link over a hairline, then the lead story beside its image. */
export function AndurilNews({ heading, allLabel, allHref, article, className }: AndurilNewsProps) {
  return (
    <section className={cn("bg-card px-gutter pt-11 pb-28 text-card-foreground md:pt-12 md:pb-[5.25rem]", className)}>
      <div className="grid grid-cols-[1fr_auto] items-end gap-[1.125rem] border-b border-current/60 pb-[1.875rem] md:grid-cols-2 md:pb-6">
        <h2 className="max-w-[6em] font-display text-[2rem] leading-[1.1] tracking-[-0.03em] md:max-w-none lg:text-[2.5rem]">{heading}</h2>
        <AndurilLink label={allLabel} href={allHref} className="mb-1 md:mb-2" />
      </div>

      <div className="grid gap-[1.125rem] pt-7 md:grid-cols-2 md:pt-8">
        <div className="anduril-news-media aspect-video overflow-clip rounded-lg bg-muted md:order-last [&>img]:size-full [&>img]:object-cover">{article.media}</div>
        <div className="pt-[1.125rem] md:pt-0">
          <p className="text-[0.8125rem] leading-[1.05] font-medium tracking-[0.02em] md:text-[0.75rem]">{article.date}</p>
          <h3 className="mt-3 max-w-[35rem] font-display text-[1.6875rem] leading-[1.15] tracking-[-0.02em] lg:mt-2.5 lg:text-[2rem]">{article.title}</h3>
          <p className="mt-9 max-w-[22rem] text-[0.9375rem] leading-[1.25] tracking-[-0.01em] md:mt-14">{article.excerpt}</p>
          <AndurilLink label={article.linkLabel} href={article.href} className="mt-9 md:mt-14" />
        </div>
      </div>
    </section>
  );
}
