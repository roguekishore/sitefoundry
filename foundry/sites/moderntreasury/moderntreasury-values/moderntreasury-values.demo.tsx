import { ModerntreasuryValues, type ModerntreasuryValuesProps } from "./moderntreasury-values";

export const valuesSample: ModerntreasuryValuesProps = {
  title: "Launch Now. Grow Later.",
  items: [
    { title: "Skip the bank hunt", text: "Go live on Kestrel's partner banks instead of spending a year on contracts and vendor reviews." },
    { title: "Integrate one time", text: "Turn on new rails and currencies as you need them. Bank transfers and stablecoins share one API, so nothing gets rewritten." },
    { title: "See every cent", text: "Balances, payment states, returns, matching and reports, all kept in one place." },
  ],
};

export default function Demo() {
  return <ModerntreasuryValues {...valuesSample} />;
}
