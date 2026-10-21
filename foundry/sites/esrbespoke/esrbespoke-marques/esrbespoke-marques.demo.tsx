import { EsrbespokeMarques, type EsrbespokeMarquesProps } from "./esrbespoke-marques";

export const marquesSample: EsrbespokeMarquesProps = {
  label: "Body styles",
  note: "Marlowe works only on the coachwork the great houses are known for.",
  items: [
    { name: "Coupés" },
    { name: "Saloons" },
    { name: "Estates" },
    { name: "Grand tourers" },
    { name: "Roadsters" },
    { name: "Speedsters" },
    { name: "Limousines" },
    { name: "Shooting brakes" },
    { name: "Hypercars" },
    { name: "Track cars" },
    { name: "Convertibles" },
    { name: "Classics" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <EsrbespokeMarques {...marquesSample} />
      <div className="h-svh" />
    </div>
  );
}
