import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GrowthbookPost {
  /** mono category above the title */
  category: string;
  title: string;
  href: string;
  /** 16:9 thumbnail (img); a soft placeholder when empty */
  image?: ReactNode;
}

export interface GrowthbookResourcesProps {
  title: string;
  /** the big post on the left, with a grey summary line */
  featured: GrowthbookPost & { summary?: string };
  /** up to three compact rows on the right */
  posts: GrowthbookPost[];
  className?: string;
}

function Thumb({ image, className }: { image?: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-clip rounded-lg", className)}>
      <div className="size-full transition-transform duration-400 ease-[ease] group-hover:scale-105 motion-reduce:transition-none [&>img]:size-full [&>img]:object-cover">
        {image ?? (
          <div className="size-full bg-glow bg-[radial-gradient(ellipse_70%_90%_at_100%_0%,var(--highlight),transparent_70%),radial-gradient(ellipse_70%_80%_at_0%_100%,var(--foreground),transparent_75%)] opacity-80" />
        )}
      </div>
    </div>
  );
}

export function GrowthbookResources({ title, featured, posts, className }: GrowthbookResourcesProps) {
  return (
    <section className={cn("bg-linear-to-b from-background from-25% to-accent text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="border-x border-border px-10 pt-12 pb-16 lg:px-11 lg:pt-[5.25rem] lg:pb-24">
          <h2 className="font-display text-[1.75rem] leading-[1.3] font-normal lg:text-5xl lg:leading-[1.2]">{title}</h2>
          <div className="mt-10 grid gap-16 lg:mt-24 lg:grid-cols-[30.5rem_minmax(0,1fr)] lg:gap-14">
            <a href={featured.href} className="group block">
              <Thumb image={featured.image} className="aspect-[1.78]" />
              <p className="mt-9 font-mono text-[0.625rem] leading-[1.65]">{featured.category}</p>
              <h3 className="mt-5 text-2xl leading-[1.5] transition-colors duration-250 group-hover:text-primary motion-reduce:transition-none">{featured.title}</h3>
              {featured.summary && <p className="mt-5 max-w-[11rem] text-base leading-[1.65] text-muted-foreground sm:max-w-none">{featured.summary}</p>}
            </a>
            <ul className="grid content-start gap-16 lg:gap-14">
              {posts.map((p) => (
                <li key={p.title}>
                  <a href={p.href} className="group grid gap-4 lg:grid-cols-[13.6875rem_minmax(0,1fr)]">
                    <Thumb image={p.image} className="aspect-[1.8]" />
                    <div className="lg:pt-0.5">
                      <p className="font-mono text-[0.625rem] leading-[1.65]">{p.category}</p>
                      <h3 className="mt-2 max-w-[14rem] text-sm leading-[1.65] transition-colors duration-250 group-hover:text-primary motion-reduce:transition-none sm:max-w-none lg:mt-3 lg:text-base">
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
