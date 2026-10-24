// Sample content lives here (gallery only). All copy is ours.
import { CfsRingLink } from "./cfs-ring-link";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-10 bg-background p-10 text-foreground">
      <CfsRingLink label="See the reactor" href="#" />
      <div className="dark bg-card p-6 text-foreground">
        <CfsRingLink label="Join the crew" href="#" />
      </div>
    </div>
  );
}
