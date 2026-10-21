import { WildAgCarousel } from "./wild-ag-carousel";

const cards = ["One", "Two", "Three", "Four"];

export default function Demo() {
  return (
    <div className="bg-muted px-gutter py-section">
      <div className="mx-auto max-w-page">
        <WildAgCarousel
          title={<h2 className="font-display text-4xl text-primary uppercase italic">Cards.</h2>}
          prevLabel="Previous"
          nextLabel="Next"
          items={cards.map((c) => (
            <div key={c} className="flex aspect-[0.62] items-end rounded-lg bg-secondary p-8 text-2xl font-semibold text-foreground">
              {c}
            </div>
          ))}
        />
      </div>
    </div>
  );
}
