"use client";

import { useState } from "react";
import { ChevronDown } from "../Icons";
const quantities = Array.from({ length: 10 }, (_, i) => i + 1);
export function QuantityPicker({
  quantity,
  setQuantity,
}: {
  quantity?: number;
  setQuantity?: (qty: number) => void;
}) {
  // const [quantity, setQuantity] = useState(1);
  return (
    <div className="relative  gap-2 button__border cursor-pointer bg-black   w-12 h-7 flex items-center  justify-between  ">
      <select
        value={quantity}
        onChange={(e) => setQuantity && setQuantity(Number(e.target.value))}
        className="my-select w-full h-full pl-2 cursor-pointer   flex-center x-1 text-[9pt] px-1  "
      >
        {quantities.map((qty) => (
          <option key={qty} value={qty} className=" bg-black ">
            {qty}
            {/* <ChevronDown className="ml-1 size-4 stroke-white" /> */}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute pointer-events-none no-select right-2 top-[5px] size-10 stroke-white" />
    </div>
  );
}
