import { VastspaceProgress, type VastspaceProgressProps } from "./vastspace-progress";

export const progressSample: VastspaceProgressProps = {
  title: "Lumen-1 build progress",
  caption: "Follow how the first Lumen station is built and tested, stage by stage.",
  prevLabel: "Previous slide",
  nextLabel: "Next slide",
  slides: [
    { label: "Docking ring fit check", text: "In March, the team finished the fit check for the flight docking ring on the main hull." },
    { label: "Hull sections joined", text: "The two pressure sections were mated for the first time inside the clean room." },
    { label: "Solar wings folded", text: "Both power wings completed a full stow-and-deploy cycle on the test frame." },
    { label: "Avionics bay powered", text: "Flight computers booted together for the first end-to-end power-up." },
    { label: "Window module installed", text: "The observation window and its frame were bonded and leak-tested." },
    { label: "Thermal blankets applied", text: "Outer insulation went onto the hull ahead of vacuum chamber testing." },
    { label: "Vibration test passed", text: "The assembled hull shook through the full launch profile without a finding." },
    { label: "Crew hatch sealed", text: "The main hatch held pressure through a week-long leak-rate check." },
    { label: "Interior fit-out", text: "Bunks, lockers and handrails went in for the first crew walk-through." },
    { label: "Final acceptance", text: "The station passed its acceptance review and was cleared for shipping." },
  ],
};

export default function Demo() {
  return <VastspaceProgress {...progressSample} />;
}
