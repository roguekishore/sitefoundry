import { WiemerSpecs, type WiemerSpecsProps } from "./wiemer-specs";

export const specsSample: WiemerSpecsProps = {
  id: "specs",
  title: "Details",
  tabs: [
    { label: "Plate", width: "420mm", height: "310mm", ratio: 420 / 310 },
    { label: "Raster side table", width: "420mm", height: "450mm", ratio: 420 / 450 },
    { label: "Raster shelf stand", width: "420mm", height: "720mm", ratio: 420 / 720 },
  ],
  noteTitle: "Good to know",
  note: "Anodised aluminium is a soft finish, and now and then a plate leaves the press or the parcel van with a faint mark on a face or an edge. Every piece is checked by hand before it goes out, and only the ones we would keep ourselves are sent. The small marks that remain are part of the metal and give each plate a character of its own.",
  rows: [
    { label: "Plates", value: "Anodised aluminium" },
    { label: "Plate thickness", value: "3.5 mm" },
    { label: "Rods and fixings", value: "Stainless steel" },
    { label: "Load per shelf", value: "18 kg" },
    { label: "Weight", value: "2.6 to 4.1 kg" },
    { label: "Tools", value: "One 13 mm spanner" },
  ],
};

export default function Demo() {
  return <WiemerSpecs {...specsSample} />;
}
