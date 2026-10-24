import { BookOpenCheck, ListChecks, MessageCircleQuestion, Mic, Sparkles, WandSparkles } from "lucide-react";
import type { ReflectAiProps } from "./reflect-ai";
import { ReflectAi } from "./reflect-ai";

const icon = { strokeWidth: 1.25, "aria-hidden": true } as const;

export const aiSample: ReflectAiProps = {
  eyebrow: "Bring your own model",
  title: "A notebook that answers back",
  lead: "Ask a question and get an answer that points to the pages it came from. Tidy a messy paragraph or boil a meeting down to its decisions. Plug in your own model key; your words go straight to the provider you chose, and they bill you directly.",
  noteTitle: "Three ways to keep a reading log",
  noteLine: "Which of these suits a slow reader with a busy week?",
  magic: { label: "Tap for a little magic", href: "#", icon: <Sparkles aria-hidden /> },
  mediaLabel: "Beam of light over a glowing grid floor",
  listTitle: "What can the assistant do?",
  items: [
    { icon: <Mic {...icon} />, title: "Turn voice memos into text", text: "through the speech service you pick" },
    { icon: <MessageCircleQuestion {...icon} />, title: "Question your notebook", text: "Every answer cites its pages." },
    { icon: <ListChecks {...icon} />, title: "Pull out decisions and to-dos", text: "from long meeting write-ups" },
    { icon: <BookOpenCheck {...icon} />, title: "Fix typos and loose grammar,", text: "and smooth out your sentences" },
    { icon: <WandSparkles {...icon} />, title: "Keep your favourite", text: "requests one tap away" },
  ],
};

export default function Demo() {
  return <ReflectAi {...aiSample} />;
}
