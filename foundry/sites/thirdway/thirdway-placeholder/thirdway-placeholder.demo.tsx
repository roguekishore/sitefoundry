import { ThirdwayPlaceholder } from "./thirdway-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-6 sm:grid-cols-2">
      <ThirdwayPlaceholder tone="photo" className="aspect-[3/2]" />
      <ThirdwayPlaceholder tone="flat" className="aspect-[3/2]" />
      <ThirdwayPlaceholder tone="veil" className="h-12 w-24" />
      <div className="dark bg-background p-4">
        <ThirdwayPlaceholder tone="photo" className="aspect-[3/2]" />
      </div>
    </div>
  );
}
