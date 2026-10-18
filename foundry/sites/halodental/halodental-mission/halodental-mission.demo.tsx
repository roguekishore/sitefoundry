import { HalodentalMission, type HalodentalMissionProps } from "./halodental-mission";

export const missionSample: HalodentalMissionProps = {
  title: "Reimagining clinical care",
  description:
    "The modern clinic is where confidence is restored every day. Meet the optical engineers and clinicians building instruments that make every appointment clearer and brighter.",
  cta: {
    label: "Our story",
    href: "#about",
  },
};

export default function Demo() {
  return <HalodentalMission {...missionSample} />;
}
