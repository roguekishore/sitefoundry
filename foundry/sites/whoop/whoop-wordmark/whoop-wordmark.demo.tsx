import { WhoopWordmark } from "./whoop-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-8 bg-foreground p-8 text-background">
      <WhoopWordmark name="Kairos" href="#" className="text-[1.6rem]" />
      <WhoopWordmark name="Kairos" className="text-[4.5rem]" />
    </div>
  );
}
