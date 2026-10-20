import { PlumeformV2Panel } from "./plumeform-v2-panel";

export default function Demo() {
  return (
    <div className="grid gap-20 bg-background px-gutter py-24 sm:grid-cols-2">
      <PlumeformV2Panel className="mx-auto w-full max-w-md" placeholderHeight="22rem" />
      <PlumeformV2Panel className="mx-auto w-full max-w-md" fog="warm" placeholderHeight="18rem" />
    </div>
  );
}
