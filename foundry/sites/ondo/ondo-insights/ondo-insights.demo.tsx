import { OndoInsights, type OndoInsightsProps } from "./ondo-insights";

export const insightsSample: OndoInsightsProps = {
  lead: "The Corvane Desk",
  trail: "Notes on Open Markets",
  action: { label: "All articles", href: "#" },
  items: [
    { category: "Research", date: "Oct 9, 2026", title: "Who holds tokenized treasuries, and why they stay", href: "#" },
    { category: "Market structure", date: "Sep 30, 2026", title: "Settlement after hours: what changes when markets never close", href: "#" },
    { category: "Explainer", date: "Sep 12, 2026", title: "Reading a reserve report in five minutes", href: "#" },
  ],
};

export default function Demo() {
  return <OndoInsights {...insightsSample} />;
}
