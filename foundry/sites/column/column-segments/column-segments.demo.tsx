// Sample content (gallery only); the page reuses it.
import { Building, Code2, Landmark, Plane } from "lucide-react";
import { ColumnSegments, type ColumnSegmentsProps } from "./column-segments";

export const segmentsSample: ColumnSegmentsProps = {
  eyebrow: "Made for",
  segments: [
    {
      icon: <Code2 strokeWidth={2.25} />,
      label: "Software platforms",
      body: [
        "Ship money features as fast as the rest of your product. Tidewell gives you the charter, the rails and the ledger underneath payouts, wallets and lending, so your team writes code instead of chasing a partner bank.",
        "Everything a bank does is an endpoint here: open accounts, move funds the same minute, issue cards and extend credit. Whether you run a marketplace, a payroll tool or a vertical SaaS, the plumbing is ready and you keep the customer relationship.",
      ],
    },
    {
      icon: <Landmark strokeWidth={2.25} />,
      label: "Community banks",
      body: [
        "Offer modern rails to your customers without replacing your core. Tidewell settles on your behalf and hands back clean, real-time data.",
        "Add instant payments, wire automation and sweep accounts through one integration your team can run in weeks.",
      ],
    },
    {
      icon: <Plane strokeWidth={2.25} />,
      label: "Global lenders",
      body: [
        "Reach dollar markets without a US charter of your own. Hold balances, pay out and fund loans through a single regulated partner.",
        "Multicurrency accounts and correspondent links keep cross-border flows fast and transparent.",
      ],
    },
    {
      icon: <Building strokeWidth={2.25} />,
      label: "Property finance",
      body: [
        "Run escrow, rent collection and construction draws on accounts you open and close by API.",
        "Every movement is traceable to the unit and the tenant, from the first deposit to the final payoff.",
      ],
    },
  ],
};

export default function Demo() {
  return <ColumnSegments {...segmentsSample} />;
}
