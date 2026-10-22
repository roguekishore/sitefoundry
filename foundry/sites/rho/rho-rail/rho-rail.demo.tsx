import { RhoRail } from "./rho-rail";

const cards = ["Northvale", "Quillmark", "Tessellate", "Brightfold", "Ferro"].map((name) => (
  <div key={name} className="flex h-64 items-end rounded-lg bg-card p-6 text-xl text-card-foreground">
    {name}
  </div>
));

export default function Demo() {
  return (
    <div className="bg-background py-section">
      <RhoRail items={cards} prevLabel="Previous" nextLabel="Next" itemClassName="w-[85%] sm:w-[22rem]" />
    </div>
  );
}
