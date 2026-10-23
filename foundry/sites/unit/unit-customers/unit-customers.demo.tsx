import { UnitCustomers, type UnitCustomersProps } from "./unit-customers";

export const customersSample: UnitCustomersProps = {
  heading: "Built by teams like these",
  stories: [
    {
      company: "Northgate",
      statement: "Northgate runs on Corbel to give independent restaurants smart accounts, supplier payments, and spend cards.",
      chips: ["Pooled balances", "Named accounts", "Credit lines", "Debit", "Prepaid", "Paper checks", "Same-day ACH", "Wires"],
      quote: "“We shipped a full money stack in a quarter, and our engineers never had to stop working on the core product.”",
      person: { name: "Ada Okonkwo-Lind", role: "Co-founder & CTO, Northgate" },
    },
    {
      company: "Quillby",
      statement: "Quillby pays thousands of freelance writers the same day their invoices clear.",
      chips: ["Global payouts", "Same-day ACH", "Named accounts"],
      quote: "“Payout day used to be a spreadsheet. Now it is a webhook.”",
      person: { name: "Teodor Varga", role: "Head of Finance, Quillby" },
    },
    {
      company: "Ferrow",
      statement: "Ferrow gives fleet operators fuel cards with per-driver limits and live receipts.",
      chips: ["Debit", "Business credit", "Card controls"],
      quote: "“Limits per driver, per day, per pump. That level of control sold the product.”",
      person: { name: "Mina Castellanos", role: "VP Product, Ferrow" },
    },
    {
      company: "Brightwell",
      statement: "Brightwell offers landlords rent collection with deposits held in named accounts.",
      chips: ["Named accounts", "FedNow", "Paper checks"],
      quote: "“Tenants pay how they like, and every dollar lands where it should.”",
      person: { name: "Jonah Abernethy", role: "CEO, Brightwell" },
    },
  ],
};

export default function Demo() {
  return <UnitCustomers {...customersSample} />;
}
