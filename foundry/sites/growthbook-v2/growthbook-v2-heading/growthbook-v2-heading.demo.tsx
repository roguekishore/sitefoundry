import { GrowthbookV2Heading } from "./growthbook-v2-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-8 text-foreground">
      <GrowthbookV2Heading as="h1" size="hero">Test boldly. Release calmly.</GrowthbookV2Heading>
      <GrowthbookV2Heading size="section">Answers your whole team trusts</GrowthbookV2Heading>
      <GrowthbookV2Heading as="h3" size="card">Hosted by us</GrowthbookV2Heading>
    </div>
  );
}
