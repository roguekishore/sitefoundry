import { cn } from "@foundry/foundry-utils";
import { GalaxyPostCard, type GalaxyPostCardProps } from "@foundry/galaxy-post-card";

export interface GalaxyPostGridProps {
  /** the section label on the left */
  title: string;
  /** the underlined link on the right */
  viewAll?: { label: string; href: string };
  /** the cards */
  posts: GalaxyPostCardProps[];
  /** cards per row on desktop */
  columns?: 3 | 4;
  className?: string;
}

export function GalaxyPostGrid({ title, viewAll, posts, columns = 3, className }: GalaxyPostGridProps) {
  return (
    <section className={cn("bg-background py-section text-foreground lg:py-16", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex items-end justify-between gap-6 border-b border-foreground/80 pb-4">
          <h2 className="text-xl leading-7">{title}</h2>
          {viewAll && (
            <a href={viewAll.href} className="text-base leading-6 underline underline-offset-2 transition-colors duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] hover:text-muted-foreground motion-reduce:transition-none">
              {viewAll.label}
            </a>
          )}
        </div>
        <div className={cn("mt-6 grid gap-7 md:grid-cols-2", columns === 3 ? "lg:grid-cols-3 lg:gap-12" : "lg:grid-cols-4 lg:gap-6")}>
          {posts.map((post) => (
            <GalaxyPostCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
