import { WiemerArrowLink } from "./wiemer-arrow-link";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-8 bg-background p-8 text-foreground">
      <WiemerArrowLink label="Join the list" href="#waitlist" />
      <span className="rounded-lg bg-primary p-4 text-primary-foreground">
        <WiemerArrowLink label="See the studio" href="#about" />
      </span>
    </div>
  );
}
