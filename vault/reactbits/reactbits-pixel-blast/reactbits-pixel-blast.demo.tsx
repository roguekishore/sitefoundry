// Rebuilt from React Bits' src/demo/Backgrounds/PixelBlastDemo.jsx: the component with the props its preview uses.
import PixelBlast from "./PixelBlast"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <PixelBlast color={"#B497CF"} accentColor={"#B497CF"} variant={"square"} pixelSize={3} patternScale={2} patternDensity={1} pixelSizeJitter={0} softness={0.6} smoothing={1} glow={0.4} twinkle={0.25} speed={0.5} drift={0.2} driftAngle={30} hoverEffect={"reveal"} hoverRadius={140} enableRipples={true} rippleSpeed={0.3} rippleThickness={0.1} rippleIntensityScale={1} autoRipple={0} edgeFade={0.25} tiltX={0} tiltY={0} intro={true} lightMode={false} />
    </div>
  )
}
