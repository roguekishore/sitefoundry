import { ArrowRight } from "lucide-react";
import { TypesomethingButton } from "./typesomething-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-muted p-8">
      <TypesomethingButton href="#" icon={<ArrowRight />}>Start your site</TypesomethingButton>
      <TypesomethingButton href="#" variant="outline">See it work</TypesomethingButton>
      <TypesomethingButton href="#" size="sm" icon={<ArrowRight />}>Get started</TypesomethingButton>
    </div>
  );
}
