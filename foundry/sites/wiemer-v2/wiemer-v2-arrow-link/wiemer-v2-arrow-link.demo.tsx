import { WiemerV2ArrowLink } from "./wiemer-v2-arrow-link";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-8 bg-background p-8">
      <WiemerV2ArrowLink href="#reserve">Join the list</WiemerV2ArrowLink>
      <div className="rounded-xl bg-foreground p-4">
        <WiemerV2ArrowLink href="#reserve" tone="inverse">
          Join the list
        </WiemerV2ArrowLink>
      </div>
    </div>
  );
}
