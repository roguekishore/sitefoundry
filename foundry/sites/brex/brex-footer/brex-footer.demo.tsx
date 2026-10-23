import { AtSign, Globe, Mail, MessageCircle, Rss } from "lucide-react";
import { Flame } from "lucide-react";
import { BrexFooter, type BrexFooterProps } from "./brex-footer";

export const footerSample: BrexFooterProps = {
  brand: { name: "Kiln", href: "#", icon: <Flame aria-hidden strokeWidth={2.25} /> },
  columns: [
    {
      title: "Product",
      links: ["Company cards", "Business accounts", "Expense tracking", "Bookkeeping automation", "Bill pay", "Trips", "Early teams", "Release notes"].map((label) => ({ label, href: "#" })),
    },
    {
      title: "Platform",
      links: ["Insights", "Global reach", "Ledger connections", "Live budgets", "Reporting", "Mobile app", "Developer API"].map((label) => ({ label, href: "#" })),
    },
    {
      title: "Company",
      links: ["About Kiln", "Careers", "Contact", "Partners", "Press", "Security"].map((label) => ({ label, href: "#" })),
    },
    {
      title: "Resources",
      links: ["Customer hub", "Help centre", "Blog", "Spend trends", "Bookkeeping help", "Status", "Setup services", "Legal", "Privacy", "Your privacy choices"].map((label) => ({ label, href: "#" })),
    },
  ],
  social: [
    { label: "Newsletter", href: "#", icon: <Mail aria-hidden strokeWidth={1.5} /> },
    { label: "Feed", href: "#", icon: <Rss aria-hidden strokeWidth={1.5} /> },
    { label: "Community", href: "#", icon: <MessageCircle aria-hidden strokeWidth={1.5} /> },
    { label: "Mentions", href: "#", icon: <AtSign aria-hidden strokeWidth={1.5} /> },
    { label: "Website", href: "#", icon: <Globe aria-hidden strokeWidth={1.5} /> },
  ],
  stores: [
    { label: "App Store", href: "#" },
    { label: "Google Play", href: "#" },
  ],
  footnoteMarker: "†",
  footnotes: [
    "The posted savings rate is an illustrative annualised figure for this demonstration. It assumes today's fund yield stays unchanged for a year and that all payouts are reinvested. Real returns vary with fund yields and your balance tier.",
    "Rates move daily and past yields do not predict future ones. This sample text stands in for a real disclosure and is not financial advice.",
  ],
  legal: [
    "Kiln is a fictional company used for this demonstration.",
    "Kiln Ltd | 100 Example Street, Suite 1 | Sampletown, ST 00000",
    "Sample accounts are described here for layout only. Funds in a real account may or may not be insured; check the terms that apply to you.",
    "Some Kiln products have associated fees. Plans start at $0 per user, per month, and advanced features are available for a monthly fee per user.",
  ],
};

export default function Demo() {
  return <BrexFooter {...footerSample} />;
}
