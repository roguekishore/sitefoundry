import { WiemerV2Rail, type WiemerV2RailProps } from "./wiemer-v2-rail";

export const railSample: WiemerV2RailProps = {
  cards: [
    "Punched aluminium plate",
    "Ilse side table",
    "Four steel rods",
    "Nuts and washers",
    "Ilse shelf",
    "Spanner",
    "Lower plate",
    "Ilse side table, from above",
    "Rod detail",
    "Ilse shelf, side view",
    "Packed flat",
    "Plate edge",
  ].map((label) => ({ label })),
};

export default function Demo() {
  return (
    <div className="bg-background pt-[40vh] pb-[40vh]">
      <WiemerV2Rail {...railSample} />
    </div>
  );
}
