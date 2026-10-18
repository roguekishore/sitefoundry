// Sample content lives here (gallery only); the page reuses it.
import { HulyKnowledge, type HulyKnowledgeProps } from "./huly-knowledge";

// Our own placeholder art: soft light on a dark wall with a few floating panes.
const art =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 706 423">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfd8ea"/><stop offset="1" stop-color="#eef1f6"/></linearGradient>
    <radialGradient id="glow" cx="0.62" cy="0.55" r="0.6"><stop offset="0" stop-color="#ffffff"/><stop offset="0.25" stop-color="#b9a6ff"/><stop offset="0.55" stop-color="#4b5fd6"/><stop offset="1" stop-color="#14161f"/></radialGradient>
    <linearGradient id="pane" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity="0.35"/><stop offset="1" stop-color="#ffffff" stop-opacity="0.04"/></linearGradient>
  </defs>
  <rect width="706" height="423" fill="url(#sky)"/>
  <g fill="#b7c2d8" opacity="0.7"><rect x="0" y="0" width="706" height="40"/><rect x="0" y="383" width="706" height="40"/></g>
  <rect x="86" y="92" width="534" height="210" rx="14" fill="url(#glow)"/>
  <rect x="150" y="122" width="150" height="96" rx="12" fill="url(#pane)"/>
  <rect x="420" y="170" width="170" height="110" rx="12" fill="url(#pane)"/>
  <circle cx="420" cy="196" r="46" fill="#ffffff" opacity="0.25"/>
  <g fill="#9aa6bd">${Array.from({ length: 8 }, (_, i) => `<rect x="${110 + i * 66}" y="304" width="10" height="12" rx="2"/>`).join("")}</g>
</svg>`);

export const knowledgeSample: HulyKnowledgeProps = {
  title: ["Answers within", "easy reach"],
  intro: "Tessel gives you everything you need to write and organise project docs, with editing tools that let a whole team shape a page together.",
  marked: {
    strong: "Pages in Tessel",
    text: "hold specs and decisions, meeting notes and checklists,",
    rest: "with every task and person they mention linked in place.",
  },
  toolbarLabel: "Link",
  image: { src: art, alt: "Abstract light falling on floating glass panes" },
  body: [
    "With ",
    { text: "instant", style: "strike" },
    " real-time editing, a remote team can shape one ",
    { caret: true },
    "page together: mention people, link tasks and hand out next steps, plus a few ",
    { text: "smaller touches", style: "muted" },
    " you'll find as you write.",
  ],
  code: `type Member = {
  name: string;
  role: "lead" | "maker";
};

const crew: Member[] = [
  { name: "Ana", role: "lead" },
  { name: "Milo", role: "maker" },
];

const leads = crew.filter((m) => m.role === "lead");`,
  outro: "Add formatting, files, images and code to any page. Keep plans, technical notes and progress updates side by side, so everyone works from the same story.",
  placeholder: "Start typing here…",
  notes: [
    { title: "Every change kept", text: "Step back through each edit and restore any version." },
    { title: "Write together", text: "See teammates' cursors and edits as they happen." },
  ],
};

export default function Demo() {
  return <HulyKnowledge {...knowledgeSample} />;
}
