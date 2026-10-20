// Gallery only.
import { PlumeformLink } from "./plumeform-link";

export default function Demo() {
  return (
    <div className="flex gap-10">
      <div className="bg-background p-10"><PlumeformLink href="#">Browse every quiz template</PlumeformLink></div>
      <div className="dark bg-background p-10"><PlumeformLink href="#">How answer types work</PlumeformLink></div>
    </div>
  );
}
