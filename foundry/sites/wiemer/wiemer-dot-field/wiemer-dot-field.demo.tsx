import { WiemerDotField } from "./wiemer-dot-field";

export default function Demo() {
  return (
    <div className="bg-muted px-gutter py-16">
      <WiemerDotField>
        <div className="mx-auto h-72 w-full max-w-[30rem] rounded-2xl bg-card" />
      </WiemerDotField>
    </div>
  );
}
