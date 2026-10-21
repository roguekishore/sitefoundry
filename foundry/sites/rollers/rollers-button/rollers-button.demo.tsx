import { RollersButton } from "./rollers-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-10 text-foreground">
      <div className="flex">
        <RollersButton href="#" variant="pill">
          Our story
        </RollersButton>
        <RollersButton href="#">Browse the yard</RollersButton>
      </div>
      <div className="flex bg-accent p-8">
        <RollersButton href="#" variant="light">
          Visit the cabins
        </RollersButton>
      </div>
    </div>
  );
}
