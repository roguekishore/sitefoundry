import { cn } from "@foundry/foundry-utils";
import { IncreaseButton } from "@foundry/increase-button";

export interface IncreaseUpdate {
  /** the post's title */
  title: string;
  /** a one or two line excerpt (cut with an ellipsis after three lines) */
  excerpt: string;
  /** the date, shown in mono (e.g. "Oct 7, 2026") */
  date: string;
  /** a machine-readable date for the time element (e.g. "2026-10-07") */
  dateTime?: string;
  href: string;
}

export interface IncreaseUpdatesProps {
  /** the section heading */
  title: string;
  /** the newest posts; four fill a desktop row */
  updates: IncreaseUpdate[];
  /** the outlined button under the list */
  more?: { label: string; href: string };
  className?: string;
}

/**
 * A changelog-style timeline: a small square dot per post joined by a hairline, across in
 * four columns on desktop and down the left on phones. The newest dot glows mint; hovering
 * a post underlines its title and turns its dot lime.
 */
export function IncreaseUpdates({ title, updates, more, className }: IncreaseUpdatesProps) {
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page border-x border-border px-gutter pt-[4.5rem] pb-20 lg:pt-section lg:pb-24">
        <h2 className="text-[1.75rem] leading-[1.2] font-semibold tracking-[-0.02em] lg:text-[2rem]">{title}</h2>
        <ol className="mt-10 grid lg:mt-14 lg:grid-cols-4">
          {updates.map((u, i) => (
            <li key={u.href} className="relative">
              <a href={u.href} className="group grid grid-cols-[2rem_1fr] gap-x-4 pb-8 lg:block lg:pb-0">
                {/* the dot and the hairline joining it to the next post */}
                <span aria-hidden className="relative flex flex-col items-center lg:flex-row">
                  <span
                    className={cn(
                      "grid size-5 shrink-0 place-items-center rounded-[5px] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
                      i === 0 ? "bg-primary/20 group-hover:bg-highlight" : "bg-accent group-hover:bg-highlight",
                    )}
                  >
                    <span className={cn("size-1.5 rounded-[2px]", i === 0 ? "bg-primary" : "bg-muted-foreground group-hover:bg-highlight-foreground")} />
                  </span>
                  <span className="mt-1.5 w-px flex-1 bg-border lg:mt-0 lg:mr-2 lg:ml-1.5 lg:h-px lg:w-auto" />
                </span>
                <span className="block lg:mt-6 lg:pr-6">
                  <span className="block text-base leading-6 text-foreground group-hover:underline">{u.title}</span>
                  <span className="mt-2 line-clamp-2 block lg:line-clamp-3 text-sm leading-5 text-muted-foreground">{u.excerpt}</span>
                  <time dateTime={u.dateTime} className="mt-3 block font-mono text-xs leading-4 text-muted-foreground">
                    {u.date}
                  </time>
                </span>
              </a>
            </li>
          ))}
        </ol>
        {more && (
          <IncreaseButton href={more.href} variant="outline" className="mt-0 lg:mt-12">
            {more.label}
          </IncreaseButton>
        )}
      </div>
    </section>
  );
}
