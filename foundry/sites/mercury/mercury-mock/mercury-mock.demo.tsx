// Sample content lives here (gallery only); other mercury demos reuse it.
import { MercuryMock, type MercuryMockContent } from "./mercury-mock";

export const accountsSample: MercuryMockContent = {
  kind: "accounts",
  title: "Accounts",
  rows: [
    { name: "Everyday card", whole: "$8,240", cents: ".16" },
    { name: "Reserve", whole: "$310,000", cents: ".42" },
    { name: "Payroll", whole: "$1,184,902", cents: ".08" },
    { name: "Bills out", whole: "$94,315", cents: ".70" },
    { name: "Money in", whole: "$12,688", cents: ".25" },
  ],
  more: { count: "+3", label: "Show every account" },
  note: { text: "2 rules move money between these", action: "Open" },
};

export const cardSample: MercuryMockContent = { kind: "card", status: "Live", brand: "LKS", label: "Ad spend", last4: "4410" };

export const billSample: MercuryMockContent = { kind: "bill", title: "Invoice", chips: ["Orchard Print Co.", "INV-2291", "$3,120.40"] };

export const invoiceSample: MercuryMockContent = {
  kind: "invoice",
  fields: [
    { label: "Issue date", value: "Mar 3, 2027", select: true },
    { label: "Terms", value: "Net 15" },
  ],
  toggle: "Send this every month",
  repeat: { label: "Schedule", value: "First Monday of the month" },
};

export const uploadSample: MercuryMockContent = { kind: "upload", label: "Matching", count: "2/5" };

export const rulesSample: MercuryMockContent = {
  kind: "rules",
  source: { name: "‘Payroll’", amount: "$1,184,902.08" },
  rules: [
    { title: "Top ‘Bills out’ back up to $80,000", sub: "Runs: every Friday", direction: "out" },
    { title: "Sweep ‘Money in’ into ‘Payroll’", sub: "Runs: after each deposit", direction: "in" },
  ],
};

export const roleSample: MercuryMockContent = {
  kind: "role",
  name: "Priya Raman",
  roleLabel: "Role",
  role: "Bookkeeper",
  intro: "Priya can",
  permissions: ["See balances and activity", "Upload and match receipts", "Draft payments for approval", "Export statements", "Invite teammates"],
};

const all = [accountsSample, cardSample, billSample, invoiceSample, uploadSample, rulesSample, roleSample];

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-4 sm:grid-cols-2">
      {all.map((m) => (
        <div key={m.kind} className="aspect-[3/2] overflow-hidden rounded-lg">
          <MercuryMock mock={m} />
        </div>
      ))}
    </div>
  );
}
