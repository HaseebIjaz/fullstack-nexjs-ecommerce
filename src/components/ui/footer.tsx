import React from "react";
import PageGroupListing from "./pageGroupListing";
import { Props as PageGroupProps } from "@/components/ui/pageGroup";
import Logo from "./logo";
import { Linkedin, Twitter, Facebook } from "lucide-react";

type Props = {};

const footerRoutes: PageGroupProps[] = [
  {
    title: "Company",
    subTitles: [
      { title: "About", route: "/about" },
      { title: "Terms Of Use", route: "/termsOfUse" },
      { title: "Privacy Policy", route: "/privacyPolicy" },
      { title: "How It Works", route: "/howItWorks" },
      { title: "Contact Us", route: "/contactUs" },
    ],
  },
  {
    title: "Support",
    subTitles: [
      { title: "Support Carrer", route: "/supportCarrer" },
      { title: "24h Service", route: "/24hService" },
      { title: "Quick Chat", route: "/quickChat" },
    ],
  },
  {
    title: "Contact",
    subTitles: [
      { title: "Support", route: "/supportCarrer" },
      { title: "24h Service", route: "/24hService" },
    ],
  },
];

const footerText =
  "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.";

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <Logo />
        <h3 className="gray-subtite">{footerText}</h3>
        {}
      </div>
      <PageGroupListing pageGroupCollection={footerRoutes} />
    </div>
  );
};

export default Footer;
