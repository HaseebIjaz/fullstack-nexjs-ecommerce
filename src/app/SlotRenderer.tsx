"use client";

import { usePathname } from "next/navigation";

const SlotRenderer = ({
  defaultChildrenSlot,
  privateSlot,
}: {
  defaultChildrenSlot: React.ReactNode;
  privateSlot: React.ReactNode;
}) => {
  const path = usePathname();
  console.log("Rendering", path);
  const pathSegments = path.split("/");
  if (pathSegments.length < 3) {
    return <>{defaultChildrenSlot}</>;
  }
  const secondSegment = pathSegments[1];

  if (secondSegment === "private") {
    return <>{privateSlot}</>;
  } else {
    return <>{defaultChildrenSlot}</>;
  }
};

export default SlotRenderer;
