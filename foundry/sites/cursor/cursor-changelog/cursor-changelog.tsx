import { CursorPostRow } from "@foundry/cursor-post-row";

export interface CursorRelease {
  /** where the entry links to */
  href: string;
  /** the release date, e.g. "Oct 9, 2026" */
  date: string;
  /** what shipped */
  title: string;
}

export interface CursorChangelogProps {
  /** the section title */
  title: string;
  /** the latest four releases */
  releases: CursorRelease[];
  /** the orange link under the cards */
  more?: { label: string; href: string };
  className?: string;
}

/** Title, four dated release cards, a link to the full changelog. */
export function CursorChangelog({ title, releases, more, className }: CursorChangelogProps) {
  return (
    <CursorPostRow
      title={title}
      posts={releases.map((r) => ({ href: r.href, meta: r.date, title: r.title }))}
      more={more}
      className={className}
    />
  );
}
