import { HelionenergyHeading } from "./helionenergy-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-12 bg-background px-gutter py-12 text-foreground">
      <HelionenergyHeading as="h1" breakOn="always" indentFirst lines={["A small star", "for every city"]} />
      <HelionenergyHeading className="text-center" lines={["Steel on the floor,", "power on the way"]} />
    </div>
  );
}
