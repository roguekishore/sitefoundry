import { TypesomethingCard } from "./typesomething-card";

export default function Demo() {
  return (
    <div className="grid gap-5 bg-muted p-8 sm:grid-cols-2">
      <TypesomethingCard>
        <p className="text-xl">A white card</p>
        <p className="mt-2 text-sm text-foreground/75">For paper-grey bands.</p>
      </TypesomethingCard>
      <TypesomethingCard surface="outline">
        <p className="text-xl">An outline card</p>
        <p className="mt-2 text-sm text-foreground/75">For white bands.</p>
      </TypesomethingCard>
    </div>
  );
}
