import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CursorArrowLink } from "@foundry/cursor-arrow-link";
import { CursorMedia } from "@foundry/cursor-media";
import { CursorSectionTitle } from "@foundry/cursor-section-title";

export interface CursorPost {
  /** where the card links to */
  href: string;
  /** the muted first line: a date, or "date · category" */
  meta: string;
  /** the post's title */
  title: string;
  /** optional byline: "name · 3 min read" */
  byline?: string;
  /** the byline's 24px avatar (an img); a muted circle when empty */
  avatar?: ReactNode;
}

export interface CursorPostRowProps {
  /** the section title */
  title: string;
  /** up to four cards */
  posts: CursorPost[];
  /** the orange link under the cards */
  more?: { label: string; href: string };
  className?: string;
}

/** Title, four small link cards, a "see more" link. A sideways scroller on phones. */
export function CursorPostRow({ title, posts, more, className }: CursorPostRowProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter">
        <CursorSectionTitle>{title}</CursorSectionTitle>
        <ul className="-mx-gutter flex snap-x snap-mandatory scroll-px-gutter gap-2.5 overflow-x-auto px-gutter [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {posts.map((post) => (
            <li key={post.href + post.title} className="w-[16.5rem] shrink-0 snap-start lg:w-auto">
              <a
                href={post.href}
                className="flex h-full min-h-[6.75rem] flex-col rounded-lg border border-border bg-card px-4 py-4 text-[0.9375rem] leading-6 transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-muted motion-reduce:transition-none lg:text-base"
              >
                <span className="text-muted-foreground">{post.meta}</span>
                <span className="text-foreground">{post.title}</span>
                {post.byline && (
                  <span className="mt-auto flex items-center gap-2 pt-3.5 text-muted-foreground">
                    <CursorMedia tone="plain" className="size-6 shrink-0 rounded-full">{post.avatar}</CursorMedia>
                    {post.byline}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
        {more && (
          <CursorArrowLink href={more.href} className="mt-4 text-[0.9375rem] leading-6 lg:text-base">
            {more.label}
          </CursorArrowLink>
        )}
      </div>
    </section>
  );
}
