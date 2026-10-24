import type { HelionenergyMachinesProps } from "./helionenergy-machines";
import { HelionenergyMachines } from "./helionenergy-machines";

export const machinesSample: HelionenergyMachinesProps = {
  eyebrow: "Where we are",
  title: ["Steel on the floor,", "power on the way"],
  machines: [
    { name: "Kiln", summary: "Our seventh prototype, making power today", href: "#", linkLabel: "Meet Kiln" },
    { name: "Basin", summary: "The first commercial plant, now rising", href: "#", linkLabel: "Meet Basin" },
  ],
};

export default function Demo() {
  return <HelionenergyMachines {...machinesSample} />;
}
