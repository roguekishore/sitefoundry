import { BridgeButton } from "./bridge-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6 bg-background p-8">
      <BridgeButton href="#">Start building</BridgeButton>
      <BridgeButton href="#" variant="outline">
        Read the case studies
      </BridgeButton>
      <BridgeButton href="#" variant="ghost">
        Talk to sales
      </BridgeButton>
      <BridgeButton href="#" variant="link">
        See the rails
      </BridgeButton>
    </div>
  );
}
