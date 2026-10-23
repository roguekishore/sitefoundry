// Sample content lives here (gallery only); the page reuses it. All institutions are made up.
import { UltrahumanPartners, type UltrahumanPartnersProps } from "./ultrahuman-partners";

export const partnersSample: UltrahumanPartnersProps = {
  label: "Research partners",
  partners: [
    { name: "Halden Institute" },
    { name: "Northmere University" },
    { name: "Corvin Medical Centre" },
    { name: "Bayside Sleep Lab" },
    { name: "Ashgrove College" },
    { name: "Lumen Health Trust" },
  ],
};

export default function Demo() {
  return <UltrahumanPartners {...partnersSample} />;
}
