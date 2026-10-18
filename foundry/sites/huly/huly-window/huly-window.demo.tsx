// Sample content lives here (gallery only); the hero demo and the page reuse it.
import { HulyWindow, type HulyWindowProps } from "./huly-window";

/** Tessel, the fictional product's mark: three tiles and one turned on its corner. */
export function TesselMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <rect x="2" y="2" width="9" height="9" rx="2.2" />
      <rect x="13.4" y="2.4" width="8.2" height="8.2" rx="2" transform="rotate(45 17.5 6.5)" />
      <rect x="2" y="13" width="9" height="9" rx="2.2" />
      <rect x="13" y="13" width="9" height="9" rx="2.2" />
    </svg>
  );
}

export const windowSample: HulyWindowProps = {
  logo: <TesselMark />,
  widget: { value: "72%", label: "Focus" },
  sidebar: {
    title: "Planner",
    search: "Find anything…",
    items: ["My work", "All tasks", "Boards", "Roadmap", "Archive"],
    groupLabel: "Teams",
    groups: ["Product", "Growth", "Platform", "Support"],
  },
  breadcrumb: ["Workspace", "Product", "Tasks"],
  title: "Tasks",
  people: ["AR", "MK", "LT", "JS"],
  more: "+6",
  views: ["Board", "List", "Timeline"],
  filter: "Filter",
  columns: [
    {
      name: "Inbox",
      count: "12",
      tone: "backlog",
      cards: [
        { title: "Draft the referral programme rules", tags: [{ label: "Low", tone: "glow" }, { label: "Growth", tone: "highlight" }], progress: "0%", people: ["AR", "MK"] },
        { title: "Benchmark search speed on large boards", tags: [{ label: "Medium", tone: "glow" }, { label: "Platform", tone: "chart-5" }], people: ["LT"] },
      ],
    },
    {
      name: "Next up",
      count: "18",
      tone: "todo",
      cards: [
        { title: "Interview five teams about weekly planning", tags: [{ label: "High", tone: "destructive" }, { label: "Research", tone: "chart-5" }], progress: "20%", people: ["JS", "PN"] },
        { title: "Polish empty states in the inbox", tags: [{ label: "Design", tone: "highlight" }], people: ["MK"] },
      ],
    },
    {
      name: "Doing",
      count: "5",
      tone: "progress",
      cards: [
        { title: "Offline mode for the mobile app", tags: [{ label: "Medium", tone: "glow" }, { label: "QA", tone: "highlight" }], progress: "65%", people: ["AR", "LT", "JS"] },
        { title: "Calendar sync for shared rooms", tags: [{ label: "Platform", tone: "chart-5" }], progress: "30%", people: ["PN"] },
      ],
    },
    {
      name: "Shipped",
      count: "41",
      tone: "done",
      cards: [
        { title: "Keyboard shortcuts cheat sheet", tags: [{ label: "Done", tone: "chart-2" }], people: ["MK", "AR"] },
        { title: "Faster board loading", tags: [{ label: "Platform", tone: "chart-5" }], people: ["LT"] },
      ],
    },
  ],
  inbox: {
    title: "Inbox",
    tabs: ["All", "Tasks", "Chat"],
    badge: "3",
    items: [
      { name: "Ana Ruiz", action: "mentioned you in", target: "Launch plan", time: "8 min ago", place: "Growth", unread: true },
      { name: "Milo Kerr", action: "moved", target: "Offline mode", time: "1 hour ago", place: "Product", unread: true },
      { name: "Lena Tan", action: "commented on", target: "Search speed", time: "3 hours ago", place: "Platform" },
      { name: "Jon Silva", action: "assigned you", target: "Empty states", time: "5 hours ago", place: "Design" },
      { name: "Priya Nair", action: "joined", target: "Support", time: "Yesterday", place: "Teams" },
    ],
  },
};

export default function Demo() {
  return (
    <div className="dark bg-background px-gutter pt-16 pb-6">
      <div className="mx-auto max-w-page">
        <HulyWindow {...windowSample} />
      </div>
    </div>
  );
}
