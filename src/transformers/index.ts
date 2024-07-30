import { ProductCardType } from "@/components/ui/productCard";
import { SanityProductType } from "@/sanity/queries/sanity.query";

export const sanityProductToProductCard = (
  product: SanityProductType
): ProductCardType => {
  return {
    ...product,
    imageSrc: product.image.imgSrc,
    href: `/product/${product.slug}`,
  } as ProductCardType;
};
