import { Hexagon } from "lucide-react";
import { VercelMark } from "./vercel-mark";

export const markSample = { brand: "Halyard", mark: <Hexagon fill="currentColor" strokeWidth={1.5} /> };

export default function Demo() {
  return (
    <div className="flex items-center gap-10 bg-background p-8">
      <VercelMark {...markSample} />
      <VercelMark {...markSample} showName />
      <VercelMark {...markSample} size="sm" />
    </div>
  );
}
