import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface NewhaloProductSubnavProps {
  /** in-page anchors ("#features" …); the one in view is underlined in orange */
  links: { label: string; href: string }[];
  /** the lighter segment at the right end */
  cta: { label: string; href: string };
  /** screen-reader name of the phone dropdown */
  menuLabel?: string;
  className?: string;
}

/**
 * A graphite in-page navigation bar for long product pages. It appears once the first screen
 * is scrolled past and stays fixed 10px above the bottom of the window (at the top on phones,
 * where it folds into a dropdown). The section in view is underlined in orange.
 */
export function NewhaloProductSubnav({ links, cta, menuLabel = "Sections", className }: NewhaloProductSubnavProps) {
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const els = links.map((l) => document.querySelector<HTMLElement>(l.href)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(links.findIndex((l) => l.href === `#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [links]);

  const current = links[Math.max(0, active)];

  return (
    <nav
      aria-label={menuLabel}
      className={cn(
        "dark fixed inset-x-1.5 top-1.5 z-40 text-foreground transition-[transform,opacity] duration-400 ease-[cubic-bezier(0.32,0.94,0.6,1)] motion-reduce:transition-none lg:inset-x-2.5 lg:top-auto lg:bottom-2.5",
        shown ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0 lg:translate-y-4",
        className,
      )}
    >
      <div className="flex h-15 overflow-clip rounded-sm bg-card">
        {/* phones: the current section, opening a list */}
        <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="flex flex-1 items-center justify-between px-5 text-base lg:hidden">
          {current?.label}
          <ChevronDown aria-hidden strokeWidth={1} className={cn("size-6 transition-transform", open && "rotate-180")} />
        </button>
        {/* desktop: every section in a row */}
        <ul className="hidden flex-1 items-stretch gap-10 px-5 lg:flex">
          {links.map((l, i) => (
            <li key={l.href} className="relative flex items-center">
              <a href={l.href} className="text-base leading-none transition-colors hover:text-primary">
                {l.label}
              </a>
              <span aria-hidden className={cn("absolute inset-x-0 bottom-0 h-1 rounded-t-sm bg-primary transition-transform duration-300", i === active ? "scale-x-100" : "scale-x-0")} />
            </li>
          ))}
        </ul>
        <a href={cta.href} className="group/cta flex w-[48%] items-center justify-between bg-muted px-[0.9375rem] text-base lg:w-[11.9rem] lg:px-6">
          {cta.label}
          <ArrowRight aria-hidden strokeWidth={1} className="hidden size-6 transition-transform duration-300 group-hover/cta:translate-x-1 lg:block" />
        </a>
      </div>
      {open && (
        <ul className="mt-0.5 rounded-sm bg-card py-2 lg:hidden">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className={cn("block px-5 py-2.5 text-base", i === active && "text-primary")}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
