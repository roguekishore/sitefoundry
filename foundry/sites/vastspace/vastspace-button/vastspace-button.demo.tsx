import { VastspaceButton } from "./vastspace-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-6">
      <VastspaceButton label="More updates" href="#" />
      <VastspaceButton label="Sign up" size="lg" />
      <VastspaceButton label="Customize" variant="outline" />
      <div className="bg-muted p-4">
        <VastspaceButton label="Create your mission" href="#" variant="light" />
      </div>
    </div>
  );
}
