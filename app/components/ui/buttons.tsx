"use client";
import { cn } from "@/lib/utils";
import { BagIcon, HeartIcon, SearchIcon } from "../Icons";
import { useState } from "react";

export const SearchButton = () => {
  return (
    <button className="header__searchbutton">
      <SearchIcon size={32} className="mx-1 " color="white" />
    </button>
  );
};

export const BagButton = ({
  size,
  text,
}: {
  size: "sm" | "lg";
  text?: string;
}) => {
  if (size === "lg") {
    return (
      <button className="button__border button__bg__black cursor-pointer  flex-center gap-2   h-[35px] px-5  ">
        <h3>{text || "Add To Bag"}</h3>
        <BagIcon size={22} className="" />
      </button>
    );
  } else {
    return (
      <button className="button__border button__bg__black capitalize  flex-center gap-2   h-[24px] px-4   ">
        <p>{text || "Add To Bag"}</p>
        <BagIcon size={16} className="" />
      </button>
    );
  }
};

export const HeartButton = ({ liked }: { liked?: boolean }) => {
  const [likedState, setLikedState] = useState(liked ?? false);
  return (
    <button
      onClick={() => setLikedState(!likedState)}
      className={cn(
        "button__border flex-center h-[35px] px-5",
        likedState ? "button__bg_red" : "button__bg__black"
      )}
    >
      <HeartIcon size={22} />
    </button>
  );
};
