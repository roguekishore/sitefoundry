// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { AtSign, CirclePlay, Rss, Users } from "lucide-react";
import { wordmark } from "../attio-header/attio-header.demo";
import { AttioFooter, type AttioFooterProps } from "./attio-footer";

const link = (label: string, extra: Partial<{ tag: string; external: boolean }> = {}) => ({
  label,
  href: `#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  ...extra,
});

export const footerSample: AttioFooterProps = {
  brand: "Tessel",
  logo: wordmark,
  groups: [
    { title: "Product", column: 0, phoneColumn: 0, links: [link("Invite a team", { tag: "New" }), link("Release notes"), link("Browser extension", { external: true }), link("iPhone app", { external: true }), link("Android app", { external: true })] },
    { title: "Company", column: 0, phoneColumn: 0, links: [link("Stories"), link("News"), link("Tech blog", { tag: "New" }), link("Jobs"), link("Our principles"), link("Press kit"), link("Partner with us")] },
    { title: "Move from", column: 1, phoneColumn: 0, links: [link("Spreadsheets"), link("Legacy CRMs"), link("Inbox folders"), link("Contact apps"), link("CSV files")] },
    { title: "Tessel for", column: 1, phoneColumn: 1, links: [link("Early-stage teams"), link("Investors")] },
    { title: "Works with", column: 2, phoneColumn: 1, links: [link("Mail"), link("Calendar"), link("Chat"), link("Data warehouse"), link("Forms"), link("Billing"), link("Support desk"), link("Automation")] },
    { title: "Help", column: 3, phoneColumn: 1, links: [link("Founder program"), link("Help centre"), link("Developers", { external: true }), link("Status", { external: true }), link("Find an expert"), link("Downloads"), link("Security", { external: true })] },
  ],
  socials: [
    { label: "Community", href: "#community", icon: <Users /> },
    { label: "Updates", href: "#updates", icon: <AtSign /> },
    { label: "Feed", href: "#feed", icon: <Rss /> },
    { label: "Videos", href: "#videos", icon: <CirclePlay /> },
  ],
  copyright: "© 2026 Tessel Software Ltd.",
  legal: [link("Terms"), link("Privacy"), link("For agents")],
};

export default function Demo() {
  return <AttioFooter {...footerSample} />;
}
