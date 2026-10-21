import { ArrowRight, FileUp } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StructureengineeringButton } from "@foundry/structureengineering-button";
import { StructureengineeringReveal } from "@foundry/structureengineering-reveal";

export interface StructureengineeringField {
  /** the form field name */
  name: string;
  /** its label (uppercase mono); a * is added when required */
  label: string;
  /** the input type */
  type?: "text" | "email" | "tel";
  /** must be filled in */
  required?: boolean;
}

export interface StructureengineeringContactProps {
  /** the medium heading at the left */
  heading: string;
  /** the words of the big ink blocks under it, one block each; the last gets an arrow block */
  callout: string[];
  /** the sans paragraph at the top right */
  lead: string;
  /** the short underlined fields (two to a row at desktop) */
  fields: StructureengineeringField[];
  /** the checkbox group: its label and options */
  roles: { name: string; label: string; options: string[] };
  /** the tall underlined text areas */
  questions: StructureengineeringField[];
  /** the file upload box's label */
  uploadLabel: string;
  /** the submit button's label */
  submitLabel: string;
  /** where the form posts */
  action?: string;
  className?: string;
}

const label = "font-mono text-base leading-tight font-medium uppercase";
const line = "w-full border-0 border-b border-current bg-transparent font-mono text-base outline-none focus:border-b-2";

// A whole band in the highlight colour. At the top right a lead paragraph; below, at the left a
// heading and a big callout set as ink blocks (each word its own block, then an arrow block),
// at the right an underlined mono form (fields two to a row, a checkbox row, tall text areas,
// a file box and an ink submit button). The callout blocks fade up one after another, the lead
// and form rise 48px.
export function StructureengineeringContact({
  heading,
  callout,
  lead,
  fields,
  roles,
  questions,
  uploadLabel,
  submitLabel,
  action,
  className,
}: StructureengineeringContactProps) {
  return (
    <section className={cn("bg-highlight text-highlight-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-12 px-gutter pt-16 pb-24 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-28 lg:pt-[4.5rem] lg:pb-56">
        <StructureengineeringReveal className="lg:col-start-2 lg:row-start-1">
          <p className="max-w-[36rem] text-xl leading-[1.25] font-medium tracking-tight">{lead}</p>
        </StructureengineeringReveal>

        <div className="-order-1 lg:order-none lg:col-start-1 lg:row-start-2">
          <StructureengineeringReveal as="h2" className="max-w-[34rem] font-display text-[2.1rem] leading-[1.2] font-medium tracking-[-0.03em] lg:text-[2.8rem]">
            {heading}
          </StructureengineeringReveal>
          <p className="mt-12 flex flex-col items-start gap-1.5 font-display text-[3.7rem] leading-none font-medium tracking-[-0.04em] lg:mt-6 lg:text-[5.1rem]">
            {callout.map((word, i) => (
              <span key={i} className="flex gap-1.5">
                <StructureengineeringReveal as="span" step={i} rise={8} className="rounded-md bg-primary px-3 pt-1 pb-3 text-primary-foreground lg:px-4 lg:pb-4">
                  {word}
                </StructureengineeringReveal>
                {i === callout.length - 1 && (
                  <StructureengineeringReveal as="span" step={i + 1} rise={8} className="flex items-center rounded-md bg-primary px-5 text-primary-foreground lg:px-9">
                    <ArrowRight aria-hidden className="size-10 lg:size-12" strokeWidth={1} />
                  </StructureengineeringReveal>
                )}
              </span>
            ))}
          </p>
        </div>

        <StructureengineeringReveal className="lg:col-start-2 lg:row-start-2">
          <form action={action} method="post" encType="multipart/form-data" className="grid gap-x-4 gap-y-9 lg:grid-cols-2">
            {fields.map((f) => (
              <label key={f.name} className="flex flex-col gap-3">
                <span className={label}>
                  {f.label}
                  {f.required && " *"}
                </span>
                <input name={f.name} type={f.type ?? "text"} required={f.required} className={cn(line, "h-8")} />
              </label>
            ))}

            <fieldset className="lg:col-span-2">
              <legend className="font-mono text-base leading-tight uppercase">{roles.label}</legend>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-9">
                {roles.options.map((option) => (
                  <label key={option} className="flex items-center gap-2 font-mono text-base uppercase">
                    <input type="checkbox" name={roles.name} value={option} className="size-5 appearance-none rounded-sm border border-current checked:bg-primary" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            {questions.map((q) => (
              <label key={q.name} className="flex flex-col gap-3 lg:col-span-2">
                <span className={label}>
                  {q.label}
                  {q.required && " *"}
                </span>
                <textarea name={q.name} required={q.required} rows={5} className={cn(line, "resize-y")} />
              </label>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-4 lg:col-span-2">
              <label className="flex h-10 cursor-pointer items-center gap-2 border border-current pr-2.5 pl-1.5 font-mono text-base uppercase transition-colors duration-200 hover:bg-primary hover:text-highlight">
                <FileUp aria-hidden className="size-6" strokeWidth={0.9} />
                {uploadLabel}
                <input type="file" name="files" className="sr-only" />
              </label>
              <StructureengineeringButton type="submit" variant="submit">
                {submitLabel}
              </StructureengineeringButton>
            </div>
          </form>
        </StructureengineeringReveal>
      </div>
    </section>
  );
}
