import { RiopropertyPersonas, type RiopropertyPersonasProps } from "./rioproperty-personas";

export const personasSample: RiopropertyPersonasProps = {
  heading: "Four kinds of client. One kind of broker.",
  subhead: "Every client needs something different",
  personas: [
    { title: "Buying", line: "A short list worth seeing, numbers that add up, and a sale that doesn't wobble.", href: "#buying" },
    { title: "Selling", line: "A price the market will actually pay, and a buyer who makes it to transfer.", href: "#selling" },
    { title: "Renting", line: "Space that suits the business, on lease terms you can read in one sitting.", href: "#renting" },
    { title: "Letting", line: "Rent that lands every month, from tenants who look after the place.", href: "#letting" },
  ],
};

export default function Demo() {
  return <RiopropertyPersonas {...personasSample} />;
}
