import { cn } from "@foundry/foundry-utils";
import { AnchorageButton } from "@foundry/anchorage-button";

export interface AnchorageCtaProps {
  /** the headline */
  title: string;
  /** one sentence under it */
  body?: string;
  /** the button */
  cta: { label: string; href: string };
  className?: string;
}

/** A rounded cobalt-to-lilac gradient band with a centred headline and a button. */
export function AnchorageCta({ title, body, cta, className }: AnchorageCtaProps) {
  return (
    <section className={cn("px-gutter pt-14 pb-10 lg:py-[5.75rem]", className)}>
      <div className="mx-auto flex min-h-[19.875rem] max-w-[58.75rem] flex-col items-center justify-center rounded-lg bg-[linear-gradient(115deg,var(--primary)_31%,var(--highlight)_92%)] px-8 py-10 text-center text-primary-foreground lg:min-h-[14.375rem] lg:px-10">
        <h2 className="max-w-[17.5rem] font-display text-[1.75rem] leading-[1.15] font-[550] sm:max-w-none lg:text-[2.5rem] lg:leading-[1.2]">{title}</h2>
        {body && <p className="mt-2 max-w-[15rem] text-sm leading-[1.5] font-medium sm:max-w-none lg:mt-4 lg:text-base">{body}</p>}
        <AnchorageButton href={cta.href} variant="inverse" className="mt-5 h-11">
          {cta.label}
        </AnchorageButton>
      </div>
    </section>
  );
}
