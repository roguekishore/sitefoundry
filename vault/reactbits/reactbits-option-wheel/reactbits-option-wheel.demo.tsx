// Rebuilt from React Bits' src/demo/Components/OptionWheelDemo.jsx: the component with the props its preview uses.
import OptionWheel from "./OptionWheel"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <OptionWheel textColor={"#71717a"} activeColor={"#18181b"} side={"left"} fontSize={3} spacing={1.4} curve={1} tilt={6} blur={2} fade={0.25} smoothing={200} inset={80} loop={false} draggable={true} soundVolume={0.5} items={["Ambient", "House", "Techno", "Jazz", "Lo-Fi", "Synthwave", "Trance", "Funk", "Disco", "Hip-Hop", "Chillwave", "Drum & Bass"]} />
    </div>
  )
}
