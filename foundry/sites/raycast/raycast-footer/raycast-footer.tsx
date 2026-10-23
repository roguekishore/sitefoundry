import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";

export interface RaycastFooterLink {
  /** the link text */
  label: ReactNode;
  /** where it goes */
  href: string;
  /** adds the small arrow of an external link */
  external?: boolean;
}

export interface RaycastFooterColumn {
  /** the bold column title */
  title: ReactNode;
  /** the links under it */
  links: RaycastFooterLink[];
}

export interface RaycastFooterProps {
  /** the link columns (six at desktop, two across on phones) */
  columns: RaycastFooterColumn[];
  /** the newsletter row */
  newsletter: {
    /** the bold line */
    title: ReactNode;
    /** the grey sentence */
    text: ReactNode;
    /** the field's placeholder text */
    placeholder: string;
    /** the field's accessible label */
    fieldLabel: string;
    /** the button label */
    button: ReactNode;
    /** the fine print under the field */
    fine: ReactNode;
    /** where the form posts to */
    action?: string;
  };
  /** the crimson streak art above the hairline; a crimson wash when empty */
  art?: ReactNode;
  className?: string;
}

/** Streak art, six link columns and a newsletter row. */
export function RaycastFooter({ columns, newsletter, art, className }: RaycastFooterProps) {
  return (
    <footer className={cn("relative bg-background text-foreground", className)}>
      <div aria-hidden className="relative h-[6.5rem] overflow-clip border-b border-foreground/10 lg:h-[12.5rem] [&>*]:size-full">
        {art ?? <RaycastPlaceholder tone="glow" className="[mask-image:linear-gradient(to_bottom,transparent,black)]" />}
      </div>

      <div className="mx-auto max-w-[66.5rem] px-gutter lg:px-0">
        <div className="grid grid-cols-2 gap-x-6 gap-y-16 pt-[6.5rem] pb-24 lg:grid-cols-6 lg:gap-x-[3.625rem] lg:px-6 lg:pt-[6.75rem] lg:pb-[5.5rem]">
          {columns.map((col, i) => (
            <nav key={i} className="min-w-0">
              <h3 className="text-sm font-semibold tracking-[0.2px]">{col.title}</h3>
              <ul className="mt-10 flex flex-col gap-5">
                {col.links.map((l, j) => (
                  <li key={j} className="flex">
                    <a href={l.href} className="inline-flex items-start gap-2 text-sm leading-[1.2] font-medium tracking-[0.2px] text-muted-foreground transition-colors duration-300 hover:text-foreground">
                      {l.label}
                      {l.external && <ArrowUpRight className="mt-0.5 size-3 shrink-0 opacity-60" />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="grid gap-6 border-t border-foreground/10 py-14 lg:grid-cols-[1fr_26.875rem] lg:gap-x-[7.5rem] lg:px-6 lg:py-[3.9rem] lg:pb-[5.25rem]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2px]">{newsletter.title}</p>
            <p className="mt-1 max-w-[15rem] text-sm leading-[1.35] font-medium tracking-[0.2px] text-muted-foreground lg:max-w-[14rem]">{newsletter.text}</p>
          </div>
          <form action={newsletter.action} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
              <input
                type="email"
                name="email"
                aria-label={newsletter.fieldLabel}
                placeholder={newsletter.placeholder}
                className="h-[2.625rem] min-w-0 flex-1 rounded-lg border border-foreground/10 bg-card px-3.5 text-sm font-medium tracking-[0.2px] text-foreground transition-colors outline-none placeholder:text-muted-foreground/50 focus:border-foreground/30"
              />
              <button type="submit" className="h-[2.625rem] w-[8.625rem] rounded-lg bg-primary/90 px-0 text-sm font-medium tracking-[0.2px] text-primary-foreground transition-colors duration-200 hover:bg-foreground">
                {newsletter.button}
              </button>
            </div>
            <p className="max-w-[26rem] text-xs leading-[1.5] font-medium tracking-[0.2px] text-muted-foreground/60">{newsletter.fine}</p>
          </form>
        </div>
      </div>
    </footer>
  );
}
