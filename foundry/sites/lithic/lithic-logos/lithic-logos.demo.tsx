import { LithicLogos, type LithicLogosProps } from "./lithic-logos";

export const logosSample: LithicLogosProps = {
  title: "Chosen by 120+ fast movers, moving billions",
  logos: [
    { name: "fernway", variant: "light" },
    { name: "TALLBOY", variant: "caps" },
    { name: "Quillo", variant: "plain" },
    { name: "orbit.", variant: "heavy" },
    { name: "Marrowfield", variant: "light" },
    { name: "HALVARD", variant: "caps" },
    { name: "plinth", variant: "heavy" },
    { name: "Sablewood", variant: "plain" },
    { name: "kitecash", variant: "mono" },
    { name: "Northcote", variant: "plain" },
  ],
};

export default function Demo() {
  return <LithicLogos {...logosSample} />;
}
