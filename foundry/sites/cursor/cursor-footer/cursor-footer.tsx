import { ChevronDown, Globe, Monitor, Moon, ShieldCheck, Sun } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface CursorFooterColumn {
  /** the muted column heading */
  title: string;
  /** the column's links */
  links: { label: string; href: string }[];
}

export interface CursorFooterProps {
  /** up to five link columns */
  columns: CursorFooterColumn[];
  /** e.g. "© 2026 Fernwork Labs, Inc." */
  copyright: string;
  /** the line after the shield, e.g. certifications */
  compliance?: string;
  /** accessible names of the system / light / dark buttons, in that order */
  modeLabels?: [string, string, string];
  /** which of the three looks pressed */
  activeMode?: "system" | "light" | "dark";
  /** the language pill's label */
  language?: string;
  className?: string;
}

const pill = "rounded-full bg-secondary";

/** Five link columns over a bottom row of legal text and two pills. */
export function CursorFooter({ columns, copyright, compliance, modeLabels, activeMode = "system", language, className }: CursorFooterProps) {
  const modes = [
    { key: "system", Icon: Monitor },
    { key: "light", Icon: Sun },
    { key: "dark", Icon: Moon },
  ] as const;
  return (
    <footer className={cn("bg-card pt-section pb-16 text-foreground lg:pb-8", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-5 lg:gap-x-0">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.9375rem] leading-[1.4] text-muted-foreground lg:text-sm lg:leading-[1.5]">{col.title}</h3>
              <ul className="mt-2.5 flex flex-col gap-2.5 lg:gap-[0.5625rem]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[0.9375rem] leading-[1.4] transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground/75 motion-reduce:transition-none lg:text-sm lg:leading-[1.5]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-26 flex flex-col gap-11 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="grid grid-cols-[auto_1fr] gap-4 text-[0.9375rem] leading-normal text-muted-foreground lg:flex lg:items-center lg:gap-4 lg:text-sm">
            <p className="max-lg:max-w-[9em]">{copyright}</p>
            {compliance && (
              <p className="flex items-start gap-1 lg:items-center">
                <ShieldCheck aria-hidden className="mt-1 size-3.5 shrink-0 lg:mt-0" strokeWidth={1.75} />
                {compliance}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3.5">
            {modeLabels && (
              <div className={cn(pill, "flex p-0.5")}>
                {modes.map(({ key, Icon }, i) => (
                  <button
                    key={key}
                    type="button"
                    aria-label={modeLabels[i]}
                    aria-pressed={activeMode === key}
                    className={cn(
                      "grid h-7 w-9 place-items-center rounded-full text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none lg:h-6 lg:w-8.5",
                      activeMode === key && "bg-accent text-foreground",
                    )}
                  >
                    <Icon aria-hidden className="size-3.5" strokeWidth={1.75} />
                  </button>
                ))}
              </div>
            )}
            {language && (
              <button type="button" className={cn(pill, "flex h-8 items-center gap-1 px-3 text-[0.9375rem] lg:h-7 lg:text-sm")}>
                <Globe aria-hidden className="size-3.5" strokeWidth={1.75} />
                {language}
                <ChevronDown aria-hidden className="size-3.5" strokeWidth={2} />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
