import { cn } from "@foundry/foundry-utils";
import { InstituteofhealthButton } from "@foundry/instituteofhealth-button";
import { InstituteofhealthIconButton } from "@foundry/instituteofhealth-icon-button";
import "./instituteofhealth-faq.css";

export interface InstituteofhealthFaqItem {
  question: string;
  answer: string;
}

export interface InstituteofhealthFaqProps {
  /** the large heading on the left */
  heading: string;
  /** the questions, in order */
  items: InstituteofhealthFaqItem[];
  /** a short two-line prompt above the button, one entry per line */
  helpLines?: string[];
  /** the dark button under the prompt */
  action?: { label: string; href: string };
  className?: string;
}

export function InstituteofhealthFaq({ heading, items, helpLines = [], action, className }: InstituteofhealthFaqProps) {
  const help = (helpLines.length > 0 || action) && (
    <div>
      {helpLines.length > 0 && (
        <p className="text-[0.8775rem] leading-[1.25] font-medium tracking-[-0.03em] lg:text-[0.765rem]">
          {helpLines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>
      )}
      {action && (
        <InstituteofhealthButton href={action.href} className="mt-4 w-full lg:mt-3 lg:w-[15.2rem]">
          {action.label}
        </InstituteofhealthButton>
      )}
    </div>
  );

  return (
    <section className={cn("bg-muted pt-14 pb-14 text-foreground lg:py-[7rem]", className)}>
      <div className="grid gap-7 px-gutter lg:grid-cols-2 lg:items-center lg:gap-0">
        <div className="lg:pr-gutter">
          <h2 className="max-w-[16rem] font-display text-[1.46rem] leading-[1.2] font-medium tracking-[-0.03em] lg:max-w-[33rem] lg:text-[3.15rem] lg:leading-none lg:tracking-[-0.035em]">
            {heading}
          </h2>
          <div className="mt-[3.6rem] hidden lg:block">{help}</div>
        </div>

        <div className="border-t border-border">
          {items.map((it) => (
            <details key={it.question} name="ioh-faq" className="group border-b border-border">
              <summary className="flex min-h-[3.1rem] cursor-pointer list-none items-center justify-between gap-6 py-2 transition-opacity duration-400 hover:opacity-95 lg:min-h-[3.8rem] [&::-webkit-details-marker]:hidden">
                <span className="text-[1.097rem] leading-[1.3] font-medium tracking-[-0.025em] lg:text-[1.035rem] lg:tracking-[-0.02em]">{it.question}</span>
                <InstituteofhealthIconButton as="span" icon="plus" className="size-8 lg:size-9" />
              </summary>
              <p className="ioh-faq-answer max-w-[36rem] pr-12 pb-5 text-[0.975rem] leading-[1.45] font-normal tracking-[-0.01em] text-muted-foreground lg:text-[0.945rem]">
                {it.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-3 lg:hidden">{help}</div>
      </div>
    </section>
  );
}
