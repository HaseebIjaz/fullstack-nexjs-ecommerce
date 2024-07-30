"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks";
import React, { useState } from "react";

type Props = {
  price: number;
  slug: string;
};

const QuantityAndPrice = (props: Props) => {
  const { price, slug } = props;
  const { addToCart, getProductQuantity } = useCart();
  const [quantity, setQuantity] = useState<number>(getProductQuantity());
  return (
    <div>
      <div className="flex gap-4">
        <div className="bold">Quantity:</div>
        <div>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>-</button>
        </div>
      </div>
      <div>{price}</div>
      <Button onClick={() => addToCart({ slug, quantity })}>Add To Cart</Button>
    </div>
  );
};

export default QuantityAndPrice;
