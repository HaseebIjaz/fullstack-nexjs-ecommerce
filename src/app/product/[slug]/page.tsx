import React from "react";
import ProductInfo from "./ProductInfo";
import ProductView from "./ProductView";
import QuantityAndPrice from "./AddQuantityToCart";
import { getProductBySlug } from "@/sanity/queries/sanity.query";
import { sanityProductToProductCard } from "@/transformers";
import { ProductCardType } from "@/components/ui/productCard";

type Props = {};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  //call the sanity to get the data and show[]
  const products = await getProductBySlug(slug);
  const targetProduct: ProductCardType = sanityProductToProductCard(
    products[0]
  );
  return (
    <div className="flex flex-col">
      The Product page is {slug}
      <ProductView {...targetProduct} />
      <ProductInfo />
      <QuantityAndPrice slug={targetProduct.slug} price={10} />
    </div>
  );
};

export default ProductPage;
