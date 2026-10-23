import { OndoPrinciples, type OndoPrinciplesProps } from "./ondo-principles";

export const principlesSample: OndoPrinciplesProps = {
  lead: "Built to Institutional Standards",
  trail: "Down to the Last Detail",
  labels: { prev: "Previous principle", next: "Next principle" },
  items: [
    { title: "Blue-Chip Assets and Managers", text: "Every product is backed by assets run by long-established, regulated managers.", proof: "Northgate Capital" },
    { title: "Licensed Service Partners", text: "Custody, administration and audit sit with licensed firms, not with us.", proof: "Halberd Trust" },
    { title: "Seasoned Leadership", text: "A team drawn from asset management, market structure and security engineering.", proof: "Est. 2019" },
    { title: "Independently Audited Code", text: "Every contract we ship is reviewed by outside auditors before it goes live.", proof: "Six firms, 30+ reviews" },
    { title: "Compliance Comes First", text: "Eligibility checks and transfer rules are built into the tokens themselves.", proof: "Reviewed quarterly" },
  ],
};

export default function Demo() {
  return <OndoPrinciples {...principlesSample} />;
}
