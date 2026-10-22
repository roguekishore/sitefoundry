// Sample content (gallery only); the page reuses it. Juniper and its coach are made up.
import { BevelIntelligence, type BevelIntelligenceProps } from "./bevel-intelligence";

export const intelligenceSample: BevelIntelligenceProps = {
  personas: [{ name: "Drill" }, { name: "Buddy" }, { name: "Mentor" }],
  activePersona: 1,
  title: (
    <>
      <span className="text-background/60">Dig in with</span>
      <br />
      Juniper Coach
    </>
  ),
  lead: "Advice that fits your day, from a coach that never clocks off.",
  cards: [
    { title: "Ask about your own numbers", text: "Type a question and get an answer built on your sleep, training and labs.", tint: "lavender" },
    { title: "Nudges before you ask", text: "Morning recaps, gentle reminders and timely check-ins, all on their own.", tint: "peach" },
    { title: "Answers with receipts", text: "Every reply links to the studies and articles it leans on, so you can check.", tint: "pink" },
    { title: "Plans built around you", text: "Workouts and weekly programs shaped by your goals and your calendar.", tint: "teal" },
  ],
};

export default function Demo() {
  return <BevelIntelligence {...intelligenceSample} />;
}
