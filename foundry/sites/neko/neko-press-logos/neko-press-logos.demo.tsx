// Sample content lives here (gallery only); the page reuses it. Every publication is made up.
import { NekoPressLogos, type NekoPressLogosProps } from "./neko-press-logos";

export const pressLogosSample: NekoPressLogosProps = {
  names: [
    { name: "The Morning Ledger", voice: "serif" },
    { name: "Northline", voice: "grotesk" },
    { name: "Field & Form", voice: "caps" },
    { name: "PULSE", voice: "condensed" },
    { name: "Atlas Review", voice: "serif" },
    { name: "commonhours", voice: "grotesk" },
  ],
};

export default function Demo() {
  return <NekoPressLogos {...pressLogosSample} />;
}
