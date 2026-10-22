import { AttioHeading } from "./attio-heading";

export default function Demo() {
  return (
    <div className="flex max-w-3xl flex-col gap-10 bg-background p-8">
      <AttioHeading as="h1" size="hero" lead="Pipeline that fills itself." />
      <AttioHeading lead="A CRM that keeps working after you log off." rest="It reads every thread, scores every lead and hands you the next move." restOnNewLine />
      <AttioHeading size="statement" lead="Your reps, multiplied." rest="Agents find the accounts that are ready and start the conversation for you." />
      <AttioHeading as="h3" size="title" lead="Less admin, more selling." />
    </div>
  );
}
