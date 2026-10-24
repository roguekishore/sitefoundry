import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MymindPill } from "@foundry/mymind-pill";
import "./mymind-header.css";

/** the colour of the small dot before a link */
export type MymindDot = "primary" | "highlight" | "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";

const dots: Record<MymindDot, string> = {
  primary: "bg-primary",
  highlight: "bg-highlight",
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
};

export interface MymindNavLink {
  /** link text */
  label: string;
  /** where it goes */
  href: string;
  /** dot colour before the text */
  dot: MymindDot;
}

export interface MymindHeaderProps {
  /** the wordmark text */
  brand: string;
  /** a small mark before the wordmark (an icon) */
  mark?: ReactNode;
  /** where the wordmark goes */
  brandHref: string;
  /** the middle links */
  links: MymindNavLink[];
  /** the quiet sign-in link before the button */
  signIn: MymindNavLink;
  /** the tangerine pill */
  cta: { label: string; href: string };
  /** screen-reader label of the phone menu button */
  menuLabel: string;
  className?: string;
}

function Dot({ tone }: { tone: MymindDot }) {
  return <span aria-hidden className={cn("size-[0.3125rem] shrink-0 rounded-full", dots[tone])} />;
}

/** Fixed header: wide bar that gathers into a floating pill as you scroll. */
export function MymindHeader({ brand, mark, brandHref, links, signIn, cta, menuLabel, className }: MymindHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("pointer-events-none fixed inset-x-0 top-0 z-50 px-5 lg:px-0", className)}>
      <div className="mymind-header-bar pointer-events-auto mx-auto mt-[1.5625rem] flex h-[3.125rem] items-center justify-between rounded-full bg-card/95 px-3.5 shadow-[0_6px_30px_color-mix(in_oklab,var(--muted-foreground)_14%,transparent)] lg:mt-[1.125rem] lg:h-[5.25rem] lg:bg-transparent lg:px-[3.75rem] lg:shadow-none">
        <a href={brandHref} className="flex items-center gap-1.5 font-[family-name:var(--mymind-round,var(--typeface-body))] text-lg font-bold tracking-[-0.01em] text-foreground lg:text-[1.375rem] [&_svg]:size-5 lg:[&_svg]:size-6">
          {mark}
          <span>{brand}</span>
        </a>

        <nav className="hidden items-center gap-[1.875rem] lg:flex" aria-label={brand}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="flex items-center gap-2 text-lg text-muted-foreground/80 transition-colors duration-200 ease-linear hover:text-foreground">
              <Dot tone={l.dot} />
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={signIn.href} className="flex items-center gap-2 font-[family-name:var(--mymind-round,var(--typeface-body))] text-[1.0625rem] font-semibold text-muted-foreground transition-colors duration-200 ease-linear hover:text-foreground">
            <Dot tone={signIn.dot} />
            {signIn.label}
          </a>
          <MymindPill href={cta.href} size="sm" className="h-[2.625rem] px-5 text-base">
            {cta.label}
          </MymindPill>
        </div>

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-12 place-items-center rounded-full bg-muted text-foreground lg:hidden [&_svg]:size-4"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={cn(
          "pointer-events-auto mx-auto mt-2 grid origin-top gap-1 rounded-[1.5rem] bg-card p-5 shadow-[0_6px_30px_color-mix(in_oklab,var(--muted-foreground)_14%,transparent)] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:hidden",
          open ? "opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        {[...links, signIn].map((l) => (
          <a key={l.label} href={l.href} className="flex items-center gap-3 py-2 text-lg text-muted-foreground">
            <Dot tone={l.dot} />
            {l.label}
          </a>
        ))}
        <MymindPill href={cta.href} className="mt-2">
          {cta.label}
        </MymindPill>
      </div>
    </header>
  );
}
