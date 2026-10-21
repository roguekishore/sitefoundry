import { MrcresidencesbocaratonPattern } from "./mrcresidencesbocaraton-pattern";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-gutter sm:grid-cols-2">
      <div className="bg-primary">
        <MrcresidencesbocaratonPattern className="h-80" />
      </div>
      <MrcresidencesbocaratonPattern className="h-80" />
      <div className="bg-primary sm:col-span-2">
        <MrcresidencesbocaratonPattern tone="faint" className="h-48" />
      </div>
    </div>
  );
}
