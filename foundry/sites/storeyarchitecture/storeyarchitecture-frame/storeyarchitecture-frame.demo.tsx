import { StoreyarchitectureFrame } from "./storeyarchitecture-frame";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[50vh] text-foreground">
      <div className="grid gap-gutter sm:grid-cols-2">
        <StoreyarchitectureFrame ratio="690 / 1008" label="Explore project" href="#house" />
        <StoreyarchitectureFrame ratio="6 / 5" label="Explore project" href="#house" />
      </div>
    </div>
  );
}
