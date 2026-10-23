import { cn } from "@foundry/foundry-utils";

export interface EzraNoteProps {
  /** the serif line */
  title: string;
  /** one or two lines under it; a line break is allowed (use \n) */
  body?: string;
  className?: string;
}

/** A centred serif line with a short body note. */
export function EzraNote({ title, body, className }: EzraNoteProps) {
  return (
    <section className={cn("bg-background px-gutter text-center text-foreground", className)}>
      <div className="mx-auto max-w-[40rem] pt-[6.25rem] pb-12 lg:pt-25 lg:pb-12">
        <h2 className="font-display text-2xl leading-[1.45] font-[350] tracking-[-0.01em] lg:text-[2.4375rem] lg:leading-[1.2]">
          {title}
        </h2>
        {body && <p className="mt-4 text-base leading-[1.6] lg:mt-6 lg:whitespace-pre-line">{body}</p>}
      </div>
    </section>
  );
}
