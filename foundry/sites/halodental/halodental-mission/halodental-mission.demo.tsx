import { HalodentalMission, type HalodentalMissionProps } from "./halodental-mission";

export const missionSample: HalodentalMissionProps = {
  title: "Reimagining dentistry",
  description:
    "The clinical studio is where confidence gets its glow. That deserves to be celebrated. Meet the optical engineers working to make every chairside visit brighter.",
  cta: {
    label: "About us",
    href: "#about",
  },
};

export default function Demo() {
  return <HalodentalMission {...missionSample} />;
}
