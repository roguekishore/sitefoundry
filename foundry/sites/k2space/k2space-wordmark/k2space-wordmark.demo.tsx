import { K2spaceWordmark } from "./k2space-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-10 text-foreground">
      <K2spaceWordmark name="Hecto" suffix="Orbital" className="text-xl" />
      <K2spaceWordmark name="Hecto" suffix="Orbital" className="text-4xl" />
    </div>
  );
}
