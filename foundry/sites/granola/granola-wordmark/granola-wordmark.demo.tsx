import { Waves } from "lucide-react";
import { GranolaWordmark } from "./granola-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-8 text-foreground">
      <GranolaWordmark name="tidemark" mark={<Waves />} href="#top" />
      <GranolaWordmark name="tidemark" mode="fill" />
    </div>
  );
}
