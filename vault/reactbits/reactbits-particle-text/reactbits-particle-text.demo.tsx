// Rebuilt from React Bits' src/demo/TextAnimations/ParticleTextDemo.jsx: the component with the props its preview uses.
import ParticleText from "./ParticleText"

export default function Demo() {
  return (
    <div className="relative flex h-[430px] w-full items-center justify-center overflow-hidden">
      <ParticleText text={"Future Interfaces"} color={"currentColor"} highlightColor={"#ff5a36"} intro={"gather"} gatherDuration={1600} stagger={420} scatter={190} clickBurst={true} burstStrength={1} pointerRepel={42} repelRadius={120} idleDrift={0.8} shape={"circle"} highlightMode={"motion"} particleSize={2.2} density={4} glow={true} trigger={"mount"} fontSize={"clamp(3.5rem, 13vw, 9rem)"} fontWeight={800} fontFamily={"inherit"} />
    </div>
  )
}
