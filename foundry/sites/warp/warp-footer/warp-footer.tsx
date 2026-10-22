import { cn } from "@foundry/foundry-utils";
import { WarpMark, type WarpMarkProps } from "@foundry/warp-mark";

export interface WarpFooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface WarpFooterProps {
  /** the icon mark (shown icon-only) */
  mark: WarpMarkProps;
  /** the short line under the mark */
  tagline: string;
  /** five in the original */
  columns: WarpFooterColumn[];
  /** the line under the rule */
  legal: string;
  className?: string;
}

/** Mark and tagline, five link columns, a rule and the copyright. */
export function WarpFooter({ mark, tagline, columns, legal, className }: WarpFooterProps) {
  return (
    <footer className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-9 pb-9 lg:px-6 lg:pb-[2.25rem]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6 lg:gap-x-6">
          <div>
            <WarpMark {...mark} iconOnly />
            <p className="mt-4 max-w-[13rem] text-[0.8125rem] leading-[1.45] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-muted-foreground">{tagline}</p>
          </div>
          {columns.map((c) => (
            <div key={c.heading}>
              <p className="pt-1 text-[0.6875rem] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-foreground/40 lowercase">{c.heading}</p>
              <ul className="mt-4 flex flex-col gap-[0.4375rem] text-[0.8125rem] leading-[1.45]">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.8125rem] leading-[1.45] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-foreground/78 lowercase transition-colors duration-150 hover:text-primary motion-reduce:transition-none">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-9 border-t border-border pt-5 text-xs tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-foreground/40">{legal}</p>
      </div>
    </footer>
  );
}
