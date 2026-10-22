// Sample content lives here (gallery only); the page reuses it. Tallyhold is made up.
import { Sparkle } from "lucide-react";
import { MeowAgent, type MeowAgentProps } from "./meow-agent";

export const agentSample: MeowAgentProps = {
  title: "Let your agent open the account for you.",
  text: "Paste one command into your terminal and your assistant takes it from there: forms, documents and the first transfer, all in the chat you already use.",
  primary: { label: "Start with your agent", href: "#", icon: <Sparkle strokeWidth={2} /> },
  secondary: { label: "How it works", href: "#" },
  chips: ["Account setup", "Bank transfer", "Wires", "Stablecoins", "Cross-border", "Card spend", "Internal moves"],
  more: { label: "see all", href: "#" },
};

export default function Demo() {
  return <MeowAgent {...agentSample} />;
}
