import { ProductCardType } from "@/components/ui/productCard";
import Image from "next/image";
import React from "react";

type Props = ProductCardType;

const ProductView = (props: Props) => {
  const { title, categoery, imageSrc, price } = props;

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div>
        <Image src={imageSrc} alt="Small Image" width={100} height={100} />
      </div>
      <Image src={imageSrc} alt="Big Image" width={500} height={500} />
      <div className="flex flex-col">
        <div>{title}</div>
        <div>{categoery}</div>
      </div>
    </div>
  );
};

export default ProductView;
