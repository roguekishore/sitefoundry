// Sample content lives here (gallery only); the page reuses it. Every partner is made up.
import { ImpulsespacePartners, type ImpulsespacePartnersProps } from "./impulsespace-partners";

export const partnersSample: ImpulsespacePartnersProps = {
  label: "Who we fly with",
  partners: [
    { name: "Meridian Launch" },
    { name: "Kelvin Labs" },
    { name: "Northfall" },
    { name: "Atlas Payloads" },
    { name: "Bluewater Systems" },
    { name: "Orchard Orbital" },
    { name: "Fenwick" },
    { name: "Talus" },
    { name: "Greyline Aero" },
    { name: "Polar Freight" },
    { name: "Wexford Labs" },
    { name: "Cinder" },
    { name: "Highmark" },
    { name: "Sablewood" },
    { name: "Corran" },
    { name: "Vantage Nine" },
  ],
};

export default function Demo() {
  return <ImpulsespacePartners {...partnersSample} />;
}
