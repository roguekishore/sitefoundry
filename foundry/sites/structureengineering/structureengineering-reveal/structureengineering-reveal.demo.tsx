import { StructureengineeringReveal } from "./structureengineering-reveal";

const words = ["Survey", "Model", "Detail"];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-foreground">
      <ul className="mx-auto grid max-w-page gap-4 sm:grid-cols-3">
        {words.map((w, i) => (
          <StructureengineeringReveal as="li" key={w} step={i} className="border-t border-foreground pt-3 font-display text-4xl tracking-tight">
            {w}
          </StructureengineeringReveal>
        ))}
      </ul>
    </div>
  );
}
