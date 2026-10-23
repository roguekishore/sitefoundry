import { ArrowLeftRight, Building2, Coins, CreditCard, Globe2, Layers, Users, Vault } from "lucide-react";
import { BridgeFeatureGrid, type BridgeFeatureGridProps } from "./bridge-feature-grid";

const icon = { "aria-hidden": true, strokeWidth: 1 } as const;

export const platformSample: BridgeFeatureGridProps = {
  label: "Platform",
  title: "One set of rails for digital dollars",
  intro:
    "Teams pick Orrery when they want to accept, hold, swap, mint and pay out digital dollars without stitching five vendors together. Open new corridors, ship new products and settle sooner for less.",
  cards: [
    {
      icon: <ArrowLeftRight {...icon} />,
      title: "Routing",
      text: "Send, receive and park digital dollars from a single API. Settle sooner, spend less on fees and reach more countries.",
      link: { label: "See Routing", href: "#" },
    },
    {
      icon: <Coins {...icon} />,
      title: "Minting",
      text: "Launch a dollar token under your own name, earn on its reserves and swap it for any currency in one call.",
      link: { label: "See Minting", href: "#" },
    },
    {
      icon: <CreditCard {...icon} />,
      title: "Spend cards",
      text: "One card programme for people and companies everywhere, funded straight from digital dollar balances.",
      link: { label: "See Spend cards", href: "#" },
    },
    {
      icon: <Vault {...icon} />,
      title: "Vaults",
      text: "Give every customer a wallet in seconds. We look after keys, network fees and the rest of the plumbing.",
      link: { label: "See Vaults", href: "#" },
    },
  ],
};

export const useCasesSample: BridgeFeatureGridProps = {
  label: "Use cases",
  title: "Built for every way money changes hands",
  intro:
    "From remittance corridors to embedded accounts, Orrery gives companies what they need to work across borders, pay people at scale and build the next wave of money products.",
  cards: [
    {
      icon: <Globe2 {...icon} />,
      title: "Remittance corridors",
      text: "Move value between countries in minutes, including the routes banks still treat as hard.",
      link: { label: "Explore", href: "#" },
    },
    {
      icon: <Users {...icon} />,
      title: "Contractor pay",
      text: "Pay freelancers and teams in any country, in the currency they want, on the day it's due.",
      link: { label: "Explore", href: "#" },
    },
    {
      icon: <Building2 {...icon} />,
      title: "Embedded accounts",
      text: "Offer dollar accounts inside your app, take wages straight in, earn on card spend or take an existing product abroad.",
      link: { label: "Explore", href: "#" },
    },
    {
      icon: <Layers {...icon} />,
      title: "Exchanges",
      text: "Add deposits and withdrawals, your own dollar token and card spend to any trading product.",
      link: { label: "Explore", href: "#" },
    },
  ],
};

export default function Demo() {
  return <BridgeFeatureGrid {...platformSample} />;
}
