import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperhumanButton } from "@foundry/superhuman-button";
import { SuperhumanLink } from "@foundry/superhuman-link";

export interface SuperhumanSectionHeadingProps {
  /** the product lockup above the headline (a SuperhumanMark) */
  mark: ReactNode;
  /** the headline's first part, full colour */
  title: string;
  /** the headline's second part, in the quieter grey */
  muted?: string;
  /** start the grey part on its own line */
  breakAfterTitle?: boolean;
  /** hold the headline to a narrow measure so it wraps in two balanced lines */
  narrow?: boolean;
  /** the lead paragraph */
  description: string;
  /** the purple button */
  primary: { label: string; href: string };
  /** the text link beside it */
  secondary: { label: string; href: string };
  className?: string;
}

/** Centred heading shared by the three product sections. */
export function SuperhumanSectionHeading({ mark, title, muted, breakAfterTitle, narrow, description, primary, secondary, className }: SuperhumanSectionHeadingProps) {
  return (
    <header className={cn("mx-auto flex max-w-[60rem] flex-col items-center text-center", className)}>
      <div className="text-foreground">{mark}</div>
      <h2 className={cn("mt-6 text-[2rem]/[1.2] font-[460] tracking-[-0.0275em] text-foreground lg:text-[3.0625rem]/[1.2]", narrow && "lg:max-w-[36rem]")}>
        {title}
        {muted && (
          <>
            {breakAfterTitle ? <br /> : " "}
            <span className="text-foreground/65">{muted}</span>
          </>
        )}
      </h2>
      <p className="mt-6 max-w-[50rem] text-lg/[1.5] font-[460] text-foreground/65">{description}</p>
      <div className="mt-9 flex items-center gap-4 lg:mt-12">
        <SuperhumanButton label={primary.label} href={primary.href} />
        <SuperhumanLink label={secondary.label} href={secondary.href} />
      </div>
    </header>
  );
}
