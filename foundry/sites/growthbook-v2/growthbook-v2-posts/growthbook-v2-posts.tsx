import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2Panel } from "@foundry/growthbook-v2-panel";

export interface GrowthbookV2Post {
  /** the tiny mono label above the title */
  category: string;
  title: string;
  href: string;
  /** the 16:9 thumbnail (image); empty = a gradient placeholder */
  media?: ReactNode;
  /** placeholder wash when there is no media */
  tone?: "violet" | "sky" | "mint" | "navy";
}

export interface GrowthbookV2PostsProps {
  title: string;
  /** the big post on the left */
  featured: GrowthbookV2Post & { excerpt?: string };
  /** up to three compact posts on the right */
  posts: GrowthbookV2Post[];
  className?: string;
}

export function GrowthbookV2Posts({ title, featured, posts, className }: GrowthbookV2PostsProps) {
  return (
    <section
      className={cn(
        "bg-linear-to-b from-background to-[color-mix(in_oklab,var(--chart-4)_30%,var(--background))] text-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="border-x border-border px-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <GrowthbookV2Heading size="card">{title}</GrowthbookV2Heading>
          <div className="mt-8 grid gap-16 lg:mt-24 lg:grid-cols-[30.5rem_minmax(0,1fr)] lg:gap-14">
            <a href={featured.href} className="group block">
              <GrowthbookV2Panel tone={featured.tone ?? "violet"} media={featured.media} className="aspect-[488/275]" />
              <p className="mt-8 font-mono text-[0.625rem]/[1.65] lg:mt-10">{featured.category}</p>
              <h3 className="mt-4 text-2xl/[1.5] transition-colors duration-250 group-hover:text-primary motion-reduce:transition-none">
                {featured.title}
              </h3>
              {featured.excerpt && <p className="mt-6 max-w-[11rem] text-base/[1.65] text-muted-foreground/80 sm:max-w-none">{featured.excerpt}</p>}
            </a>
            <ul className="flex flex-col gap-16 lg:gap-[3.6rem]">
              {posts.map((p) => (
                <li key={p.title}>
                  <a href={p.href} className="group grid gap-6 sm:grid-cols-[13.6875rem_minmax(0,1fr)] sm:gap-4">
                    <GrowthbookV2Panel tone={p.tone ?? "sky"} media={p.media} className="aspect-[219/122]" />
                    <div>
                      <p className="font-mono text-[0.625rem]/[1.65] sm:mt-1">{p.category}</p>
                      <h3 className="mt-2 max-w-[16rem] text-base/[1.65] transition-colors duration-250 group-hover:text-primary motion-reduce:transition-none sm:max-w-none">
                        {p.title}
                      </h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
