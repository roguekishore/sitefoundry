// Rebuilt from React Bits' src/demo/TextAnimations/WarpTextDemo.jsx: the component with the props its preview uses.
import WarpText from "./WarpText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[430px] w-full items-center justify-center overflow-hidden">
      <WarpText lens={"bulge"} fontFamily={"inherit"} fontWeight={800} fontSize={116} lineHeight={0.9} warpStrength={0.08} warpScale={1.7} speed={0.55} pointerInfluence={0.42} pointerStrength={0.38} refraction={0.018} chromatic={0.35} idleDrift={0.2} ripple={true} clickRipple={true} intro={true} text={"Bend the moment"} color={"currentColor"} letterSpacing={"-0.06em"} style={{ height: "100%", minHeight: "430px", borderRadius: "28px" }} />
    </div>
  )
}
