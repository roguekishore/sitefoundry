// Rebuilt from React Bits' src/demo/Micro/DodgeFieldDemo.jsx: the component with the props its preview uses.
import DodgeField from "./DodgeField"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <DodgeField inkColor={"#18181b"} contrastColor={"#ffffff"} fieldHeight={240} reach={72} radius={120} falloff={2} fleeDuration={130} returnDuration={620} returnBounce={0.1} patience={4} axis={"both"} wall={"clamp"} disabled={false}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </DodgeField>
    </div>
  )
}
