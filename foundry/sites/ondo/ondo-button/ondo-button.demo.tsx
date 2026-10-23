import { OndoButton } from "./ondo-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4 bg-background p-8">
        <OndoButton href="#">Open the app</OndoButton>
        <OndoButton href="#" size="md">
          Explore Tidemark
        </OndoButton>
        <OndoButton href="#" size="lg">
          Explore Ballast
        </OndoButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-4 bg-secondary p-8">
        <OndoButton href="#">Open the app</OndoButton>
        <OndoButton href="#" variant="soft">
          Keep reading
        </OndoButton>
        <OndoButton href="#" size="md">
          Talk to us
        </OndoButton>
      </div>
    </div>
  );
}
