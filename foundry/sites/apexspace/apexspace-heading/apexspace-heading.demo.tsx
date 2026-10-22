// Sample content lives here (gallery only).
import { ApexspaceHeading } from "./apexspace-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-8 text-foreground">
      <ApexspaceHeading size="hero" as="h1" text={"Satellite buses,\noff the line"} />
      <ApexspaceHeading size="section" text="The Orrery bus range" />
      <ApexspaceHeading size="sub" text={"Built at\nrate"} />
    </div>
  );
}
