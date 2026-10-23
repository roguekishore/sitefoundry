import { PlaidDevelopers, type PlaidDevelopersProps } from "./plaid-developers";

export const developersSample: PlaidDevelopersProps = {
  title: "Reach 9,400 banks with a single key.",
  subtitle: "Design the product. We'll keep the data flowing.",
  primary: { label: "Create a key", href: "#" },
  secondary: { label: "Browse the docs", href: "#" },
  endpoint: "/balance/read",
  code: [
    [{ text: "const req = new " }, { text: "BalanceRequest", tone: "fn" }, { text: "({ token: userToken, scope: 'all' })" }],
    [{ text: "const res = await client." }, { text: "balance.read", tone: "fn" }, { text: "(req)" }],
    [{ text: "const available = res.accounts[" }, { text: "0", tone: "num" }, { text: "].balances.available" }],
    [{ text: "const currency = res.accounts[" }, { text: "0", tone: "num" }, { text: "].balances.currency_code" }],
    [],
  ],
};

export default function Demo() {
  return <PlaidDevelopers {...developersSample} />;
}
