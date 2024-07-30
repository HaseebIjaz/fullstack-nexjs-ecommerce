"use client";
import React from "react";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <CartItems />
      <CartSummary />
    </div>
  );
};

export default CartPage;
