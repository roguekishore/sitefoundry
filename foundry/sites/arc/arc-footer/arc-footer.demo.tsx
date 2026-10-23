import { AtSign, Rss, Send } from "lucide-react";
import { ArcFooter, type ArcFooterProps } from "./arc-footer";

const links = (labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: ArcFooterProps = {
  brand: { name: "basin", href: "#" },
  columns: [
    [
      { title: "For startups", links: links(["Operating account", "Reserve account", "Covenant account", "Venture debt", "Analyst agent"]) },
      { title: "For lenders", links: links(["Deal flow"]) },
    ],
    [{ title: "Company", links: links(["Journal", "About us", "Jobs", "Press", "Partners", "Get in touch"]) }],
    [{ title: "Resources", links: links(["Customer stories", "Glossary", "Runway calculator", "Finance school", "Playbooks", "Fees", "Treasury options"]) }],
  ],
  newsletter: { title: "Get the monthly memo", placeholder: "Work email", button: "Subscribe", inputLabel: "Work email" },
  copyright: "© 2026 Basin Labs Inc. All rights reserved.",
  legal: links(["Disclosures", "Terms", "Privacy", "Referral terms", "Cookies"]),
  socials: [
    { label: "Mastodon", href: "#", icon: <AtSign aria-hidden strokeWidth={2} /> },
    { label: "Telegram", href: "#", icon: <Send aria-hidden strokeWidth={2} /> },
    { label: "RSS feed", href: "#", icon: <Rss aria-hidden strokeWidth={2} /> },
  ],
};

export default function Demo() {
  return <ArcFooter {...footerSample} />;
}
