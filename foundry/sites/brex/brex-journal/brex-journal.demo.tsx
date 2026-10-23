import { BrexJournal, type BrexJournalProps } from "./brex-journal";

export const journalSample: BrexJournalProps = {
  title: "Fresh reading on modern finance.",
  prevLabel: "Previous articles",
  nextLabel: "Next articles",
  articles: [
    { title: "What does a calm finance team look like? Eight habits worth copying", text: "Teams that close early share a few routines. Here is how they set budgets, approve spend and keep the ledger tidy.", href: "#" },
    { title: "Reimagining company cards for teams that never stop travelling", text: "Two operators talk through card controls, trip booking and why receipts should be automatic.", href: "#" },
    { title: "The quiet case for automated procurement", text: "How growing companies fold purchasing into one spend system.", href: "#" },
    { title: "Why finance leaders are leaning on software that reads invoices", text: "Some firms use machine reading to catch errors early and keep vendors paid on time. Is it worth it for you?", href: "#" },
    { title: "A field guide to multi-currency accounts", text: "Holding, converting and sending money across borders without surprises.", href: "#" },
    { title: "Budgets people actually follow", text: "Small design choices that keep teams inside their limits.", href: "#" },
  ],
};

export default function Demo() {
  return <BrexJournal {...journalSample} />;
}
