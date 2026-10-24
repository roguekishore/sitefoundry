// Gallery only: both hovers, the invert one on a navy band.
import { CastelionButton } from "./castelion-button";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-gutter sm:grid-cols-2">
      <CastelionButton label="All Dispatches" href="#" className="w-full" />
      <div className="dark bg-secondary p-6">
        <CastelionButton label="See Openings" href="#" variant="invert" className="w-full" />
      </div>
    </div>
  );
}
