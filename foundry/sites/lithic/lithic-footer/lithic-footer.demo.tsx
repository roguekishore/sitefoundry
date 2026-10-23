import { AtSign, Hexagon, Play, Rss } from "lucide-react";
import { LithicFooter, type LithicFooterProps } from "./lithic-footer";

const l = (label: string) => ({ label, href: "#" });

export const footerSample: LithicFooterProps = {
  wordmark: "Corvane",
  mark: <Hexagon aria-hidden className="size-4" strokeWidth={3} />,
  columns: [
    [
      { title: "Products", links: [l("Card issuing"), l("Accounts & ledgers"), l("Managed programs")] },
      { title: "Core", links: [l("Authorisations"), l("Risk rules")] },
    ],
    [{ title: "Use cases", links: [l("AI agents"), l("Lending"), l("Neobanks"), l("Payouts"), l("Fleet"), l("Digital dollars")] }],
    [
      {
        title: "Industries",
        links: [l("Bills"), l("Staff rewards"), l("Spend management"), l("Health claims"), l("Insurance"), l("Ad budgets"), l("Loyalty"), l("Trips")],
      },
    ],
    [{ title: "Builders", links: [l("Guides"), l("Test bench"), l("System status"), l("Client libraries"), l("What shipped")] }],
    [{ title: "Learn", links: [l("Library"), l("The show"), l("Live sessions"), l("Customer stories"), l("Release notes"), l("Side by side")] }],
    [{ title: "Company", links: [l("Our story"), l("Jobs"), l("Legal hub"), l("Newsroom"), l("Terms"), l("Privacy"), l("Security")] }],
  ],
  legal: [
    "© Corvane Labs, Inc. Corvane is a technology company, not a bank.",
    "Card services are provided by our partner banks, members of their card networks.",
  ],
  socials: [
    { label: "Newsletter", href: "#", icon: <AtSign aria-hidden /> },
    { label: "Blog feed", href: "#", icon: <Rss aria-hidden /> },
    { label: "Videos", href: "#", icon: <Play aria-hidden /> },
  ],
};

export default function Demo() {
  return <LithicFooter {...footerSample} />;
}
