import { cn } from "@foundry/foundry-utils";
import { WildAgButton } from "@foundry/wild-ag-button";
import { WildAgHeading } from "@foundry/wild-ag-heading";
import { WildAgReveal } from "@foundry/wild-ag-reveal";

export interface WildAgContactDetail {
  /** e.g. Phone */
  label: string;
  /** e.g. the number */
  value: string;
  href: string;
}

export interface WildAgContactProps {
  /** an id for in-page links */
  id?: string;
  title: string;
  /** one line under the title */
  lead: string;
  /** the firm's name */
  company: string;
  /** address lines */
  address: string[];
  /** phone, email… */
  details: WildAgContactDetail[];
  /** the form's placeholders and button */
  form: { name: string; email: string; message: string; submit: string; action?: string };
  className?: string;
}

const field =
  "w-full rounded-full border-2 border-border bg-background px-[1.6rem] text-[1.0625rem] font-medium text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary motion-reduce:transition-none";

export function WildAgContact({ id, title, lead, company, address, details, form, className }: WildAgContactProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter pt-section pb-14 text-muted-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-[670fr_375fr] lg:items-center lg:gap-x-[7.2rem]">
        <div>
          <WildAgHeading>{title}</WildAgHeading>
          <WildAgReveal as="p" step={1} className="mt-6 text-[1.0625rem] leading-[1.4] font-semibold tracking-[-0.01em]">
            {lead}
          </WildAgReveal>
          <WildAgReveal step={2} className="mt-5">
            <p className="text-[1.4rem] leading-[1.4] font-medium tracking-[-0.01em] text-foreground">{company}</p>
            <p className="mt-2 text-[1.0625rem] leading-[1.4] font-medium tracking-[-0.01em]">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[1.0625rem] leading-[1.4] font-medium tracking-[-0.01em]">
              {details.map((d) => (
                <div key={d.label} className="contents">
                  <dt>{d.label}</dt>
                  <dd>
                    <a href={d.href} className="font-semibold text-primary transition-colors duration-300 hover:text-foreground">
                      {d.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </WildAgReveal>
        </div>

        <form action={form.action} method="post" className="grid gap-3 rounded-lg bg-card p-[2.3rem] lg:order-first lg:p-14">
          <input type="text" name="name" aria-label={form.name} placeholder={form.name} className={cn(field, "h-[3.75rem]")} />
          <input type="email" name="email" aria-label={form.email} placeholder={form.email} className={cn(field, "h-[3.75rem]")} />
          <textarea
            name="message"
            aria-label={form.message}
            placeholder={form.message}
            className={cn(field, "h-[11.25rem] resize-none rounded-[calc(var(--radius)*1.9)] py-4")}
          />
          <WildAgButton type="submit" variant="gradient" className="mt-4 w-full lg:w-fit">
            {form.submit}
          </WildAgButton>
        </form>
      </div>
    </section>
  );
}
