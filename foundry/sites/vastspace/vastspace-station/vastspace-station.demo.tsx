import { VastspaceStation, type VastspaceStationProps } from "./vastspace-station";

export const stationSample: VastspaceStationProps = {
  word: "Lumen-1",
  eyebrow: "Lumen-1",
  status: "Launching 2028",
  specs: [
    { label: "Crew", value: "4" },
    { label: "Height", value: "9.8 m" },
    { label: "Habitable volume", value: "42 m³" },
    { label: "Pressurized volume", value: "76 m³" },
    { label: "Mass", value: "13,900 kg" },
    { label: "Power", value: "12,400 W" },
    { label: "Orbit", value: "52.0°, 410 km" },
  ],
  tagline: "The first private orbital home",
  link: { label: "Learn more", href: "#" },
};

export default function Demo() {
  return <VastspaceStation {...stationSample} />;
}
