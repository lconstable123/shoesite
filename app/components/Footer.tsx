import React from "react";
import { FlagIcon } from "./Icons";

interface FooterMenuListProps {
  title: string;
  items: string[];
}

function FooterMenuList({ title, items }: FooterMenuListProps) {
  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-0">
        <div className="box-border col-1 flex items-start ml-0 mt-0 row-1 w-[120px]">
          <div className="flex flex-col font-inter font-bold justify-center leading-0 text-lg text-on-black text-center tracking-[1.26px] whitespace-nowrap">
            <p className="leading-normal">{title}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start justify-center opacity-80 w-full">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 h-3 items-center w-full">
            <p className="font-inter font-normal leading-normal text-xs text-on-black text-center">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const menuData = [
    {
      title: "SPORTS",
      items: ["Football", "Outdoors", "Basketball", "Fitness"],
    },
    {
      title: "LIFESTYLE",
      items: ["Casual", "Premium", "Skatewear", "Staples"],
    },
    {
      title: "MEN",
      items: ["Shoes", "Clothes", "Acessories"],
    },
    {
      title: "WOMEN",
      items: ["Shoes", "Clothes", "Acessories"],
    },
    {
      title: "KIDS",
      items: ["Shoes", "Clothes", "Acessories"],
    },
    {
      title: "INFO",
      items: ["About", "Careers", "Sustainability"],
    },
    {
      title: "SUPPORT",
      items: [
        "Store Locator",
        "Order Tracker",
        "Customer Service",
        "Returns & Refunds",
      ],
    },
  ];

  return (
    <div className="bg-text-hard flex flex-col gap-[27px] items-center w-full">
      <div className="bg-mid-grey-2 h-1 shrink-0 w-full" />
      <div className="box-border flex gap-6 items-start justify-center px-0 py-6">
        {menuData.map((menu, index) => (
          <FooterMenuList key={index} title={menu.title} items={menu.items} />
        ))}
      </div>
      <div className="border-mid-grey-2 border-t border-solid box-border flex flex-col gap-2 items-start px-0 py-8 w-full">
        <div className="flex gap-2 items-center justify-center w-[1456px]">
          <p className="font-inter font-normal leading-normal text-xs text-on-black text-center">
            Site designed by Luke Constable | VirtuallyAnything 2025
          </p>
        </div>
      </div>
    </div>
  );
}
