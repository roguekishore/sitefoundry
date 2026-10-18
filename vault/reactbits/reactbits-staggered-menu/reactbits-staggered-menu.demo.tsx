// Rebuilt from React Bits' src/demo/Components/StaggeredMenuDemo.jsx: the component with the props its preview uses.
import StaggeredMenu from "./StaggeredMenu"

export default function Demo() {
  return (
    <div className="relative flex h-[720px] w-full items-center justify-center overflow-hidden">
      <StaggeredMenu isFixed={false} items={[{ label: "Home", ariaLabel: "Go to Home section", link: "#home" }, { label: "About", ariaLabel: "Go to About section", link: "#about" }, { label: "Projects", ariaLabel: "Go to Projects section", link: "#projects" }, { label: "Contact", ariaLabel: "Go to Contact section", link: "#contact" }]} socialItems={[{ label: "GitHub", link: "https://github.com/your-handle" }, { label: "Twitter", link: "https://twitter.com/your-handle" }, { label: "LinkedIn", link: "https://linkedin.com/in/your-handle" }]} openMenuButtonColor="#18181b" displaySocials={true} accentColor={"#5227FF"} menuButtonColor={"#18181b"} position={"right"} />
    </div>
  )
}
