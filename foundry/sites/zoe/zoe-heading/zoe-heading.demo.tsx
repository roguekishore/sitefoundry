import { ZoeHeading } from "./zoe-heading";

export default function Demo() {
  return (
    <div className="space-y-12 bg-background p-8">
      <ZoeHeading title="What we make" />
      <div className="bg-highlight p-8 text-highlight-foreground">
        <ZoeHeading eyebrow="Member stories" title="Small changes, big differences" />
      </div>
    </div>
  );
}
