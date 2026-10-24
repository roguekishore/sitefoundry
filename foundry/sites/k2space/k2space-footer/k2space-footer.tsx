import { cn } from "@foundry/foundry-utils";
import { K2spaceWordmark, type K2spaceWordmarkProps } from "@foundry/k2space-wordmark";

export interface K2spaceFooterLink {
  /** the text */
  label: string;
  /** omit for plain text (an address line) */
  href?: string;
}

export interface K2spaceFooterColumn {
  /** groups of lines; groups are separated by a blank line */
  groups: K2spaceFooterLink[][];
}

export interface K2spaceFooterProps {
  /** the wordmark (two words around an orbit icon) */
  brand: K2spaceWordmarkProps;
  /** three columns: on desktop they start at 50%, 67% and 84% of the width */
  columns: K2spaceFooterColumn[];
  /** the copyright line, bottom right */
  copyright: string;
  className?: string;
}

/** A black footer: big wordmark left, plain columns from the half, copyright bottom right. */
export function K2spaceFooter({ brand, columns, copyright, className }: K2spaceFooterProps) {
  return (
    <footer
      className={cn(
        "bg-background px-gutter pt-[45px] pb-6 font-sans font-medium text-foreground [font-stretch:var(--k2space-stretch,100%)] lg:pt-[2.6vw] lg:pb-[4vw]",
        className,
      )}
    >
      <div className="lg:grid lg:grid-cols-[47.15vw_17.25vw_17.25vw_1fr]">
        <K2spaceWordmark {...brand} className={cn("text-[15px] lg:text-[1.58vw]", brand.className)} />
        <div className="mt-[50px] grid grid-cols-[56%_1fr] gap-y-10 lg:contents">
          {columns.map((column, c) => (
            <div
              key={c}
              className={cn(
                "flex flex-col gap-[1.2em] text-base/[1.2] lg:text-[max(1rem,1.3227vw)]/[1.2]",
                // phones: a column of several groups spreads them across both grid columns
                column.groups.length > 1 && "max-lg:col-span-2 max-lg:grid max-lg:grid-cols-[56%_1fr] max-lg:gap-0",
              )}
            >
              {column.groups.map((group, g) => (
                <ul key={g}>
                  {group.map((line, l) => (
                    <li key={l}>
                      {line.href ? (
                        <a href={line.href} className="transition-opacity duration-200 ease-[ease] hover:opacity-80 motion-reduce:transition-none">
                          {line.label}
                        </a>
                      ) : (
                        line.label
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-[10px]/none lg:mt-[9.3vw] lg:text-right lg:text-[max(1rem,1.3227vw)]/none">{copyright}</p>
    </footer>
  );
}
