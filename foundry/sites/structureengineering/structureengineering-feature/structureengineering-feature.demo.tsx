import { StructureengineeringFeature, type StructureengineeringFeatureProps } from "./structureengineering-feature";

export const featureSample: StructureengineeringFeatureProps = {
  label: "In focus",
  title: "Riverbend Footbridge",
  cta: { label: "Read the case", href: "#footbridge" },
};

export default function Demo() {
  return <StructureengineeringFeature {...featureSample} />;
}
