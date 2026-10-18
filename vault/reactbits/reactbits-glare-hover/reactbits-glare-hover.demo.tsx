// Rebuilt from React Bits' src/demo/Animations/GlareHoverDemo.jsx: the component with the props its preview uses.
import GlareHover from "./GlareHover"

export default function Demo() {
  return (
    <div className="relative flex h-[460px] w-full items-center justify-center overflow-hidden">
      <GlareHover width="min(360px, 82vw)" borderRadius="20px" mode={"hover"} variant={"streak"} glareOpacity={0.5} glareSize={30} softness={0.6} glareAngle={-45} transitionDuration={650} interval={3} glareColor={"#ffffff"} blendMode={"screen"} rimGlint={true} playOnce={false} intro={false}>
      <img src={"https://picsum.photos/seed/foundry-day-sky/1600/900"} alt="" draggable={false} style={{ width: "100%", aspectRatio: "3 / 2", objectFit: "cover", display: "block" }} />
      </GlareHover>
    </div>
  )
}
