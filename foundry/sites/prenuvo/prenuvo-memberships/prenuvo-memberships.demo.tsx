import { PrenuvoMemberships, type PrenuvoMembershipsProps } from "./prenuvo-memberships";

export const membershipsSample: PrenuvoMembershipsProps = {
  id: "plans",
  title: "A plan that grows with you, year after year",
  lead: "Each membership tracks your results over time, so every visit builds on the last and you always have something useful to bring to your own doctor.",
  plans: [
    {
      name: "Complete",
      spec: "In the scanner ~70 minutes",
      body: "Our fullest plan: the full-body scan, the brain volume study, a body composition report and our widest blood panel, built for the long view.",
      cta: { label: "Reserve", href: "#reserve-complete" },
      beam: "lilac",
    },
    {
      name: "Essential",
      spec: "In the scanner ~55 minutes",
      body: "The full-body scan paired with a detailed blood panel, for a clear read on every major system.",
      cta: { label: "Reserve", href: "#reserve-essential" },
      beam: "blue",
    },
    {
      name: "Starter",
      spec: "In the scanner ~40 minutes",
      body: "A focused scan and a core blood panel: the simplest way to set your first baseline.",
      cta: { label: "Reserve", href: "#reserve-starter" },
      beam: "green",
    },
  ],
  cta: { label: "Compare prices", href: "#prices" },
};

export default function Demo() {
  return (
    <div className="bg-background pt-16">
      <PrenuvoMemberships {...membershipsSample} />
    </div>
  );
}
