// Sample content lives here (gallery only); the page reuses it.
import { HulyBento, type HulyBentoProps } from "./huly-bento";

export const bentoSample: HulyBentoProps = {
  title: "Less busywork",
  text: "Tessel keeps plans, time and knowledge in one calm place, so product teams and the people around them can actually work together.",
  cards: [
    {
      title: "Command bar.",
      text: "Reach any action in a keystroke, without lifting your hands.",
      visual: {
        kind: "command",
        placeholder: "Type a command…",
        label: "Suggestions",
        actions: [
          { label: "Close current task", key: "C" },
          { label: "Open my inbox", key: "I" },
          { label: "Switch to board", key: "B" },
        ],
      },
    },
    {
      title: "Shared planner.",
      text: "See who is doing what this week, across every team, on one calendar.",
      visual: {
        kind: "planner",
        heading: "Thursday",
        tasks: [
          { tag: "Urgent", title: "Ship the onboarding checklist to beta users", meta: "Oct 23", people: ["AR", "MK"] },
          { tag: "Normal", title: "Review the pricing page copy", meta: "Oct 24", people: ["JS"] },
        ],
      },
    },
    {
      title: "Focus blocks.",
      text: "Turn the day's tasks into protected time on your calendar.",
      visual: {
        kind: "schedule",
        action: "Join",
        events: [
          { time: "10:00 – 10:45 · every Monday", title: "Sprint review and planning for the mobile app", note: "Reminder 15 minutes before", people: ["AR", "MK", "LT"] },
          { time: "13:30 – 14:00", title: "Hiring sync: design lead", people: ["JS", "PN"] },
        ],
      },
    },
    {
      title: "Smart alerts.",
      text: "Hear about the changes that matter, and nothing else.",
      visual: { kind: "bell", count: "12" },
    },
  ],
};

export default function Demo() {
  return <HulyBento {...bentoSample} />;
}
