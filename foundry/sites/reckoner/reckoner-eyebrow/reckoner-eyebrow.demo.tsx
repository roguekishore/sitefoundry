import { ReckonerEyebrow } from "./reckoner-eyebrow";

export default function Demo() {
  return (
    <div className="flex gap-10 bg-background p-10 text-foreground">
      <ReckonerEyebrow label="Strategies" />
      <ReckonerEyebrow label="Our firm" />
    </div>
  );
}
