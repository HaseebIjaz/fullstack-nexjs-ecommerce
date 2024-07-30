"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Logo from "./logo";
import { toast } from "react-hot-toast";
import { Moon, Sun } from "lucide-react";
import useTheme from "@/providers/ThemeProvider";
import {
  getAllProducts,
  getChildrenProducts,
  getFemaleProducts,
  getMaleProducts,
  SanityProductType,
} from "@/sanity/queries/sanity.query";
import { Gender } from "@/lib/utils";

type Props = {};

type HeaderButton = {
  text: string;
  path: string;
};
const genderMap: Record<Gender, () => Promise<SanityProductType[]>> = {
  kids: getChildrenProducts,
  male: getMaleProducts,
  female: getFemaleProducts,
  all: getAllProducts,
};

const Header = (props: Props) => {
  const buttons: HeaderButton[] = Object.keys(genderMap).map((gender) => {
    return {
      text: gender.toUpperCase(),
      path: `/${gender}`,
    } as HeaderButton;
  });

  const renderHeaderButtons = () => {
    return (
      <>
        {buttons.map((button: HeaderButton, idx) => {
          return (
            <Link
              href={button.path}
              key={`header-btn-${idx}`}
              onClick={() =>
                toast.success(`Routed to ${button.path}`, {
                  position: "bottom-right",
                })
              }
            >
              <Button variant={"secondary"}>{button.text}</Button>
            </Link>
          );
        })}
      </>
    );
  };

  const renderCart = ({ containerClass }: { containerClass: string }) => (
    <Link href={"/cart"}>
      <div
        className={`bg-gray-400 rounded-full h-10 w-10 shrink-0  justify-center cursor-pointer ${containerClass}`}
      >
        <Image
          src={"/svgs/Cart.svg"}
          width={25}
          height={25}
          alt={"Cart Icon"}
        />
      </div>
    </Link>
  );
  const ThemeBtn = () => {
    const { theme, toggleTheme } = useTheme();
    return theme === "dark" ? (
      <Moon onClick={toggleTheme} />
    ) : (
      <Sun onClick={toggleTheme} />
    );
  };

  const [isVerticalMenu, setIsVerticalMenu] = useState(false);
  return (
    <div className="w-full">
      <div className="flex flex-row items-center gap-2 mt-3 mx-3 border py-3 px-3 justify-around">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className=" flex-row items-center gap-8 hidden sm:flex">
          {renderHeaderButtons()}
        </div>
        <Input
          placeholder="What you looking for ?"
          className="hidden sm:flex w-60"
        />
        {!isVerticalMenu && (
          <Image
            src={"/svgs/Menu.svg"}
            width={30}
            height={30}
            alt={"Menu Icon"}
            className={"sm:hidden cursor-pointer"}
            onClick={() =>
              setIsVerticalMenu((isVerticalMenu) => !isVerticalMenu)
            }
          />
        )}
        {isVerticalMenu && (
          <Image
            src={"/svgs/Cross.svg"}
            width={30}
            height={30}
            alt={"Menu Icon"}
            className={"sm:hidden cursor-pointer"}
            onClick={() =>
              setIsVerticalMenu((isVerticalMenu) => !isVerticalMenu)
            }
          />
        )}
        {renderCart({ containerClass: "hidden sm:flex" })}
        <ThemeBtn />
      </div>

      <div className="flex w-full items-center mt-6 sm:hidden">
        {isVerticalMenu && (
          <div className="flex flex-col gap-3 w-full items-center">
            {renderCart({ containerClass: "flex" })}
            {renderHeaderButtons()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
