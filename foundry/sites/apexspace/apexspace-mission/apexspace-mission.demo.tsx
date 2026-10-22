// Sample content lives here (gallery only); the page reuses it.
import { ApexspaceMission, type ApexspaceMissionProps } from "./apexspace-mission";

export const missionSample: ApexspaceMissionProps = {
  title: "Clearing the factory bottleneck that holds back every constellation",
  paragraphs: [
    "Rockets have become reusable and launch slots are easy to find; the spacecraft are now what keeps constellations waiting. Most buses are still built one at a time, by hand, to a design that changes with every customer. Orrery set out to change the part of the chain that moves slowest.",
    "We borrow from car and aircraft plants as much as from aerospace: fixed stations, kitted parts and tests that run in parallel with assembly. Wren, Heron and Condor share one line and most of their parts, so a bus for a weather mission and one for a relay network come off the same floor in the same weeks.",
    "Bring us the payload. We will have the rest ready for the launch window.",
  ],
  cta: { label: "Our approach", href: "#" },
};

export default function Demo() {
  return <ApexspaceMission {...missionSample} />;
}
