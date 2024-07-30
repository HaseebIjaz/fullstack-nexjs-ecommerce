import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import React from "react";

type Props = {
  id: string;
};

const CartItem = (props: Props) => {
  const { id } = props;
  const { getProductInfo } = useProducts();
  const { imgSrc, title, catagoery, delivery, price } = getProductInfo(id);
  return (
    <div className="flex">
      <Image src={imgSrc} alt="Cart Product" width={300} height={300} />
      <div>
        <div className="flex justify-between">
          <span>{title}</span>
          <button>Delete Icon</button>
        </div>
        <span>{catagoery}</span>
        <div className="flex justify-between">
          <span>Delivery Estimation</span>
          <span>{delivery}</span>
        </div>
        <div className="flex justify-between">
          <span>{price}$</span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
