import { cn } from "@foundry/foundry-utils";
import { ImpulsespaceButton } from "@foundry/impulsespace-button";
import { ImpulsespaceSweepLink } from "@foundry/impulsespace-sweep-link";

export interface ImpulsespaceFooterLink {
  label: string;
  href: string;
}

export interface ImpulsespaceFooterColumn {
  /** the column's mono title */
  title: string;
  links: ImpulsespaceFooterLink[];
}

export interface ImpulsespaceFooterProps {
  /** the newsletter heading */
  title: string;
  /** a sentence under it */
  lede?: string;
  /** the email field's visible placeholder and accessible label */
  emailLabel: string;
  /** the submit pill's label */
  submitLabel: string;
  /** where the form posts */
  action?: string;
  /** three link columns */
  columns: ImpulsespaceFooterColumn[];
  /** the mono legal links at the foot */
  legal: ImpulsespaceFooterLink[];
  /** the copyright line */
  copyright: string;
  /** the company's name, set huge across the foot; leave empty to skip */
  wordmark?: string;
  className?: string;
}

/** Off-white footer: newsletter, three link columns, legal row and an optional giant wordmark. */
export function ImpulsespaceFooter({ title, lede, emailLabel, submitLabel, action, columns, legal, copyright, wordmark, className }: ImpulsespaceFooterProps) {
  return (
    <footer className={cn("overflow-clip bg-secondary px-gutter pt-section pb-8 text-secondary-foreground", className)}>
      <div className="grid gap-20 lg:grid-cols-12 lg:gap-2.5">
        <div className="lg:col-span-5">
          <h2 className="font-display text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.02em]">{title}</h2>
          {lede && <p className="mt-4 max-w-[26rem] text-base leading-[1.4] text-muted-foreground">{lede}</p>}
          <form action={action} method="post" className="mt-8 flex max-w-[28rem] flex-col gap-2.5 sm:flex-row">
            <input
              type="email"
              name="email"
              required
              aria-label={emailLabel}
              placeholder={emailLabel}
              className="h-11 w-full min-w-0 rounded-full sm:flex-1 border border-input bg-background px-5 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
            />
            <ImpulsespaceButton type="submit">{submitLabel}</ImpulsespaceButton>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-x-2.5 gap-y-16 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-sm leading-[1.5] tracking-[0.08em] text-muted-foreground uppercase">{col.title}</p>
              <ul className="mt-5 grid gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-xl leading-[1.2] font-semibold transition-opacity duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-70 motion-reduce:transition-none">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 flex flex-col gap-6 lg:mt-24 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {legal.map((link) => (
            <li key={link.href}>
              <ImpulsespaceSweepLink href={link.href}>{link.label}</ImpulsespaceSweepLink>
            </li>
          ))}
        </ul>
        <p className="font-mono text-sm leading-[1.5] tracking-[0.08em] text-muted-foreground uppercase">{copyright}</p>
      </div>

      {wordmark && (
        <p aria-hidden className="mt-16 font-display text-[21vw] leading-[0.8] font-semibold tracking-[-0.05em] whitespace-nowrap uppercase lg:mt-10 lg:text-[24vw]">
          {wordmark}
        </p>
      )}
    </footer>
  );
}
