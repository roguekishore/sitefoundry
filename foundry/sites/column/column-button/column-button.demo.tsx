import { ColumnButton } from "./column-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-3">
        <ColumnButton href="#">Open an account</ColumnButton>
        <ColumnButton href="#" variant="secondary" icon="none">Read the guides</ColumnButton>
        <ColumnButton href="#" variant="secondary">See how we settle</ColumnButton>
        <ColumnButton href="#" variant="secondary" icon="menu">Start here</ColumnButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 rounded-xl bg-background p-6">
        <ColumnButton href="#">Open an account</ColumnButton>
        <ColumnButton href="#" variant="secondary">See how we settle</ColumnButton>
      </div>
    </div>
  );
}
