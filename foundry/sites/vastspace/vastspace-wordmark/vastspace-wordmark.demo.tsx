import { VastspaceWordmark } from "./vastspace-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-8 bg-background p-6 text-foreground">
      <VastspaceWordmark name="Corvane" />
      <VastspaceWordmark name="Corvane" className="text-[1.75rem]" />
      <div className="bg-muted p-4 text-highlight-foreground">
        <VastspaceWordmark name="Corvane" />
      </div>
    </div>
  );
}
