"use client";

import {
  tProductSizingType,
  ShoeSizing,
  tShoeSizing,
  tGarmentSizing,
  colors,
} from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SizePicker({
  type,
}: // setColor,
{
  type: tProductSizingType;
  // setColor: (color: colors) => void;
}) {
  const [selectedSize, setSelectedSize] = useState<
    tGarmentSizing | tShoeSizing | null
  >(null);

  const handleSizeClick = (size: tGarmentSizing | tShoeSizing) => {
    if (selectedSize === size) {
      return;
    }
    setSelectedSize(size);
  };

  if (type === "shoe") {
    return (
      <div className="grid grid-cols-3 gap-[6pt]">
        {ShoeSizing.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={cn(
              "transition-all   rounded-sm px-2 py-1 text-[9pt] hover:bg-mid-grey-3",
              selectedSize
                ? selectedSize === size
                  ? "bg-red cursor-default"
                  : "bg-gray-light cursor-pointer"
                : "bg-gray-light cursor-default"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
