// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { AtSign, Download, MessageCircle, Play, Rss, Sprout } from "lucide-react";
import { AirwallexFooter, type AirwallexFooterProps } from "./airwallex-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: AirwallexFooterProps = {
  wordmark: "Fernhold",
  mark: <Sprout aria-hidden />,
  badges: [
    { kicker: "Download for", label: "iPhone", href: "#", icon: <Download aria-hidden /> },
    { kicker: "Get it for", label: "Android", href: "#", icon: <Play aria-hidden /> },
  ],
  groups: [
    { title: "Wallets", links: links("Wallets overview", "Local accounts", "Conversions & transfers") },
    { title: "Spend", links: links("Spend overview", "Company cards", "Expenses", "Bills", "Purchase requests") },
    { title: "Collect", links: links("Collect overview", "Hosted checkout", "Store plugins", "Payment links", "In-person payments") },
    { title: "Invoicing", links: links("Invoicing overview", "Invoices", "Recurring plans", "Usage billing") },
    { title: "Build", links: links("Build overview", "Linked accounts", "Accounts API", "Payments API", "Conversion API", "Payouts", "Card issuing") },
    { title: "Platform use cases", links: links("Finance inside your app", "Treasury for platforms", "Seller payouts") },
    { title: "Plans", links: links("Pricing") },
    { title: "Developers", links: links("Guides", "API docs") },
    { title: "Company", links: links("About us", "How we work", "Legal", "Cookie settings", "Jobs", "Partners") },
    { title: "Resources", links: links("Journal", "Press", "Help centre", "Contact support", "Give feedback", "System status") },
  ],
  copyright: "© Fernhold 2026. All rights reserved. Site map",
  socials: [
    { label: "Newsletter", href: "#", icon: <AtSign aria-hidden /> },
    { label: "Community", href: "#", icon: <MessageCircle aria-hidden /> },
    { label: "Journal feed", href: "#", icon: <Rss aria-hidden /> },
  ],
  legal: [
    "Fernhold is a fictional company. Its platform is audited against recognised international security standards and the rules of every market it serves.",
    "Customer money is held with established partner banks and kept separate from our own, in line with local safeguarding rules wherever Fernhold operates.",
  ],
};

export default function Demo() {
  return <AirwallexFooter {...footerSample} />;
}
