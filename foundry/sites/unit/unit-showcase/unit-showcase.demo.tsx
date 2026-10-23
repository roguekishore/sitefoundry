import { UnitShowcase, type UnitShowcaseProps } from "./unit-showcase";

export const showcaseSample: UnitShowcaseProps = {
  heading: "Leaders in their field run on Corbel",
  previousLabel: "Previous companies",
  nextLabel: "Next companies",
  cards: [
    { company: "HOLDFAST", description: "Deposits and rent collection for property managers", href: "#" },
    { company: "Tallyho", description: "Spend cards and accounts for small shops", href: "#" },
    { company: "Cinderly", description: "Invoice payments for trades and contractors", href: "#" },
    { company: "Wrenfield", description: "A financial back office for physio clinics", href: "#" },
    { company: "Marrow", description: "Payroll advances for hourly crews", href: "#" },
    { company: "Kestrel", description: "Treasury for small charities and clubs", href: "#" },
  ],
};

export default function Demo() {
  return <UnitShowcase {...showcaseSample} />;
}
