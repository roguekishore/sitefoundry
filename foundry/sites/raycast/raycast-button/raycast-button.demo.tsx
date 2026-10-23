import { Download } from "lucide-react";
import { RaycastButton } from "./raycast-button";

export default function Demo() {
  return (
    <div className="flex items-center gap-6 bg-background p-10">
      <RaycastButton label="Download" href="#" icon={<Download />} />
      <RaycastButton label="Download" href="#" icon={<Download />} size="sm" />
    </div>
  );
}
