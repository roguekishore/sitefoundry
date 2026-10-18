// Based on React Bits' DockDemo.jsx: the same icons and props, without its app-state wiring.
import Dock from "./Dock"
import { Home01Icon, Search01Icon, Mail01Icon, Message01Icon, MusicNote03Icon, Image01Icon, Settings01Icon, Delete02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const glyph = (icon: typeof Home01Icon) => <HugeiconsIcon icon={icon} size="1em" strokeWidth={1.8} />

const items = [
  { icon: glyph(Home01Icon), label: "Home", active: true, menu: [{ label: "New Window" }] },
  { icon: glyph(Search01Icon), label: "Search" },
  { icon: glyph(Mail01Icon), label: "Mail", active: true, badge: 3 },
  { icon: glyph(Message01Icon), label: "Messages", badge: true },
  { icon: glyph(MusicNote03Icon), label: "Music", active: true },
  { icon: glyph(Image01Icon), label: "Photos" },
  { icon: glyph(Settings01Icon), label: "Settings" },
  { separator: true },
  { icon: glyph(Delete02Icon), label: "Trash" },
]

export default function Demo() {
  return (
    <div className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden">
      <Dock items={items} accentColor={"#0a84ff"} badgeColor={"#ff453a"} position={"bottom"} baseItemSize={50} magnification={70} distance={200} panelHeight={68} gap={10} roundness={0.5} bounce={true} tiles={true} showLabels={true} showIndicators={true} showBadges={true} theme={"light"} />
    </div>
  )
}
