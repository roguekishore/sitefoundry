import { LevelsHeading } from "./levels-heading";

export default function Demo() {
  return (
    <div className="flex flex-col bg-background">
      <div className="px-gutter py-12">
        <LevelsHeading
          eyebrow="Why it matters"
          title="Diet tips are written for everyone. You are not everyone."
          lead="Most of us already know that what we eat counts. What we lack is a way to tell whether the advice we follow suits our own body."
        />
      </div>
      <div className="dark bg-background px-gutter py-16">
        <LevelsHeading
          align="centre"
          size="display"
          eyebrowTone="sage"
          eyebrow="Begin with Ballast"
          title="Quit wondering. Start knowing."
          lead="Learn how meals land in your body, find what suits you, and add sensors, lab work and coaching when you want more."
        />
      </div>
    </div>
  );
}
