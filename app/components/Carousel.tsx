import React from "react";
import { ChevronLeft, HeartIcon } from "./Icons";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  tag?: string;
  colors: string[];
  favorite?: boolean;
  imageUrl?: string;
}

function ProductCard({
  name,
  category,
  price,
  discountPrice,
  tag,
  colors,
  favorite = false,
  imageUrl = "/api/placeholder/196/167",
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-[142px] h-[247px] items-end w-[196px]">
      {/* Favorite button */}
      <div className="w-5 h-5 relative">
        <HeartIcon filled={favorite} size={20} />
      </div>

      {/* Product details */}
      <div className="bg-white flex-1 min-h-px min-w-px w-full relative">
        {/* Product image */}
        <div
          className="absolute bg-[#040404] bottom-20 h-[200px] left-0 right-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* White background for details */}
        <div className="absolute bg-white inset-0" />

        {/* Product text */}
        <div className="absolute box-border flex flex-col font-inter font-normal items-start justify-center leading-normal left-1/2 max-h-[65.24px] max-w-[201px] px-2 py-0 text-xs top-[calc(50%+2.5px)] translate-x-[-50%] translate-y-[-50%] w-[200px]">
          <p className="font-inter text-text-hard">{name}</p>
          <p className="font-inter text-text-mid2">{category}</p>
        </div>

        {/* Price */}
        <div className="absolute flex font-inter font-semibold gap-1 items-center leading-normal left-[7px] text-xs top-[8.5px]">
          <p className="font-inter text-black">${price}</p>
          {discountPrice && (
            <p className="font-inter line-through text-bg-red">
              ${discountPrice}
            </p>
          )}
        </div>

        {/* Tag */}
        {tag && (
          <div className="absolute bg-bg-red h-3 right-[9px] rounded-[49px] top-2.5 w-9 flex items-center justify-center">
            <p className="font-inter text-white text-[8px] font-bold">{tag}</p>
          </div>
        )}

        {/* Color picker */}
        <div className="absolute flex gap-1 items-start justify-center left-[67px] top-[65px]">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-[7px] h-[7px] rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="absolute bg-white bottom-[78px] h-0.5 left-0 w-[200px]" />
      </div>
    </div>
  );
}

interface CarouselProps {
  products: ProductCardProps[];
}

export default function Carousel({ products }: CarouselProps) {
  const defaultProducts: ProductCardProps[] = [
    {
      name: "Nice Looking Shoe",
      category: "Running",
      price: 180,
      discountPrice: 400,
      tag: "New",
      colors: ["#f59e0b", "#10b981", "#000000", "#ffffff"],
      favorite: false,
    },
    {
      name: "Nice Looking Shoe",
      category: "Running",
      price: 180,
      discountPrice: 400,
      tag: "New",
      colors: ["#f59e0b", "#ef4444", "#000000", "#ffffff"],
      favorite: true,
    },
    {
      name: "Nice Looking Shoe",
      category: "Running",
      price: 180,
      discountPrice: 400,
      tag: "New",
      colors: ["#10b981", "#ef4444", "#000000", "#ffffff"],
      favorite: false,
    },
    {
      name: "Nice Looking Shoe",
      category: "Running",
      price: 180,
      discountPrice: 400,
      tag: "New",
      colors: ["#000000", "#ffffff"],
      favorite: false,
    },
    {
      name: "Nice Looking Shoe",
      category: "Running",
      price: 180,
      discountPrice: 400,
      tag: "New",
      colors: ["#000000", "#ffffff"],
      favorite: false,
    },
  ];

  const carouselProducts = products.length > 0 ? products : defaultProducts;

  return (
    <div className="flex flex-col items-center w-full max-w-[1092px]">
      {/* Header */}
      <div className="box-border flex flex-col gap-2 items-start pb-2 pt-0 px-0 w-full">
        <div className="flex items-start justify-between w-[1048px]">
          {/* Navigation tabs */}
          <div className="flex gap-[13px] items-center w-[385.5px]">
            <div className="bg-text-hard border border-text-mid2 box-border flex gap-2 items-center justify-center px-4 py-1 rounded-lg">
              <p className="font-inter text-xs text-on-black">New Arrivals</p>
            </div>
            <div className="bg-mid-grey-2 border border-text-mid2 box-border flex gap-2 items-center justify-center opacity-80 px-4 py-1 rounded-lg">
              <p className="font-inter text-xs text-on-black">Street Masters</p>
            </div>
            <div className="bg-text-hard border border-text-mid2 box-border flex gap-2 items-center justify-center px-4 py-1 rounded-lg">
              <p className="font-inter text-xs text-on-black">Platinum</p>
            </div>
          </div>

          {/* Shop all link */}
          <div className="flex flex-col gap-2 items-center justify-center w-[51px]">
            <div className="flex gap-2 h-[17px] items-start justify-center w-full">
              <div className="box-border flex gap-2 items-center justify-center pb-0.5 pt-0 px-0">
                <p className="font-inter underline font-normal leading-normal text-xs text-on-black text-center">
                  Shop All
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel content */}
      <div className="flex flex-wrap content-center gap-x-3 items-center w-full">
        {/* Left arrow */}
        <div className="bg-mid-grey-2 box-border flex gap-2 h-[122px] items-center justify-center p-0.5 rounded w-5">
          <ChevronLeft size={20} />
        </div>

        {/* Product cards */}
        <div className="flex gap-3 items-center">
          {carouselProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Right arrow */}
        <div className="bg-mid-grey-2 box-border flex gap-2 h-[122px] items-center justify-center p-0.5 rounded w-5">
          <div className="flex items-center justify-center">
            <div className="flex-none rotate-180">
              <ChevronLeft size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation indicator */}
      <div className="box-border flex flex-col gap-2 items-start px-0 py-4 w-[1048px]">
        <div className="h-1 w-full relative">
          <div className="absolute bg-white inset-0" />
          <div className="absolute bg-red bottom-0 left-0 right-[72.38%] top-0" />
        </div>
      </div>
    </div>
  );
}
