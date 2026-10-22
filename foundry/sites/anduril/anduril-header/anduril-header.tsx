import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AndurilWordmark, type AndurilWordmarkProps } from "@foundry/anduril-wordmark";

export interface AndurilHeaderLink {
  label: string;
  href: string;
  /** show a + after the label (a link that opens more) */
  more?: boolean;
}

export interface AndurilHeaderProps {
  /** the logo */
  wordmark: AndurilWordmarkProps;
  /** the main navigation, centred on desktop */
  links: AndurilHeaderLink[];
  /** the utility links on the right, e.g. search and company */
  utilities: AndurilHeaderLink[];
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

// Label that rolls up on hover: the copy underneath slides into its place.
function RollLabel({ label }: { label: string }) {
  return (
    <span className="relative inline-flex h-[1.2em] overflow-clip">
      <span className="flex flex-col transition-transform duration-200 ease-out group-hover/link:-translate-y-1/2 motion-reduce:transition-none">
        <span className="transition-opacity duration-200 ease-out group-hover/link:opacity-50">{label}</span>
        <span aria-hidden>{label}</span>
      </span>
    </span>
  );
}

/** Fixed black bar that hides on scroll down and returns on scroll up; full-screen menu on phones. */
export function AndurilHeader({ wordmark, links, utilities, menuLabel, className }: AndurilHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 4) return;
      setHidden(y > last && y > 72);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const linkClass = "group/link inline-flex items-center gap-1.5 text-[0.9375rem] leading-[1.2] font-medium tracking-[-0.01em]";

  return (
    <header
      data-hidden={hidden && !open}
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background text-foreground transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] data-[hidden=true]:-translate-y-full motion-reduce:transition-none",
        className,
      )}
    >
      <div className="grid h-[4.5rem] grid-cols-[1fr_auto] items-center px-gutter lg:grid-cols-[1fr_auto_1fr]">
        <AndurilWordmark {...wordmark} />

        <nav className="hidden items-center gap-[2.625rem] lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={linkClass}>
              <RollLabel label={l.label} />
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-[2.625rem] lg:flex">
          {utilities.map((l) => (
            <a key={l.label} href={l.href} className={linkClass}>
              <RollLabel label={l.label} />
              {l.more && <Plus aria-hidden className="size-4" strokeWidth={2} />}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex size-10 -mr-2 flex-col items-center justify-center gap-2 lg:hidden"
        >
          <span className={cn("h-0.5 w-[1.625rem] bg-current transition-transform duration-300 motion-reduce:transition-none", open && "translate-y-[5px] rotate-45")} />
          <span className={cn("h-0.5 w-[1.625rem] bg-current transition-transform duration-300 motion-reduce:transition-none", open && "-translate-y-[5px] -rotate-45")} />
        </button>
      </div>

      {open && (
        <nav className="anduril-header-menu fixed inset-x-0 top-[4.5rem] bottom-0 flex flex-col overflow-y-auto bg-background px-gutter pt-8 pb-10 lg:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="py-1.5 font-display text-[2.25rem] leading-[1.1] font-medium tracking-[-0.02em]" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="mt-auto flex flex-col gap-3 pt-10">
            {utilities.map((l) => (
              <a key={l.label} href={l.href} className="inline-flex items-center gap-1.5 text-[1.125rem] text-muted-foreground" onClick={() => setOpen(false)}>
                {l.label}
                {l.more && <Plus aria-hidden className="size-4" strokeWidth={2} />}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
