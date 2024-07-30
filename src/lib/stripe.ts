import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import conf from "@/conf";

let stripePromise = Promise<null | Stripe>;

const { stripePublicShareableKey } = conf;

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const getStripePromise = () => {
  // if(!stripePromise && !!key){
  //     stripePromise = loadStripe(stripePublicShareableKey);
  // }
  return stripePromise;
};

// export default stripePromise;
