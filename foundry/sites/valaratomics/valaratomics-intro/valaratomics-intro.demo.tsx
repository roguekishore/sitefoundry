// Sample content (gallery only).
import { ValaratomicsIntro } from "./valaratomics-intro";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-section text-foreground">
      <ValaratomicsIntro
        title="Built in a barn"
        body="Every reactor leaves our Salina yard on a flatbed: sealed, fuelled and tested, ready to bolt onto a steam loop the week it arrives."
      />
    </div>
  );
}
