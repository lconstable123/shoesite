"use client";

import {
  tProductSizingType,
  ShoeSizing,
  tShoeSizing,
  tGarmentSizing,
  colors,
  Sizing,
} from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SizePicker({
  type,
  selectedSize,
  setSelectedSize,
  sizeError,
}: {
  type: tProductSizingType;
  selectedSize: tGarmentSizing | tShoeSizing | null;
  setSelectedSize: (size: tGarmentSizing | tShoeSizing | null) => void;
  sizeError?: boolean;
}) {
  const handleSizeClick = (size: tGarmentSizing | tShoeSizing) => {
    if (selectedSize === size) {
      return;
    }
    setSelectedSize(size);
  };

  if (type === "shoe") {
    return (
      <>
        {/* <h1>{type}</h1> */}
        <div className="relative grid grid-cols-3 gap-[6pt]">
          {ShoeSizing.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeClick(size)}
              className={cn(
                "transition-all h-10 sm:h-8   rounded-sm px-2 py-1 text-[9pt]  hover:bg-mid-grey-3",
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
          {sizeError === true && (
            <p className="absolute -bottom-5 right-1 text-red-500! text-xs mt-1">
              Please select a size
            </p>
          )}
        </div>
      </>
    );
  } else {
    return (
      <div className="relative grid grid-cols-3 gap-[6pt]">
        {Sizing.map((size) => (
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
        {sizeError === true && (
          <p className="absolute -bottom-5 right-1 text-red-500! text-xs mt-1">
            Please select a size
          </p>
        )}
      </div>
    );
  }
}
