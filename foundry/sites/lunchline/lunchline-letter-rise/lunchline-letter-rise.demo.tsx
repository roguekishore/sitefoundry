import { LunchlineLetterRise } from "./lunchline-letter-rise";

export default function Demo() {
  return (
    <div className="bg-background px-gutter text-foreground">
      <div className="mx-auto max-w-page space-y-[60vh] pt-16 pb-[70vh]">
        <LunchlineLetterRise
          as="h1"
          mode="load"
          delay={200}
          text="patient capital, built to last"
          className="max-w-[40rem] font-display text-5xl leading-[1.2] font-light lg:text-[5.125rem]"
        />
        <LunchlineLetterRise
          text="it began on the 7:10 ferry across the harbour, two seats from the coffee counter."
          className="max-w-[41rem] font-display text-[2.375rem] leading-[1.2] font-light lg:text-[3.5rem]"
        />
      </div>
    </div>
  );
}
