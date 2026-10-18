// Sample content lives here (gallery only); the page reuses it.
import { ArrowLeftRight, EyeOff, Filter, FolderGit2, Milestone, TrendingUp } from "lucide-react";
import { TesselMark } from "../huly-window/huly-window.demo";
import { HulyGithub, type HulyGithubProps } from "./huly-github";

export const githubSample: HulyGithubProps = {
  title: ["Your repos, in step.", "Both directions."],
  text: "Issues and pull requests flow between Tessel and your code host as they change. Plan in Tessel, ship from the repo, and never copy a ticket by hand again.",
  repo: {
    logo: <TesselMark />,
    owner: "northwind",
    name: "billing-service",
    search: "Search or jump to…",
    tabs: [{ label: "Code" }, { label: "Issues", count: "86" }, { label: "Pull requests", count: "14" }, { label: "Actions" }, { label: "Wiki" }, { label: "Security" }, { label: "Insights" }],
    active: 2,
    items: [
      { title: "Add invoice preview to the checkout", label: { text: "bug", tone: "bug" }, meta: "#2187 opened 4 minutes ago by lena-t" },
      { title: "Move currency rounding into one helper", label: { text: "feature", tone: "feature" }, meta: "#2185 opened 2 hours ago by milo" },
      { title: "Batch webhook retries", label: { text: "feature", tone: "feature" }, meta: "#2181 opened 6 hours ago by ana-r" },
      { title: "Cache tax tables per region", label: { text: "feature", tone: "feature" }, meta: "#2176 opened 11 hours ago by jsilva" },
      { title: "Stricter types for refund events", label: { text: "feature", tone: "feature" }, meta: "#2170 opened yesterday by priya" },
      { title: "Receipt email shows the wrong date", label: { text: "bug", tone: "bug" }, meta: "#2164 opened 2 days ago by dev-o" },
      { title: "Split the ledger worker", label: { text: "feature", tone: "feature" }, meta: "#2160 opened 3 days ago by milo" },
    ],
  },
  features: [
    { icon: ArrowLeftRight, title: "Two-way updates", text: "Change a task here or an issue there; both sides stay current." },
    { icon: EyeOff, title: "Private tasks", text: "Keep internal work next to public issues without leaking it." },
    { icon: FolderGit2, title: "Many repositories", text: "Plan across every repo your product touches in one place." },
    { icon: Milestone, title: "Milestones carry over", text: "Bring existing milestones along when you connect a repo." },
    { icon: TrendingUp, title: "Progress you can see", text: "Commits and reviews show up on the tasks they belong to." },
    { icon: Filter, title: "Sharp filters", text: "Slice work by repo, label, person or status in a few keys." },
  ],
};

export default function Demo() {
  return <HulyGithub {...githubSample} />;
}
