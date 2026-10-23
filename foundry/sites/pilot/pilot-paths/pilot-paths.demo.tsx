import { PilotPaths, type PilotPathsProps } from "./pilot-paths";

export const pathsSample: PilotPathsProps = {
  title: "Three ways to get the finance\nhelp your company needs.",
  main: {
    title: "Fix it this week",
    text: "Tell us what's stuck, from cash to hiring plans to messy books, and leave the call with a clear next step.",
    cta: { label: "Book a call", href: "#" },
  },
  explore: {
    title: "See how we work",
    text: "Take the tour of how live numbers and real advisors fit together, and why half software, half people beats either alone.",
    cta: { label: "Take the tour", href: "#" },
  },
  begin: {
    title: "Just getting started",
    text: ["We back ", { label: "new founders", href: "#" }, " and first-time ", { label: "owners", href: "#" }, " from the very first invoice."],
  },
  note: "Whether you need help today, want to look around first, or are only just starting, there's a way in that suits you.\nEvery first call starts with your goals, not our pitch.",
};

export default function Demo() {
  return <PilotPaths {...pathsSample} />;
}
