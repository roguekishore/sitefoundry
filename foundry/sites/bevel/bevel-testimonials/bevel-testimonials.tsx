import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BevelHeading } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";
import "./bevel-testimonials.css";

export interface BevelReview {
  /** the review's headline */
  title: ReactNode;
  /** who wrote it and when */
  byline: ReactNode;
  /** the review itself */
  quote: ReactNode;
  /** stars out of five */
  stars?: number;
}

export interface BevelTestimonialsProps {
  /** the title (two lines), set into the foot of the photo collage */
  title: ReactNode;
  /** the paragraph under it */
  lead?: ReactNode;
  /** the sixteen collage photos, column by column; muted placeholders when empty */
  photos?: ReactNode[];
  /** the review cards in the drifting row */
  reviews: BevelReview[];
  className?: string;
}

/**
 * The collage: eight columns of photos (outer → centre: two tall, three short, one long
 * dropped, one long), mirrored, so the middle forms an arch the title tucks into. Each
 * entry is [top offset, tile heights] in rem. Phones show only the four middle columns.
 */
const columns: [number, number[]][] = [
  [1.6875, [14.375, 14.375]],
  [0, [10.3125, 10.3125, 10.3125]],
  [5.4375, [22.1875]],
  [0, [22.1875]],
  [0, [22.1875]],
  [5.4375, [22.1875]],
  [0, [10.3125, 10.3125, 10.3125]],
  [1.6875, [14.375, 14.375]],
];

/**
 * Reviews on white: an arched collage of rounded photos with a big two-line title tucked
 * into its foot, a grey paragraph, then a row of pale review cards (orange stars, a
 * headline, a byline and the quote) drifting slowly left.
 */
export function BevelTestimonials({ title, lead, photos = [], reviews, className }: BevelTestimonialsProps) {
  let n = 0;
  const row = (copy: number) =>
    reviews.map((review, i) => (
      <li
        key={`${copy}-${i}`}
        aria-hidden={copy > 0 || undefined}
        className="h-[22.3rem] w-[21.25rem] shrink-0 rounded-[calc(var(--radius)*2)] bg-card px-8 py-8 text-card-foreground lg:w-[24rem]"
      >
        <span className="flex gap-0.5 text-highlight [&_svg]:size-6 [&_svg]:fill-current">
          {Array.from({ length: review.stars ?? 5 }, (_, s) => (
            <Star key={s} strokeWidth={0} />
          ))}
        </span>
        <p className="mt-3 text-[1.125rem] leading-[1.3] font-semibold">{review.title}</p>
        <p className="mt-2 text-[1.125rem] leading-[1.3] font-semibold text-muted-foreground">{review.byline}</p>
        <p className="mt-5 text-[1.125rem] leading-[1.3] font-medium">{review.quote}</p>
      </li>
    ));
  return (
    <section className={cn("bg-background pt-[9rem] pb-section text-foreground lg:pt-[13.5rem] lg:pb-[calc(var(--section-y)*2)]", className)}>
      <div className="flex h-[27.625rem] justify-center gap-4 overflow-clip lg:h-[33.125rem]">
        {columns.map(([top, tiles], c) => (
          <div key={c} className={cn("flex w-[5.8rem] shrink-0 flex-col gap-4 lg:w-[8.9375rem]", (c < 2 || c > 5) && "hidden lg:flex")} style={{ paddingTop: `${top}rem` }}>
            {tiles.map((h) => {
              const photo = photos[n++];
              return (
                <div key={n} className="shrink-0 overflow-clip rounded-[1.5rem]" style={{ height: `${h}rem` }}>
                  {photo ?? <BevelPlaceholder tone="muted" className="size-full" />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <BevelHeading title={title} lead={lead} className="relative mt-[1.875rem] max-w-[42rem] px-gutter lg:-mt-[3.625rem]" />
      <div className="mt-14 overflow-clip lg:mt-20">
        <ul className="bevel-reviews-track flex w-max gap-4 lg:gap-8">
          {row(0)}
          {row(1)}
        </ul>
      </div>
    </section>
  );
}
