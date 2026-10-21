import { KononenkogroupLink } from "@foundry/kononenkogroup-link";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-header.css";

export interface KononenkogroupHeaderLink {
  label: string;
  href: string;
  /** the current page: underlined */
  active?: boolean;
  /** shown from 1024px only (the original drops "Index" on phones) */
  desktopOnly?: boolean;
}

export interface KononenkogroupHeaderProps {
  /** the wordmark, one line each; the last line is set in the serif */
  wordmark: string[];
  homeHref?: string;
  /** the links, written as one comma-separated line */
  links: KononenkogroupHeaderLink[];
  /** what follows every link but the last */
  separator?: string;
  className?: string;
}

/**
 * A fixed, transparent header: a three-line wordmark top left (the last line in serif) and a
 * comma-separated row of links top right. It inverts whatever is under it (blend: difference),
 * so it reads white on photos and black sections and black on white paper.
 */
export function KononenkogroupHeader({ wordmark, homeHref = "/", links, separator = ",", className }: KononenkogroupHeaderProps) {
  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between px-gutter pt-4 lg:pt-[1.2vw]",
        "text-background mix-blend-difference dark:text-foreground dark:mix-blend-normal",
        "font-sans text-[3.733vw] leading-none tracking-[-0.02em] lg:text-[max(10px,0.99vw)]",
        className,
      )}
    >
      <a href={homeHref} className="pointer-events-auto block">
        {wordmark.map((line, i) => (
          <span key={i} className="kononenkogroup-header-mask">
            <span className={cn("kononenkogroup-header-line block", i === wordmark.length - 1 && "font-display tracking-[-0.03em]")}>
              {line}
            </span>
          </span>
        ))}
      </a>
      <nav className="kononenkogroup-header-mask pointer-events-auto">
        <ul className="kononenkogroup-header-line flex gap-[0.4em]">
          {links.map((link, i) => (
            <li key={link.href} className={cn(link.desktopOnly && "hidden lg:block")}>
              <KononenkogroupLink href={link.href} active={link.active}>
                {link.label}
              </KononenkogroupLink>
              {i < links.length - 1 && separator}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
