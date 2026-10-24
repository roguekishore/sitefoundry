import { ResendPlaceholder } from "./resend-placeholder";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-8 bg-background p-10">
      <ResendPlaceholder className="h-56 w-[33rem] max-w-full" />
      <div className="relative size-[10.625rem]">
        <ResendPlaceholder shape="tile" className="absolute inset-3" />
      </div>
      <ResendPlaceholder shape="round" className="size-10" />
    </div>
  );
}
