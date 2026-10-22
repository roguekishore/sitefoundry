// Sample content lives here (gallery only); the page reuses it. Cairn is a made-up bank.
import { Building2, Coins, CreditCard, FileCheck2, Globe, Send, Timer, Zap } from "lucide-react";
import { IncreaseProducts, type IncreaseProductsProps } from "./increase-products";

export const productsSample: IncreaseProductsProps = {
  lead: "One platform to send, hold and lend money.",
  rest: "Cairn already carries payroll, payouts and credit for companies settling billions every day.",
  panels: [
    {
      title: "Direct access to every domestic rail",
      bleed: "bottom-right",
      rails: [
        { label: "ACH", icon: <Send />, href: "#ach", active: true },
        { label: "Wires", icon: <Building2 />, href: "#wires" },
        { label: "Instant", icon: <Zap />, href: "#instant" },
        { label: "Same-day", icon: <Timer />, href: "#same-day" },
        { label: "Checks", icon: <FileCheck2 />, href: "#checks" },
        { label: "Card payouts", icon: <CreditCard />, href: "#payouts" },
        { label: "Cross-border", icon: <Globe />, href: "#cross-border" },
        { label: "Stablecoins", icon: <Coins />, href: "#stablecoins" },
      ],
    },
    { title: "Card programs, end to end", bleed: "inset" },
    { title: "Accounts titled any way you need", bleed: "bottom-right" },
    { title: "Compliance you can compose", bleed: "bottom-left" },
    { title: "Credit programs built to fit", bleed: "bottom-right" },
  ],
};

export default function Demo() {
  return <IncreaseProducts {...productsSample} />;
}
