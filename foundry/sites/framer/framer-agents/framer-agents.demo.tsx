import type { FramerAgentsProps } from "./framer-agents";
import { FramerAgents } from "./framer-agents";

const more = { label: "Meet the agent", href: "#" };

export const agentsSample: FramerAgentsProps = {
  title: "Helpers that hand you the pen,\nnot take it away",
  action: { label: "Meet the agent", href: "#" },
  cards: [
    {
      title: "Lay out pages with a partner",
      body: "A design partner that lives on the canvas. It drafts and polishes sections in place, and every move it makes stays visible, editable and yours to undo.",
      link: more,
      mediaLabel: "Three layout drafts side by side",
    },
    {
      title: "Keep your content in order",
      body: "Spend less time sorting entries. The content agent creates collections, tidies fields and fills pages, wired straight to the canvas so words and layout never drift apart.",
      link: more,
      mediaLabel: "A content table being filled in",
    },
    {
      title: "Write code by describing it",
      body: "Say what you want and get a working component on your page, from a small hover flourish to a full interactive gallery.",
      link: more,
      mediaLabel: "A custom component on the canvas",
    },
  ],
  asideLabel: "Agent chat panel",
  closing: {
    card: {
      title: "Plug in the assistant you already use",
      body: "Link your favourite coding assistant to Tessel. Edit copy, bring in content and tweak pages from the tools on your desk, then check every change on the canvas before it goes live.",
      link: more,
      mediaLabel: "A blog page imported by an assistant",
    },
    panelLabel: "Terminal session",
  },
};

export default function Demo() {
  return <FramerAgents {...agentsSample} />;
}
