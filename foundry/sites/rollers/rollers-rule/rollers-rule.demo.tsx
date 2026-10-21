import { RollersRule } from "./rollers-rule";

export default function Demo() {
  return (
    <div className="bg-background pt-[80vh] text-foreground">
      <div className="relative grid h-[40rem] grid-cols-2">
        <RollersRule className="inset-x-0 top-0" />
        <RollersRule orientation="vertical" className="inset-y-0 left-1/2" />
        <RollersRule className="inset-x-0 bottom-0" />
      </div>
      <div className="h-[60vh]" />
    </div>
  );
}
