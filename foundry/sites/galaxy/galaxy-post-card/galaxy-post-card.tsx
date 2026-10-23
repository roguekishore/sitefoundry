import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GalaxyPlaceholder } from "@foundry/galaxy-placeholder";

export interface GalaxyPostCardProps {
  /** the headline */
  title: string;
  /** where the card links */
  href: string;
  /** the image (an <img> or <video>); a muted placeholder at the same ratio when empty */
  media?: ReactNode;
  /** screen-reader text for the placeholder */
  mediaLabel?: string;
  /** a category before the date, e.g. "Research" */
  category?: string;
  /** the date, as shown */
  date?: string;
  /** topic chips under the title */
  tags?: string[];
  /** stack: image above the text (2:1) · row: a square cover beside the text */
  layout?: "stack" | "row";
  /** give the image a hairline border (the footer's cards have one) */
  framed?: boolean;
  className?: string;
}

/** One article, podcast or announcement. */
export function GalaxyPostCard({ title, href, media, mediaLabel, category, date, tags, layout = "stack", framed, className }: GalaxyPostCardProps) {
  const row = layout === "row";
  return (
    <article className={cn("group relative", row ? "flex items-start gap-3 lg:gap-6" : "flex flex-col", className)}>
      <div
        className={cn(
          "overflow-clip rounded-lg",
          row ? "aspect-square w-[6.5rem] shrink-0 lg:w-[12.125rem]" : "aspect-[2/1] w-full",
          framed && "border border-border",
        )}
      >
        {media ?? <GalaxyPlaceholder label={mediaLabel} />}
      </div>
      <div className={cn("flex flex-col", row ? "pt-0.5" : "pt-6")}>
        {(category || date) && (
          <p className="text-xs leading-[1.5] tracking-[0.1em] text-muted-foreground/80 uppercase lg:text-sm lg:leading-5">
            {category && <span>{category}</span>}
            {category && date && <span aria-hidden> • </span>}
            {date && <span>{date}</span>}
          </p>
        )}
        <h3 className="mt-2 text-xl leading-7 tracking-[-0.01em] text-foreground lg:text-2xl lg:leading-8">
          <a
            href={href}
            className="transition-colors duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] after:absolute after:inset-0 group-hover:text-muted-foreground motion-reduce:transition-none"
          >
            {title}
          </a>
        </h3>
        {tags && tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <li key={tag} className="rounded-md border border-foreground/75 px-2 py-0.5 text-base leading-6 text-foreground/80">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
