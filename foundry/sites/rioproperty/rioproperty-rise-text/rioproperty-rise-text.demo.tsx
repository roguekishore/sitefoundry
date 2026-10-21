import { RiopropertyRiseText } from "./rioproperty-rise-text";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[70vh] text-foreground">
      <div className="mx-auto max-w-page">
        <RiopropertyRiseText
          text="Close enough deals and the same lessons keep showing up."
          className="max-w-[60rem] font-display text-[2.2rem] leading-[0.966] font-semibold uppercase lg:text-[3.25rem]"
        />
        <RiopropertyRiseText
          as="p"
          split="block"
          text="We work only in commercial property: shops, warehouses and offices, sold, let and valued."
          className="mt-8 max-w-[27rem] text-muted-foreground"
        />
      </div>
    </div>
  );
}
