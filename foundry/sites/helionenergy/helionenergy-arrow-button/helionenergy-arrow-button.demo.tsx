import { HelionenergyArrowButton } from "./helionenergy-arrow-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="bg-background p-8">
        <HelionenergyArrowButton href="#" label="Read the story" />
      </div>
      <div className="dark bg-background p-8">
        <HelionenergyArrowButton href="#" label="Meet Kiln" tone="strong" />
      </div>
    </div>
  );
}
