import { Smartphone, Tablet } from "lucide-react";
import { RhoFooter, type RhoFooterProps } from "./rho-footer";

const links = (labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: RhoFooterProps = {
  bigWord: "Onward",
  brand: "Ostra",
  socials: links(["LinkedIn", "Bluesky", "YouTube", "Threads"]),
  columns: [
    {
      title: "Product",
      links: links(["Checking", "Treasury", "Corporate cards", "Spend controls", "Bill pay", "Invoicing", "Financing", "Entity formation", "Ledger", "Developer API"]),
    },
    {
      title: "Platform",
      links: links(["Rewards", "For startups", "Partners", "Pricing", "Customers", "Help centre", "FAQ", "Terms", "Privacy", "Security", "Status", "Changelog"]),
    },
    { title: "Company", links: links(["About", "Careers", "Journal", "Press kit", "Trust centre"]) },
  ],
  contact: { title: "Contact", lines: ["+1 (555) 014-2290", "hello@ostra.example", "48 Mercer Lane", "Portland, OR 97205"] },
  badges: [
    { caption: "Get it for", label: "iPhone", href: "#", icon: <Smartphone strokeWidth={1.5} /> },
    { caption: "Get it for", label: "Android", href: "#", icon: <Tablet strokeWidth={1.5} /> },
  ],
  legal: [
    "Ostra is a fictional company invented for this design demo. It is not a bank, does not hold deposits and offers no financial products. Every name, number and address on this page is made up, and any resemblance to a real business is unintended.",
    "Sample disclosures are shown only to fill the layout the way a real finance site would. In a real product this space would explain who holds customer funds, how deposit insurance applies, which partners issue cards, and what limits or conditions apply to each service.",
    "Yields, fees and rates quoted on this page are placeholders. They are not quotes, forecasts or offers, and they should not be used to make any financial decision.",
    "Any mention of treasury sweeps, money-market funds or T-bills is illustrative. A real service of this kind would name its adviser and broker, describe the risks, including the possible loss of principal, and point to its full disclosure documents.",
    "Card features, cashback percentages and spending limits shown are examples only. In a real product they would depend on eligibility, the issuing partner and the programme terms in force at the time, which could change without notice.",
    "Nothing here is legal, tax, accounting or investment advice. Speak to a qualified professional about your own situation before acting on anything you read on a finance website, this one included.",
  ],
  copyright: "© 2026 Ostra Labs (fictional). All rights reserved.",
};

export default function Demo() {
  return <RhoFooter {...footerSample} />;
}
