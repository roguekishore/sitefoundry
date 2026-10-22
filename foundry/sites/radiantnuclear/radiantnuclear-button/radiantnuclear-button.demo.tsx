import { RadiantnuclearButton } from "./radiantnuclear-button";

export default function Demo() {
  return (
    <div className="grid gap-0 sm:grid-cols-3">
      <div className="flex items-center justify-center bg-background p-12">
        <RadiantnuclearButton href="#updates">All updates</RadiantnuclearButton>
      </div>
      <div className="flex items-center justify-center bg-secondary p-12">
        <RadiantnuclearButton href="#film">Play the film</RadiantnuclearButton>
      </div>
      <div className="flex items-center justify-center bg-linear-to-b from-foreground/55 to-foreground/85 p-12">
        <RadiantnuclearButton>Read more</RadiantnuclearButton>
      </div>
    </div>
  );
}
