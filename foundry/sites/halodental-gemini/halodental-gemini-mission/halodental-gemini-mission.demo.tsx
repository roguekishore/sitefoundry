import { HalodentalGeminiMission, type HalodentalGeminiMissionProps } from "./halodental-gemini-mission";

export const missionSample: HalodentalGeminiMissionProps = {
  title: "Reimagining clinical care",
  description:
    "The modern clinic is where confidence is restored every day. Meet the optical engineers and clinicians building instruments that make every appointment clearer and brighter.",
  cta: {
    label: "Our story",
    href: "#about",
  },
};

export default function Demo() {
  return <HalodentalGeminiMission {...missionSample} />;
}
