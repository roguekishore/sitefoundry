import { PuzzlePaths, type PuzzlePathsProps } from "./puzzle-paths";

export const pathsSample: PuzzlePathsProps = {
  eyebrow: "Two ways to run it",
  title: (
    <>
      The same ledger underneath.
      <br /> Choose how hands-on you are.
    </>
  ),
  paths: [
    {
      tag: "Software",
      title: "You sign off. The AI does the sorting.",
      text: "Oakbook files, matches and drafts your statements on its own. You check the result and ask about anything in everyday words.",
      points: ["Assistant, agents and close built in", "Live cash, spend and runway", "Cash and accrual books, board-ready reports"],
      price: (
        <>
          Plans start at <strong>$29/mo</strong>
        </>
      ),
      cta: { label: "Start free", href: "#" },
      tone: "light",
    },
    {
      tag: "Software + Bookkeeper · New",
      title: "A bookkeeper closes the month for you.",
      text: "Put an Oakbook accountant, or a partner firm we've vetted, on top of the same ledger: a monthly check-over or the whole close, with no new tools to learn.",
      points: ["Checked Over or Fully Run bookkeeping", "A named bookkeeper and month-end recap", "Moving over, catch-up, R&D and tax"],
      price: (
        <>
          Bookkeeping from <strong>$95/mo</strong> per company,
          <br /> on top of the software
        </>
      ),
      cta: { label: "See bookkeeping", href: "#" },
      tone: "brand",
    },
  ],
};

export default function Demo() {
  return (
    <div className="pt-section">
      <PuzzlePaths {...pathsSample} />
    </div>
  );
}
