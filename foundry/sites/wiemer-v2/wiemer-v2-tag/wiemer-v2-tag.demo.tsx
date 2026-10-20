import { WiemerV2Tag } from "./wiemer-v2-tag";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8">
      <WiemerV2Tag>Pre-order</WiemerV2Tag>
      <div className="rounded-xl bg-muted p-4">
        <WiemerV2Tag tone="card">In the Bremen workshop</WiemerV2Tag>
      </div>
    </div>
  );
}
