// Rebuilt from React Bits' src/demo/TextAnimations/CountUpDemo.jsx: the component with the props its preview uses.
import CountUp from "./CountUp"

export default function Demo() {
  return (
    <div className="relative flex min-h-[260px] w-full items-center justify-center overflow-hidden">
      <CountUp to={2048} mode={"count"} easing={"easeOut"} format={"standard"} duration={1} direction={"up"} separator={","} prefix={""} suffix={""} replayOnHover={true} trigger={"view"} delay={0} style={{ fontWeight: 700, fontSize: 56 }} />
    </div>
  )
}
