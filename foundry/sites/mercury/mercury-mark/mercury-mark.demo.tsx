import { MercuryMark, type MercuryMarkProps } from "./mercury-mark";

export const markSample: MercuryMarkProps = { name: "Larkspur", href: "#" };

export default function Demo() {
  return (
    <div className="bg-background p-8">
      <MercuryMark {...markSample} />
    </div>
  );
}
