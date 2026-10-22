// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { NekoBookBar, type NekoBookBarProps } from "./neko-book-bar";

export const bookBarSample: NekoBookBarProps = {
  title: "Ardent Body Check",
  detail: "About an hour · on site",
  cta: { label: "Book a visit", href: "#book" },
};

export default function Demo() {
  return (
    <div className="min-h-[40svh] bg-muted">
      <NekoBookBar {...bookBarSample} alwaysShown />
    </div>
  );
}
