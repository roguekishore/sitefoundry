import { CalendarDays, Phone, UserRound } from "lucide-react";
import { GranolaChat, type GranolaChatProps } from "./granola-chat";

export const chatSample: GranolaChatProps = {
  eyebrow: "Tidemark Ask",
  title: "Total meeting recall",
  prompts: [
    { text: "Which deadlines did I agree to last week?", chip: "Client calls", chipIcon: <Phone /> },
    { text: "Sum up every pricing objection we heard this month", chip: "Weekly syncs", chipIcon: <CalendarDays /> },
    { text: "What did the design crit decide about onboarding?", chip: "Interviews", chipIcon: <UserRound /> },
  ],
};

export default function Demo() {
  return <GranolaChat {...chatSample} />;
}
