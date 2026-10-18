import type { ComponentType, ReactNode } from "react";
import {
  BookOpen,
  ChartLine,
  CircleDot,
  CirclePlay,
  Code,
  GitPullRequest,
  Inbox,
  Menu,
  Plus,
  Search,
  Shield,
  SquareTerminal,
} from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HulyHeading } from "@foundry/huly-heading";

export interface HulyRepoItem {
  title: string;
  /** small coloured label after the title */
  label?: { text: string; tone: "bug" | "feature" };
  /** line under the title, e.g. "opened 2 hours ago by lena" */
  meta: string;
}

export interface HulyGithubProps {
  title: string | string[];
  text?: string;
  /** the code-host window under the heading */
  repo: {
    /** mark at the top left of the window */
    logo?: ReactNode;
    owner: string;
    name: string;
    /** text in the search box */
    search?: string;
    /** tab row; counts show as small pills */
    tabs: { label: string; count?: string }[];
    /** index of the underlined tab */
    active?: number;
    /** list rows; they fade out toward the bottom */
    items: HulyRepoItem[];
  };
  /** grid of points under the window (three columns on wide screens) */
  features: { icon: ComponentType<{ className?: string; strokeWidth?: number }>; title: string; text: string }[];
  /** dark forces the dark colours (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  className?: string;
}

const TAB_ICONS = [Code, CircleDot, GitPullRequest, CirclePlay, BookOpen, Shield, ChartLine];
const LABEL = {
  bug: "border-destructive/50 bg-destructive/15 text-destructive",
  feature: "border-glow/50 bg-glow/15 text-glow",
};

export function HulyGithub({ title, text, repo, features, tone = "dark", className }: HulyGithubProps) {
  const active = repo.active ?? 0;
  return (
    <section className={cn("relative isolate overflow-hidden bg-card py-section text-foreground lg:py-40", tone === "dark" && "dark", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="lg:px-32">
          <HulyHeading title={title} text={text} weight="medium" mutedText textClassName="max-w-[35rem]" />

          {/* the repository window */}
          <div aria-hidden className="relative mt-10 lg:mt-24">
            <div className="absolute inset-x-[-4%] top-[30%] bottom-[-14%] -z-10 rounded-[50%] bg-glow/35 blur-3xl lg:inset-x-[10%] lg:bg-glow/15" />
            <div className="absolute inset-x-[-2%] -bottom-6 -z-10 h-16 bg-[radial-gradient(color-mix(in_oklab,var(--glow)_80%,transparent)_1px,transparent_1.5px)] bg-size-[7px_7px] [mask-image:radial-gradient(50%_60%_at_50%_0%,black,transparent)]" />
            <div className="overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-2xl shadow-background">
              <div className="flex items-center gap-2.5 px-3 pt-3 lg:gap-3 lg:px-4 lg:pt-4">
                <span className="flex size-6 items-center justify-center rounded-md border border-foreground/15 lg:size-8">
                  <Menu className="size-3.5 lg:size-4" />
                </span>
                <span className="flex size-6 items-center justify-center [&_svg]:size-5 lg:size-8 lg:[&_svg]:size-7">{repo.logo}</span>
                <span className="truncate text-[0.6875rem] lg:text-sm">
                  <span className="text-foreground/75">{repo.owner}</span>
                  <span className="mx-1.5 text-foreground/40">/</span>
                  <span className="font-medium">{repo.name}</span>
                </span>
                {repo.search && (
                  <span className="ml-auto hidden w-60 items-center gap-2 rounded-md border border-foreground/15 px-2.5 py-1.5 text-sm text-foreground/70 md:flex">
                    <Search className="size-4" />
                    {repo.search}
                    <SquareTerminal className="ml-auto size-4 text-foreground/50" />
                  </span>
                )}
                <span className={cn("flex items-center gap-2", !repo.search && "ml-auto", repo.search && "md:ml-0 ml-auto")}>
                  {[Plus, CircleDot, GitPullRequest].map((Icon, i) => (
                    <span key={i} className="hidden size-8 items-center justify-center rounded-md border border-foreground/15 lg:flex">
                      <Icon className="size-4 text-foreground/70" />
                    </span>
                  ))}
                  <span className="relative flex size-6 items-center justify-center rounded-md border border-foreground/15 lg:size-8">
                    <Inbox className="size-3.5 text-foreground/70 lg:size-4" />
                    <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-glow lg:size-2" />
                  </span>
                  <span className="size-6 rounded-full bg-linear-to-br from-highlight to-chart-4 lg:size-8" />
                </span>
              </div>

              <div className="mt-3 flex gap-4 overflow-hidden border-b border-foreground/10 px-3 text-[0.625rem] whitespace-nowrap lg:mt-4 lg:gap-7 lg:px-4 lg:text-sm">
                {repo.tabs.map((tab, i) => {
                  const Icon = TAB_ICONS[i % TAB_ICONS.length];
                  return (
                    <span key={tab.label} className={cn("flex items-center gap-1.5 pb-2 lg:pb-3", i === active ? "border-b-2 border-highlight text-foreground" : "text-foreground/75")}>
                      <Icon className="size-3 lg:size-4" />
                      {tab.label}
                      {tab.count && <span className="rounded-full bg-foreground/15 px-1.5 text-[0.5625rem] lg:text-xs">{tab.count}</span>}
                    </span>
                  );
                })}
              </div>

              <div className="p-2 lg:p-4">
                <div className="overflow-hidden rounded-md border border-foreground/10 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
                  {repo.items.map((item) => (
                    <div key={item.meta} className="flex gap-2 border-b border-foreground/10 px-2.5 py-2 last:border-0 lg:gap-3 lg:px-4 lg:py-3">
                      <span className="mt-0.5 hidden size-3.5 shrink-0 rounded-sm border border-foreground/25 sm:block" />
                      <GitPullRequest className="mt-0.5 size-3 shrink-0 text-chart-2 lg:size-4" />
                      <div className="min-w-0">
                        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.6875rem] font-medium lg:text-[0.9375rem]">
                          {item.title}
                          {item.label && (
                            <span className={cn("rounded-full border px-1.5 text-[0.5625rem] leading-4 font-normal lg:text-xs", LABEL[item.label.tone])}>
                              {item.label.text}
                            </span>
                          )}
                        </p>
                        <p className="mt-0.5 text-[0.5625rem] text-foreground/50 lg:mt-1 lg:text-[0.8125rem]">{item.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-y-10 sm:grid-cols-2 sm:gap-x-12 lg:mt-24 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
            {features.map(({ icon: Icon, title: t, text: body }) => (
              <div key={t} className="relative">
                <span className="relative flex size-9 items-center justify-center lg:size-12">
                  <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--glow)_22%,transparent),transparent)]" />
                  <span className="flex size-full items-center justify-center rounded-lg bg-linear-to-br from-glow to-chart-3 text-foreground shadow-lg shadow-glow/25">
                    <Icon className="size-5 lg:size-6" strokeWidth={1.75} />
                  </span>
                </span>
                <h3 className="mt-3 text-xl leading-none font-medium tracking-[-0.02em] text-balance lg:mt-7 lg:max-w-[9em] lg:text-[2rem] lg:font-normal">{t}</h3>
                <p className="mt-2 max-w-[18rem] text-[0.9375rem] leading-snug text-muted-foreground lg:mt-4 lg:text-base">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
