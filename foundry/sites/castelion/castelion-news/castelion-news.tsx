import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CastelionButton } from "@foundry/castelion-button";
import { CastelionLines } from "@foundry/castelion-lines";
import { CastelionPlaceholder } from "@foundry/castelion-placeholder";
import "./castelion-news.css";

export interface CastelionPost {
  /** the date line, e.g. "October 2, 2026" */
  date: string;
  /** the headline (clamped to two lines) */
  title: string;
  /** the summary */
  summary: string;
  /** link to the post */
  href: string;
  /** the post's picture (empty: a muted surface) */
  image?: ReactNode;
  /** what the picture shows, for screen readers while the slot is empty */
  imageLabel?: string;
}

export interface CastelionNewsProps {
  /** the section title, one entry per desktop line */
  title: string[];
  /** the lead story, shown as a banner with an inset text box on desktop */
  featured: CastelionPost;
  /** the rows on the left (picture beside text) */
  posts: CastelionPost[];
  /** the tall card on the right */
  aside: CastelionPost;
  /** the button's text */
  ctaLabel: string;
  /** where the button goes */
  ctaHref: string;
  className?: string;
}

const body = "text-justify text-[clamp(0.875rem,0.829rem+0.19vw,1rem)]/[1.4] font-medium";
const date = "text-sm/[1.4] font-bold tracking-[0.02em]";
const headline =
  "line-clamp-2 font-display text-[clamp(1.375rem,1.143rem+0.952vw,2rem)]/[1.27] font-bold tracking-[0.02em] underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color] duration-500 ease-[ease] group-hover:decoration-current motion-reduce:transition-none";

/** Date, headline and summary of one post. */
function PostText({ post, columns }: { post: CastelionPost; columns?: boolean }) {
  return (
    <>
      <p className={date}>{post.date}</p>
      <h3 className={cn(headline, "mt-3.5")}>
        <a href={post.href}>{post.title}</a>
      </h3>
      <p className={cn(body, "mt-4", columns && "lg:columns-2 lg:gap-[1.625rem]")}>{post.summary}</p>
    </>
  );
}

/** Newsroom: title and button, a banner story, rows of posts and a tall aside card. */
export function CastelionNews({ title, featured, posts, aside, ctaLabel, ctaHref, className }: CastelionNewsProps) {
  const items: { post: CastelionPost; kind: "row" | "aside"; row: number }[] = [
    ...posts.slice(0, 1).map((post) => ({ post, kind: "row" as const, row: 1 })),
    { post: aside, kind: "aside" as const, row: 1 },
    ...posts.slice(1).map((post, i) => ({ post, kind: "row" as const, row: i + 2 })),
  ];

  return (
    <section className={cn("bg-background pt-section pb-14 text-foreground lg:pb-36", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex items-center justify-between gap-6">
          <CastelionLines
            as="h2"
            lines={title}
            className="font-display text-[clamp(1.8125rem,1.279rem+2.19vw,3.25rem)]/[1.29] font-bold tracking-[0.02em]"
          />
          <CastelionButton label={ctaLabel} href={ctaHref} className="hidden w-[16.3rem] shrink-0 lg:inline-flex" />
        </div>

        {/* the banner story */}
        <article className="castelion-news-rise group relative mt-4 lg:mt-12">
          <CastelionPlaceholder
            media={featured.image}
            label={featured.imageLabel}
            className="aspect-square rounded-lg lg:aspect-[16/9]"
          />
          <div className="mt-7 lg:absolute lg:top-[14.1%] lg:left-[6.65%] lg:mt-0 lg:w-[41%] lg:rounded-sm lg:bg-background lg:p-[2.625rem]">
            <PostText post={featured} />
          </div>
        </article>

        {/* the rows and the aside card */}
        <div
          className="lg:mt-10 lg:grid lg:grid-cols-[1fr_29.5rem] lg:border-t-2 lg:border-border lg:pt-10"
          style={{ "--castelion-news-rows": Math.max(posts.length, 1) } as CSSProperties}
        >
          {items.map(({ post, kind, row }) => (
            <article
              key={post.href + post.title}
              className={cn(
                "castelion-news-rise group mt-8 border-t-2 border-border pt-8 lg:mt-0 lg:border-t-0 lg:pt-0",
                kind === "row" && "lg:col-start-1 lg:grid lg:grid-cols-[22.375rem_1fr] lg:items-start lg:gap-[2.375rem] lg:[grid-row:var(--castelion-news-row)]",
                kind === "row" && row > 1 && "lg:mt-10 lg:border-t-2 lg:pt-10",
                kind === "aside" &&
                  "lg:col-start-2 lg:ml-10 lg:border-l-2 lg:pl-[2.375rem] lg:[grid-row:1/span_var(--castelion-news-rows)]",
              )}
              style={{ "--castelion-news-row": row } as CSSProperties}
            >
              <CastelionPlaceholder media={post.image} label={post.imageLabel} className="aspect-square rounded-lg" />
              <div className={cn("mt-7", kind === "row" ? "lg:mt-3" : "lg:mt-11")}>
                <PostText post={post} columns={kind === "row"} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center lg:hidden">
          <CastelionButton label={ctaLabel} href={ctaHref} className="w-[16.25rem]" />
        </div>
      </div>
    </section>
  );
}
