import React from "react";
import PageGroup, { Props as PageGroupProps } from "@/components/ui/pageGroup";

type Props = {
  pageGroupCollection: PageGroupProps[];
};

const PageGroupListing = (props: Props) => {
  const { pageGroupCollection } = props;
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-3 ">
      {pageGroupCollection.map((pgGroupProps: PageGroupProps) => {
        return <PageGroup {...pgGroupProps} key={pgGroupProps.title} />;
      })}
    </div>
  );
};

export default PageGroupListing;
