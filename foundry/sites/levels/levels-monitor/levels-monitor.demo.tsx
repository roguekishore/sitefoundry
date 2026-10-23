import { LevelsMonitor, type LevelsMonitorProps } from "./levels-monitor";

export const monitorSample: LevelsMonitorProps = {
  eyebrow: "Live glucose",
  title: "The plainest view of what a meal really does.",
  lead: "Ballast helped bring glucose sensors out of the clinic and into ordinary kitchens. It is still one of the sharpest ways to link a dinner, a run or a short night to how you feel the next day.",
  notes: [
    "See your glucose answer the meals and habits that make up your day.",
    "Match the line to your energy, your cravings and your focus.",
    "Bring the sensor you already wear, or let us send you one.",
  ],
  mediaLabel: "Photo of two people at home, one wearing a sensor",
  caption: {
    eyebrow: "Watch it happen",
    text: "For most members, a sensor is the first time they can actually see what lunch is doing to them.",
  },
};

export default function Demo() {
  return <LevelsMonitor {...monitorSample} />;
}
