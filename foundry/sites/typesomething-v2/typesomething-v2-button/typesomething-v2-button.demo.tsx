import { TypesomethingV2Button } from "./typesomething-v2-button";

export default function Demo() {
  return (
    <div className="space-y-px">
      <div className="flex flex-wrap items-center gap-3 bg-muted p-8">
        <TypesomethingV2Button href="#">Rebuild my site</TypesomethingV2Button>
        <TypesomethingV2Button href="#" variant="outline">
          See a live example
        </TypesomethingV2Button>
        <TypesomethingV2Button href="#" size="sm" arrow>
          Get started
        </TypesomethingV2Button>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 bg-background p-8">
        <TypesomethingV2Button href="#">Rebuild my site</TypesomethingV2Button>
        <TypesomethingV2Button href="#" variant="outline">
          See a live example
        </TypesomethingV2Button>
      </div>
    </div>
  );
}
