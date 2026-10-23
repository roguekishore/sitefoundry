import { useEffect, useState, type ReactNode } from "react";
import { Copy } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { VercelButton } from "@foundry/vercel-button";
import { VercelHeading } from "@foundry/vercel-heading";
import "./vercel-cta.css";

export interface VercelCtaProps {
  /** the centred heading */
  title: string;
  /** the ink pill button */
  primary: { label: string; href: string };
  /** the white copy button: its label, the text it copies, and what it says once copied */
  copy?: { label: string; command: string; copiedLabel: string };
  /** small round icons shown at the start of the copy button (three on the original) */
  icons?: ReactNode[];
  className?: string;
}

/** Tall centred closing band with a heading, an ink pill and a copy-command pill. */
export function VercelCta({ title, primary, copy, icons = [], className }: VercelCtaProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const onCopy = () => {
    if (!copy) return;
    navigator.clipboard?.writeText(copy.command).catch(() => {});
    setCopied(true);
  };

  return (
    <section className={cn("bg-background px-gutter py-52 text-center text-foreground lg:py-[17rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center">
        <VercelHeading className="max-w-[7em] lg:max-w-none">{title}</VercelHeading>
        <div className="mt-11 flex flex-col items-center gap-3 lg:mt-10 lg:flex-row">
          <VercelButton href={primary.href}>{primary.label}</VercelButton>
          {copy ? (
            <VercelButton variant="secondary" onClick={onCopy} className="h-[2.625rem] gap-0 ps-2.5 pe-3.5 lg:h-10">
              {icons.length ? (
                <span aria-hidden className="me-2.5 flex -space-x-1">
                  {icons.map((icon, i) => (
                    <span key={i} className="grid size-5 place-items-center rounded-full bg-card ring-1 ring-border [&_svg]:size-3!">
                      {icon}
                    </span>
                  ))}
                </span>
              ) : null}
              <span key={copied ? "copied" : "idle"} aria-live="polite" className="vercel-cta-label">
                {copied ? copy.copiedLabel : copy.label}
              </span>
              <Copy aria-hidden className="ms-4 text-muted-foreground" strokeWidth={1.75} />
            </VercelButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
