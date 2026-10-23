import { useId, type ReactNode } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";

export interface PuzzleHeaderLink {
  label: string;
  href: string;
  /** shows a chevron, as for items that open a menu */
  menu?: boolean;
}

export interface PuzzleHeaderProps {
  /** the lavender strip above the nav; leave out for none */
  announcement?: {
    /** the bold lead-in, e.g. "New:" */
    lead: string;
    /** the sentence after it */
    text: string;
    /** the bold link at the end (shown from tablet up) */
    link: { label: string; href: string };
  };
  /** screen-reader label for the strip's close cross */
  closeLabel: string;
  /** the wordmark: a name with a small icon on a green tile */
  brand: { name: string; href: string; icon?: ReactNode };
  /** the centre nav links (desktop) */
  links: PuzzleHeaderLink[];
  /** the ink button (desktop) */
  demo: { label: string; href: string };
  /** the soft violet button (always shown) */
  trial: { label: string; href: string };
  /** the plain link at the far right (desktop) */
  signIn: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Puzzle's sticky header: announcement strip over the nav bar. */
export function PuzzleHeader({ announcement, closeLabel, brand, links, demo, trial, signIn, menuLabel, className }: PuzzleHeaderProps) {
  const id = useId();
  return (
    <header className={cn("sticky top-0 z-40 text-foreground", className)}>
      {announcement && (
        <div className="bg-background has-[:checked]:hidden">
          <div className="relative flex h-[2.625rem] items-center bg-secondary/55 pr-12 pl-8 text-sm lg:h-[2.875rem] lg:justify-center lg:px-14 lg:text-[0.9375rem]">
            <input id={id} type="checkbox" className="peer sr-only" />
            <a href={announcement.link.href} className="truncate">
              <strong className="font-semibold">{announcement.lead}</strong> {announcement.text}{" "}
              <span className="hidden font-semibold sm:inline">{announcement.link.label}</span>
              <ArrowRight aria-hidden className="ml-0.5 inline size-4 align-[-0.15em]" strokeWidth={2} />
            </a>
            <label
              htmlFor={id}
              aria-label={closeLabel}
              className="absolute top-1/2 right-4 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full peer-focus-visible:outline-2 peer-focus-visible:outline-ring lg:right-4"
            >
              <X aria-hidden className="size-5" strokeWidth={1.75} />
            </label>
          </div>
        </div>
      )}

      <nav className="relative border-b border-border bg-background">
        <div className="mx-auto flex h-[4.3rem] max-w-page items-center justify-between gap-6 px-4 lg:h-[4.5625rem] lg:px-[3.25rem]">
          <a href={brand.href} className="flex shrink-0 items-center gap-2.5 font-display text-lg/none font-semibold tracking-[-0.01em] lg:gap-3 lg:text-2xl/none">
            {brand.icon && (
              <span className="flex size-8 items-center justify-center rounded-[calc(var(--radius)*0.6)] bg-glow text-foreground lg:size-10 [&_svg]:size-4 lg:[&_svg]:size-5">
                {brand.icon}
              </span>
            )}
            {brand.name}
          </a>

          <ul className="hidden items-center gap-6 xl:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="flex items-center gap-1 text-sm transition-colors duration-300 hover:text-highlight motion-reduce:transition-none"
                >
                  {l.label}
                  {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={1.75} />}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <PuzzleButton href={demo.href} size="sm" className="hidden px-[1.875rem] xl:inline-flex">
              {demo.label}
            </PuzzleButton>
            <PuzzleButton href={trial.href} variant="violet" size="sm" className="px-[1.875rem]">
              {trial.label}
            </PuzzleButton>
            <a href={signIn.href} className="ml-1 hidden text-sm transition-colors duration-300 hover:text-highlight motion-reduce:transition-none xl:inline">
              {signIn.label}
            </a>

            <details className="group xl:hidden">
              <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
                <Menu aria-hidden className="size-8 group-open:hidden" strokeWidth={1.5} />
                <X aria-hidden className="hidden size-7 group-open:block" strokeWidth={1.5} />
              </summary>
              <div className="absolute inset-x-0 top-full max-h-[calc(100svh-7rem)] overflow-y-auto border-b border-border bg-background px-gutter pt-2 pb-6">
                <ul className="divide-y divide-border">
                  {links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="flex items-center justify-between py-4 text-lg">
                        {l.label}
                        {l.menu && <ChevronDown aria-hidden className="size-5 text-muted-foreground" strokeWidth={1.5} />}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href={signIn.href} className="block py-4 text-lg">
                      {signIn.label}
                    </a>
                  </li>
                </ul>
                <PuzzleButton href={demo.href} className="mt-4 w-full">
                  {demo.label}
                </PuzzleButton>
              </div>
            </details>
          </div>
        </div>
      </nav>
    </header>
  );
}
