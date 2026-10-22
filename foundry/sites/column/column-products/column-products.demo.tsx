// Sample content (gallery only); the page reuses it.
import {
  ArrowLeftRight,
  BadgeDollarSign,
  BarChart3,
  Coins,
  CreditCard,
  FileCheck2,
  Globe,
  Globe2,
  HandCoins,
  Layers,
  PackageOpen,
  Repeat,
  Wallet,
  WalletCards,
  Zap,
} from "lucide-react";
import { ColumnProducts, type ColumnProductsProps } from "./column-products";

export const productsSample: ColumnProductsProps = {
  eyebrow: "Catalogue",
  title: "Parts for building the next money products",
  groups: [
    {
      title: "Lean payment and deposit rails",
      tone: "chart-1",
      items: [
        { icon: <Repeat />, label: "ACH" },
        { icon: <FileCheck2 />, label: "Cheques" },
        { icon: <Zap />, label: "Wires" },
        { icon: <ArrowLeftRight />, label: "Instant" },
        { icon: <Layers />, label: "Internal transfers" },
        { icon: <Globe2 />, label: "Global wires" },
        { icon: <Wallet />, label: "Accounts" },
        { icon: <Coins />, label: "Digital dollars" },
        { icon: <Globe />, label: "Correspondent banking" },
        { icon: <BadgeDollarSign />, label: "Multicurrency" },
      ],
    },
    {
      title: "Card products shaped to your program",
      tone: "highlight",
      items: [
        { icon: <CreditCard />, label: "Issuing" },
        { icon: <WalletCards />, label: "Credit" },
        { icon: <WalletCards />, label: "Debit" },
        { icon: <WalletCards />, label: "Prepaid" },
      ],
    },
    {
      title: "Lend more, for less, sooner",
      tone: "chart-5",
      items: [
        { icon: <HandCoins />, label: "Originations" },
        { icon: <PackageOpen />, label: "Loan sales" },
        { icon: <BarChart3 />, label: "Debt capital" },
      ],
    },
  ],
};

export default function Demo() {
  return <ColumnProducts {...productsSample} />;
}
