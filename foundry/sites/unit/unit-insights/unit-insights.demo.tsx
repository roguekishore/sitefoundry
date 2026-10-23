import { UnitInsights, type UnitInsightsProps } from "./unit-insights";

export const insightsSample: UnitInsightsProps = {
  heading: "Field notes",
  cta: { label: "Browse the library", href: "#" },
  posts: [
    { kind: "Blog", time: "4 minutes", title: "Shipped this season: card controls, global payouts, and FedNow", href: "#" },
    { kind: "Blog", time: "3 minutes", title: "How our payment volume tripled in a single year", href: "#" },
  ],
  featured: [
    { kind: "Guide", time: "9 mins", title: "Past the docs: questions to ask any money platform", href: "#" },
    { kind: "Guide", time: "14 mins", title: "A field guide to ledgers, rails and partner banks", href: "#" },
  ],
};

export default function Demo() {
  return <UnitInsights {...insightsSample} />;
}
