// Gallery only: both pills on the page, and the outline one on a dark band.
import { ImpulsespaceButton } from "./impulsespace-button";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-gutter">
      <div className="flex flex-wrap gap-3">
        <ImpulsespaceButton href="#">See open roles</ImpulsespaceButton>
        <ImpulsespaceButton href="#" variant="outline">Talk to us</ImpulsespaceButton>
      </div>
      <div className="dark flex flex-wrap gap-3 bg-background p-6">
        <ImpulsespaceButton href="#">Book a seat</ImpulsespaceButton>
        <ImpulsespaceButton href="#" variant="outline">Mission log</ImpulsespaceButton>
      </div>
    </div>
  );
}
