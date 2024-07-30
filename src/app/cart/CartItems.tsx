import React from "react";
import CartItem from "./CartItem";

type Props = {};

const CartItems = (props: Props) => {
  return (
    <div>
      Shopping Cart
      <CartItem id="1" />
    </div>
  );
};

export default CartItems;
