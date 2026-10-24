// Sample content (gallery only).
import { StokespaceWordmark } from "./stokespace-wordmark";

export default function Demo() {
  return (
    <div className="space-y-10 bg-background p-gutter py-10 text-foreground">
      <StokespaceWordmark name="Orrery" />
      <div className="max-w-3xl">
        <StokespaceWordmark name="Orrery" fit />
      </div>
    </div>
  );
}
