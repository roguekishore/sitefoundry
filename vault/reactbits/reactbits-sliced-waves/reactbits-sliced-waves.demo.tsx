// Rebuilt from React Bits' src/demo/Backgrounds/SlicedWavesDemo.jsx: the component with the props its preview uses.
import SlicedWaves from "./SlicedWaves"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <SlicedWaves color1={"#ffd9a8"} color2={"#ff5fa2"} color3={"#5b8cff"} ribbons={3} spacing={28} barWidth={0.5} ribbonHeight={0.26} spread={0.1} amplitude={0.1} frequency={1} perspective={0.45} curve={0.5} blur={0.6} glow={1} position={0.78} slices={0} speed={1} brightness={1.25} rotation={0} grain={0.08} fade={0} opacity={1} mouseInteraction={true} intro={true} lightMode={false} />
    </div>
  )
}
