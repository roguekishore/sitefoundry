import { LunchlinePhilosophy, type LunchlinePhilosophyProps } from "./lunchline-philosophy";

export const philosophySample: LunchlinePhilosophyProps = {
  id: "beliefs",
  eyebrow: "What we believe",
  heading: "we stay for the long haul, and help good companies get steadily better.",
  items: [
    { title: "“keep the promises you make”", body: "If we say we'll be on the call, we're on the call. Founders should never have to chase us for what we offered." },
    { title: "“the answer matters more than who had it”", body: "We argue hard and change our minds easily. The best idea in the room wins, whoever brought it." },
    { title: "“roll up your sleeves”", body: "We have run payroll, opened sites and answered the complaints line. We'll do it again when it helps." },
    { title: "“check the plan every season”", body: "Markets shift; so do we. Each quarter we test our own assumptions as hard as we test anyone else's." },
  ],
};

export default function Demo() {
  return <LunchlinePhilosophy {...philosophySample} />;
}
