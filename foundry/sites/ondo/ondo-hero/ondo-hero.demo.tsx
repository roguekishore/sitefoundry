import { OndoHero, type OndoHeroProps } from "./ondo-hero";

export const heroSample: OndoHeroProps = {
  lead: "Step into a",
  trail: "Borderless Market",
  text: "Corvane builds the regulated rails, funds and tools that let real-world assets trade openly, around the clock.",
  hint: "Scroll to explore",
};

export default function Demo() {
  return <OndoHero {...heroSample} />;
}
