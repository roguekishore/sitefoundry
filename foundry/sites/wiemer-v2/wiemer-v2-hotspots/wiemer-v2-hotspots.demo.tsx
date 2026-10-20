import { WiemerV2Hotspots, type WiemerV2HotspotsProps } from "./wiemer-v2-hotspots";

export const hotspotsSample: WiemerV2HotspotsProps = {
  label: "Ilse as a three-shelf stand in a concrete hallway, with shoes, books and a plant",
  closeLabel: "Close",
  hotspots: [
    { x: 47.5, y: 37, title: "Punched aluminium plate", text: "3 mm anodised aluminium, punched on a 25 mm grid so rods can sit anywhere you like." },
    { x: 52.5, y: 52.5, title: "Brushed steel rods", text: "Solid stainless steel, cut to three heights. Swap them to turn the table into a shelf." },
    { x: 41, y: 60, title: "Cap nuts", text: "Domed stainless nuts close every joint. One 12 mm spanner is all the tooling you need." },
  ],
};

export const photoBandSample: WiemerV2HotspotsProps = {
  label: "Ilse as a three-shelf stand in a concrete hallway",
  height: "photo",
};

export default function Demo() {
  return <WiemerV2Hotspots {...hotspotsSample} />;
}
