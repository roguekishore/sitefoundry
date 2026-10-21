import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureButton } from "@foundry/storeyarchitecture-button";
import { StoreyarchitectureFrame } from "@foundry/storeyarchitecture-frame";
import { StoreyarchitectureRise } from "@foundry/storeyarchitecture-rise";

export interface StoreyarchitectureJournalPost {
  /** the post title (about two lines) */
  title: string;
  href: string;
  /** the frame's width / height, e.g. "1 / 1", "4 / 3", "6 / 7" */
  ratio: string;
  /** the photo (object-cover); empty shows a placeholder */
  media?: ReactNode;
}

export interface StoreyarchitectureJournalProps {
  /** the huge heading */
  heading: string;
  /** the paragraph at the right of the heading */
  intro: string;
  /** the small black button under the paragraph */
  cta: { label: string; href: string };
  /** the posts, two per row on desktop */
  posts: StoreyarchitectureJournalPost[];
  /** the label of each post's button */
  readLabel: string;
  /** the label that follows the pointer over a photo */
  hoverLabel: string;
  className?: string;
}

export function StoreyarchitectureJournal({ heading, intro, cta, posts, readLabel, hoverLabel, className }: StoreyarchitectureJournalProps) {
  return (
    <section className={cn("bg-background px-gutter pt-section pb-[5vw] font-[450] text-foreground tracking-[-0.02em] sm:pb-[2vw]", className)}>
      <div className="grid grid-cols-6 gap-x-gutter sm:grid-cols-12">
        <StoreyarchitectureRise as="h2" className="col-span-6 text-[12vw] leading-none sm:col-span-8 sm:text-[7vw]">
          {heading}
        </StoreyarchitectureRise>
        <StoreyarchitectureRise step={1} className="col-span-6 mt-[6vw] sm:col-span-4 sm:col-start-9 sm:mt-[1.6vw]">
          <p className="text-[4.3vw] leading-[1.2] sm:text-[1.6vw]">{intro}</p>
          <StoreyarchitectureButton href={cta.href} size="sm" className="mt-[4vw] sm:mt-[3.5vw]">
            {cta.label}
          </StoreyarchitectureButton>
        </StoreyarchitectureRise>
      </div>

      <ul className="mt-[15vw] grid items-start gap-y-[30vw] sm:mt-[15vw] sm:grid-cols-2 sm:gap-x-gutter sm:gap-y-[15vw]">
        {posts.map((post) => (
          <li key={post.href}>
            <a href={post.href} aria-label={post.title} className="block">
              <StoreyarchitectureFrame media={post.media} ratio={post.ratio} label={hoverLabel} />
            </a>
            <div className="mt-[3vw] flex items-start justify-between gap-gutter sm:mt-[1.4vw]">
              <h3 className="max-w-[65%] text-[4.3vw] leading-[1.2] sm:max-w-[68%] sm:text-[1.6vw]">
                <a href={post.href}>{post.title}</a>
              </h3>
              <StoreyarchitectureButton href={post.href} size="sm" className="mt-[1vw] sm:mt-0">
                {readLabel}
              </StoreyarchitectureButton>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
