import { ReflectButton } from "@foundry/reflect-button";
import { ReflectHeading } from "./reflect-heading";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-section">
      <ReflectHeading
        eyebrow="Field notes"
        title="Every thought,\nkept in its place"
        lead="Nocturne files what you write by the day it happened and the ideas it touches, so nothing gets lost."
      >
        <ReflectButton href="#">Get it for Mac</ReflectButton>
        <ReflectButton href="#" variant="secondary">
          See how it works
        </ReflectButton>
      </ReflectHeading>
    </div>
  );
}
