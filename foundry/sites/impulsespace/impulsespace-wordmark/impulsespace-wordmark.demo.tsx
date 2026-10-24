// Gallery only: the made-up company's wordmark, on the page and on a dark band.
import { ImpulsespaceWordmark } from "./impulsespace-wordmark";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-gutter">
      <ImpulsespaceWordmark name="Halyard" href="#" />
      <div className="dark bg-background p-6 text-foreground">
        <ImpulsespaceWordmark name="Halyard" href="#" />
      </div>
    </div>
  );
}
