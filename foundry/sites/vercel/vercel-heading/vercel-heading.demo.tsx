import { VercelHeading } from "./vercel-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-8">
      <VercelHeading as="h1" size="title" className="max-w-[9em]">
        Autonomous Cloud
      </VercelHeading>
      <VercelHeading className="max-w-[8em]">Give agents a runtime that reasons like they do</VercelHeading>
    </div>
  );
}
