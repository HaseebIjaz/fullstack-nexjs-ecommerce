import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ProductCardType = {
  title: string;
  categoery: string;
  price: string;
  imageSrc: string;
  href: string;
  slug: string;
};
export type Props = ProductCardType;

const ProductCard = (props: Props) => {
  const { title, categoery, price, imageSrc, href, slug } = props;
  return (
    <Link href={href}>
      <div className="flex flex-col gap-y-4 cursor-pointer w-full items-center border border-gray-400">
        <Image src={imageSrc} width={55} height={55} alt={"Product Image"} />
        <h3>{title}</h3>
        <h4>{categoery}</h4>
        <h2>${price}</h2>
      </div>
    </Link>
  );
};

export default ProductCard;
