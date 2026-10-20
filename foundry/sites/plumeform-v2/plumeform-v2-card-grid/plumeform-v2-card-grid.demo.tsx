import { FileCheck2, Filter, IdCard, Shuffle, ShieldCheck, Timer } from "lucide-react";
import { PlumeformV2Badge } from "@foundry/plumeform-v2-badge";
import { PlumeformV2CardGrid, type PlumeformV2CardGridProps } from "./plumeform-v2-card-grid";

export const checksSample: PlumeformV2CardGridProps = {
  eyebrow: "Clean data",
  title: "Careful answers, checked for you.",
  body: "Decide who may take part before you open, watch the quality of replies while they come in, and keep every check in your export. Participant IDs, finish codes and one-reply-per-person are free; pace checks, screening, quotas, shuffling and minimum times come with Plus.",
  cta: { label: "Made for researchers", href: "#research" },
  note: (
    <>
      Every research tool is on Plus: <strong>$12</strong> for 8,000 replies a month.
    </>
  ),
  cards: [
    { icon: <ShieldCheck />, title: "Pace & pattern checks", body: "Flag replies given too quickly or in a straight line, on every plan; failed trap questions on Plus." },
    { icon: <Filter />, title: "Screens & quotas", badge: "Plus", body: "Let people in or out on their answers, and stop a group once it has enough replies." },
    { icon: <Shuffle />, title: "Shuffling", badge: "Plus", body: "Mix up the order of questions and options so position doesn't sway the answer." },
    { icon: <Timer />, title: "Minimum times", badge: "Plus", body: "Hold a question on screen for a set time before people move on. Time spent is kept for every reply." },
    { icon: <IdCard />, title: "Panel friendly", body: "Works with the major research panels on every plan: IDs captured, finish codes and return links, one reply per person." },
    { icon: <FileCheck2 />, title: "Flags travel with the data", body: "Quality flags stay on each row of your export, so your exclusion rules can run in analysis." },
  ],
};

export const importSample: PlumeformV2CardGridProps = {
  align: "left",
  eyebrow: "Started it somewhere else",
  title: (
    <>
      Bring the questionnaire you already have. <PlumeformV2Badge className="ml-1 -translate-y-1">Plus</PlumeformV2Badge>
    </>
  ),
  body: "Upload a file, paste your questions, or describe what you want to learn. Each route opens an editable draft, and nothing goes live until you say so.",
  cards: [
    { eyebrow: "Upload", title: "An export file", body: "Bring in questions, options, pages and order from a research-tool export, branches included where they translate." },
    { eyebrow: "Paste", title: "Any list at all", body: "Paste questions from a document, a spreadsheet or another builder, and Murmur sorts out the types." },
    { eyebrow: "Describe", title: "Nothing written yet", body: "Say what you want to find out and get a first draft to edit, with questions you can reorder or remove." },
  ],
};

export default function Demo() {
  return <PlumeformV2CardGrid {...checksSample} />;
}
