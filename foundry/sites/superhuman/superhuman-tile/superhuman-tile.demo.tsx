import { SuperhumanTile } from "./superhuman-tile";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-6 lg:grid-cols-2">
      <SuperhumanTile tone="teal" eyebrow="Inline hints" title="Suggestions appear as you type, right where the mistake is." className="lg:h-[16.25rem]" />
      <SuperhumanTile tone="stone" eyebrow="Side panel" title="Ask for a summary of whatever is on screen." inset className="lg:h-[16.25rem]" />
      <SuperhumanTile tone="purple" layout="stack" eyebrow="Drafts" title="Replies write themselves from your inbox and calendar." className="lg:h-[24rem]" />
      <SuperhumanTile tone="lilac" eyebrow="Prompt" title="Turn short descriptions into team plans." inset className="lg:h-[16.25rem]" />
    </div>
  );
}
