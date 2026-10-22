// Sample content (gallery only); the page reuses it. Endpoints, keys and ids are made up.
import { ArrowLeftRight, Building2, CreditCard, Globe2, HandCoins, Layers, PiggyBank, Repeat, Wallet, Zap } from "lucide-react";
import { ColumnInfrastructure, type ColumnInfrastructureProps } from "./column-infrastructure";

export const infrastructureSample: ColumnInfrastructureProps = {
  eyebrow: "Under the hood",
  title: "Composable money, wired to the dollar",
  lead: "Older banks bolt APIs onto decades-old cores. Tidewell started from a blank ledger, so every account, rail and credit line is programmable from the first request.",
  layers: ["Your product", "Processors", "Legacy cores", "Partner banks", "Central bank"],
  mergedLabel: "Tidewell",
  products: [
    {
      title: "Money movement",
      body: "Direct links to the central bank, the clearing houses, global wire networks and the card schemes. Push and pull funds to any account at home or abroad.",
      code: `curl 'https://api.tidewell.dev/v2/payouts' \\
  -X POST \\
  -u :sk_live_8fQ2mLr0VbN4tkW7xHc1 \\
  -d rail=ACH \\
  -d memo='Supplier run 0912' \\
  -d amount=640000 \\
  -d currency=USD \\
  -d recipient_id=rcp_51kTzQe8WvLm03YbPa2Hq \\
  -d source_account=acc_9Wd2LqTn4Ve8Xs0Rk7Fb`,
      chips: [
        { icon: <Repeat />, label: "ACH" },
        { icon: <Zap />, label: "Wire" },
        { icon: <Globe2 />, label: "Global wire" },
        { icon: <ArrowLeftRight />, label: "Instant" },
      ],
    },
    {
      title: "Accounts",
      body: "Open checking, savings, escrow, sub-ledger and sweep accounts on demand. Point one or a million account numbers at a single balance, and retire them when you're done. Every dollar insured.",
      code: `curl 'https://api.tidewell.dev/v2/accounts' \\
  -X POST \\
  -u :sk_live_8fQ2mLr0VbN4tkW7xHc1 \\
  -d nickname="Field team float" \\
  -d holder_id=hld_3Tq8VnW2kLe5Rb0Zp7Ym`,
      chips: [
        { icon: <Wallet />, label: "Accounts" },
        { icon: <Layers />, label: "Internal transfers" },
      ],
    },
    {
      title: "Card programs",
      body: "Launch and grow debit, credit, charge or secured cards and keep more of the interchange. Fund the program from your balance sheet or from ours.",
      code: `curl 'https://api.tidewell.dev/v2/transfers/internal' \\
  -X POST \\
  -u :sk_live_8fQ2mLr0VbN4tkW7xHc1 \\
  -d amount=25000 \\
  -d currency="USD" \\
  -d from_account="acc_2Rk7FbLq9Wd4Tn8Ve0Xs" \\
  -d to_account="acc_7Ve0Xs2Rk9Fb4Lq8WdTn" \\
  -d memo='Card network settlement 1007'`,
      chips: [
        { icon: <CreditCard />, label: "Card programs" },
        { icon: <Layers />, label: "Internal transfers" },
        { icon: <HandCoins />, label: "Originations" },
      ],
    },
    {
      title: "Credit",
      body: "Scale lending nationwide with origination, warehouse and forward-flow facilities, funded by Tidewell capital from the first loan.",
      code: `curl 'https://api.tidewell.dev/v2/credit-lines' \\
  -X POST \\
  -u :sk_live_8fQ2mLr0VbN4tkW7xHc1 \\
  -d memo='Receivables warehouse' \\
  -d currency=USD \\
  -d borrower_id=hld_8Zp7Ym3Tq2kLe5Rb0VnW \\
  -d revolving=true \\
  -d matures_on=2027-06-30 \\
  -d limit=60000000`,
      chips: [
        { icon: <HandCoins />, label: "Originations" },
        { icon: <PiggyBank />, label: "Debt capital" },
        { icon: <Building2 />, label: "Loan sales" },
      ],
    },
  ],
};

export default function Demo() {
  return <ColumnInfrastructure {...infrastructureSample} />;
}
