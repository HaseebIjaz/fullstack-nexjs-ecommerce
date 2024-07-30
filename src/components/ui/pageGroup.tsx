import Link from "next/link";
import React from "react";

type PageInfo = {
  title: string;
  route: string;
};
export type Props = {
  title: string;
  subTitles: PageInfo[];
};

const PageGroup = (props: Props) => {
  const { title, subTitles } = props;
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="gray-title">{title}</h2>
      <div className="flex flex-col gap-y-3">
        {subTitles.map((page: PageInfo) => {
          return (
            <Link href={page.route} key={page.title} className="gray-subtite">
              <h3>{page.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PageGroup;
