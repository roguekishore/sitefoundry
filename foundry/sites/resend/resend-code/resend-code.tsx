import { cn } from "@foundry/foundry-utils";

export interface ResendCodeProps {
  /** the source, lines split on \n */
  code: string;
  /** number of the first line shown */
  startLine?: number;
  /** md: 14/20px (SDK panel) · sm: 12/16px (template window) */
  size?: "md" | "sm";
  className?: string;
}

const KEYWORDS = new Set(
  "import from export default const let var new async await function return if else for of in while class interface type extends def end do puts require package func use fn let mut pub struct impl val fun object using namespace static void public private try catch throw yield lambda true false null nil None True False".split(" "),
);

// strings · comments · tags (<Tag or </Tag) · words · anything else
const TOKEN = /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|(\/\/.*$|#.*$)|(<\/?[A-Za-z][\w.]*|\/?>)|([A-Za-z_$][\w$]*)|([^\sA-Za-z_$'"`<]+|\s+|<)/g;

function Line({ text }: { text: string }) {
  const parts: { t: string; c?: string }[] = [];
  for (const m of text.matchAll(TOKEN)) {
    const [all, str, comment, tag, word] = m;
    if (str) parts.push({ t: all, c: "text-highlight" });
    else if (comment) parts.push({ t: all, c: "text-muted-foreground/60 italic" });
    else if (tag) parts.push({ t: all, c: "text-muted-foreground" });
    else if (word) parts.push({ t: all, c: KEYWORDS.has(word) ? "text-muted-foreground" : undefined });
    else parts.push({ t: all, c: /\S/.test(all) ? "text-muted-foreground" : undefined });
  }
  return parts.map((p, i) => (p.c ? <span key={i} className={p.c}>{p.t}</span> : p.t));
}

export function ResendCode({ code, startLine = 1, size = "md", className }: ResendCodeProps) {
  const lines = code.replace(/\n$/, "").split("\n");
  return (
    <pre
      className={cn(
        "overflow-x-auto font-mono text-foreground [scrollbar-width:none]",
        size === "md" ? "text-sm leading-5" : "text-xs leading-4",
        className,
      )}
    >
      <code className="table">
        {lines.map((line, i) => (
          <span key={i} className="table-row">
            <span aria-hidden className="table-cell pr-4 text-right text-muted-foreground/60 select-none">
              {startLine + i}
            </span>
            <span className="table-cell whitespace-pre">
              <Line text={line} />
            </span>
          </span>
        ))}
      </code>
    </pre>
  );
}
