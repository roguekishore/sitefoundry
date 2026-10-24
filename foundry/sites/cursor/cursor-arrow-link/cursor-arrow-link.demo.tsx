import { CursorArrowLink } from "./cursor-arrow-link";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-4 bg-background p-8 text-base">
      <CursorArrowLink href="#">Read the field guide</CursorArrowLink>
      <CursorArrowLink href="#" arrow="up-right">Browse the models</CursorArrowLink>
      <CursorArrowLink href="#" arrow="down" className="text-[1.375rem]">Get the desktop app</CursorArrowLink>
    </div>
  );
}
