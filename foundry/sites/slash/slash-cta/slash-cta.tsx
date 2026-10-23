import { cn } from "@foundry/foundry-utils";
import { SlashEmailField, type SlashEmailFieldProps } from "@foundry/slash-email-field";
import { SlashHeadingText, type SlashHeadingPart } from "@foundry/slash-heading";

export interface SlashCtaProps {
  /** the heading, as runs */
  heading: SlashHeadingPart[];
  /** the line under it */
  sub?: string;
  /** the pill email field */
  email: SlashEmailFieldProps;
  className?: string;
}

/** A closing band that warms from black into umber: a centred serif line, a short sub and a pill email field. */
export function SlashCta({ heading, sub, email, className }: SlashCtaProps) {
  return (
    <section
      className={cn(
        "bg-linear-to-b from-background from-5% to-[color-mix(in_oklab,color-mix(in_oklab,var(--glow)_40%,var(--foreground))_17%,var(--background))] py-36 text-center text-foreground lg:py-0",
        className,
      )}
    >
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter lg:h-[37.625rem] lg:justify-center">
        <h2 className="max-w-[18rem] font-display text-[2.25rem] leading-[1.06] font-normal tracking-[-0.01em] text-balance lg:max-w-none lg:text-[4rem] lg:leading-[1.1]">
          <SlashHeadingText parts={heading} />
        </h2>
        {sub && <p className="mt-5 max-w-[15rem] text-base leading-[1.4] tracking-[-0.02em] text-foreground/80 sm:max-w-none lg:mt-6 lg:text-xl">{sub}</p>}
        <SlashEmailField {...email} shape="pill" className="mt-7 w-full max-w-[32.5rem] text-left lg:mt-8" />
      </div>
    </section>
  );
}
