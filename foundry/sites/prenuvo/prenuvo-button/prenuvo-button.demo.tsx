import { PrenuvoButton } from "./prenuvo-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="dark flex flex-wrap items-center gap-4 bg-background p-8 text-foreground">
        <PrenuvoButton href="#learn" variant="outline">Read more</PrenuvoButton>
        <PrenuvoButton href="#book">Reserve a scan</PrenuvoButton>
        <PrenuvoButton href="#stories" variant="ocean">Member stories</PrenuvoButton>
        <PrenuvoButton href="#book" size="sm">Reserve a scan</PrenuvoButton>
      </div>
      <div className="flex flex-wrap items-center gap-4 bg-background p-8 text-foreground">
        <PrenuvoButton href="#team" variant="soft">Meet the clinicians</PrenuvoButton>
        <PrenuvoButton href="#steps" variant="soft" size="lg" className="w-80">See each step</PrenuvoButton>
        <PrenuvoButton href="#plans">Compare plans</PrenuvoButton>
      </div>
    </div>
  );
}
