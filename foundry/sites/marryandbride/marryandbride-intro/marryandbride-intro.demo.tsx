import { MarryandbrideIntro, type MarryandbrideIntroProps } from "./marryandbride-intro";

export const introSample: MarryandbrideIntroProps = {
  eyebrow: "For the long evening after",
  segments: [
    { text: "When the garden party cools, a " },
    { text: "mohair shrug", href: "#shrugs" },
    { text: " keeps your shoulders warm. Want something lighter still? Drape a " },
    { text: "lace wrap", href: "#wraps" },
    { text: " over your arms and dance on." },
  ],
};

export default function Demo() {
  return <MarryandbrideIntro {...introSample} />;
}
