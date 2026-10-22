import { Check, ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AnchorageButton } from "@foundry/anchorage-button";

export interface AnchorageContactField {
  /** the label, shown inside the empty field */
  label: string;
  /** the form field's name */
  name: string;
  type?: "text" | "email" | "tel" | "select";
  /** the choices of a select */
  options?: string[];
  required?: boolean;
}

export interface AnchorageContactProps {
  /** the centred heading */
  title: string;
  /** the one-line fields, three to a row on desktop */
  fields: AnchorageContactField[];
  /** the short textarea under the fields, with an optional link under it */
  note?: { label: string; name: string; link?: { label: string; href: string } };
  /** the long message textarea */
  message: { label: string; name: string };
  /** the checkbox list beside the textareas */
  areas?: { title: string; name: string; options: string[] };
  /** the small line explaining the required mark */
  requiredNote?: string;
  /** the consent checkbox's fine print, and an optional second line under it */
  consent?: { text: string; name: string; small?: string };
  /** the submit button's label */
  submit: string;
  /** where the form posts */
  action?: string;
  method?: "get" | "post";
  className?: string;
}

const control = "w-full rounded-sm bg-muted px-3 text-base font-semibold text-foreground placeholder:text-foreground transition-colors duration-300 outline-none focus:ring-1 focus:ring-ring motion-reduce:transition-none";

function Box({ name, value, label, small }: { name: string; value?: string; label: string; small?: boolean }) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <span className="relative mt-[0.1rem] flex size-4 shrink-0">
        <input type="checkbox" name={name} value={value} className="peer size-4 cursor-pointer appearance-none rounded-xs border-2 border-input transition-colors duration-200 checked:border-primary checked:bg-primary" />
        <Check aria-hidden className="pointer-events-none absolute inset-0 m-auto hidden size-3 text-primary-foreground peer-checked:block" strokeWidth={3} />
      </span>
      <span className={cn(small ? "text-[0.6875rem] leading-[1.6] font-semibold" : "text-sm leading-[1.4] font-medium")}>{label}</span>
    </label>
  );
}

/** A long enquiry form: field grid, textareas beside a checkbox column, consent and send. */
export function AnchorageContact({ title, fields, note, message, areas, requiredNote, consent, submit, action, method = "post", className }: AnchorageContactProps) {
  return (
    <section className={cn("bg-secondary px-gutter pt-[5.25rem] pb-28 text-secondary-foreground lg:pt-20 lg:pb-[6.5rem]", className)}>
      <div className="mx-auto max-w-[69.375rem]">
        <h2 className="text-center font-display text-[2rem] leading-[1.2] font-[550] lg:text-[2.5rem]">{title}</h2>

        <form action={action} method={method} className="mt-12 lg:mt-14">
          <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
            {fields.map((f) => (
              <label key={f.name} className="relative block">
                <span className="sr-only">{f.label}</span>
                {f.type === "select" ? (
                  <>
                    <select name={f.name} required={f.required} defaultValue="" className={cn(control, "h-[2.6rem] cursor-pointer appearance-none pr-10")}>
                      <option value="" disabled>
                        {f.label}
                      </option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2" strokeWidth={2} />
                  </>
                ) : (
                  <input type={f.type ?? "text"} name={f.name} required={f.required} placeholder={f.label} className={cn(control, "h-10 lg:h-[2.5rem]")} />
                )}
              </label>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:mt-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-4 lg:gap-y-0">
            {note && (
              <div className="lg:col-span-2">
                <label className="block">
                  <span className="sr-only">{note.label}</span>
                  <textarea name={note.name} placeholder={note.label} className={cn(control, "block h-[3.625rem] resize-y py-3")} />
                </label>
                {note.link && (
                  <p className="mt-2 text-right">
                    <a href={note.link.href} className="text-sm font-medium text-primary transition-opacity duration-300 hover:opacity-50 motion-reduce:transition-none">
                      {note.link.label}
                    </a>
                  </p>
                )}
              </div>
            )}

            {areas && (
              <fieldset className="mt-6 lg:col-start-3 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:pt-0 lg:pl-3">
                <legend className="mb-6 w-full text-center text-base font-semibold lg:mb-2">{areas.title}</legend>
                <div className="flex flex-col gap-3 px-1 lg:gap-[0.6rem]">
                  {areas.options.map((o) => (
                    <Box key={o} name={areas.name} value={o} label={o} />
                  ))}
                </div>
              </fieldset>
            )}

            <label className="mt-6 block lg:col-span-2 lg:mt-11">
              <span className="sr-only">{message.label}</span>
              <textarea name={message.name} placeholder={message.label} className={cn(control, "block h-[9.125rem] resize-y py-3 lg:h-[10.5rem]")} />
            </label>

            {requiredNote && (
              <p className="hidden self-end pb-8 text-[0.6875rem] font-semibold lg:col-span-2 lg:block">
                <span className="text-primary">*</span> {requiredNote}
              </p>
            )}
          </div>

          {consent && (
            <div className="mt-8 lg:mt-9 lg:-ml-2.5">
              <Box name={consent.name} label={consent.text} small />
              {consent.small && <p className="mt-3 pl-7 text-[0.6875rem] leading-[1.6] font-semibold">{consent.small}</p>}
            </div>
          )}

          <AnchorageButton type="submit" variant="outline" size="md" className="mt-8 w-full lg:w-auto">
            {submit}
          </AnchorageButton>
        </form>
      </div>
    </section>
  );
}
