import { CornerDownLeft, Sparkles } from "lucide-react";
import { RaycastAiAgent, type RaycastAiAgentProps } from "./raycast-ai-agent";

export const aiAgentSample: RaycastAiAgentProps = {
  eyebrow: "Assistant",
  title: "Meet your pocket helper",
  lead: "Tessel's assistant uses the tools you already rely on to finish the dull parts.",
  chat: {
    title: "Chat",
    description: "A built-in assistant that works inside your favourite apps and turns a sentence into finished work.",
  },
  quick: {
    title: "Quick prompt",
    description: "One hotkey opens the assistant over whatever you were doing, then gets out of your way.",
    icon: <Sparkles />,
    prompt: "Block Friday morning",
    hint: "Quick prompt",
    hintIcon: <CornerDownLeft />,
    suggestions: ["Shorten this paragraph", "Write a polite reply", "Why is this test failing", "Open today's agenda", "Rewrite for a friendlier tone", "Book time with Maya"],
  },
  extensions: {
    title: "Plug-in power",
    description: "Link the tools you use every day to the assistant so it can act wherever you already work.",
  },
  link: { label: "Read more about the assistant", href: "#" },
};

export default function Demo() {
  return <RaycastAiAgent {...aiAgentSample} />;
}
