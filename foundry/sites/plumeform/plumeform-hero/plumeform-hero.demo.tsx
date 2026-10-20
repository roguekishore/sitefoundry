// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { PlumeformHero, type PlumeformHeroProps } from "./plumeform-hero";

export const heroSample: PlumeformHeroProps = {
  title: "Make a quiz worth finishing.",
  lead: "Make a quiz for your class, your club, or the next unit test. Start from a template, add hints where students get stuck, and watch the marks come in as they finish.",
  cta: { label: "Try it free", href: "#start" },
  frameLabel: "A quiz on a page",
  frameNote: "Practice round · nothing is graded",
};

export default function Demo() {
  return (
    <div className="pb-40">
      <PlumeformHero {...heroSample} />
    </div>
  );
}
