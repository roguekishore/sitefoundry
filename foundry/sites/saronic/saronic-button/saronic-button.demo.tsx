import { SaronicButton } from "./saronic-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-4">
        <SaronicButton href="#">Meet the fleet</SaronicButton>
        <SaronicButton href="#" icon="external" external>
          Read the story
        </SaronicButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-4 bg-background p-6">
        <SaronicButton href="#" icon="down">
          Capabilities
        </SaronicButton>
        <SaronicButton href="#" variant="secondary" shortLabel="Specs">
          Specifications
        </SaronicButton>
      </div>
      <div className="flex flex-wrap items-center gap-4 bg-primary p-6">
        <SaronicButton href="#" variant="tint" icon="external">
          Open roles
        </SaronicButton>
        <SaronicButton href="#" variant="tint" size="sm" icon="none">
          Read more
        </SaronicButton>
      </div>
    </div>
  );
}
