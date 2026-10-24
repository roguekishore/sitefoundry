import { RailwayButton } from "./railway-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10">
      <RailwayButton href="#" size="lg">Launch →</RailwayButton>
      <RailwayButton href="#" size="lg" variant="dark">Copilots</RailwayButton>
      <RailwayButton href="#" variant="outline">Meet the crews →</RailwayButton>
      <RailwayButton href="#" size="sm" variant="ghost">Sign in</RailwayButton>
      <RailwayButton href="#" variant="glow">Step inside</RailwayButton>
    </div>
  );
}
