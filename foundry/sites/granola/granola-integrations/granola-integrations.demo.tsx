import { Bot, Boxes, Brain, Feather, Flame, Hexagon, Orbit, Sparkles, Squirrel, Workflow } from "lucide-react";
import { GranolaIntegrations, type GranolaIntegrationsProps } from "./granola-integrations";

export const integrationsSample: GranolaIntegrationsProps = {
  eyebrow: "Tidemark Connect",
  title: "Bring your notes to every tool",
  cta: { label: "Get it free", href: "#download" },
  statement: "Stop pasting transcripts into chat windows.",
  body: "Link Tidemark once and your favourite assistants can read what was said, so whatever you do next starts from the conversation you just had.",
  tiles: [
    { name: "Parlance", icon: <Sparkles /> },
    { name: "Loomis", icon: <Feather /> },
    { name: "Sprocket" },
    { name: "inkwell" },
    { name: "Tessel", icon: <Hexagon /> },
    { name: "Nimbusly", icon: <Orbit /> },
    { name: "Hexgrid", icon: <Boxes /> },
    { name: "Wren", icon: <Squirrel /> },
    { name: "Ottoline", icon: <Bot /> },
    { name: "brisk" },
    { name: "Cobalt", icon: <Brain /> },
    { name: "Kiln", icon: <Flame /> },
    { name: "Relay", icon: <Workflow /> },
  ],
};

export default function Demo() {
  return <GranolaIntegrations {...integrationsSample} />;
}
