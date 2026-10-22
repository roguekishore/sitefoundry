// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpGovernance, type WarpGovernanceProps } from "./warp-governance";

export const governanceSample: WarpGovernanceProps = {
  id: "oversight",
  tag: "Oversight",
  status: "online",
  title: "Keep a fleet of agents in check",
  lead: "Steady tuning, tighter oversight and safety, all switched on from the start.",
  caption: "fig. 5 · control room",
  cost: {
    title: "Lower spend per merge · cost per merge",
    value: "$16.42",
    delta: "-29%",
    date: "sep 18",
    series: [
      { label: "hosts", value: "$6.31", colour: 1 },
      { label: "platform", value: "$5.90", colour: 2 },
      { label: "models", value: "$4.21", colour: 3 },
    ],
    chartLabel: "Stacked area chart of spend per merge over five weeks, falling",
  },
  roster: {
    label: "fig. c4 · crews · on shift",
    count: "3 crews",
    agents: [
      { status: "waiting for work", model: "north 4", agent: "review", initial: "p", time: "now" },
      { status: "writing the plan", model: "ridge 2", agent: "planner", initial: "m", time: "11m" },
      { status: "handed to plan", model: "north 4", agent: "lathe", initial: "k", time: "34m" },
    ],
    note: "Every crew moves on one shared clock; nobody sits idle.",
  },
  proof: {
    title: "Agents show their work with screen use",
    text: "Every agent on the line records a screenshot or clip, so you can check the change before a merge goes up.",
    shotLabel: "Browser window showing the agent's test of a signup page",
    working: "checking the signup page",
    reply: (
      <>
        Got it — the pricing table was cut off by a fixed-height wrapper. Fixed in <a href="#">MR #218</a>, ready for review.
      </>
    ),
  },
};

export default function Demo() {
  return <WarpGovernance {...governanceSample} />;
}
