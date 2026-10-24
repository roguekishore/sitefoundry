import { cn } from "@foundry/foundry-utils";

export interface FormenergyHeadingProps {
  /** the title (shown uppercase) */
  title: string;
  /** heading level */
  as?: "h1" | "h2" | "h3";
  /** on phones, put the rule above the title instead of beside it (for long, full-width titles) */
  ruleAboveOnPhone?: boolean;
  className?: string;
}

/** Condensed uppercase section title led by a thin orange rule. */
export function FormenergyHeading({ title, as: Tag = "h2", ruleAboveOnPhone = false, className }: FormenergyHeadingProps) {
  return (
    <div className={cn("flex items-start gap-4 lg:gap-5", ruleAboveOnPhone && "max-lg:flex-col max-lg:gap-6", className)}>
      <span
        aria-hidden
        className={cn(
          "mt-[0.5em] h-px w-10 shrink-0 bg-primary text-[1.8rem] lg:w-[3.75rem] lg:text-4xl",
          ruleAboveOnPhone && "max-lg:mt-0",
        )}
      />
      <Tag className="font-display text-[1.8rem] leading-none font-semibold tracking-[0.02em] uppercase lg:text-4xl">
        {title}
      </Tag>
    </div>
  );
}
