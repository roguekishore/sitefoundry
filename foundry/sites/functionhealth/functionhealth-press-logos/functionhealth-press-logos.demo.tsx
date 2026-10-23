import { FunctionhealthPressLogos, type FunctionhealthPressLogosProps } from "./functionhealth-press-logos";

export const pressLogosSample: FunctionhealthPressLogosProps = {
  label: "As seen in",
  logos: ["Daily Ledger", "FORTUNA", "Meridian Post", "The Economer", "WSD", "The Harbor Times", "Wired Weekly"],
  pauseLabel: "Pause motion",
  playLabel: "Play motion",
};

export default function Demo() {
  return <FunctionhealthPressLogos {...pressLogosSample} />;
}
