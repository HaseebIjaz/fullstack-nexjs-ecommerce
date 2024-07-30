/* eslint-disable */
import ProductsList from "@/components/ui/productsList";
import { Gender } from "@/lib/utils";
import {
  getAllProducts,
  getChildrenProducts,
  getFemaleProducts,
  getMaleProducts,
  SanityProductType,
} from "@/sanity/queries/sanity.query";
import { sanityProductToProductCard } from "@/transformers";
import React from "react";

const genderMap: Record<Gender, () => Promise<SanityProductType[]>> = {
  kids: getChildrenProducts,
  male: getMaleProducts,
  female: getFemaleProducts,
  all: getAllProducts,
};

// export async function generateStaticParams() {
//   const staticParams: Array<{ gender: Gender }> = (
//     Object.keys(genderMap) as Gender[]
//   ).map((gen: Gender) => ({
//     gender: gen,
//   }));
//   return staticParams;
// }

const Page = async ({ params }: { params: { gender: Gender } }) => {
  const { gender } = params;
  let products: SanityProductType[] = [];
  if (typeof gender !== "string") {
    return <div>Error</div>;
  }
  if (genderMap.hasOwnProperty(gender)) {
    products = await genderMap[gender]();
    console.log({ products });
  }
  return (
    <div>
      <ProductsList
        products={products.map((product: SanityProductType) =>
          sanityProductToProductCard(product)
        )}
      />
    </div>
  );
};

export default Page;
