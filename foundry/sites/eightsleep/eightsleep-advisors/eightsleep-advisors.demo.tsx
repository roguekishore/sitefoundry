import { EightsleepAdvisors, type EightsleepAdvisorsProps } from "./eightsleep-advisors";

export const advisorsSample: EightsleepAdvisorsProps = {
  eyebrow: "Science council",
  title: "Guided by people who study sleep",
  advisors: [
    { name: "Dr. Rowan Achterberg", role: "Sleep physiologist, professor of circadian biology, and host of a long-running sleep podcast" },
    { name: "Dr. Imogen Vale", role: "Neurologist, director of a university sleep clinic, and author of a bestselling book on rest" },
  ],
};

export default function Demo() {
  return <EightsleepAdvisors {...advisorsSample} />;
}
