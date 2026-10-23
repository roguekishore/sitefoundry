import { OndoHeading } from "./ondo-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-16">
      <div className="bg-background p-8">
        <OndoHeading eyebrow="What we make" lead="Markets That Settle" trail="in Seconds, Not Days." align="center" />
      </div>
      <div className="dark bg-background p-8">
        <OndoHeading lead="Built to a Standard" trail="Others Audit Against" />
      </div>
      <div className="bg-background p-8">
        <OndoHeading size="title" lead="Corvane is laying the rails" trail="for markets that never close." />
      </div>
    </div>
  );
}
