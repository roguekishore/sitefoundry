import { PuzzleCta, type PuzzleCtaProps } from "./puzzle-cta";

export const ctaSample: PuzzleCtaProps = {
  title: (
    <>
      Books you can trust.
      <br /> At AI pace. From today.
    </>
  ),
  text: "Join 8,000+ teams who use Oakbook to keep their books right, current and quick to close.",
  primary: { label: "Get a walkthrough", href: "#" },
  secondary: { label: "Watch the tour", href: "#" },
  link: { label: "Talk to an accountant", href: "#" },
};

export default function Demo() {
  return <PuzzleCta {...ctaSample} />;
}
