import { GalaxyIntro, type GalaxyIntroProps } from "./galaxy-intro";

export const enginesSample: GalaxyIntroProps = {
  eyebrow: "What we run",
  lines: [[{ text: "Two systems:" }], [{ text: "money", tone: "chart-1" }, { text: " and " }, { text: "machines", tone: "chart-2" }, { text: "." }]],
  lead: "Settlement is moving into software, and intelligence needs ever more power. Brightrail operates businesses on both sides of that shift.",
};

export const onchainSample: GalaxyIntroProps = {
  eyebrow: "Laying the new tracks",
  lines: [[{ text: "Putting every ledger onchain" }]],
  size: "lg",
};

export default function Demo() {
  return (
    <>
      <GalaxyIntro {...enginesSample} />
      <GalaxyIntro {...onchainSample} />
    </>
  );
}
