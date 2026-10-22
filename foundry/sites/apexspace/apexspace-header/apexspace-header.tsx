import { useEffect, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ApexspaceWordmark, type ApexspaceWordmarkProps } from "@foundry/apexspace-wordmark";
import "./apexspace-header.css";

export interface ApexspaceHeaderLink {
  /** the small index before the label, e.g. "1.0" */
  number: string;
  label: string;
  href: string;
  /** show a + after the label (a link that opens more) */
  more?: boolean;
}

export interface ApexspaceHeaderProps {
  /** the logo */
  wordmark: ApexspaceWordmarkProps;
  /** the numbered navigation cells */
  links: ApexspaceHeaderLink[];
  /** the last cell, with an arrow */
  cta: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Sticky transparent bar that fills on scroll; numbered nav cells split by hairlines. */
export function ApexspaceHeader({ wordmark, links, cta, menuLabel, className }: ApexspaceHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const cell = "group/cell flex h-full items-center gap-3.5 border-l border-border px-6 font-mono text-[0.75rem] leading-none tracking-[0.06em] uppercase";
  const dim = "text-foreground/60 transition-colors duration-250 ease-[ease] group-hover/cell:text-foreground motion-reduce:transition-none";

  return (
    <header data-open={open} className={cn("apexspace-header sticky top-0 z-50 -mb-[4.0625rem] h-[4.0625rem] text-foreground", className)}>
      <div aria-hidden className="apexspace-header-fill absolute inset-0 bg-background" />
      <div className="relative flex h-full items-stretch justify-between border-b border-border">
        <div className="flex items-center pl-gutter">
          <ApexspaceWordmark {...wordmark} />
        </div>

        <nav className="hidden h-full xl:flex">
          {links.map((l, i) => (
            <a key={l.label} href={l.href} className={cn(cell, i === 0 && "border-l-0")}>
              <span className={dim}>{l.number}</span>
              <span>{l.label}</span>
              {l.more && <Plus aria-hidden className={cn("size-3", dim)} strokeWidth={1.5} />}
            </a>
          ))}
          <a href={cta.href} className={cn(cell, "px-8")}>
            <span>{cta.label}</span>
            <ArrowRight aria-hidden className={cn("size-3.5", dim)} strokeWidth={1.5} />
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex w-14 flex-col items-center justify-center gap-[0.3125rem] pr-gutter xl:hidden"
        >
          <span className={cn("h-px w-6 bg-current transition-transform duration-300 motion-reduce:transition-none", open && "translate-y-[6px] rotate-45")} />
          <span className={cn("h-px w-6 bg-current transition-opacity duration-300 motion-reduce:transition-none", open && "opacity-0")} />
          <span className={cn("h-px w-6 bg-current transition-transform duration-300 motion-reduce:transition-none", open && "-translate-y-[6px] -rotate-45")} />
        </button>
      </div>

      {open && (
        <nav className="fixed inset-x-0 top-[4.0625rem] bottom-0 flex flex-col overflow-y-auto bg-background px-gutter pt-4 pb-10 xl:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 border-b border-border py-5 font-mono text-[0.875rem] leading-none tracking-[0.06em] uppercase"
            >
              <span className="text-foreground/60">{l.number}</span>
              <span>{l.label}</span>
              {l.more && <Plus aria-hidden className="ml-auto size-3.5 text-foreground/60" strokeWidth={1.5} />}
            </a>
          ))}
          <a
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-8 flex h-[3.125rem] items-center justify-between bg-primary px-8 font-mono text-[0.75rem] leading-none tracking-[0.06em] text-primary-foreground uppercase"
          >
            <span>{cta.label}</span>
            <ArrowRight aria-hidden className="size-3.5" strokeWidth={1.5} />
          </a>
        </nav>
      )}
    </header>
  );
}
