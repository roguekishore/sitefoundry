import { WiemerPhotoBand, type WiemerPhotoBandProps } from "./wiemer-photo-band";

export const photoBandSample: WiemerPhotoBandProps = {
  label: "The Raster shelf stand in a hallway",
  hotspots: [
    { x: 47.5, y: 37, title: "Perforated top plate", text: "Anodised aluminium, 3.5 mm thick, with a hole every 40 mm for hooks, pegs and cable ties." },
    { x: 52.5, y: 52.5, title: "Steel rods", text: "Brushed stainless steel, screwed through the plates. Swap them for longer ones to add a shelf." },
    { x: 41, y: 60, title: "Floor plate", text: "The lowest shelf rests 2 cm off the floor, so shoes and boxes slide in without catching." },
  ],
};

export const photoBandPlain: WiemerPhotoBandProps = { label: "The Raster side table by a window", shape: "wide" };

export default function Demo() {
  return <WiemerPhotoBand {...photoBandSample} />;
}
