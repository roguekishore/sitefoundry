import { NekoArrowLink } from "./neko-arrow-link";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-10">
      <NekoArrowLink label="See how it works" href="#" />
      <NekoArrowLink label="Our story" href="#" />
    </div>
  );
}
