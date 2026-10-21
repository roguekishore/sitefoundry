import { RollersFleetIntro, type RollersFleetIntroProps } from "./rollers-fleet-intro";

export const fleetIntroSample: RollersFleetIntroProps = {
  id: "yard",
  eyebrow: "The yard",
  heading: [{ text: "A short list of machines,", tone: "accent" }, { text: "each one chosen for compaction and earthworks." }],
  link: { label: "Browse the yard", href: "#yard" },
};

export default function Demo() {
  return <RollersFleetIntro {...fleetIntroSample} />;
}
