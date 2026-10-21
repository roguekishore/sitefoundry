import { Paperclip } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureButton } from "@foundry/storeyarchitecture-button";
import { StoreyarchitectureRise } from "@foundry/storeyarchitecture-rise";
import "./storeyarchitecture-contact.css";

export interface StoreyarchitectureContactField {
  /** the label above the line */
  label: string;
  /** the form field name */
  name: string;
  /** text / email: one underline · message: three ruled lines · choice: square checkboxes */
  kind: "text" | "email" | "message" | "choice";
  /** for choice: the options, laid out two per row */
  options?: string[];
}

export interface StoreyarchitectureContactProps {
  /** the huge invitation at the left */
  heading: string;
  /** the short paragraph under it */
  intro: string;
  /** the paper's mono title, one string per line */
  formTitle: string[];
  /** the small mono mark at the paper's top-left */
  formMark: string;
  /** the wordmark at the paper's top-right */
  brand: string;
  /** the numbered fields, in order */
  fields: StoreyarchitectureContactField[];
  /** the Submit button label */
  submitLabel: string;
  /** the mono labels along the paper's foot */
  footer: string[];
  /** where the form posts */
  action?: string;
  className?: string;
}

const line = "w-full border-b border-input bg-transparent text-[4.3vw] leading-none outline-none focus:border-card-foreground sm:text-[1.1vw]";

export function StoreyarchitectureContact({
  heading,
  intro,
  formTitle,
  formMark,
  brand,
  fields,
  submitLabel,
  footer,
  action,
  className,
}: StoreyarchitectureContactProps) {
  return (
    <section
      className={cn(
        "storeyarchitecture-contact grid grid-cols-6 font-[450] gap-x-gutter bg-background px-gutter pt-section pb-[4vw] text-foreground tracking-[-0.02em] sm:grid-cols-12 sm:pb-[1.4vw]",
        className,
      )}
    >
      <StoreyarchitectureRise as="h2" className="col-span-6 col-start-1 row-start-1 text-[12vw] leading-none sm:col-span-5 sm:col-start-1 sm:text-[7vw]">
        {heading}
      </StoreyarchitectureRise>
      <StoreyarchitectureRise
        step={1}
        className="col-span-6 col-start-1 row-start-2 mt-[10vw] text-[4.3vw] leading-[1.2] sm:col-span-3 sm:col-start-1 sm:row-start-1 sm:mt-[44vw] sm:text-[1.6vw]"
      >
        <p>{intro}</p>
      </StoreyarchitectureRise>

      <form
        action={action}
        className="storeyarchitecture-contact-paper relative col-span-6 col-start-1 row-start-1 mt-[16vw] bg-card text-card-foreground sm:col-span-9 sm:col-start-4 sm:mt-[14.8vw]"
      >
        <Paperclip
          aria-hidden
          strokeWidth={1}
          className="absolute top-[-9vw] left-[5vw] size-[23vw] -rotate-[42deg] text-foreground/60 sm:top-[-3.5vw] sm:left-[7vw] sm:size-[8.5vw]"
        />
        <div className="px-[4vw] pt-[12vw] sm:px-[8.2vw] sm:pt-[5.4vw]">
          <div className="grid grid-cols-[15vw_1fr] items-start sm:grid-cols-[8.2vw_1fr_auto]">
            <span className="pt-[0.6vw] font-mono text-[3.6vw] leading-none tracking-[-0.06em] sm:text-[1vw]">{formMark}</span>
            <h3 className="font-mono text-[8vw] leading-none tracking-[-0.06em] uppercase sm:text-[2.2vw]">
              {formTitle.map((t) => (
                <span key={t} className="block">
                  {t}
                </span>
              ))}
            </h3>
            <span className="-mr-[2.3vw] hidden text-[2.2vw] leading-none sm:block">{brand}</span>
          </div>

          <div className="mt-[12vw] flex flex-col gap-[12vw] sm:mt-[7.5vw] sm:gap-[5.5vw]">
            {fields.map((field, i) => (
              <div key={field.name} className="grid grid-cols-[15vw_1fr] items-start sm:grid-cols-[8.2vw_1fr]">
                <span className="font-mono text-[4.3vw] leading-none tracking-[-0.06em] sm:text-[1.1vw]">{`${String(i + 1).padStart(2, "0")})`}</span>
                {field.kind === "choice" ? (
                  <fieldset>
                    <legend className="text-[4.3vw] leading-none sm:text-[1.1vw]">{field.label}</legend>
                    <div className="mt-[4vw] grid grid-cols-2 gap-y-[3vw] sm:mt-[1.6vw] sm:gap-y-[1.2vw]">
                      {field.options?.map((option) => (
                        <label key={option} className="flex items-center gap-[3vw] text-[4.3vw] leading-none sm:gap-[2.4vw] sm:text-[1.1vw]">
                          <input
                            type="checkbox"
                            name={field.name}
                            value={option}
                            className="size-[3.6vw] shrink-0 appearance-none bg-card-foreground/45 transition-colors duration-200 checked:bg-card-foreground sm:size-[1vw]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ) : (
                  <label className="flex flex-col">
                    <span className="text-[4.3vw] leading-none sm:text-[1.1vw]">{field.label}</span>
                    {field.kind === "message" ? (
                      <textarea
                        name={field.name}
                        rows={3}
                        className={cn(
                          line,
                          "mt-[3vw] resize-none border-b-0 bg-[linear-gradient(to_bottom,transparent_calc(100%-1px),var(--input)_0)] bg-size-[100%_8vw] leading-[8vw] sm:mt-[0.8vw] sm:bg-size-[100%_2.5vw] sm:leading-[2.5vw]",
                        )}
                      />
                    ) : (
                      <input type={field.kind} name={field.name} className={cn(line, "h-[9vw] sm:h-[2.4vw]")} />
                    )}
                  </label>
                )}
              </div>
            ))}
          </div>

          <div className="mt-[8vw] grid grid-cols-[15vw_1fr] sm:mt-[4vw] sm:grid-cols-[8.2vw_1fr]">
            <StoreyarchitectureButton type="submit" size="sm" variant="grey" className="col-start-2 justify-self-start">
              {submitLabel}
            </StoreyarchitectureButton>
          </div>
        </div>

        <div className="mx-[4vw] mt-[8vw] flex flex-wrap gap-x-[8vw] gap-y-[4vw] border-t border-card-foreground px-[3vw] pt-[8vw] pb-[10vw] font-mono text-[4.3vw] leading-none tracking-[-0.06em] uppercase sm:mx-0 sm:mt-[2vw] sm:justify-between sm:px-[5.2vw] sm:pt-[2.6vw] sm:pb-[4vw] sm:text-[1.1vw]">
          {footer.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </form>
    </section>
  );
}
