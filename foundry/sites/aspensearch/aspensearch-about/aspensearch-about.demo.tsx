import { AspensearchAbout, type AspensearchAboutProps } from "./aspensearch-about";

export const aboutSample: AspensearchAboutProps = {
  id: "about",
  label: "Why Corvo",
  paragraphs: [
    "Corvo Talent began with one plain fact: the strongest systematic researchers and engineers never browse job boards. They change seats once every few years, and they want that conversation to be with someone who knows the craft — the models, the infrastructure, the trade-offs, and the gap between a desk that will stretch them and one that will slow them down.",
    "That standard is the job. We've spent the better part of two decades inside the hiring loops of leading quant shops and the well-funded labs chasing the same people. We don't sell openings. We give straight answers about where the next five years should go — and often we're why it goes well.",
  ],
  inkStat: { value: "640+", caption: "Hires made since 2009" },
  mintStat: { value: "$2M–6M", caption: "Span of recent packages" },
  greyStat: { value: "17+", caption: "Years in these rooms" },
};

export default function Demo() {
  return <AspensearchAbout {...aboutSample} />;
}
