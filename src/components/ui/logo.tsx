import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <Image src={"/svgs/Logo.png"} width={130} height={130} alt={"Logo"} />
    </div>
  );
};

export default Logo;
