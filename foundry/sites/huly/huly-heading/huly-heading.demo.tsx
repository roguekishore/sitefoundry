import { HulyHeading } from "./huly-heading";

export default function Demo() {
  return (
    <div className="space-y-px">
      <div className="bg-background px-gutter py-14">
        <HulyHeading
          title="Calm, shared focus"
          text="Plans, threads and documents in one place, so the team spends its day on the work instead of hunting for it."
          textClassName="max-w-xl"
        />
      </div>
      <div className="dark bg-background px-gutter py-14">
        <HulyHeading
          as="h1"
          size="hero"
          gradient
          title={["One workspace", "for the whole crew"]}
          text="Tasks, chat, calls and docs that already know about each other."
          textClassName="max-w-md"
        />
      </div>
    </div>
  );
}
