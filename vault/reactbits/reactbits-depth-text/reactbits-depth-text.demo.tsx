// Rebuilt from React Bits' src/demo/TextAnimations/DepthTextDemo.jsx: the component with the props its preview uses.
import DepthText from "./DepthText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden">
      <DepthText text={"Elevate"} depthColor={"#7c3aed"} gradientDepth={false} hoverPush={0.5} float={false} tilt={7.5} smoothing={0.14} orbitSpeed={0.35} fontSize={"clamp(3rem, 12cqi, 7rem)"} fontWeight={900} layers={34} depth={2.4} perspective={900} shadow={true} outline={false} pointerTracking={true} autoOrbit={true} intro={true} faceColor={"currentColor"} />
    </div>
  )
}
