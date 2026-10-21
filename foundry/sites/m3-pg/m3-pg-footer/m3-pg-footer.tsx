import { cn } from "@foundry/foundry-utils";
import { M3PgLink } from "@foundry/m3-pg-link";

export interface M3PgFooterLink {
  label: string;
  href: string;
}

export interface M3PgFooterField {
  /** the field's name in the posted form */
  name: string;
  /** the placeholder (also its accessible label) */
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  /** true: spans both form columns and is a multi-line message box */
  message?: boolean;
}

export interface M3PgFooterProps {
  /** the big short mark at the top left */
  mark: string;
  /** the grey invitation beside it */
  intro: string;
  /** where the form posts */
  formAction?: string;
  /** the form fields, in order (two per row on desktop; message fields span the row) */
  fields: M3PgFooterField[];
  /** the consent line by the checkbox */
  consent: string;
  /** the send link's label */
  submitLabel: string;
  /** address and contact lines, one per entry */
  address: string[];
  /** the site links */
  links: M3PgFooterLink[];
  /** social links */
  socials: M3PgFooterLink[];
  /** the full name, set huge across the width */
  wordmark: string;
  /** the wordmark's size as a percentage of the content width (e.g. 9.8) */
  wordmarkSize?: number;
  /** the copyright line */
  copyright: string;
  /** the legal links and credit in the bottom row (three fill it) */
  legal: M3PgFooterLink[];
  /** an id for in-page links */
  id?: string;
  className?: string;
}

const fieldClass =
  "w-full border-b border-background/25 bg-transparent px-0.5 pt-2.5 pb-3 text-lg leading-6 text-background placeholder:text-background/40 focus:border-background focus:outline-none";

export function M3PgFooter({
  mark,
  intro,
  formAction,
  fields,
  consent,
  submitLabel,
  address,
  links,
  socials,
  wordmark,
  wordmarkSize = 10.5,
  copyright,
  legal,
  id,
  className,
}: M3PgFooterProps) {
  return (
    <footer id={id} className={cn("relative z-10 bg-foreground px-gutter pt-10 pb-8 text-background lg:pt-20", className)}>
      <div className="mx-auto max-w-page">
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-5">
          <p aria-hidden className="text-[3.5rem] leading-[0.8] font-semibold tracking-[-0.06em] lg:text-[5.75rem]">
            {mark}
          </p>
          <p className="mt-7 text-base leading-6 tracking-[-0.01em] text-background/40 lg:mt-1 lg:pr-16">{intro}</p>

          <form action={formAction} method="post" className="mt-2 grid gap-x-5 lg:col-span-2 lg:mt-0 lg:grid-cols-2 lg:gap-y-0">
            {fields.map((field) =>
              field.message ? (
                <textarea
                  key={field.name}
                  name={field.name}
                  aria-label={field.label}
                  placeholder={field.label}
                  required={field.required}
                  rows={1}
                  className={cn(fieldClass, "resize-none lg:col-span-2")}
                />
              ) : (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type ?? "text"}
                  aria-label={field.label}
                  placeholder={field.label}
                  required={field.required}
                  className={fieldClass}
                />
              ),
            )}
            <label className="mt-6 flex items-start gap-2.5 text-sm leading-5 text-background/40 lg:col-span-2 lg:max-w-[29rem]">
              <input type="checkbox" required className="mt-0.5 size-3.5 shrink-0 accent-background" />
              <span>{consent}</span>
            </label>
            <button
              type="submit"
              className="mt-8 justify-self-start text-lg leading-6 font-semibold text-background/40 underline underline-offset-[0.18em] transition-all duration-300 ease-[ease] hover:text-background hover:no-underline motion-reduce:transition-none lg:mt-9"
            >
              {submitLabel}
            </button>
          </form>
        </div>

        <div className="mt-[4.5rem] grid grid-cols-2 gap-x-5 gap-y-8 text-base leading-9 lg:mt-14 lg:grid-cols-4 lg:leading-6">
          <address className="not-italic lg:col-start-2">
            {address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <M3PgLink href={link.href} variant="nav">
                  {link.label}
                </M3PgLink>
              </li>
            ))}
          </ul>
          <ul className="col-span-2 grid grid-cols-2 gap-x-5 lg:col-span-1 lg:block">
            {socials.map((link) => (
              <li key={link.href}>
                <M3PgLink href={link.href} variant="nav">
                  {link.label}
                </M3PgLink>
              </li>
            ))}
          </ul>
        </div>

        {/* the name, fitted to the width through container units */}
        <div className="@container mt-10 lg:mt-14">
          <p
            className="leading-[1.12] font-bold lg:leading-none tracking-[-0.045em] whitespace-nowrap"
            style={{ fontSize: `${wordmarkSize}cqi` }}
          >
            {wordmark}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-3 text-sm leading-6 lg:mt-9 lg:grid-cols-4 lg:border-t lg:border-background/30 lg:pt-6 lg:text-base">
          <p className="order-last lg:order-none">{copyright}</p>
          {legal.map((link) => (
            <M3PgLink key={link.href} href={link.href} variant="nav" className="justify-self-start">
              {link.label}
            </M3PgLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
