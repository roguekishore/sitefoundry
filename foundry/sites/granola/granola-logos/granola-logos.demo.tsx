import { GranolaLogos, type GranolaLogosProps } from "./granola-logos";

export const logosSample: GranolaLogosProps = {
  headline: "Built to ship",
  title: "In the pockets of teams we look up to",
  logos: [
    { name: "Brightloom" },
    { name: "Coldframe", face: "serif" },
    { name: "halfmoon" },
    { name: "Saltmarsh", face: "serif" },
    { name: "pebble/labs", face: "mono" },
    { name: "Vireo" },
    { name: "Outpost" },
    { name: "DRIFTWOOD", face: "sans" },
    { name: "Lanternfish", face: "serif" },
    { name: "copperline" },
    { name: "thimble", face: "mono" },
    { name: "Juniper" },
  ],
};

export default function Demo() {
  return <GranolaLogos {...logosSample} />;
}
