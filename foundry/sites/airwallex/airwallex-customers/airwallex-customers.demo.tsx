// Sample content lives here (gallery only); the page reuses it. All companies are made up.
import { AirwallexCustomers, type AirwallexCustomersProps } from "./airwallex-customers";

export const customersSample: AirwallexCustomersProps = {
  title: "Trusted by 410,000+ companies, directly or through the platforms they run on",
  customers: [
    { company: "Edgewright", quote: "“We used to lose a small fortune to conversion fees on marketplace payouts. Now the money lands in local accounts and we choose when to convert, which pays for the whole finance team’s tooling.”" },
    { company: "Marrow & Rye", quote: "“Opening accounts in three new countries took an afternoon, not a quarter. Our bakery cafés abroad get paid like locals from day one.”" },
    { company: "Tablecall", quote: "“Guests order and pay from their phones in whatever currency they carry, and settlement shows up the next morning, already matched.”" },
    { company: "Stillpoint Studios", quote: "“Class packs sell in five countries now. Recurring billing just runs, and failed cards retry themselves before anyone notices.”" },
    { company: "Penny Lane Money", quote: "“We built savings pots and cards into our app on Fernhold’s APIs and launched in two markets with a team of six engineers.”" },
    { company: "Forgeworks", quote: "“The approvals flow means our managers sign off spend from anywhere, and month-end close went from nine days to three.”" },
    { company: "Hushbed", quote: "“Suppliers in four currencies, paid on time at a fair rate, with every invoice reconciled automatically. It is the boring kind of reliable.”" },
    { company: "Northwind Loft", quote: "“Moving our treasury over freed up cash we didn’t know we had sitting in fees and float.”" },
  ],
};

export default function Demo() {
  return <AirwallexCustomers {...customersSample} />;
}
