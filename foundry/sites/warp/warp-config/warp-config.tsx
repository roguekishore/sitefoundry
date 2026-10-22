import { Fragment, useState, type ReactNode } from "react";
import { FileText, Folder } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WarpPlate } from "@foundry/warp-plate";
import { WarpSection } from "@foundry/warp-section";

export interface WarpConfigFile {
  name: string;
  /** folders get a folder icon, files a page icon */
  kind: "folder" | "file";
}

export interface WarpConfigTab {
  label: string;
  /** the paragraph shown under the tab row */
  description: string;
  /** the file list at the left of the figure (desktop) */
  files?: WarpConfigFile[];
  /** which file is open (highlighted), by name */
  openFile?: string;
  /** the language label at the right of the code header, e.g. "yaml" */
  language?: string;
  /** the code, one line per line; "key:" at a line's start is coloured */
  code?: string;
}

export interface WarpConfigProps {
  id?: string;
  /** the typed label above the title */
  tag?: string;
  /** shown in brackets after the tag */
  status?: string;
  title: string;
  lead?: string;
  /** the outline button at the right of the heading */
  action?: ReactNode;
  /** the tabs; the first is open at the start */
  tabs: WarpConfigTab[];
  /** caption of the figure frame */
  caption: string;
  className?: string;
}

/** One line of YAML-ish code: indentation, an optional "- ", a coloured key, the rest. */
function CodeLine({ text }: { text: string }) {
  const m = text.match(/^(\s*)(-\s+)?([\w.-]+)(:)(.*)$/);
  if (!m) {
    const d = text.match(/^(\s*)(-\s+)(.*)$/);
    if (d)
      return (
        <>
          {d[1]}
          <span className="text-muted-foreground">{d[2]}</span>
          {d[3]}
        </>
      );
    return <>{text}</>;
  }
  return (
    <>
      {m[1]}
      {m[2] && <span className="text-muted-foreground">{m[2]}</span>}
      <span className="text-primary">{m[3]}</span>
      <span className="text-muted-foreground">{m[4]}</span>
      {m[5]}
    </>
  );
}

/** Warp's configuration section: tab row, description, file list and code. */
export function WarpConfig({ id, tag, status, title, lead, action, tabs, caption, className }: WarpConfigProps) {
  const [open, setOpen] = useState(0);
  const tab = tabs[open] ?? tabs[0];
  const files = tab.files ?? tabs[0].files ?? [];
  const code = tab.code ?? tabs[0].code ?? "";
  const openFile = tab.files ? tab.openFile : tabs[0].openFile;
  const language = tab.language ?? tabs[0].language;

  return (
    <WarpSection id={id} tag={tag} status={status} title={title} lead={lead} action={action} className={className}>
      <div className="-mt-1 border border-border bg-card lg:-mx-6">
        <div role="tablist" className="flex flex-col lg:flex-row">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={i === open}
              onClick={() => setOpen(i)}
              className={cn(
                "flex h-11 flex-auto items-center border-b border-border px-[1.125rem] text-left text-xs font-medium tracking-[calc(0.1em_-_var(--warp-squeeze,0em))] uppercase transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none lg:justify-center lg:border-l lg:px-6 lg:first:border-l-0",
                i === open ? "border-primary bg-primary font-semibold text-primary-foreground" : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="border-b border-border px-5 py-5 text-sm leading-[1.5] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-muted-foreground lg:px-6 lg:pt-9 lg:pb-[2.25rem]">
          <span className="block max-w-[48rem]">{tab.description}</span>
        </p>

        <div className="p-3 lg:p-8">
          <WarpPlate caption={caption} rules tone="soft" bare>
            <div className="grid grid-cols-1 lg:grid-cols-[23rem_1fr]">
              <ul className="hidden flex-col gap-0 p-3 lg:flex">
                {files.map((f) => (
                  <li
                    key={f.name}
                    className={cn(
                      "flex h-[2.4375rem] items-center gap-3 px-3 text-[0.8125rem] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))]",
                      f.name === openFile ? "bg-primary font-semibold text-primary-foreground" : "text-foreground/78",
                    )}
                  >
                    {f.kind === "folder" ? (
                      <Folder aria-hidden className="size-3.5" strokeWidth={1.5} />
                    ) : (
                      <FileText aria-hidden className="size-3.5" strokeWidth={1.5} />
                    )}
                    {f.name}
                  </li>
                ))}
              </ul>
              <div className="min-w-0 border-border lg:border-l">
                <div className="flex h-9 items-center justify-between border-b border-border px-4 text-[0.625rem] font-semibold tracking-[calc(0.1em_-_var(--warp-squeeze,0em))] uppercase">
                  <span>{openFile}</span>
                  {language && <span>{language}</span>}
                </div>
                <pre className="px-3 pt-4 pb-8 font-mono text-[0.78125rem] leading-6 tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] whitespace-pre-wrap lg:px-4 lg:pt-5 lg:pb-10">
                  <code className="grid grid-cols-[2.25rem_1fr] gap-x-3">
                    {code.split("\n").map((line, i) => (
                      <Fragment key={i}>
                        <span aria-hidden className="text-right text-muted-foreground/70 select-none">
                          {i + 1}
                        </span>
                        <span className="min-w-0 break-words">
                          <CodeLine text={line} />
                        </span>
                      </Fragment>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </WarpPlate>
        </div>
      </div>
    </WarpSection>
  );
}
