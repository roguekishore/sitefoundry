import { Anchor, Coins, Landmark, Wallet } from "lucide-react";
import { PaxosAssets, type PaxosAssetsProps } from "./paxos-assets";

export const assetsSample: PaxosAssetsProps = {
  title: "Tokens with the reserves to prove it",
  lead: "Each Keelstone token redeems one-for-one, its reserves sit in segregated accounts out of reach of creditors, and supervisors check the books every month.",
  assets: [
    {
      ticker: "KLD",
      icon: <Anchor />,
      tone: "chart-1",
      name: "Keel Dollar",
      description: "One KLD is one dollar. The settlement token large firms already clear with.",
      link: { label: "Read More", href: "#" },
    },
    {
      ticker: "HBN",
      icon: <Landmark />,
      tone: "chart-2",
      name: "Harbor Note",
      description: "Backed by short treasuries and cash, redeemable on any business day.",
      link: { label: "Read More", href: "#" },
    },
    {
      ticker: "BLN",
      icon: <Coins />,
      tone: "chart-3",
      name: "Bullion Share",
      description: "Each token is a claim on one gram of vaulted, serial-numbered gold.",
      link: { label: "Read More", href: "#" },
    },
    {
      ticker: "TWX",
      icon: <Wallet />,
      tone: "chart-4",
      name: "Tillwave Cash",
      description: "Minted by Keelstone for the Tillwave app, built for everyday payments.",
      link: { label: "Read More", href: "#" },
    },
  ],
  banner: { text: "Audited every month, in public", action: { label: "Read the Audits", href: "#" } },
};

export default function Demo() {
  return <PaxosAssets {...assetsSample} />;
}
