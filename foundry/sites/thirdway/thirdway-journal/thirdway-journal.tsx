import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ThirdwayArrowLink } from "@foundry/thirdway-arrow-link";
import { ThirdwayCarousel } from "@foundry/thirdway-carousel";
import { ThirdwayCountPill } from "@foundry/thirdway-count-pill";
import { ThirdwayHeading } from "@foundry/thirdway-heading";
import { ThirdwayPlaceholder } from "@foundry/thirdway-placeholder";

export interface ThirdwayPost {
  /** day, month and year as separate figures, e.g. ["06", "10", "2026"] */
  date: [string, string, string];
  title: string;
  href: string;
  /** cover photo (3:2); a placeholder when empty */
  image?: ReactNode;
}

export interface ThirdwayJournalProps {
  heading: string;
  viewAll: { label: string; href: string };
  /** the posts; the first is shown large on desktop */
  posts: ThirdwayPost[];
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

/** Heading with a "view all" link, then posts: a snap carousel on phones and tablets, a 6 / 3 / 3 column grid from xl. */
export function ThirdwayJournal({ heading, viewAll, posts, prevLabel, nextLabel, className }: ThirdwayJournalProps) {
  return (
    <section className={cn("relative bg-background py-[5.5rem] text-foreground md:py-[7.65rem]", className)}>
      <div className="flex items-end justify-between gap-4 px-gutter pb-6 md:px-[calc(var(--page-gutter)*2)] md:pb-12">
        <ThirdwayHeading text={heading} />
        <ThirdwayArrowLink label={viewAll.label} href={viewAll.href} size="sm" chip={false} className="mb-2 hidden md:inline-flex" />
      </div>
      <ThirdwayCarousel
        prevLabel={prevLabel}
        nextLabel={nextLabel}
        label={null}
        controlsClassName="lg:hidden"
        trackClassName="lg:grid lg:snap-none lg:grid-cols-3 lg:items-start lg:overflow-visible xl:grid-cols-12"
        itemClassName={(i) => cn("w-[19.4rem] sm:w-[22rem] lg:w-auto", i === 0 ? "xl:col-span-6" : "xl:col-span-3")}
      >
        {posts.map((post, i) => (
          <a key={post.href + post.title} href={post.href} className="group block rounded-[2px] bg-foreground/6 p-2">
            <div className="aspect-[3/2] overflow-clip rounded-[2px]">
              <div className="size-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04] motion-reduce:transition-none">
                {post.image ?? <ThirdwayPlaceholder className="size-full rounded-none" />}
              </div>
            </div>
            <div className="flex items-center gap-0.5 px-2 pt-3">
              {post.date.map((d, k) => (
                <ThirdwayCountPill key={k} value={d} />
              ))}
            </div>
            <h3 className={cn("px-2 pt-3 pb-3 text-xl leading-[1.1] font-[560] tracking-[-0.04em]", i === 0 && "xl:pb-4")}>{post.title}</h3>
          </a>
        ))}
      </ThirdwayCarousel>
      <div className="px-gutter pt-0 md:hidden">
        <ThirdwayArrowLink label={viewAll.label} href={viewAll.href} size="sm" chip={false} className="-mt-5 ml-auto flex w-fit" />
      </div>
    </section>
  );
}
