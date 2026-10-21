import { WildAgPartners, type WildAgPartnersProps } from "./wild-ag-partners";

export const partnersSample: WildAgPartnersProps = {
  id: "partners",
  title: "Partners.",
  partners: [
    { name: "Ofenbau Rüegg" },
    { name: "Studio Feldkante" },
    { name: "Luftbild Arni" },
    { name: "Vermessung Moos" },
    { name: "Holzwerk Gisler" },
    { name: "Elektro Fankhauser" },
  ],
};

export default function Demo() {
  return <WildAgPartners {...partnersSample} />;
}
