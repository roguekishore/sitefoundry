import { OndoArrows } from "./ondo-arrows";

export default function Demo() {
  return (
    <div className="flex gap-8">
      <div className="bg-background p-8">
        <OndoArrows atStart labels={{ prev: "Previous", next: "Next" }} />
      </div>
      <div className="dark bg-background p-8">
        <OndoArrows labels={{ prev: "Previous", next: "Next" }} />
      </div>
    </div>
  );
}
