import { HhhusherV2Reveal, HhhusherV2RevealText } from "./hhhusher-v2-reveal";

const notes = ["Clamps on in under a minute", "Felt-lined, so it never rings", "Fits stands from 12 to 25 mm"];

export default function Demo() {
  return (
    <div className="bg-secondary px-gutter py-section text-secondary-foreground">
      <div className="h-[60svh]" />
      <HhhusherV2RevealText
        as="h2"
        className="max-w-[60rem] font-display text-[2.08rem] leading-[1.1] font-[570] tracking-[-0.02em] lg:text-[3.5625rem] lg:leading-[1.05]"
        text="Meet the Quello Hood. A felt-lined shield that clamps under the hats and keeps their wash out of the snare mic, so the mix starts clean."
      />
      <ul className="mt-16 grid gap-4 lg:grid-cols-3">
        {notes.map((note, i) => (
          <HhhusherV2Reveal key={note} as="li" effect="rise" step={i} className="rounded-lg bg-background p-6 text-foreground">
            {note}
          </HhhusherV2Reveal>
        ))}
      </ul>
      <div className="h-[40svh]" />
    </div>
  );
}
