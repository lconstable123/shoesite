"use client";
import { colors } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ColorPicker({ colors }: { colors: colors[] }) {
  const [selectedColor, setSelectedColor] = useState<colors | null>(null);
  const handleColorSelect = (color: colors) => {
    if (selectedColor === color) {
      return;
    }
    setSelectedColor(color);
  };
  const colorMap: Record<colors, string> = {
    red: "bg-[#B53333]",
    blue: "bg-[#3352B5]",
    green: "bg-[#1E7629]",
    black: "bg-[#0B0B0B] outline-[#7D7373] outline",
    white: "bg-[#DCD8D8]",
    yellow: "bg-[#AEB533]",
    grey: "bg-[#716B6B]",
    pink: "bg-[#C07E7E]",
  };

  return (
    <div className="flex w-min gap-[8px] items-center ">
      {colors.map((color) => {
        const colorBg = colorMap[color] || "bg-gray-500";
        return (
          <button
            key={color}
            onClick={() => handleColorSelect(color)}
            className={cn(
              `${colorBg} w-[16px] h-[16px] hover:scale-110  rounded-full cursor-pointer`,
              { colorBg },
              selectedColor && selectedColor !== color
                ? "opacity-50"
                : "opacity-100"
            )}
          />
        );
      })}
    </div>
  );
}
