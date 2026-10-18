// Rebuilt from React Bits' src/demo/TextAnimations/SplitFlapTextDemo.jsx: the component with the props its preview uses.
import SplitFlapText from "./SplitFlapText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden">
      <SplitFlapText words={["LAUNCH READY","SYNC ONLINE","SIGNAL LIVE"]} charset={"alphanumeric"} align={"left"} tileColor={"#111827"} textColor={"#f8fafc"} flipDuration={0.12} stagger={0.06} cycleDelay={2400} flipsPerChar={8} padTo={12} fontSize={52} tileRadius={8} gap={6} order={"left"} tileStyle={"board"} glare={0} depth={0.5} loop={true} intro={true} />
    </div>
  )
}
