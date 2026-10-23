import { LithicTextmark } from "./lithic-textmark";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-10 p-8 text-2xl">
      <LithicTextmark name="Fernway" />
      <LithicTextmark name="tiller" variant="heavy" />
      <LithicTextmark name="Northcote" variant="caps" />
      <LithicTextmark name="Plumage" variant="light" />
      <LithicTextmark name="ledgr" variant="mono" />
    </div>
  );
}
