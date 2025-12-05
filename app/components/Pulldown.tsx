"use client";
import { useEffect, useState } from "react";
import { CancelIcon, ChevronDown } from "./Icons";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

export function Pulldown() {
  const [pulldownOpen, setPulldownOpen] = useState(false);
  // useEffect(() => {
  //   toast.success("Pulldown rendered");
  // }, []);

  return (
    <>
      <div
        onClick={() => setPulldownOpen(!pulldownOpen)}
        className="relative w-full h-8 justify-center bg-gray-darker flex items-center px-4 z-900 "
      >
        <div className="w-full no-select flex gap-[18px] justify-center items-center z-900">
          <ChevronDown />
          <span className="text-white font-medium uppercase text-center text-sm ">
            Shipping & Free Returns
          </span>
          <ChevronDown />
        </div>
      </div>
      <div
        onClick={() => setPulldownOpen(!pulldownOpen)}
        className={cn(
          "transition-all  px-20 pt-15 pb-5  duration-500 absolute z-10 no-select grid  grid-cols-3 gap-0 right-0 left-0 w-full h-auto bg-neutral-50 border",
          !pulldownOpen ? "-top-100" : "top-0"
        )}
      >
        <PullDownItem
          title="Expedited Shipping"
          blurb="We have options to get your gear to you, when and where you need it."
          url="#"
        />
        <PullDownItem
          title="Returns & Exchanges"
          blurb="If you're not totally happy with your purchase, you can ship it back at no extra cost and we will offer a full refund."
          url="#"
        />
        <PullDownItem
          title="Lifetime Warranty"
          blurb="All our products come with a lifetime warranty.  If you find a defect we will replace it free of charge."
          url="#"
        />
        <div className="absolute  right-2 top-10 ">
          <CancelIcon />
        </div>
      </div>
    </>
  );
}

const PullDownItem = ({
  title,
  blurb,
  url,
}: {
  title: string;
  blurb: string;
  url: string;
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-2   text-center text-black font-bold">
      <div className="w-30 h-30 border "></div>
      <h3 className="flex-wrap! text-wrap! ">{title}</h3>
      <p> {blurb}</p>
    </div>
  );
};
