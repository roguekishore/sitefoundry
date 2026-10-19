// Reservation page (recreating halodental.com/checkout): a standalone first step.
import { NewhaloCheckout } from "@foundry/newhalo-checkout";
import { checkoutSample } from "../newhalo-checkout/newhalo-checkout.demo";

export default function CheckoutPage() {
  return <NewhaloCheckout {...checkoutSample} />;
}
