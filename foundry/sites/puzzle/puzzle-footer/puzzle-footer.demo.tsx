import { AtSign, Play, Rss, TreeDeciduous } from "lucide-react";
import { PuzzleFooter, type PuzzleFooterProps } from "./puzzle-footer";

const l = (label: string) => ({ label, href: "#" });

export const footerSample: PuzzleFooterProps = {
  brand: { name: "Oakbook", href: "#", icon: <TreeDeciduous strokeWidth={2} /> },
  tagline: "Books that keep up with you. At AI pace.",
  socials: [
    { label: "Newsletter", href: "#", icon: <AtSign strokeWidth={2} /> },
    { label: "Videos", href: "#", icon: <Play strokeWidth={2} /> },
    { label: "Blog feed", href: "#", icon: <Rss strokeWidth={2} /> },
  ],
  columns: [
    [{ label: "Product", links: ["Bookkeeping plans", "Assistant", "Connect", "Accruals", "Invoices", "Connections", "Revenue schedules", "Accuracy checks"].map(l) }],
    [
      { label: "Who it's for", links: ["New companies", "Growing businesses"].map(l) },
      { label: "Learn", links: ["Switching guide", "Journal", "Customer stories", "Referral rewards", "Time-saved calculator", "Partner firms"].map(l) },
    ],
    [
      { label: "Help", links: ["Find a bookkeeper", "Help centre", "Contact us", "Questions"].map(l) },
      { label: "Company", links: ["Plans", "About Oakbook", "How it works", "Become a partner", "Jobs", "Security"].map(l) },
    ],
  ],
  copyright: "Copyright © Oakbook 2026",
  legal: ["Privacy", "Bookkeeping terms", "Software terms"].map(l),
};

export default function Demo() {
  return <PuzzleFooter {...footerSample} />;
}
