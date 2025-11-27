"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  LogoIcon,
  SearchIcon,
  HeartIcon,
  ProfileIcon,
  BagIcon,
  FlagIcon,
  MenuIcon,
} from "./Icons";
import { cn } from "../lib/utils";
import { DropdownMenu } from "./dropdown-menu";
import { SearchButton } from "./Buttons";
import { SearchBar } from "./search-bar";
import "./styling/header.css";

interface HeaderMenuProps {
  isDropdownOpen?: boolean;
  selected: "SPORTS" | "LIFESTYLE" | "MEN" | "WOMEN" | "KIDS";
}

export default function Header({
  isDropdownOpen = true,
  selected,
}: HeaderMenuProps) {
  return (
    <div className="flex  flex-col items-start w-full">
      <DropdownBar selected={selected} />
      {isDropdownOpen && <DropdownMenu />}
    </div>
  );
}

function DropdownBar({
  selected,
}: {
  selected: "SPORTS" | "LIFESTYLE" | "MEN" | "WOMEN" | "KIDS";
}) {
  const [SearchBarOpen, setSearchBarOpen] = useState(false);

  return (
    <nav
      id="header_bar"
      className="w-full border  flex flex-col gap-y-2.5 border-b border-mid-grey-2 px-[42px]  "
    >
      <div className="relative h-[70px] bg-black flex inset-0 items-center justify-between  py-2">
        <HeaderItems>
          <a href="#" className="header__logo_left">
            <LogoIcon size={40} className="" />
          </a>
          <a href="#" className="header__menu">
            <MenuIcon size={24} className=" mx-2" />
          </a>
          {/* <a href="#" className="header__heart_left">
            <HeartIcon size={30} className="" />
          </a> */}
          <button
            onClick={() => setSearchBarOpen(!SearchBarOpen)}
            className="header__searchbutton"
          >
            <SearchIcon size={23} className="mr-0 ml-0  " color="white" />
          </button>
        </HeaderItems>

        <div className="header__nav ">
          <NavigationMenu selected={selected} />
        </div>
        <a
          href="#"
          className="header__profile_center absolute left-1/2 -translate-x-1/2 "
        >
          <LogoIcon size={40} className="" />
        </a>

        <HeaderItems>
          <SearchBar />

          <a href="#" className="header__heart_right">
            <HeartIcon size={30} className="size-8" />
          </a>
          <a href="#" className="header__profile_right">
            <ProfileIcon size={32} className="size-9" />
          </a>
          <a href="#" className="header__bag_right">
            <BagIcon size={32} className="size-9" />
          </a>
        </HeaderItems>
      </div>
      {SearchBarOpen && (
        <div className="header__searchbar_bottom pb-4">
          <SearchBar fullWidth />
        </div>
      )}
    </nav>
  );
}

function HeaderItems({ children }: { children: React.ReactNode }) {
  return (
    <div className="header-items flex gap-[17px] items-center justify-center">
      {children}
    </div>
  );
}

function NavigationMenu({
  selected,
}: {
  selected: "SPORTS" | "LIFESTYLE" | "MEN" | "WOMEN" | "KIDS";
}) {
  const navItems = ["SPORTS", "LIFESTYLE", "MEN", "WOMEN", "KIDS"];

  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex gap-7 items-center">
          {navItems.map((item, index) => (
            <div key={item} className="flex items-center justify-center">
              <div
                className={cn(
                  "flex flex-col font-inter justify-center leading-0 text-lg text-center tracking-[1.26px] whitespace-nowrap",
                  selected === item
                    ? "text-white font-bold "
                    : "text-[#ebebeb] font-light"
                )}
              >
                <h3 className="leading-normal ">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
