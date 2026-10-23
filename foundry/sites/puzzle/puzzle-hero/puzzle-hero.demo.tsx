import { PuzzleHero, type PuzzleHeroProps } from "./puzzle-hero";

export const heroSample: PuzzleHeroProps = {
  badge: "New in Oakbook 3: bookkeeping software and a bookkeeper, in one place",
  title: (
    <>
      Bookkeeping software
      <br /> or a bookkeeper?
    </>
  ),
  text: "Now you don't have to pick. Oakbook's AI-first ledger runs your books, and our accountants step in whenever you want a second pair of hands.",
  primary: { label: "Get a walkthrough", href: "#" },
  secondary: { label: "Watch the tour", href: "#" },
  link: { label: "Talk to an accountant", href: "#" },
  note: "Free for 21 days · Add a bookkeeper any time · Used by 8,000+ teams",
  playLabel: "Play the two-minute tour",
};

export default function Demo() {
  return <PuzzleHero {...heroSample} />;
}
