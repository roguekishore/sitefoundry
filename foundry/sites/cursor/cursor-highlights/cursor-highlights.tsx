import type { ReactNode } from "react";
import { CursorPostRow } from "@foundry/cursor-post-row";

export interface CursorHighlight {
  /** where the post links to */
  href: string;
  /** the date, e.g. "Sep 30, 2026" */
  date: string;
  /** the post's category, e.g. "Research" */
  category: string;
  /** the post's title */
  title: string;
  /** the author's name */
  author: string;
  /** reading time, e.g. "6 min read" */
  readTime: string;
  /** the author's 24px avatar (an img); a muted circle when empty */
  avatar?: ReactNode;
}

export interface CursorHighlightsProps {
  /** the section title */
  title: string;
  /** four posts */
  posts: CursorHighlight[];
  /** the orange link under the cards */
  more?: { label: string; href: string };
  className?: string;
}

/** Title, four post cards with bylines, a link to the blog. */
export function CursorHighlights({ title, posts, more, className }: CursorHighlightsProps) {
  return (
    <CursorPostRow
      title={title}
      posts={posts.map((p) => ({
        href: p.href,
        meta: `${p.date} · ${p.category}`,
        title: p.title,
        byline: `${p.author} · ${p.readTime}`,
        avatar: p.avatar,
      }))}
      more={more}
      className={className}
    />
  );
}
