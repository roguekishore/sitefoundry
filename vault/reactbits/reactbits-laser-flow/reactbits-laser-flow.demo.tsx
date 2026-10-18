// Rebuilt from React Bits' src/demo/Animations/LaserFlowDemo.jsx: the component with the props its preview uses.
import LaserFlow from "./LaserFlow"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <LaserFlow color={"#3847ff"} beamPosition={0.6} intensity={1.8} beamWidth={1.5} flare={1.5} spread={1.5} spill={1} fog={0.2} dust={1.6} streaks={1.5} dots={1} pulse={1.5} speed={1.5} seed={3} mouseInteraction={true} intro={true} revealRadius={220} revealOpacity={0.6} theme={"light"} />
    </div>
  )
}
