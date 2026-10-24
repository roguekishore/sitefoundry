import { ParsleyhealthWordmark } from "./parsleyhealth-wordmark";

export default function Demo() {
  return (
    <div className="dark flex flex-col items-start gap-6 bg-background p-8 text-foreground">
      <ParsleyhealthWordmark brand="Halden Health" short="HH" />
      <ParsleyhealthWordmark brand="Halden Health" size="lg" />
    </div>
  );
}
