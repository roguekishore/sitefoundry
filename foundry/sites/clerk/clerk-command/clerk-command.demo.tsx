// Sample content lives here (gallery only); the hero and testimonials reuse it.
import { Bot, Sparkles, Terminal } from "lucide-react";
import { ClerkCommand, type ClerkCommandProps } from "./clerk-command";

/** Three small round marks standing in for coding-agent logos. */
export const agentMarks = [
  <span key="a" className="flex size-full items-center justify-center bg-chart-4 text-background">
    <Sparkles strokeWidth={2.25} />
  </span>,
  <span key="b" className="flex size-full items-center justify-center bg-chart-1 text-primary-foreground">
    <Bot strokeWidth={2.25} />
  </span>,
  <span key="c" className="flex size-full items-center justify-center bg-card text-foreground">
    <Terminal strokeWidth={2.5} />
  </span>,
];

export const commandSample: ClerkCommandProps = {
  label: "Set up with agents",
  command: "Add Latch sign-in to this app: latch.dev/AGENTS.md",
  marks: agentMarks,
  copyLabel: "Copy prompt",
};

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-8 bg-card p-8">
      <ClerkCommand {...commandSample} />
      <ClerkCommand {...commandSample} variant="pill" />
    </div>
  );
}
