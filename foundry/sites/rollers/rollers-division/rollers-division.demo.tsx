import { RollersDivision, type RollersDivisionProps } from "./rollers-division";

export const divisionSample: RollersDivisionProps = {
  id: "cabins",
  eyebrow: "Crib Co. – part of Stonebank",
  heading: [{ text: "Site cabins," }, { text: "made for the long job.", tone: "highlight", newLine: true }],
  secondaryAction: { label: "Visit Crib Co.", href: "#cabins" },
  primaryAction: { label: "See the cabins", href: "#cabins" },
  text: "Crib Co. builds and hires compliant site cabins, solar crib huts, first-aid rooms and toilet blocks for civil and infrastructure jobs. Cleaner sites, happier crews, and one number to call for the plant and the cabins.",
  features: [
    { title: "Solar crib huts", body: "Off-grid lunch rooms with power, water and air, so the crew can stop anywhere on the alignment." },
    { title: "First aid & amenities", body: "First-aid rooms and toilet blocks that tick the welfare boxes on day one." },
    { title: "Built-to-order trailers", body: "Fit-outs to suit the job: storage, offices, change rooms or a mix of all three." },
  ],
};

export default function Demo() {
  return <RollersDivision {...divisionSample} />;
}
