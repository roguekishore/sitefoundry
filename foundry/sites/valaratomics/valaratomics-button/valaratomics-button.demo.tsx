// Sample content (gallery only).
import { ValaratomicsButton } from "./valaratomics-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6 bg-background p-10">
      <div className="dark flex gap-6 bg-background p-8">
        <ValaratomicsButton label="Talk to us" href="#contact" />
      </div>
      <ValaratomicsButton label="Load more" variant="solid" />
    </div>
  );
}
