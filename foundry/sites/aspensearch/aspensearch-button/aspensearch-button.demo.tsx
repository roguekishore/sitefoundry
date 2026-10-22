import { AspensearchButton } from "./aspensearch-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-4">
        <AspensearchButton href="#">Speak to a partner</AspensearchButton>
        <AspensearchButton href="#" tone="paper">Book an intro call</AspensearchButton>
      </div>
      <div className="flex max-w-sm flex-col gap-4 bg-foreground p-6">
        <AspensearchButton href="#" width="full">Book an intro call</AspensearchButton>
      </div>
    </div>
  );
}
