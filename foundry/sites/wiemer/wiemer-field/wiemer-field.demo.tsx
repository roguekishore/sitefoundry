import { WiemerConsent, WiemerField, WiemerSubmit } from "./wiemer-field";

export default function Demo() {
  return (
    <form className="mx-auto flex max-w-md flex-col gap-6 bg-card p-8 text-card-foreground" action="#">
      <WiemerField label="Name" name="name" placeholder="Your name" required />
      <WiemerField label="Message" name="message" placeholder="What would you like to know?" required multiline />
      <WiemerConsent label={<>I agree that my details are used to answer me, as set out in the <a href="#privacy">privacy notice</a>.</>} />
      <WiemerSubmit label="Send message" />
    </form>
  );
}
