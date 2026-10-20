import { HhhusherLines } from "./hhhusher-lines";

export default function Demo() {
  return (
    <div className="bg-secondary px-gutter py-section text-secondary-foreground">
      <div className="h-[60vh]" />
      <HhhusherLines
        as="h2"
        className="font-display text-[2.08rem] leading-[1.1] font-medium tracking-[-0.01em] lg:text-[3.5625rem] lg:leading-[1.05]"
        lines={["Meet the Veil. A felt-lined shield that clips", "to the snare rim and keeps cymbal wash out", "of the snare mic, so the drum you hear is", "the drum you recorded."]}
      />
      <div className="h-[60vh]" />
    </div>
  );
}
