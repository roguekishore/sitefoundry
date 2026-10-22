import { BasepowercompanyGridSwitch, type BasepowercompanyGridSwitchProps } from "./basepowercompany-grid-switch";

export const gridSwitchSample: BasepowercompanyGridSwitchProps = {
  tape: "Here's the idea",
  title: "Power that pulls its weight.",
  subtitle: "Your Hub lends the grid a hand on its busiest hours. When the lines go quiet, it quietly takes over your home.",
  switchLabel: "Grid",
  onLabel: "ON",
  offLabel: "OFF",
  on: {
    title: "While the grid is humming along.",
    body: "Some hours the grid runs short. Your Hub tops it up, which keeps rates lower and the lines steadier for the whole town.",
    mediaLabel: "Illustration: a small house with a battery, wired to a live power line",
  },
  off: {
    title: "When the grid goes dark.",
    body: "The Hub notices in a blink and runs your lights, fridge and air on its own, often before anyone in the house notices.",
    mediaLabel: "Illustration: the same house glowing on battery power while the line is down",
  },
};

export default function Demo() {
  return <BasepowercompanyGridSwitch {...gridSwitchSample} />;
}
