// Rebuilt from React Bits' src/demo/Micro/FlyingButtonDemo.jsx: the component with the props its preview uses.
import FlyingButton from "./FlyingButton"

export default function Demo() {
  return (
    <div className="relative flex h-[440px] w-full items-center justify-center overflow-hidden">
      <FlyingButton theme={"light"} size={"medium"} ramp={false} altitude={170} hoverTime={2.4} jets={2} thrusters={true} trigger={"hover"} carryCursor={true} smoke={1} turbulence={1} wobble={1}>
      {"Take off"}
      </FlyingButton>
    </div>
  )
}
