import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";
import "./functionhealth-faq.css";

export interface FunctionhealthFaqProps {
  title: HeadingPart[];
  items: { question: string; answer: string }[];
  /** the closing link under the list */
  link?: { label: string; href: string };
  className?: string;
}

export function FunctionhealthFaq({ title, items, link, className }: FunctionhealthFaqProps) {
  return (
    <section id="faqs" className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} />
        <div className="mx-auto mt-10 max-w-[54rem] space-y-3 lg:mt-[4.25rem]">
          {items.map((it) => (
            <details key={it.question} name="functionhealth-faq" className="functionhealth-faq-item group rounded-lg border border-border bg-card">
              <summary className="flex min-h-[3.875rem] cursor-pointer list-none items-center justify-between gap-4 py-3 pr-3.5 pl-5 text-base leading-snug font-semibold marker:content-none lg:pl-6 [&::-webkit-details-marker]:hidden">
                {it.question}
                <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-background text-primary transition-colors duration-200 group-hover:border-primary motion-reduce:transition-none">
                  <Plus className="size-5 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none" strokeWidth={1.5} />
                </span>
              </summary>
              <p className="px-5 pb-5 text-base leading-[1.55] font-light text-muted-foreground lg:px-6">{it.answer}</p>
            </details>
          ))}
        </div>
        {link && (
          <p className="mt-10 text-center lg:mt-[3.75rem]">
            <a
              href={link.href}
              className="inline-flex items-center gap-2 border-b border-primary pb-0.5 text-base font-semibold text-primary transition-opacity duration-200 hover:opacity-70 motion-reduce:transition-none"
            >
              {link.label}
              <ArrowRight className="size-3.5" />
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
