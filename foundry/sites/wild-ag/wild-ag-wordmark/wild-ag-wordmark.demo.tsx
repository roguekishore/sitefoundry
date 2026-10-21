import { WildAgWordmark } from "./wild-ag-wordmark";

export default function Demo() {
  return (
    <div className="grid gap-10 bg-background p-12">
      <WildAgWordmark text="Talgrund" className="text-5xl" />
      <div className="bg-primary p-8">
        <WildAgWordmark text="Talgrund" tone="light" className="text-3xl" />
      </div>
    </div>
  );
}
