// Rebuilt from React Bits' src/demo/Components/StepperDemo.jsx: the component with the props its preview uses.
import Stepper from "./Stepper"
import { Step } from "./Stepper"

export default function Demo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">
      <Stepper indicator={"numbers"} orientation={"horizontal"} transition={"slide"} width={440} radius={24} frame={true} linear={false} disableStepIndicators={false} showFooter={true} backButtonText={"Back"} nextButtonText={"Continue"} completeButtonText={"Complete"} theme={"light"} nextButtonProps={{ disabled: false }}>
      {[<Step key="welcome" title="Welcome">
      <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--stepper-ink)" }}>
      {"Welcome aboard"}
      </h3>
      <p style={{ margin: "6px 0 0", fontSize: 13.5, lineHeight: 1.55, color: "var(--stepper-muted)" }}>
      {"Set up your workspace in a few quick steps. It only takes a minute."}
      </p>
      </Step>, <Step key="plan" title="Plan">
      <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--stepper-ink)" }}>
      {"Choose a plan"}
      </h3>
      <p style={{ margin: "6px 0 0", fontSize: 13.5, lineHeight: 1.55, color: "var(--stepper-muted)" }}>
      {"You can change this at any time."}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 14 }} />
      </Step>, <Step key="profile" title="Profile">
      <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--stepper-ink)" }}>
      {"What should we call you?"}
      </h3>
      </Step>, <Step key="review" title="Review">
      <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--stepper-ink)" }}>
      {"Looking good"}
      {""}
      </h3>
      <p style={{ margin: "6px 0 0", fontSize: 13.5, lineHeight: 1.55, color: "var(--stepper-muted)" }}>
      {"You picked the "}
      {"Pro"}
      {" plan. Complete setup to open your workspace."}
      </p>
      </Step>]}
      </Stepper>
    </div>
  )
}
