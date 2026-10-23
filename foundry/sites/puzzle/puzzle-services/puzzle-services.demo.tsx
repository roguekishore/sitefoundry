import { PuzzleServices, type PuzzleServicesProps } from "./puzzle-services";

export const servicesSample: PuzzleServicesProps = {
  eyebrow: "New · Oakbook bookkeeping",
  title: "Your ledger, your pace. A bookkeeper when you want one.",
  text: "Anything from a monthly check-over to a fully run close. Every bookkeeping plan works inside Oakbook, so your bookkeeper sees the same live figures you do.",
  plans: [
    {
      label: "A second pair of eyes",
      title: "Checked Over",
      text: "The software does the sorting. A bookkeeper looks it over, fixes what needs fixing and signs off your month.",
      points: ["Your month closed, every month", "Every line looked at and corrected", "Bank and card matches confirmed", "Three bookkeeping questions a month"],
      note: "For companies spending up to $12K a month.",
    },
    {
      label: "Handled for you",
      title: "Fully Run",
      text: "Give the month-end to a qualified accountant. They take care of the routine work while Oakbook keeps every feed linked and up to date.",
      points: ["The whole close, accruals and prepayments", "Sorting, matching and statements", "Your own named bookkeeper", "Ask as much as you like, plus a month-end recap"],
      tone: "accent",
    },
  ],
  projectsTitle: "Help for the jobs that don't come round monthly",
  projects: [
    { label: "Moving over", title: "Bring your books across, not the mess.", text: "From your old ledger or a pile of spreadsheets. Your history arrives intact and the balances agree." },
    { label: "Catching up", title: "Months behind? We'll clear the backlog.", text: "We sort, tidy and close the months that never got finished." },
    { label: "R&D claims", title: "Turn product work into a tax credit.", text: "We put together the R&D file your accountant needs to make the claim." },
    { label: "Tax returns", title: "From tidy books to a filed return.", text: "An Oakbook accountant or a partner firm we've vetted files the company return straight from your Oakbook figures." },
  ],
};

export default function Demo() {
  return <PuzzleServices {...servicesSample} />;
}
