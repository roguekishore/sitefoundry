import { cn } from "@foundry/foundry-utils";

export interface ZoeDisclaimerProps {
  /** the small print, one string per paragraph */
  paragraphs: string[];
  className?: string;
}

/** Zoe's centred italic small print. */
export function ZoeDisclaimer({ paragraphs, className }: ZoeDisclaimerProps) {
  return (
    <section className={cn("px-gutter py-[4.5rem]", className)}>
      <div className="mx-auto max-w-[47rem] space-y-3 text-center text-base leading-[1.2] text-muted-foreground italic">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
