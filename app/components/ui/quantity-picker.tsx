"use client";

import { useState } from "react";
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
    <select
      value={quantity}
      onChange={(e) => setQuantity && setQuantity(Number(e.target.value))}
      className="button__border button__bg__black  flex-center x-1 text-[9pt]  py-[2pt] "
    >
      {quantities.map((qty) => (
        <option key={qty} value={qty} className=" bg-black ">
          {qty}
        </option>
      ))}
    </select>
  );
}
