import { FramerArrowLink } from "./framer-arrow-link";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-6 bg-background p-8">
      <FramerArrowLink href="#" label="Meet the agent" />
      <FramerArrowLink href="#" size="lg" label="Speed" />
      <FramerArrowLink href="#" size="xs" label="Begin from a blank page" />
    </div>
  );
}
