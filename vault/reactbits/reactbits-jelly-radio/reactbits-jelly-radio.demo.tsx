// Rebuilt from React Bits' src/demo/Micro/JellyRadioDemo.jsx: the component with the props its preview uses.
import JellyRadio from "./JellyRadio"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <JellyRadio items={["Off","Low","Medium","High","Max"]} chipColor={"#f6f6f6"} activeColor={"#18181b"} textColor={"#18181b"} activeTextColor={"#ffffff"} size={"md"} gap={8} radius={18} swell={0.2} barge={6} shrink={0.05} jelly={1} bounce={0.25} stagger={22} stiffness={580} disabled={false} />
    </div>
  )
}
