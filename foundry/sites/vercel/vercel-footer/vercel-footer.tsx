import type { ReactNode } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { VercelMark } from "@foundry/vercel-mark";

export interface VercelFooterGroup {
  /** the group's title */
  title: string;
  /** its links; badge adds a small grey pill (e.g. "New") */
  links: { label: string; href: string; badge?: string }[];
}

export interface VercelFooterProps {
  /** link groups, in reading order (twelve on the original: two rows of six) */
  groups: VercelFooterGroup[];
  /** the company name (read to screen readers next to the mark) */
  brand: string;
  /** the mark (an svg or lucide icon) */
  mark: ReactNode;
  /** the blue mono status line under the mark */
  status?: { label: string; href: string };
  /** screen-reader labels for the appearance switch: system, light, dark */
  appearanceLabels?: [string, string, string];
  className?: string;
}

/** Six-column link directory with a mark, a status line and an appearance switch. */
export function VercelFooter({ groups, brand, mark, status, appearanceLabels, className }: VercelFooterProps) {
  const icons = [Monitor, Sun, Moon];
  return (
    <footer className={cn("bg-background px-gutter pt-14 pb-11 text-foreground", className)}>
      <div className="mx-auto max-w-page">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-1.5">
                    <a
                      href={link.href}
                      className="transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground motion-reduce:transition-none"
                    >
                      {link.label}
                    </a>
                    {link.badge ? (
                      <span className="rounded-full bg-muted px-2 text-[0.6875rem] leading-5 font-medium text-foreground">{link.badge}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <VercelMark brand={brand} mark={mark} size="sm" className="mt-11" />

        <div className="mt-12 flex items-center justify-between gap-6">
          {status ? (
            <a href={status.href} className="inline-flex items-center gap-2 font-mono text-[0.8125rem] text-highlight uppercase">
              <span aria-hidden className="size-2 rounded-full bg-highlight" />
              {status.label}
            </a>
          ) : (
            <span />
          )}
          {appearanceLabels ? (
            <div className="flex items-center rounded-full p-0.5 ring-1 ring-border">
              {icons.map((Icon, i) => (
                <button
                  key={appearanceLabels[i]}
                  type="button"
                  aria-label={appearanceLabels[i]}
                  aria-pressed={i === 0}
                  className="grid size-6 place-items-center rounded-full text-muted-foreground transition-colors duration-100 hover:text-foreground aria-pressed:bg-muted aria-pressed:text-foreground motion-reduce:transition-none"
                >
                  <Icon aria-hidden className="size-3.5" strokeWidth={1.75} />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
