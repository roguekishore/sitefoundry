import { ZoeWordmark } from "./zoe-wordmark";

export default function Demo() {
  return (
    <div className="flex items-center gap-10 bg-background p-8">
      <ZoeWordmark name="tillwell" href="#" />
      <ZoeWordmark name="tillwell" className="text-[3.5rem]" />
    </div>
  );
}
