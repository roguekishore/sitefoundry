import { GrowthbookButton } from "./growthbook-button";

export default function Demo() {
  return (
    <div className="space-y-px">
      <div className="flex flex-wrap items-center gap-3 bg-background p-8">
        <GrowthbookButton variant="outline" size="lg">Talk to us</GrowthbookButton>
        <GrowthbookButton size="lg" arrow>Try it free</GrowthbookButton>
        <GrowthbookButton arrow>See how tests work</GrowthbookButton>
        <GrowthbookButton variant="outline" size="sm">Talk to us</GrowthbookButton>
        <GrowthbookButton size="sm">Try it free</GrowthbookButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 bg-background p-8 text-foreground">
        <GrowthbookButton arrow>Get going</GrowthbookButton>
        <GrowthbookButton variant="outline" arrow>Talk to us</GrowthbookButton>
      </div>
    </div>
  );
}
