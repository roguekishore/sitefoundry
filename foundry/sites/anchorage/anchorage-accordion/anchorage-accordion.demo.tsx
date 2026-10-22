// Sample content lives here (gallery only); the page reuses it.
import { ArrowLeftRight, CandlestickChart, Coins, Landmark, Link2, Network, ShieldCheck, Vault, Wallet } from "lucide-react";
import { AnchorageAccordion, type AnchorageAccordionProps } from "./anchorage-accordion";

export const accordionSample: AnchorageAccordionProps = {
  title: "What a treasury desk needs on-chain",
  rows: [
    {
      number: "01",
      title: "Markets",
      summary: "Trade, lend and hold under one charter",
      offerings: [
        { icon: <CandlestickChart strokeWidth={1.5} />, title: "Execution", body: "Best-price fills routed across venues", href: "#" },
        { icon: <Coins strokeWidth={1.5} />, title: "Yield & staking", body: "Put idle balances to supervised work", href: "#" },
        { icon: <ShieldCheck strokeWidth={1.5} />, title: "Safekeeping", body: "Segregated, insured storage with on-chain access when you need it", href: "#" },
      ],
    },
    {
      number: "02",
      title: "Settlement Rails",
      summary: "Move value between chains and banks",
      offerings: [
        { icon: <Network strokeWidth={1.5} />, title: "Clearing network", body: "Net positions with counterparties around the clock", href: "#" },
        { icon: <Wallet strokeWidth={1.5} />, title: "Embedded wallets", body: "Offer digital assets inside your own app", href: "#" },
        { icon: <ArrowLeftRight strokeWidth={1.5} />, title: "Fiat on-ramps", body: "Wire in, convert and fund in a single step", href: "#" },
      ],
    },
    {
      number: "03",
      title: "Tokens",
      summary: "Money that runs as code",
      offerings: [
        { icon: <Link2 strokeWidth={1.5} />, title: "Token launch", body: "Mint and govern a regulated dollar token", href: "#" },
        { icon: <Vault strokeWidth={1.5} />, title: "Deposit tokens", body: "Put bank deposits on a public ledger", href: "#" },
        { icon: <Landmark strokeWidth={1.5} />, title: "Bank-to-bank tokens", body: "A shared layer for near-instant transfers between correspondent banks", href: "#" },
      ],
    },
  ],
  defaultOpen: [0],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <AnchorageAccordion {...accordionSample} />
    </div>
  );
}
