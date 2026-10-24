import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SupabaseButton } from "@foundry/supabase-button";
import { SupabaseHeading } from "@foundry/supabase-heading";
import { SupabasePlaceholder } from "@foundry/supabase-placeholder";
import "./supabase-community.css";

export interface SupabaseCommunityPost {
  /** the author's handle, e.g. "@mara_builds" */
  handle: string;
  /** the post's text (line breaks are kept) */
  text: string;
  /** the author's picture (40px, round); empty shows a placeholder disc */
  avatar?: ReactNode;
  /** a link to the original post */
  href?: string;
}

export interface SupabaseCommunityProps {
  title: string;
  /** one grey line under the title */
  description?: string;
  /** the white button under it */
  cta?: { label: string; href: string };
  /** the posts; they are dealt across five columns in turn (two show on phones) */
  posts: SupabaseCommunityPost[];
  /** a small badge on each avatar, e.g. the network the post came from (an icon) */
  badge?: ReactNode;
  className?: string;
}

// the columns sit lower towards the middle, an arch; their cards rise further as they enter
const OFFSETS = ["mt-0", "mt-15", "mt-25", "mt-15", "mt-0"];
const RISES = [40, 60, 100, 60, 40];

/** A centred title over five arched columns of post cards that fade, unblur and rise in, faded out at the edges. */
export function SupabaseCommunity({ title, description, cta, posts, badge, className }: SupabaseCommunityProps) {
  const columns = OFFSETS.map((_, c) => posts.filter((_, i) => i % OFFSETS.length === c));
  return (
    <section className={cn("overflow-x-clip border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto box-content max-w-page px-gutter pt-section text-center lg:pt-24">
        <SupabaseHeading parts={[{ text: title }]} className="text-center" />
        {description && <p className="mx-auto mt-3 max-w-[20rem] text-base text-muted-foreground sm:max-w-none">{description}</p>}
        {cta && (
          <SupabaseButton href={cta.href} variant="outline" className="mt-6 h-[2.125rem] px-3 text-[0.9375rem]">
            {cta.label}
          </SupabaseButton>
        )}
      </div>

      {/* justify-center lets the over-wide row spill out evenly on both sides on desktop */}
      <div className="mt-20 flex h-[38.75rem] justify-start overflow-clip mask-x-from-80% mask-x-to-100% mask-b-from-75% mask-b-to-100% lg:justify-center">
        <div className="-ml-2.5 flex w-max shrink-0 gap-2.5 lg:ml-0">
          {columns.map((column, c) => (
            <ul
              key={c}
              className={cn("flex w-[11.875rem] flex-col gap-2 lg:w-[17.9375rem]", OFFSETS[c])}
              style={{ "--supabase-community-rise": `${RISES[c]}px` } as CSSProperties}
            >
              {column.map((post) => (
                <li key={post.handle} className="supabase-community-card rounded-2xl border border-border bg-card p-5 text-left lg:p-6 lg:rounded-[1.25rem]">
                  <a href={post.href} className="block">
                    <span className="flex items-center gap-3">
                      <span className="relative size-10 shrink-0">
                        {post.avatar ?? <SupabasePlaceholder tone="avatar" />}
                        {badge && (
                          <span className="absolute -top-1.5 -left-1.5 flex size-5 items-center justify-center rounded-full bg-foreground text-background ring-2 ring-card [&_svg]:size-2.5">
                            {badge}
                          </span>
                        )}
                      </span>
                      <span className="truncate text-[0.9375rem] text-foreground">{post.handle}</span>
                    </span>
                    <p className="mt-4 text-[0.9375rem] leading-[1.5] whitespace-pre-line text-foreground/75">{post.text}</p>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
