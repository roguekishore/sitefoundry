import { LunchlineDrawRule } from "./lunchline-draw-rule";

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[80vh]" />
      <div className="relative h-[60vh] bg-secondary">
        <LunchlineDrawRule />
      </div>
      <div className="relative h-[60vh]">
        <LunchlineDrawRule />
      </div>
    </div>
  );
}
