import { ZoeSlider } from "./zoe-slider";

const cards = ["One", "Two", "Three", "Four", "Five"];

export default function Demo() {
  return (
    <div className="space-y-12 bg-background py-8">
      <ZoeSlider
        label="Example cards"
        prevLabel="Previous card"
        nextLabel="Next card"
        slideClassName="w-[min(20rem,80vw)]"
        trackClassName="px-gutter"
        slides={cards.map((c) => (
          <div key={c} className="grid aspect-[4/3] place-items-center rounded-2xl bg-card text-2xl font-light">
            {c}
          </div>
        ))}
      />
      <div className="bg-highlight py-8 text-highlight-foreground">
        <ZoeSlider
          tone="band"
          label="Example quotes"
          prevLabel="Previous quote"
          nextLabel="Next quote"
          slideClassName="w-[17.25rem]"
          trackClassName="px-8"
          slides={cards.map((c) => (
            <div key={c} className="h-60 rounded-lg bg-muted p-6 text-foreground">
              {c}
            </div>
          ))}
        />
      </div>
    </div>
  );
}
