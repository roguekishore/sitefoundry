import { AtSign, Hexagon, Rss } from "lucide-react";
import { PaxosFooter, type PaxosFooterProps } from "./paxos-footer";

const l = (label: string) => ({ label, href: "#" });

export const footerSample: PaxosFooterProps = {
  columns: [
    [
      { title: "Platform", links: [l("Brokerage Engine"), l("Payments API"), l("Token Minting"), l("Issue and Redeem"), l("Desk")] },
      { title: "Infrastructure", links: [l("Vaults & Keys"), l("Compliance Log"), l("Security")] },
    ],
    [{ title: "Keelstone Tokens", links: [l("Keel Dollar (KLD)"), l("Tillwave Cash (TWX)"), l("Harbor Note (HBN)"), l("Bullion Share (BLN)")] }],
    [{ title: "About", links: [l("Who we are"), l("Jobs"), l("Journal"), l("Press"), l("Keelstone Labs"), l("Europe")] }],
    [{ title: "Help", links: [l("Get in touch"), l("Monthly audits"), l("Terms of use"), l("Privacy settings"), l("Brand kit"), l("Support")] }],
    [{ title: "Build", links: [l("API reference"), l("Sandbox tokens")] }],
  ],
  newsletter: {
    label: "Monthly notes from Keelstone on rules, reserves and releases",
    placeholder: "you@company.com*",
    note: "We use your address only to send these notes. Unsubscribe from any issue; our privacy notice explains how we keep your details.",
    submit: "Sign Up",
  },
  mark: <Hexagon className="text-chart-1" strokeWidth={2.5} />,
  brand: "Keelstone",
  socials: [
    { label: "Newsletter feed", href: "#", icon: <Rss /> },
    { label: "Email", href: "#", icon: <AtSign /> },
  ],
  legal: [l("Privacy Notice"), l("Cookie Notice")],
  copyright: "© 2026 Keelstone Trust Co. All rights reserved.",
};

export default function Demo() {
  return <PaxosFooter {...footerSample} />;
}
