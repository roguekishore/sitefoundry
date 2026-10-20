import { WiemerV2DotField } from "./wiemer-v2-dot-field";

export default function Demo() {
  return (
    <div className="bg-muted py-12">
      <WiemerV2DotField rows={6}>
        <div className="h-64 w-full rounded-xl bg-background lg:w-[28rem]" />
      </WiemerV2DotField>
    </div>
  );
}
