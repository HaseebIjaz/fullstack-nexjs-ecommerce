import { useState } from "react";
import toast from "react-hot-toast";

export const useCart = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const productCount = 0;
  const getCartData = () => {};
  const addToCart = ({
    slug,
    quantity,
  }: {
    slug: string;
    quantity: number;
  }) => {
    cart[slug] = quantity;
    toast.success("Product added to the Cart", { position: "top-center" });
  };
  const removeFromCart = () => {};
  const getProductQuantity = () => 1;
  const clearCart = () => {};

  return {
    productCount,
    addToCart,
    removeFromCart,
    getCartData,
    clearCart,
    getProductQuantity,
  };
};
