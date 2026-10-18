// Rebuilt from React Bits' src/demo/TextAnimations/DecryptedTextDemo.jsx: the component with the props its preview uses.
import DecryptedText from "./DecryptedText"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <DecryptedText text="Hacking into the mainframe..." parentClassName="decrypted-text" effect={"scramble"} animateOn={"inViewHover"} speed={60} maxIterations={10} sequential={true} revealDirection={"start"} hoverRadius={100} loop={false} loopDelay={2000} characters={"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"} useOriginalCharsOnly={false} clickMode={"once"} scrambleColor={""} />
    </div>
  )
}
