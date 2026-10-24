import { cn } from "@foundry/foundry-utils";
import { ReflectButton } from "@foundry/reflect-button";
import { ReflectHeading } from "@foundry/reflect-heading";

export interface ReflectMigrateProps {
  eyebrow?: string;
  /** "\n" breaks the line on desktop only */
  title: string;
  /** one or more muted paragraphs */
  paragraphs: string[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  className?: string;
}

/** A quiet centred note for existing users: heading, two paragraphs, two buttons. */
export function ReflectMigrate({ eyebrow, title, paragraphs, primaryAction, secondaryAction, className }: ReflectMigrateProps) {
  return (
    <section className={cn("relative bg-background px-gutter pt-2 pb-[5.75rem] text-foreground lg:pb-[9.25rem]", className)}>
      <ReflectHeading eyebrow={eyebrow} title={title} />
      <div className="mx-auto mt-4 flex max-w-[37.5rem] flex-col items-center gap-6 text-center text-base/6 text-pretty text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={p} className={i === 0 ? "max-w-[27rem]" : undefined}>
            {p}
          </p>
        ))}
      </div>
      {(primaryAction || secondaryAction) && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {primaryAction && <ReflectButton href={primaryAction.href}>{primaryAction.label}</ReflectButton>}
          {secondaryAction && (
            <ReflectButton href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </ReflectButton>
          )}
        </div>
      )}
    </section>
  );
}
