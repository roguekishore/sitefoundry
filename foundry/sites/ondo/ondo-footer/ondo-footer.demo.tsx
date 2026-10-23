import { AtSign, Rss } from "lucide-react";
import { OndoFooter, type OndoFooterProps } from "./ondo-footer";

export const footerSample: OndoFooterProps = {
  columns: [
    {
      title: "Products",
      links: [
        { label: "Tidemark", href: "#" },
        { label: "Ballast", href: "#" },
        { label: "Corvane Equities", href: "#" },
        { label: "Baskets", href: "#" },
        { label: "Private Credit", href: "#" },
      ],
    },
    {
      title: "Rails",
      links: [
        { label: "Keystone", href: "#" },
        { label: "Crossing", href: "#", external: true },
        { label: "Swap Desk", href: "#", external: true },
      ],
    },
    {
      title: "Read",
      links: [
        { label: "The Desk", href: "#" },
        { label: "Journal", href: "#" },
        { label: "Primers", href: "#" },
      ],
    },
    {
      title: "Network",
      links: [
        { label: "Partners", href: "#" },
        { label: "Grants", href: "#", external: true },
        { label: "Builders", href: "#", external: true },
      ],
    },
    {
      title: "Developers",
      links: [
        { label: "Docs", href: "#", external: true },
        { label: "Security", href: "#", external: true },
        { label: "Bug Reports", href: "#", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "People", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Press Kit", href: "#", external: true },
        { label: "Contact", href: "#" },
        { label: "Press Enquiries", href: "#" },
      ],
    },
  ],
  legal: [
    "[*] About the assets on this site: Corvane tokens are digital representations issued by Corvane group entities. They have not been registered under the securities laws of any country and may not be offered or sold where doing so would require registration. Eligibility rules differ by product and by country; some products are open only to qualified or professional investors.",
    "About Tidemark and Corvane Equities: holding a token gives economic exposure to the assets behind it, not the assets themselves. Token holders do not hold shares, fund units or government bills directly and have no voting or ownership rights in them.",
    "Nothing on this site is investment, legal or tax advice. Tokens carry risk, including the loss of everything paid for them. Past returns do not predict future ones. Read each product’s offering documents in full before deciding anything.",
    "This page may contain forward-looking statements about plans, products and markets. They rest on current expectations and may turn out to be wrong; we take no duty to update them except where the law requires it.",
  ],
  notes: ["¹ Yields are shown as of the last business day. Tidemark’s yield is set monthly; Ballast’s is the annualised change in its price over the past 30 days."],
  copyright: "Corvane © 2026",
  bottomLinks: [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Notice", href: "#" },
  ],
  socials: [
    { label: "Newsletter", href: "#", icon: <AtSign strokeWidth={1.5} /> },
    { label: "Feed", href: "#", icon: <Rss strokeWidth={1.5} /> },
  ],
};

export default function Demo() {
  return <OndoFooter {...footerSample} />;
}
