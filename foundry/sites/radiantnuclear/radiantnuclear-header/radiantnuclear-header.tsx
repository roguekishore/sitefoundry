import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./radiantnuclear-header.css";

export interface RadiantnuclearHeaderLink {
  label: string;
  href: string;
}

export interface RadiantnuclearHeaderProps {
  /** the wordmark, set in bold capitals next to the mark */
  brand: string;
  /** the small mark before the wordmark (an svg, img or lucide icon) */
  logo?: ReactNode;
  homeHref?: string;
  /** the links on the right, shown in small capitals (two or three short ones) */
  links: RadiantnuclearHeaderLink[];
  className?: string;
}

export function RadiantnuclearHeader({ brand, logo, homeHref = "/", links, className }: RadiantnuclearHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-50 h-0 font-sans text-foreground", className)}>
      <div className="absolute inset-x-3 top-3 mx-auto flex h-14 max-w-[calc(var(--page-width)-1.5rem)] items-center justify-between pr-4 pl-4 lg:h-16 lg:pr-6 lg:pl-6">
        {/* the frosted glass sits on its own layer so only it fades, not the links */}
        <div aria-hidden className="radiantnuclear-header-glass absolute inset-0 -z-10 bg-card/90 backdrop-blur-md" />
        <a href={homeHref} className="flex items-center gap-2 [&_svg]:size-7 lg:[&_svg]:size-8">
          {logo}
          <span className="text-[1.375rem] leading-none font-extrabold tracking-[0.01em] uppercase lg:text-2xl">{brand}</span>
        </a>
        <nav>
          <ul className="flex items-center gap-5 lg:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm leading-none font-medium uppercase text-foreground/85 transition-colors duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground motion-reduce:transition-none lg:text-[0.9375rem]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
