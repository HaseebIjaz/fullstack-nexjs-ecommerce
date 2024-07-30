import { Button } from "@/components/ui/button";
import { useCheckout } from "@/hooks/useCheckout";
import React from "react";

type Props = {};

const CartSummary = (props: Props) => {
  const { checkoutCart } = useCheckout();
  return (
    <div>
      <div>CartSummary</div>
      <div>
        <span>Quantity</span>
        <span>2 Products</span>
      </div>
      <div>
        <span>Sub Total</span>
        <span>390$</span>
      </div>
      <Button onClick={checkoutCart}>Proceed To Checkout</Button>
    </div>
  );
};

export default CartSummary;
