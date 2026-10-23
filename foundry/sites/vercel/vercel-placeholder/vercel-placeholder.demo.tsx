import { VercelPlaceholder } from "./vercel-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-8 bg-background p-8 sm:grid-cols-2">
      <div className="aspect-[1.78]">
        <VercelPlaceholder label="Product screenshot" />
      </div>
      <div className="aspect-[1.5]">
        <VercelPlaceholder tone="haze" label="Hero artwork" />
      </div>
      <div className="size-28">
        <VercelPlaceholder tone="wash" label="Small artwork" />
      </div>
      <div className="h-40">
        <VercelPlaceholder tone="side" label="Side artwork" />
      </div>
    </div>
  );
}
