import type { ReactNode } from "react";
import { BookOpen } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { UnitArrowCircle } from "@foundry/unit-arrow-circle";
import { UnitButton } from "@foundry/unit-button";
import { UnitPlaceholder } from "@foundry/unit-placeholder";

export interface UnitInsight {
  /** the kind, e.g. "Blog" or "Guide" */
  kind: string;
  /** reading time, e.g. "4 min" */
  time: string;
  /** the title */
  title: string;
  /** where it links to */
  href: string;
  /** the card picture (347×229 on desktop; featured posts only); a placeholder when empty */
  media?: ReactNode;
}

export interface UnitInsightsProps {
  /** the section heading */
  heading: string;
  /** short posts listed under the heading, between hairlines */
  posts: UnitInsight[];
  /** featured posts shown as white cards with a picture (two read best) */
  featured: UnitInsight[];
  /** the black pill under the list */
  cta: { label: string; href: string };
  /** screen-reader label for the cards' arrow */
  openLabel?: string;
  className?: string;
}

function Meta({ kind, time }: Pick<UnitInsight, "kind" | "time">) {
  return (
    <p className="flex items-center gap-1.5 text-[0.8125rem] leading-none tracking-[0.01em] text-muted-foreground">
      <BookOpen aria-hidden className="size-3" strokeWidth={1.75} />
      {kind}
      <span aria-hidden>·</span>
      {time}
    </p>
  );
}

/** Resources on a tinted band: a heading, two listed posts and a black pill on the left, two white picture cards on the right. */
export function UnitInsights({ heading, posts, featured, cta, className }: UnitInsightsProps) {
  return (
    <section className={cn("bg-muted font-sans text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-12 px-gutter py-16 lg:grid-cols-[minmax(0,21rem)_1fr] lg:gap-x-[5.1875rem] lg:px-[calc(var(--page-gutter)+1.625rem)] lg:py-32">
        <div>
          <h2 className="font-display text-[1.640625rem] leading-[1.15] tracking-[-0.02em] lg:text-[2.5rem]">{heading}</h2>
          <ul className="mt-6 lg:mt-12">
            {posts.map((p) => (
              <li key={p.title} className="border-t border-foreground/10">
                <a href={p.href} className="block py-7 transition-opacity duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-60 motion-reduce:transition-none lg:pt-10 lg:pb-8">
                  <Meta kind={p.kind} time={p.time} />
                  <h3 className="mt-5 max-w-[20rem] text-[1.09375rem] leading-[1.35] tracking-[-0.01em] lg:mt-6 lg:text-[1.375rem] lg:leading-[1.3]">{p.title}</h3>
                </a>
              </li>
            ))}
          </ul>
          <UnitButton href={cta.href} className="mt-0 lg:mt-5">
            {cta.label}
          </UnitButton>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <li key={p.title} className="flex">
              <a href={p.href} className="group/card flex w-full flex-col bg-background px-5 pt-8 pb-6 lg:px-6 lg:pt-9 lg:pb-10">
                <Meta kind={p.kind} time={p.time} />
                <h3 className="mt-5 text-[1.09375rem] leading-[1.3] tracking-[-0.01em] lg:mt-6 lg:text-[1.375rem] lg:leading-[1.25]">{p.title}</h3>
                <div className="mt-4 aspect-[347/229] overflow-clip rounded-lg lg:mt-8">
                  {p.media ?? <UnitPlaceholder tone="muted" className="size-full transition-transform duration-[1025ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover/card:scale-[1.03] motion-reduce:transition-none" />}
                </div>
                <UnitArrowCircle className="mt-4 self-end lg:mt-auto" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
