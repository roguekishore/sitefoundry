import { StructureengineeringTags, type StructureengineeringTag } from "./structureengineering-tags";

export const tagsSample: StructureengineeringTag[] = [
  { label: "Civic", href: "#civic" },
  { label: "Homes", href: "#homes" },
  { label: "Workplace", href: "#workplace" },
];

export default function Demo() {
  return (
    <div>
      <div className="bg-background p-10">
        <StructureengineeringTags tags={tagsSample} />
      </div>
      <div className="bg-glow p-10">
        <StructureengineeringTags tags={tagsSample} tone="media" />
      </div>
    </div>
  );
}
