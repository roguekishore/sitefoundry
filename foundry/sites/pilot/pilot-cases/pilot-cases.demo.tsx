import { PilotCases, type PilotCasesProps } from "./pilot-cases";

export const casesSample: PilotCasesProps = {
  eyebrow: "Stories from the ledger",
  title: "How we untangle the knots\nthat cost owners their sleep.",
  cases: [
    {
      title: "Growing faster than the cash",
      steps: [
        { label: "The problem", text: "Headcount went from 6 to 45 in eighteen months; on paper they were profitable, in the bank they kept nearly running dry." },
        { label: "What we built", text: "Moved the books to accrual, cleared a $900K backlog of unpaid invoices and set up a rolling thirteen-week cash plan." },
      ],
      result: {
        label: "The result",
        text: '"We nearly ran out of money twice while winning. Tallyhouse found the invoices we\'d forgotten and gave us a plan. A year on, billings are up a quarter." - Ines Calder, Managing Partner',
      },
      story: { label: "Read the case", href: "#" },
      video: { label: "Play the film", href: "#" },
      customer: "Oakmere",
    },
    {
      title: "The owner who was the bottleneck",
      steps: [
        { label: "The problem", text: "Every number lived in the founder's head, so every decision waited for the founder's evening." },
        { label: "What we built", text: "Clean monthly books, a funding-ready model and dashboards the whole leadership team could read." },
      ],
      result: {
        label: "The result",
        text: '"They got our books investor-ready and our loan closed in weeks. Now I spend my time on the company instead of inside the spreadsheet." - Dev Arora, Founder',
      },
      story: { label: "Read the case", href: "#" },
      customer: "Fernlab",
    },
    {
      title: "Tax season without the scramble",
      steps: [
        { label: "The problem", text: "Three states, two entities and receipts in four inboxes: filing week took a month." },
        { label: "What we built", text: "One chart of accounts, automatic receipt matching and a filing calendar with nothing left to chase." },
      ],
      result: {
        label: "The result",
        text: '"Our first calm April. We filed early and found deductions we\'d missed for years." - Lena Brooks, COO',
      },
      story: { label: "Read the case", href: "#" },
      customer: "Tideworks",
    },
  ],
  note: "When owners come to us, the books stop being a chore: you see where the cash goes, margins improve, and problems show up before they cost you.",
};

export default function Demo() {
  return <PilotCases {...casesSample} />;
}
