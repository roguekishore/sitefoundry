// Rebuilt from React Bits' src/demo/TextAnimations/ScrambledTextDemo.jsx: the component with the props its preview uses.
import ScrambledText from "./ScrambledText"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ScrambledText style={{ color: "#18181b" }} effect={"scramble"} radius={100} strength={1} trail={0.6} duration={1.2} speed={0.5} clickBurst={true} scrambleChars={".:"} intro={true} color={""} scrambleColor={""} fontFamily={""}>
      {"Once you hover over me, you will see the effect in action! You can customize the radius, duration, and speed of the scramble effect."}
      </ScrambledText>
    </div>
  )
}
