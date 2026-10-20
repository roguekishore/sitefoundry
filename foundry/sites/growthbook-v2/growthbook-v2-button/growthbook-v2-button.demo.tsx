import { GrowthbookV2Button } from "./growthbook-v2-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-3">
        <GrowthbookV2Button href="#" variant="outline" size="lg">Talk to us</GrowthbookV2Button>
        <GrowthbookV2Button href="#" size="lg" arrow>Try it free</GrowthbookV2Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <GrowthbookV2Button href="#" arrow>Explore experiments</GrowthbookV2Button>
        <GrowthbookV2Button href="#" variant="outline" arrow>See every story</GrowthbookV2Button>
        <GrowthbookV2Button href="#" size="sm" variant="outline">Talk to us</GrowthbookV2Button>
        <GrowthbookV2Button href="#" size="sm">Try it free</GrowthbookV2Button>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 rounded-xl bg-background p-6">
        <GrowthbookV2Button href="#" arrow>Get going</GrowthbookV2Button>
        <GrowthbookV2Button href="#" variant="outline" arrow>Talk to us</GrowthbookV2Button>
      </div>
    </div>
  );
}
