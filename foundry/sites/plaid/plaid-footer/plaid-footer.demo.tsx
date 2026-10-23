import { AtSign, MessageCircle, Rss, Sailboat } from "lucide-react";
import { PlaidFooter, type PlaidFooterProps } from "./plaid-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: PlaidFooterProps = {
  brand: { name: "Halyard", href: "#", icon: Sailboat },
  groups: [
    { title: "Platform", links: links("Link", "Balance", "Owner check", "Risk score", "Payouts", "ID check", "Watchlists", "Ledger feed", "Holdings", "Debts", "Labelled spend", "Income", "Credit view") },
    { title: "Company", links: links("About", "Jobs", "Contact", "Partners", "Newsroom", "Security", "Terms") },
    { title: "Use cases", links: links("AI products", "Car finance", "Banks & credit unions", "Subscriptions", "Business money tools", "Personal lending", "Early pay", "Fraud & risk", "Gaming", "Public sector", "Insurance", "Mortgages") },
    { title: "For people", links: links("Fix a connection", "Trust and safety", "How it works", "Halyard Hub", "Delete my data", "Privacy notice", "FAQs") },
    { title: "Learn", links: links("Plans", "Coverage", "Journal", "Guides", "Yearly summit", "Customer stories") },
    { title: "Builders", links: links("Quick start", "API reference", "SDKs", "Source code", "Demos") },
    { title: "For banks", links: links("Open data hub", "Core exchange", "Access manager", "App list") },
  ],
  socials: [
    { label: "Email", href: "#", icon: <AtSign strokeWidth={1.75} /> },
    { label: "Community", href: "#", icon: <MessageCircle strokeWidth={1.75} /> },
    { label: "Journal feed", href: "#", icon: <Rss strokeWidth={1.75} /> },
  ],
  copyright: "© 2026 Halyard Ltd.",
  region: { label: "United Kingdom", href: "#" },
  privacy: { label: "Your privacy choices", href: "#" },
};

export default function Demo() {
  return <PlaidFooter {...footerSample} />;
}
