// Rebuilt from React Bits' src/demo/Components/LineSidebarDemo.jsx: the component with the props its preview uses.
import LineSidebar from "./LineSidebar"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <LineSidebar accentColor={"#A855F7"} textColor={"#52525b"} markerColor={"#a1a1aa"} showIndex={true} showMarker={true} proximityRadius={100} maxShift={30} falloff={"smooth"} markerLength={60} markerGap={0} tickScale={0.5} scaleTick={true} itemGap={20} fontSize={1.1} smoothing={100} items={["Overview", "Components", "Animations", "Backgrounds", "Showcase", "Playground", "Templates", "Changelog"]} />
    </div>
  )
}
