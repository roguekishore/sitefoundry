// Rebuilt from React Bits' src/demo/TextAnimations/FallingTextDemo.jsx: the component with the props its preview uses.
import FallingText from "./FallingText"

export default function Demo() {
  return (
    <div className="relative flex h-[460px] w-full items-center justify-center overflow-hidden">
      <FallingText trigger={"hover"} variant={"text"} split={"words"} order={"random"} gravity={1} bounciness={0.2} scatter={0.5} stagger={0.03} cursorPush={0.5} mouseConstraintStiffness={0.2} restoreDelay={2} accentColor={"#5b8cff"} draggable={true} wireframes={false} text={"Some sentences are built to last. This one falls apart on contact."} highlightWords={["falls", "apart"]} fontSize={"2rem"} theme={"light"} style={{ color: "#18181b" }} />
    </div>
  )
}
