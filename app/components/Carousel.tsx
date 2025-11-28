"use client";
import React, { useState } from "react";
import { ChevronLeft, HeartIcon } from "./Icons";
import { carouselCategories, CarouselCategory } from "../../lib/data";
import { cn } from "../../lib/utils";
import { useScreenSizeShared } from "../../lib/useScreenSize";
import "./styling/carousel.css";
import { WidthCategory } from "../../lib/types";

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
  const dummy = true;
  if (dummy) {
    return <div className="carousel__card bg-red-200" />;
  }

  return (
    <div className="carousel__card flex flex-col gap-[142px] h-[247px] items-end w-[196px]">
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
  sm_displayAmount?: number;
  md_displayAmount?: number;
  lg_displayAmount?: number;
  xl_displayAmount?: number;
  mobile_displayAmount?: number;
  products: ProductCardProps[];
  textAbove?: string;
}

export default function Carousel({
  products,
  sm_displayAmount = 2,
  md_displayAmount = 4,
  lg_displayAmount = 6,
  xl_displayAmount = 8,
  mobile_displayAmount = 8,
  textAbove,
}: CarouselProps) {
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
  const { isMobile, widthCategory: width } = useScreenSizeShared(
    800,
    1250,
    1600
  );

  const displayAmountMap: Record<WidthCategory, number> = {
    small: sm_displayAmount,
    medium: md_displayAmount,
    large: lg_displayAmount,
    extralarge: xl_displayAmount,
  } as const;

  const displayAmount = isMobile
    ? mobile_displayAmount
    : displayAmountMap[width] ?? lg_displayAmount;

  const carouselProducts =
    products.length > 0
      ? products.slice(0, displayAmount)
      : defaultProducts.slice(0, displayAmount);

  const maxWidth = displayAmount * (196 + 12) - 12;
  const maxWidthMob = 196 * 2;
  const maxPage = 3;
  const [page, setPage] = useState(0);
  const [carouselCategory, setCarouselCategory] =
    useState<CarouselCategory>("New Arrivals");

  const handleSetPage = (newpage: number) => {
    if (newpage < 0 || newpage > maxPage) return;
    setPage(newpage);
  };

  return (
    <div className="carousel__container__outer ">
      {!isMobile && (
        <CarouselNav
          direction="left"
          page={page}
          maxPage={maxPage}
          handleSetPage={handleSetPage}
        />
      )}
      <div className="carousel__container__inner ">
        <CarouselHeader
          categories={[...carouselCategories]}
          selectedCategory={carouselCategory}
          setSelectedCategory={setCarouselCategory}
          textAbove={textAbove}
        />

        <div className="carousel__items">
          {carouselProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        {/* <div className="w-100 h-100 bg-yellow-400" /> */}
        {isMobile && (
          <a
            onClick={() => {}}
            className={cn(
              "button__state w-full  no-select button__state__inactive"
            )}
          >
            <p>Shop All</p>
          </a>
        )}
        {!isMobile && <CarouselProgressBar page={page} maxPage={maxPage} />}
      </div>
      {!isMobile && (
        <CarouselNav
          direction="right"
          page={page}
          maxPage={maxPage}
          handleSetPage={handleSetPage}
        />
      )}
    </div>
  );
}

const CarouselNav = ({
  direction,
  page,
  maxPage,
  handleSetPage,
}: {
  direction: "left" | "right";
  page: number;
  maxPage: number;
  handleSetPage: (newpage: number) => void;
}) => {
  return (
    <button
      onClick={() => {
        if (direction === "left") {
          handleSetPage(page - 1);
        } else {
          handleSetPage(page + 1);
        }
      }}
      className={cn(
        "carousel__nav",
        direction === "right" ? "rotate-180" : "",
        direction === "right" && page >= maxPage
          ? "opacity-50 no-select  cursor-default "
          : "",
        direction === "left" && page <= 0
          ? "opacity-50 no-select  cursor-default "
          : ""
      )}
    >
      <ChevronLeft size={20} className="no-select" />
    </button>
  );
};

const CarouselProgressBar = ({
  page,
  maxPage,
}: {
  page: number;
  maxPage: number;
}) => {
  const progressPercentage = (page / maxPage) * 100;
  return (
    <div className="box-border bg-white relative  h-1 flex flex-col gap-2 items-start px-0 my-4 w-full">
      <div
        className="absolute bg-red bottom-0 left-0 top-0 z-20"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

const CarouselHeader = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  textAbove,
}: {
  categories: CarouselCategory[];
  selectedCategory: CarouselCategory;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<"New Arrivals" | "Street Masters" | "Platinum">
  >;
  textAbove?: string;
}) => {
  return (
    <div className="carousel__header__container">
      {textAbove && <h2 className=" ">{textAbove}</h2>}
      <nav className="carousel__header__nav">
        {categories.map((category, index) => {
          const isActive = category === selectedCategory;
          return (
            <button
              key={category}
              onClick={() => {
                if (!isActive) setSelectedCategory(category);
              }}
              className={cn(
                "button__state no-select",
                !isActive ? "button__state__inactive" : "button__state__active"
              )}
            >
              <p>{category}</p>
            </button>
          );
        })}

        <a className="ml-auto ">
          <p className="underline">Shop All</p>
        </a>
      </nav>
    </div>
  );
};
