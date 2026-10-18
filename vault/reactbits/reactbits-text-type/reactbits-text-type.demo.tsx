// Rebuilt from React Bits' src/demo/TextAnimations/TextTypeDemo.jsx: the component with the props its preview uses.
import TextType from "./TextType"

export default function Demo() {
  return (
    <div className="relative flex h-[350px] w-full items-center justify-center overflow-hidden">
      <TextType text={["Welcome to React Bits! Good to see you!", "Build some amazing experiences!"]} cursorColor={"currentColor"} prefixColor={"currentColor"} typingSpeed={75} deletingSpeed={50} pauseDuration={1500} mistakes={0} typeEffect={"none"} cursorBlinkDuration={0.5} cursorGlide={true} cursorStyle={"underscore"} cursorCharacter={"_"} deleteMode={"backspace"} showCursor={true} prefix={""} />
    </div>
  )
}
