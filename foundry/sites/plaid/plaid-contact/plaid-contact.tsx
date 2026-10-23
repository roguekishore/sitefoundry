import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlaidButton } from "@foundry/plaid-button";

export interface PlaidContactField {
  /** the form field's name */
  name: string;
  /** the visible placeholder, also the screen-reader label */
  label: string;
  /** text (default), email or tel; a select when options are given */
  type?: "text" | "email" | "tel";
  /** turns the field into a select with these options */
  options?: string[];
  required?: boolean;
}

export interface PlaidContactProps {
  /** the big gradient headline on the left */
  title: string;
  /** the form card's heading */
  formTitle: string;
  /** the fields, laid out two to a row on desktop */
  fields: PlaidContactField[];
  /** the small grey consent line, with its link */
  consent: { text: string; link: { label: string; href: string } };
  /** the submit pill */
  submitLabel: string;
  /** where the form posts to */
  action?: string;
  /** the lavender note under the form */
  note: { text: string; link: { label: string; href: string } };
  className?: string;
}

const rainbow =
  "bg-[conic-gradient(from_160deg,var(--chart-3),var(--chart-2),var(--chart-5),var(--chart-4),var(--highlight),var(--glow),var(--chart-3))]";

const field =
  "h-12 w-full rounded-[0.375rem] border border-input bg-card px-4 text-base text-foreground placeholder:text-foreground/70 focus:outline-2 focus:outline-offset-1 focus:outline-ring";

/** Plaid's closing band: gradient words beside a rainbow-rimmed form card. */
export function PlaidContact({ title, formTitle, fields, consent, submitLabel, action, note, className }: PlaidContactProps) {
  return (
    <section
      className={cn(
        "relative isolate bg-glow bg-linear-to-br from-foreground/75 via-glow to-highlight pb-[calc(2rem+2.5rem)] lg:pb-[calc(4.5rem+2.5rem)]",
        "dark:from-background/75",
        className,
      )}
    >
      <div aria-hidden className={cn("h-1.5", "bg-linear-to-r from-glow via-chart-3 to-highlight")} />
      <div className="mx-auto max-w-page px-11 pt-10 lg:grid lg:grid-cols-[1fr_41.75rem] lg:items-center lg:gap-10 lg:px-gutter lg:pt-[8.25rem]">
        <h2 className="bg-linear-to-r from-chart-4 via-highlight to-background bg-clip-text pb-1 font-display text-[1.875rem]/[1.1] font-medium tracking-[-0.03em] text-transparent dark:to-foreground lg:max-w-[28rem] lg:text-[4.375rem]/[1.1]">
          {title}
        </h2>

        <div className={cn("mt-8 rounded-[1.25rem] p-[3px] shadow-[0_0_30px] shadow-chart-3/40 lg:mt-0 lg:rounded-[calc(var(--radius)+1rem)] lg:p-[5px]", rainbow)}>
          <form action={action} className="rounded-[calc(1.25rem-3px)] bg-card px-8 py-9 text-foreground lg:rounded-[calc(var(--radius)+1rem-5px)] lg:px-[4.375rem] lg:pt-[4.5rem] lg:pb-[4.375rem]">
            <h3 className="font-display text-[1.375rem] font-medium tracking-[-0.03em] lg:text-[1.875rem]">{formTitle}</h3>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-4">
              {fields.map((f) =>
                f.options ? (
                  <label key={f.name} className="relative block">
                    <span className="sr-only">{f.label}</span>
                    <select name={f.name} required={f.required} defaultValue="" className={cn(field, "appearance-none pr-10")}>
                      <option value="" disabled>
                        {f.label}
                      </option>
                      {f.options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" />
                  </label>
                ) : (
                  <label key={f.name} className="block">
                    <span className="sr-only">{f.label}</span>
                    <input name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.label} className={field} />
                  </label>
                ),
              )}
            </div>
            <p className="mt-2 text-sm/6 text-muted-foreground lg:mt-6">
              {consent.text}{" "}
              <a href={consent.link.href} className="underline decoration-muted-foreground/60 underline-offset-4 transition-colors duration-200 hover:text-foreground">
                {consent.link.label}
              </a>
            </p>
            <div className="mt-4 flex justify-center lg:justify-start">
              <PlaidButton type="submit" variant="aqua" className="[&>span]:h-10 [&>span]:px-8 lg:[&>span]:h-[2.875rem] lg:[&>span]:px-[1.875rem]">
                {submitLabel}
              </PlaidButton>
            </div>
          </form>
        </div>

        <div className="mt-8 rounded-[2.875rem] bg-accent px-8 py-8 text-accent-foreground lg:col-span-2 lg:mt-20 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-[3.375rem]">
          <p className="max-w-[13.25rem] text-lg/[1.3] lg:max-w-[39rem] lg:text-xl/[1.5]">{note.text}</p>
          <a
            href={note.link.href}
            className="mt-3 inline-block bg-linear-to-r from-chart-2 to-chart-1 bg-clip-text text-lg/[1.3] font-medium text-transparent transition-opacity duration-200 hover:opacity-80 lg:mt-0 lg:text-xl"
          >
            {note.link.label}
          </a>
        </div>
      </div>
    </section>
  );
}
