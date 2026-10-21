import { LeomeAndPartnersInsights, type LeomeAndPartnersInsightsProps } from "./leome-and-partners-insights";

export const insightsSample: LeomeAndPartnersInsightsProps = {
  title: "From the desk",
  articles: [
    {
      href: "#notes/supply-contracts",
      tags: ["Commerce", "02 Sep 2026"],
      title: "Supply contracts after the tariff shift: what to renegotiate first",
      excerpt: "New duties have moved costs onto buyers overnight. We look at which clauses carry the risk, and how to reopen terms without souring a good supplier.",
    },
    {
      href: "#notes/forty-years",
      tags: ["Firm", "18 Aug 2026"],
      title: "Forty years on one quiet street",
      excerpt: "How a two-room practice above a bakery grew into a firm that still answers its own phone.",
    },
    {
      href: "#notes/first-lease",
      tags: ["Property", "05 Aug 2026"],
      title: "Signing your first commercial lease",
      excerpt: "Break clauses, repair duties and rent reviews: the three lines worth reading twice.",
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <LeomeAndPartnersInsights {...insightsSample} />
      <div className="h-[30svh]" />
    </div>
  );
}
