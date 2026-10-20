import { WiemerV2Specs, type WiemerV2SpecsProps } from "./wiemer-v2-specs";

export const specsSample: WiemerV2SpecsProps = {
  heading: "Details",
  views: [
    { tab: "Base plate", width: "420mm", height: "300mm", aspect: 420 / 300 },
    { tab: "Ilse side table", width: "420mm", height: "380mm", aspect: 420 / 380 },
    { tab: "Ilse shelf", width: "420mm", height: "720mm", aspect: 420 / 720 },
  ],
  noteTitle: "Good to know",
  note: "Anodised aluminium is a living surface. Punching, bending and the journey to you can leave the odd hairline mark on a face or an edge. Every plate is checked by hand before it is packed, and only those we would keep ourselves leave the workshop. What small traces remain are part of how the piece was made.",
  rows: [
    { label: "Plates", value: "Anodised aluminium" },
    { label: "Plate thickness", value: "3 mm" },
    { label: "Rods and nuts", value: "Stainless steel" },
    { label: "Load per shelf", value: "18 kg" },
    { label: "Weight", value: "2.6 to 4.1 kg" },
    { label: "Tools", value: "One 12 mm spanner" },
  ],
};

export default function Demo() {
  return <WiemerV2Specs {...specsSample} />;
}
