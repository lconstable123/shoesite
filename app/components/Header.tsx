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
import { cn } from "../../lib/utils";
import { DropdownMenu } from "./dropdown-menu";
import { SearchButton } from "./ui/buttons";
import { SearchBar } from "./ui/search-bar";
import "./styling/header.css";
import { Categories, tCategory } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";

interface HeaderMenuProps {
  isDropdownOpen?: boolean;
  selected: tCategory;
}

export default function Header({
  isDropdownOpen = true,
  selected,
}: HeaderMenuProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") as tCategory;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex flex-col items-start w-full">
      <DropdownBar handleToggleDropdown={toggleDropdown} />
      {selectedCategory && (
        <DropdownMenu
          selectedCategory={selectedCategory}
          isOpen={dropdownOpen}
        />
      )}
    </div>
  );
}

function DropdownBar({
  handleToggleDropdown,
}: {
  handleToggleDropdown: () => void;
}) {
  const [SearchBarOpen, setSearchBarOpen] = useState(false);

  return (
    <header
      id="header_bar"
      className="w-full border  flex flex-col gap-y-2.5 border-b border-mid-grey-2 px-[42px]  "
    >
      <nav className="relative h-[70px] bg-black flex inset-0 items-center justify-between  py-2">
        <HeaderItems>
          <a href="/" className="header__logo_left">
            <LogoIcon size={40} className="" />
          </a>
          <a href="#" onClick={handleToggleDropdown} className="header__menu">
            <MenuIcon size={24} className=" mx-2" />
          </a>
          <button
            onClick={() => setSearchBarOpen(!SearchBarOpen)}
            className="header__searchbutton"
          >
            <SearchIcon size={23} className="mr-0 ml-0  " color="white" />
          </button>
          <a href="#" className="header__heart_left">
            <HeartIcon size={30} className="size-8" />
          </a>
        </HeaderItems>

        <div className="header__nav ">
          <NavigationMenu />
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
      </nav>
      {SearchBarOpen && (
        <div className="header__searchbar_bottom pb-4">
          <SearchBar fullWidth />
        </div>
      )}
      <div className="header__nav_small  mb-5 ">
        <NavigationMenu />
      </div>
    </header>
  );
}

function HeaderItems({ children }: { children: React.ReactNode }) {
  return (
    <div className="header-items flex gap-[17px] items-center justify-center">
      {children}
    </div>
  );
}

function NavigationMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") as tCategory;

  const handleMenuClick = (item: tCategory) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", item);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <div className="flex gap-7 items-center">
        {Categories.map((item, index) => (
          <div key={item} className="flex items-center justify-center">
            <a
              onClick={() => handleMenuClick(item as tCategory)}
              className={cn(
                "uppercase cursor-pointer no-select flex flex-col  justify-center leading-0  text-center ",
                selectedCategory === item ? "header-bold" : "header-light"
              )}
            >
              <h3 className="">{item}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
