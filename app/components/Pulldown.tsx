"use client";
import { useEffect } from "react";
import { ChevronDown } from "./Icons";
import toast from "react-hot-toast";

export function Pulldown() {
  useEffect(() => {
    toast.success("Pulldown rendered");
  }, []);
  return (
    <div className="w-full  h-8  justify-center bg-gray-darker flex items-center px-4">
      <div className="no-select flex gap-[18px] justify-center items-center">
        <ChevronDown />
        <span className="text-white font-medium uppercase text-center text-sm ">
          Shipping & Free Returns
        </span>
        <ChevronDown />
      </div>
    </div>
  );
}
