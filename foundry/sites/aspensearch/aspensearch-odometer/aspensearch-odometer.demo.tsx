import { AspensearchOdometer } from "./aspensearch-odometer";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background px-5 py-[70vh] font-display tracking-[-0.04em] text-foreground">
      <AspensearchOdometer value="640+" className="text-[5rem]" />
      <AspensearchOdometer value="$2M–6M" className="text-[5rem] lg:text-[8.25rem]" />
      <AspensearchOdometer value="21+" className="text-[5rem] lg:text-[8.25rem]" />
    </div>
  );
}
