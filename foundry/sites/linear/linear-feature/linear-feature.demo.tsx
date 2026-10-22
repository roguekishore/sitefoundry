// Sample content lives here (gallery only); the page reuses it. Four product areas, made up.
import { LinearFeature, type LinearFeatureProps } from "./linear-feature";

export const featureSamples: LinearFeatureProps[] = [
  {
    title: <>Capture<br />and connect</>,
    text: "Every chat thread, support ticket and stray idea becomes a clear issue, sorted to the right team with labels and priority already set.",
    link: { label: "Learn more", href: "#capture" },
    mediaLabel: "Product window: a chat thread beside a board of issues",
    indexLabel: "Features",
    index: [
      [{ label: "Kestrel Agent", href: "#agent" }, { label: "Sorting", href: "#sorting" }],
      [{ label: "Requests", href: "#requests" }, { label: "Kestrel Asks", href: "#asks" }],
    ],
  },
  {
    title: <>Roadmaps<br />and progress</>,
    text: "Go from rough idea to launch date with one plan. Keep everyone aligned on goals, timelines and living product specs.",
    link: { label: "Learn more", href: "#roadmaps" },
    mediaLabel: "Product window: a timeline of projects and a cycle-time chart",
    indexLabel: "Features",
    index: [
      [{ label: "Projects", href: "#projects" }, { label: "Updates", href: "#updates" }, { label: "Timeline view", href: "#timeline" }],
      [{ label: "Specs", href: "#specs" }, { label: "Goals", href: "#goals" }, { label: "Reports", href: "#reports" }],
    ],
  },
  {
    title: <>Agents<br />and routines</>,
    text: "Put agents to work next to your team. Pair on hard problems in real time, or hand over a whole issue and review the result.",
    link: { label: "Learn more", href: "#agents" },
    mediaLabel: "Product window: a row of agent chat panels",
    indexLabel: "Features",
    index: [
      [{ label: "Kestrel Agent", href: "#agent-2" }, { label: "Sorting", href: "#sorting-2" }],
      [{ label: "Agent sessions", href: "#sessions" }, { label: "Kestrel API", href: "#api" }],
    ],
  },
  {
    title: <>Code, review<br />and release</>,
    text: "Review changes with readable diffs, the full story behind them and far fewer comment loops. Keep pull requests moving, carefully.",
    link: { label: "Learn more", href: "#review" },
    mediaLabel: "Product window: an issue list beside a code diff",
    indexLabel: "Features",
    index: [
      [{ label: "Issues", href: "#issues" }, { label: "Guided review", href: "#guided" }, { label: "Diffs", href: "#diffs" }],
      [{ label: "Git hooks", href: "#git" }, { label: "Sprints", href: "#sprints" }, { label: "Releases", href: "#releases" }],
    ],
  },
];

export default function Demo() {
  return <LinearFeature {...featureSamples[0]} />;
}
