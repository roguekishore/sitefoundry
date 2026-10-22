import { Coins, Network, ShieldCheck, TrendingUp } from "lucide-react";
import { SharplinkThesis, type SharplinkThesisProps } from "./sharplink-thesis";

const icon = (Icon: typeof Coins) => <Icon strokeWidth={0.6} strokeDasharray="1.2 1.2" />;

export const thesisSample: SharplinkThesisProps = {
  label: "Why the network, why now",
  cta: { label: "Read the thesis", href: "#thesis" },
  statement:
    "Lumen is becoming the settlement layer for a new kind of market, and owning it is the clearest long-term position of the decade. The ledger is still being written, and the early chapters are the ones that count.",
  points: [
    {
      icon: icon(Coins),
      title: "Lumen earns while it waits",
      body: "Staked LMN collects protocol rewards yet stays liquid and programmable, securing the network and paying an income at the same time.",
    },
    {
      icon: icon(ShieldCheck),
      title: "Lumen anchors real activity",
      body: "Payments, tokenized funds and lending markets already run on the network, and the LMN at stake is what keeps that activity honest.",
    },
    {
      icon: icon(Network),
      title: "Demand follows usage",
      body: "Every new asset settled on Lumen adds demand for blockspace, tying the value of LMN to adoption rather than to sentiment.",
    },
    {
      icon: icon(TrendingUp),
      title: "Institutions are arriving",
      body: "Clearer rules, custody standards and tokenized products keep moving financial flows onchain, and LMN captures a share of every one.",
    },
  ],
};

export default function Demo() {
  return <SharplinkThesis {...thesisSample} />;
}
