import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SupabaseHeading } from "@foundry/supabase-heading";

export interface SupabaseFramework {
  /** the framework's name: the tab's label for screen readers and the title's ink word */
  name: string;
  /** the tab's icon (20px) */
  icon: ReactNode;
  /** the snippet, as plain text; keywords, strings and names are coloured for you */
  code: string;
  /** the small pill under the code */
  docs?: { label: string; href: string };
}

export interface SupabaseFrameworksProps {
  /** the grey start of the title; the chosen framework's name follows in ink */
  lead: string;
  /** one tab per framework (six fill the row) */
  frameworks: SupabaseFramework[];
  className?: string;
}

const KEYWORDS = new Set([
  "import", "from", "export", "default", "function", "const", "let", "var", "return", "await", "async",
  "new", "if", "else", "for", "of", "in", "class", "extends", "def", "fn", "use", "pub", "final", "void",
]);

// one token at a time: strings, words, arrows, or a single other character
const TOKEN = /('[^'\n]*'|"[^"\n]*"|`[^`\n]*`|[A-Za-z_$][\w$]*|=>|\s+|.)/g;

/** Colours a snippet with the theme's chart tokens: keywords, strings, member names, punctuation. */
function highlight(code: string) {
  const out: ReactNode[] = [];
  let previous = "";
  let i = 0;
  for (const [token] of code.matchAll(TOKEN)) {
    let tone: string | undefined;
    if (/^['"`]/.test(token)) tone = "text-chart-3";
    else if (KEYWORDS.has(token) || token === "=>") tone = "text-chart-1";
    else if (/^[A-Za-z_$]/.test(token) && (previous === "." || /^[A-Z][A-Z0-9_]+$/.test(token))) tone = "text-chart-2";
    else if (/^[{}()[\].,;:=<>/*+|&?!-]$/.test(token)) tone = "text-muted-foreground/70";
    out.push(tone ? <span key={i} className={tone}>{token}</span> : token);
    if (!/^\s+$/.test(token)) previous = token;
    i += 1;
  }
  return out;
}

/** A two-tone title on the left and a code card on the right: a row of framework icon tabs over a coloured snippet. */
export function SupabaseFrameworks({ lead, frameworks, className }: SupabaseFrameworksProps) {
  const [active, setActive] = useState(0);
  const current = frameworks[active] ?? frameworks[0];
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto box-content grid max-w-page gap-6 px-gutter py-section lg:grid-cols-2 lg:gap-0 lg:py-24">
        <SupabaseHeading parts={[{ text: lead, tone: "muted" }, { text: current?.name }]} />

        <div className="overflow-clip rounded-xl border border-border bg-card">
          <div role="tablist" className="grid grid-flow-col auto-cols-fr border-b border-border">
            {frameworks.map((framework, i) => (
              <button
                key={framework.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={framework.name}
                onClick={() => setActive(i)}
                className={cn(
                  "flex h-[3.75rem] items-center justify-center border-l border-border first:border-l-0 [&_svg]:size-5",
                  "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
                  i === active ? "text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                )}
              >
                {framework.icon}
              </button>
            ))}
          </div>
          <div className="relative px-6 pt-6 pb-4">
            <pre className="overflow-x-auto font-mono text-[0.8125rem] leading-[1.7] text-foreground">
              <code>{current && highlight(current.code)}</code>
            </pre>
            {current?.docs && (
              <div className="mt-1 flex justify-end">
                <a
                  href={current.docs.href}
                  className="inline-flex h-[1.875rem] items-center gap-1.5 rounded-full border border-border bg-card px-3 text-[0.8125rem] text-foreground/80 transition-colors duration-150 hover:bg-accent hover:text-foreground"
                >
                  {current.docs.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
