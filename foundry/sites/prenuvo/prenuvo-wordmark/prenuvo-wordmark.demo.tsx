import { PrenuvoWordmark } from "./prenuvo-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8 text-foreground">
      <PrenuvoWordmark name="oriel" href="#top" />
      <PrenuvoWordmark name="oriel" size="sm" />
    </div>
  );
}
