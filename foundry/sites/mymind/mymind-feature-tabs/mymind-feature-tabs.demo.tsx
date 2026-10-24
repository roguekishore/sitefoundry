// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { MymindFeatureTabs, type MymindFeatureTabsProps } from "./mymind-feature-tabs";

export const featureTabsSample: MymindFeatureTabsProps = {
  tabs: [
    { label: "Look-alikes", title: "Find what looks alike", text: "Pick any picture and nook gathers the ones that share its colours, shapes and mood." },
    { label: "Calm mode", title: "A calm place to write", text: "Hide everything but the page. Write long notes with nothing tugging at your eye." },
    { label: "Marked lines", title: "Mark the lines that matter", text: "Select a passage anywhere on the web and keep it. nook remembers where it came from." },
    { label: "Words in pictures", title: "Read words in pictures", text: "Look up any word you recall from a screenshot, a sign or a scribbled note. nook reads the picture so you can find it." },
  ],
};

export default function Demo() {
  return (
    <div className="bg-card p-4 lg:p-8">
      <MymindFeatureTabs {...featureTabsSample} />
    </div>
  );
}
