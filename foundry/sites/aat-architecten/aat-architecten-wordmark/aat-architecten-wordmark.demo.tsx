import { AatArchitectenWordmark } from "./aat-architecten-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-10 text-foreground">
      <AatArchitectenWordmark name="Brem" descriptor="Architects" href="#top" />
      <AatArchitectenWordmark name="Brem" />
    </div>
  );
}
