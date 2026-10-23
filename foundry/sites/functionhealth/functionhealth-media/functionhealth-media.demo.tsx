import { FunctionhealthMedia } from "./functionhealth-media";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-start gap-4 bg-background p-8">
      <FunctionhealthMedia ratio="aspect-[9/16] w-40" />
      <FunctionhealthMedia ratio="aspect-square w-40" rounded="rounded-md" />
      <FunctionhealthMedia ratio="aspect-[3/2] w-60" media={<div className="size-full bg-primary/30" />} />
    </div>
  );
}
