import type { ReactNode } from "react";
import { LeomeAndPartnersWordReveal } from "@foundry/leome-and-partners-word-reveal";
import { cn } from "@foundry/foundry-utils";

export interface LeomeAndPartnersInsight {
  href: string;
  /** small chips above the title (a topic, a date…) */
  tags: string[];
  title: string;
  /** two or three lines under the title */
  excerpt: string;
  /** the article's photo; give it `className="size-full object-cover"`. A placeholder when empty */
  media?: ReactNode;
}

export interface LeomeAndPartnersInsightsProps {
  /** the section heading; it rises as it scrolls in */
  title: string;
  /** the articles; the first is the wide lead (half the row at desktop), the next sit in quarter columns */
  articles: LeomeAndPartnersInsight[];
  className?: string;
}

/**
 * A heading and a row of articles: a wide lead (2 of 4 columns at desktop, 16:9 on phones)
 * and narrower ones, each with a 300px photo, small tinted chips, a medium title in primary
 * and a short excerpt in the secondary text colour. Stacked on phones.
 */
export function LeomeAndPartnersInsights({ title, articles, className }: LeomeAndPartnersInsightsProps) {
  return (
    <section className={cn("relative bg-background px-gutter py-section font-sans text-foreground", className)}>
      <h2 className="font-display text-[2.75rem] leading-[1.05] font-medium tracking-[-0.02em] lg:text-[4rem]">
        <LeomeAndPartnersWordReveal text={title} />
      </h2>
      <div className="mt-12 grid gap-16 lg:mt-10 lg:grid-cols-4 lg:gap-x-8">
        {articles.map((article, i) => (
          <article key={article.href} className={cn(i === 0 && "lg:col-span-2")}>
            <a href={article.href} className="block">
              <div
                className={cn(
                  "relative overflow-clip bg-muted [&>*]:size-full",
                  i === 0 ? "aspect-video lg:aspect-auto lg:h-[18.75rem]" : "h-[18.75rem]",
                )}
              >
                {article.media}
              </div>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {article.tags.map((tag) => (
                  <li key={tag} className="bg-accent px-2.5 py-1.5 text-xs leading-none font-medium uppercase tracking-[0.02em] text-accent-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
              <h3 className="mt-5 max-w-[18em] text-xl leading-[1.1] font-medium tracking-[-0.01em] lg:text-2xl">{article.title}</h3>
              <p className="mt-3.5 max-w-[33em] text-base leading-normal font-medium text-muted-foreground">{article.excerpt}</p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
