import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepButton } from "@foundry/eightsleep-button";
import { EightsleepHeading } from "@foundry/eightsleep-heading";
import { EightsleepMarquee } from "@foundry/eightsleep-marquee";
import { EightsleepMedia } from "@foundry/eightsleep-media";
import { EightsleepRating, type EightsleepRatingProps } from "@foundry/eightsleep-rating";
import { EightsleepReveal } from "@foundry/eightsleep-reveal";

export interface EightsleepStory {
  type: "story";
  /** the member's name, over the photo */
  name: ReactNode;
  /** under the name, e.g. "Tidewell members" */
  role?: ReactNode;
  /** the quote, set large in the narrow serif */
  quote: ReactNode;
  /** the photo */
  media?: ReactNode;
  /** the "read more" link */
  link?: { label: ReactNode; href: string };
}

export interface EightsleepPost {
  name: ReactNode;
  handle: ReactNode;
  /** the post's text; wrap mentions in <span className="text-highlight"> */
  text: ReactNode;
  /** e.g. "9:12 PM · Mar 3, 2026" */
  date?: ReactNode;
  /** the avatar image */
  avatar?: ReactNode;
  /** the network's icon, top-right */
  icon?: ReactNode;
}

export interface EightsleepPosts {
  type: "posts";
  /** one or two posts, stacked */
  posts: EightsleepPost[];
}

export interface EightsleepReviewsProps {
  rating?: EightsleepRatingProps;
  title: ReactNode;
  /** the small mono label by the curve's last dot, e.g. "7:00 AM" */
  curveLabel?: ReactNode;
  /** the white button */
  cta?: { label: ReactNode; href: string };
  /** the cards in the track, in order */
  items: (EightsleepStory | EightsleepPosts)[];
  /** seconds per lap of the track */
  duration?: number;
  className?: string;
}

const lift = "transition-shadow duration-250 hover:shadow-[4px_4px_12px_color-mix(in_oklab,var(--background)_25%,transparent)]";

function Story({ item }: { item: EightsleepStory }) {
  return (
    <article className={cn("group flex h-[348px] w-[340px] flex-col rounded-2xl bg-foreground p-[7px] text-background lg:h-[330px] lg:w-[646px] lg:flex-row", lift)}>
      <div className="relative h-[175px] shrink-0 overflow-clip rounded-xl lg:h-full lg:w-[312px]">
        <EightsleepMedia media={item.media} tone="inverse" className="absolute inset-0 transition-transform duration-250 group-hover:scale-[1.025] motion-reduce:transition-none" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-background/50" />
        <div className="absolute bottom-4 left-4 text-foreground">
          <p className="text-[18px] leading-[1.2] font-bold">{item.name}</p>
          {item.role && <p className="text-[14px] leading-[1.3]">{item.role}</p>}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between px-3 pt-4 pb-3 lg:px-7 lg:pt-6 lg:pb-5">
        <blockquote className="font-[family-name:var(--eightsleep-quote,var(--typeface-display))] text-[24px] leading-[1.1] tracking-[-0.01em] lg:text-[28px] lg:leading-[1.15]">
          {item.quote}
        </blockquote>
        {item.link && (
          <a href={item.link.href} className="text-[14px] font-bold opacity-70 underline underline-offset-2 transition-opacity hover:opacity-100 lg:text-[15px]">
            {item.link.label}
          </a>
        )}
      </div>
    </article>
  );
}

function Post({ post }: { post: EightsleepPost }) {
  return (
    <article className={cn("relative rounded-xl bg-foreground/95 p-4 text-background lg:px-4 lg:py-[18px]", lift)}>
      <div className="flex items-center gap-2">
        <EightsleepMedia media={post.avatar} tone="inverse" className="size-[42px] shrink-0 rounded-full" />
        <div className="min-w-0">
          <p className="truncate text-[13px] leading-[1.3] font-bold">{post.name}</p>
          <p className="truncate text-[11px] leading-[1.3] opacity-55">{post.handle}</p>
        </div>
      </div>
      {post.icon && <span className="absolute top-4 right-4 [&_svg]:size-5">{post.icon}</span>}
      <p className="mt-3 text-[14px] leading-[1.4] lg:text-[15px]">{post.text}</p>
      {post.date && <p className="mt-3 text-[9px] opacity-55">{post.date}</p>}
    </article>
  );
}

export function EightsleepReviews({ rating, title, curveLabel, cta, items, duration = 90, className }: EightsleepReviewsProps) {
  return (
    <section className={cn("dark relative isolate overflow-clip bg-linear-to-b from-background from-25% via-secondary via-70% to-accent pt-[60px] pb-16 text-foreground lg:pt-[56px] lg:pb-[112px]", className)}>
      {/* a night-time curve with dots across the band, behind the copy */}
      <svg aria-hidden viewBox="0 0 1440 380" preserveAspectRatio="none" className="absolute inset-x-0 top-[40px] -z-10 h-[300px] w-full text-foreground/30 lg:top-[80px] lg:h-[380px]">
        <path d="M0 278 C 180 340, 330 382, 452 380 S 760 330, 1000 205 S 1330 40, 1440 18" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div aria-hidden className="absolute inset-x-0 top-[40px] -z-10 h-[300px] lg:top-[80px] lg:h-[380px]">
        {[
          [16.7, 94],
          [31.4, 99.8],
          [46.3, 91],
          [61.3, 69.5],
          [74.6, 44.8],
          [89.3, 18.7],
        ].map(([x, y], i) => (
          <span key={i} className="absolute size-1.5 -translate-1/2 rounded-full bg-foreground/55" style={{ left: `${x}%`, top: `${y}%` }} />
        ))}
        {curveLabel && <span className="absolute top-[24%] left-[87.3%] hidden font-mono text-[11px] text-foreground/50 lg:block">{curveLabel}</span>}
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center px-gutter">
        {rating && (
          <EightsleepReveal>
            <EightsleepRating size="lg" {...rating} />
          </EightsleepReveal>
        )}
        <EightsleepHeading title={title} className="mt-8 lg:mt-10" />
        {cta && (
          <EightsleepReveal step={2} className="mt-10 lg:mt-12">
            <EightsleepButton href={cta.href} size="lg">
              {cta.label}
            </EightsleepButton>
          </EightsleepReveal>
        )}
      </div>

      <EightsleepMarquee
        className="mt-14 lg:mt-20"
        duration={duration}
        gap="wide"
        items={items.map((item, i) =>
          item.type === "story" ? (
            <Story key={i} item={item} />
          ) : (
            <div key={i} className="flex h-[348px] w-[300px] flex-col justify-center gap-4 lg:h-[330px] lg:w-[432px]">
              {item.posts.map((p, j) => (
                <Post key={j} post={p} />
              ))}
            </div>
          ),
        )}
      />
    </section>
  );
}
