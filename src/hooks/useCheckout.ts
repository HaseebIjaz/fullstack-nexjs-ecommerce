import toast from "react-hot-toast";

export const useCheckout = () => {
  const redirectToStripeSession = () => {
    console.log("redirect to stripe session");
    toast.success("Redirecting To Stripe Checkout");
  };
  const checkoutCart = () => {
    redirectToStripeSession();
  };
  return { checkoutCart };
};
