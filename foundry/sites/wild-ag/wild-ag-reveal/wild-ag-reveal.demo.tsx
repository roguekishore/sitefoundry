import { WildAgReveal } from "./wild-ag-reveal";

const lines = ["We start with the plot.", "Then the numbers.", "Then the drawings."];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-muted-foreground">
      <div className="mx-auto max-w-xl space-y-4 text-lg font-medium">
        {lines.map((line, i) => (
          <WildAgReveal as="p" key={line} step={i}>
            {line}
          </WildAgReveal>
        ))}
      </div>
    </div>
  );
}
