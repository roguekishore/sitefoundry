// Sample content lives here (gallery only); the page reuses it. Tallyhold is made up.
import { Vault } from "lucide-react";
import { MeowHeader, type MeowHeaderProps } from "./meow-header";

export const headerSample: MeowHeaderProps = {
  mark: { name: "tallyhold", icon: <Vault strokeWidth={2.5} />, href: "#" },
  nav: [
    {
      label: "Accounts",
      items: [
        { label: "Company checking", description: "One account for every currency you get paid in", href: "#" },
        { label: "Spend cards", description: "Virtual and plastic cards with limits per person", href: "#" },
        { label: "Reserve", description: "Park idle cash in short-dated bills", href: "#" },
        { label: "Agent access", description: "Let your software agent run the paperwork", href: "#" },
      ],
    },
    {
      label: "Tools",
      items: [
        { label: "Bills and invoices", description: "Send branded invoices, get paid by bank or card", href: "#" },
        { label: "Approvals", description: "Two sets of eyes on every large payment", href: "#" },
      ],
    },
    {
      label: "Who it's for",
      items: [
        { label: "Studios and agencies", href: "#" },
        { label: "Funds", href: "#" },
        { label: "Early-stage teams", href: "#" },
      ],
    },
    { label: "Stories", href: "#" },
    {
      label: "Learn",
      items: [
        { label: "Field notes", description: "Our writing on money and software", href: "#" },
        { label: "Help desk", href: "#" },
      ],
    },
  ],
  signIn: { label: "Log in", href: "#" },
  cta: { label: "Open account", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="dark min-h-48 bg-background">
      <MeowHeader {...headerSample} position="static" />
    </div>
  );
}
