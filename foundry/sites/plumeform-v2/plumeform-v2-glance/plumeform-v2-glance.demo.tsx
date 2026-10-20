import { PlumeformV2Glance, type PlumeformV2GlanceProps } from "./plumeform-v2-glance";

export const glanceSample: PlumeformV2GlanceProps = {
  eyebrow: "In short",
  title: "Begin with 150 free replies a month.",
  stats: [
    { label: "free replies, every month", value: "150", note: "no card, no time limit" },
    { label: "question types free, 28 on Plus", value: "20", note: "uploads and research tools are on Plus" },
    { label: "for 8,000 replies a month", value: "$12", note: "one plan above Free, nothing hidden" },
    { label: "accounts people need to reply", value: "0", note: "a link, a code or an embed is enough" },
  ],
};

export default function Demo() {
  return <PlumeformV2Glance {...glanceSample} />;
}
