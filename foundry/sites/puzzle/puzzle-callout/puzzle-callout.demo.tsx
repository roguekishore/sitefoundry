import { PuzzleCallout, type PuzzleCalloutProps } from "./puzzle-callout";

export const guaranteeSample: PuzzleCalloutProps = {
  title: (
    <>
      Close your month twice as fast —
      <br /> or your fees come back.
    </>
  ),
  text: "*If your second month-end close on Oakbook doesn't take at most half the time your first one did, ask for a refund of your Oakbook subscription within 30 days (and no later than 90 days after you subscribed). Refunds cover Oakbook subscription fees only, not third-party charges, onboarding fees, taxes or costs passed through.",
  cta: { label: "Get a walkthrough", href: "#" },
  size: "lg",
};

export const firmsSample: PuzzleCalloutProps = {
  eyebrow: "For bookkeeping practices",
  title: "Agent-run closes for firms that keep clients' books.",
  text: "Agents match and prepare every client's month-end, so your team checks the exceptions instead of rebuilding ledgers by hand.",
  cta: { label: "Oakbook for practices", href: "#" },
  size: "md",
};

export default function Demo() {
  return (
    <>
      <PuzzleCallout {...guaranteeSample} />
      <PuzzleCallout {...firmsSample} />
    </>
  );
}
