import React from "react";
import ProductCard, { Props as cardProps } from "./productCard";

type Props = {
  products: cardProps[];
};

const ProductsList = (props: Props) => {
  const { products } = props;
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-7 px-5 mt-10">
      {products.map((card: cardProps) => {
        return (
          <div className="w-35" key={`product-${card.slug}`}>
            <ProductCard {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
