import { cn } from "@foundry/foundry-utils";
import { ZoeHeading } from "@foundry/zoe-heading";

export interface ZoeStatementProps {
  /** the heading */
  title: string;
  /** the paragraphs under it */
  paragraphs: string[];
  className?: string;
}

/** Zoe's centred mission statement. */
export function ZoeStatement({ title, paragraphs, className }: ZoeStatementProps) {
  return (
    <section className={cn("py-24", className)}>
      <div className="mx-auto max-w-[56.25rem] px-gutter text-center">
        <ZoeHeading title={title} />
        <div className="mt-6 space-y-[1.3em] text-lg leading-[1.33] lg:mt-5 lg:leading-[1.22]">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
