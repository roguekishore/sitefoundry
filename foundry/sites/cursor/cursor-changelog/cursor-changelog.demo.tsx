import type { CursorChangelogProps } from "./cursor-changelog";
import { CursorChangelog } from "./cursor-changelog";

export const changelogSample: CursorChangelogProps = {
  title: "Release notes",
  releases: [
    { href: "#", date: "Oct 9, 2026", title: "Shared workspaces for hosted agents, and faster cold starts" },
    { href: "#", date: "Oct 2, 2026", title: "A directory for team plugins" },
    { href: "#", date: "Sep 24, 2026", title: "Steer local agents from your phone" },
    { href: "#", date: "Sep 11, 2026", title: "Staged rollouts and security checks" },
  ],
  more: { label: "See everything that shipped", href: "#" },
};

export default function Demo() {
  return <CursorChangelog {...changelogSample} />;
}
