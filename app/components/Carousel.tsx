"use client";
import React, { useState } from "react";
import { ChevronLeft, HeartIcon } from "./Icons";
import {
  chooseProductColorImageUrl,
  cn,
  generateTinyUrl2,
} from "../../lib/utils";
import { useScreenSizeShared } from "../../lib/useScreenSize";
import "./styling/carousel.css";
import {
  tProduct,
  tProductId,
  tPromoCarouselSegments,
  WidthCategory,
} from "../../lib/types";
import { productsById } from "@/lib/product-data";
import { carouselSegments } from "@/lib/curation-data";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useCheckoutContext } from "@/lib/contexts/use-checkout-context";
import { HeartButton, SmallHeartButton } from "./ui/buttons";

interface ProductCardProps {
  product: tProduct;
  index: number;
}

interface CarouselProps {
  sm_displayAmount?: number;
  md_displayAmount?: number;
  lg_displayAmount?: number;
  xl_displayAmount?: number;
  mobile_displayAmount?: number;
  // carousels?: tPromoCarouselSegments[];
  textAbove?: string;
  breakpoints?: number[];
  isMobile?: boolean;
  width?: WidthCategory;
  breakpointDisplayAmounts?: number[];
}

export default function Carousel({
  breakpoints = [950, 1400, 1600],
  breakpointDisplayAmounts = [2, 4, 6, 8, 10],
  mobile_displayAmount = 8,
  textAbove,
}: CarouselProps) {
  const params = useParams();
  const { id } = params;
  const carousels = productsById[id as tProductId]?.carousels || [
    "New-Arrivals",
    "Best-Sellers",
    "Platinum",
  ];

  const [carouselCategory, setCarouselCategory] =
    useState<tPromoCarouselSegments>(carousels[0] || "New-Arrivals");

  const carouselItems = carouselSegments[carouselCategory]?.items;
  const products = carouselItems.map((id) => productsById[id])?.filter(Boolean);

  const { isMobile, widthCategory: width } = useScreenSizeShared(
    breakpoints[0],
    breakpoints[1],
    breakpoints[2]
  );
  const [page, setPage] = useState(0);

  const displayAmountMap: Record<WidthCategory, number> = {
    small: breakpointDisplayAmounts[0],
    medium: breakpointDisplayAmounts[1],
    large: breakpointDisplayAmounts[2],
    extralarge: breakpointDisplayAmounts[3],
  } as const;

  const displayAmount = isMobile
    ? mobile_displayAmount
    : displayAmountMap[width] ?? breakpointDisplayAmounts[2];

  const carouselProducts =
    products.length > 0
      ? products.slice(page * displayAmount, (page + 1) * displayAmount)
      : [];

  const maxPage = products
    ? Math.max(0, Math.ceil(products.length / displayAmount) - 1)
    : 0;

  const carouselFilled: (tProduct | null)[] = Array.from({
    length: displayAmount,
  }).map((_, index) => {
    return carouselProducts[index] ?? null;
  });

  const handleSetPage = (newpage: number) => {
    if (newpage < 0 || newpage > maxPage) return;
    setPage(newpage);
  };
  const handleSetCategory = (category: tPromoCarouselSegments) => {
    setCarouselCategory(category);
    setPage(0);
  };

  return (
    <div className="carousel__container__outer  ">
      {!isMobile && (
        <CarouselNav
          direction="left"
          page={page}
          maxPage={maxPage}
          handleSetPage={handleSetPage}
        />
      )}
      <div className="carousel__container__inner   ">
        <CarouselHeader
          categories={carousels}
          selectedCategory={carouselCategory}
          setSelectedCategory={handleSetCategory}
          textAbove={textAbove}
          isSmall={width === "small"}
        />

        <div className="carousel__items ">
          {carouselFilled.map((product, index) =>
            product?.name ? (
              <ProductCard
                key={product?.name + index}
                index={index}
                product={product}
              />
            ) : (
              <EmptyCard key={"empty-" + index} />
            )
          )}
        </div>
        {/* <div className="w-100 h-100 bg-yellow-400" /> */}
        {!isMobile && (
          <CarouselProgressBar
            page={page}
            maxPage={maxPage}
            width={displayAmount}
          />
        )}
        {isMobile ||
          (width === "small" && (
            <a
              onClick={() => {}}
              className={cn(
                "button__state w-full  no-select button__state__inactive"
              )}
            >
              <p>Shop All</p>
            </a>
          ))}
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
  width,
}: {
  page: number;
  maxPage: number;
  width: number;
}) => {
  const progressPercentage = (page / maxPage) * 100;
  const barWidth = 100 / (maxPage + 1);
  // const barWidth = `${100 / maxPage}%`;
  const barOffset = (page + 1) * barWidth - barWidth;
  return (
    <div className="box-border bg-white relative  h-1 flex flex-col gap-2 items-start px-0 my-4 w-full">
      {/* <p>{barOffset}</p>
      <p>
        percent:{barWidth.toFixed(1)} page:{page} maxpage:{maxPage} barOffset:
        {barOffset}
      </p> */}
      <div
        className={` transition-all absolute bg-red bottom-0 top-0 z-20`}
        style={{
          left: `${barOffset}%`,
          width: `${barWidth}%`,
        }}
      />
    </div>
  );
};

const CarouselHeader = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  textAbove,
  isSmall = false,
}: {
  categories: tPromoCarouselSegments[];
  selectedCategory: tPromoCarouselSegments;
  setSelectedCategory: (category: tPromoCarouselSegments) => void;
  textAbove?: string;
  isSmall?: boolean;
}) => {
  return (
    <div className="carousel__header__container ">
      {textAbove && <h2 className="carousel__header__title">{textAbove}</h2>}
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
              <p>{category.replace(/-/g, " ")}</p>
            </button>
          );
        })}

        {!isSmall && (
          <a className="ml-auto ">
            {/* <p className="underline">Shop All</p> */}
          </a>
        )}
      </nav>
    </div>
  );
};

function ProductCard({ product, index }: ProductCardProps) {
  const dummy = false;
  const url =
    "/" + chooseProductColorImageUrl(product, product.primaryImageUrlColor);
  const Tiny = generateTinyUrl2(url);
  if (dummy) {
    return <div className="carousel__card border border-gray-300/20" />;
  }
  const searchParams = useSearchParams();
  const id = product.id;
  const category = searchParams.get("category");
  const { toggleLikeItem, likedItems } = useCheckoutContext();
  const isLiked = likedItems.includes(product.id);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index ? index * 0.05 : 0, duration: 0.2 }}
      className="group relative flex flex-col  h-[247px] justify-start items-end w-[196px] "
    >
      {/* Favorite button */}
      <div className="w-5 h-5 absolute top-2 right-2 z-20 ">
        {/* <HeartIcon filled={true} size={20} /> */}
        <SmallHeartButton
          liked={isLiked}
          toggle={() => {
            // toast.success(product.id);
            toggleLikeItem(product.id);
          }}
        />
      </div>

      <Link
        href={`/product/${id}${category ? `?category=${category}` : ""}`}
        className="w-full  h-[167px] relative overflow-hidden"
      >
        <Image
          src={url}
          alt={product.name}
          fill
          className=" object-cover no-select hover:scale-105 "
          placeholder="blur"
          blurDataURL={Tiny}
        />
      </Link>

      {/* <p className=" text-white!">{url}</p> */}
      {/* Product details */}
      <ProductTextDetails product={product} />
    </motion.div>
  );
}

const ProductTextDetails = ({ product }: { product: tProduct }) => {
  return (
    <div className="bg-white group-hover:bg-neutral-200 border h-full flex-1 min-h-px min-w-px w-full relative">
      {/* Product text */}
      <div className="absolute box-border flex flex-col font-inter font-normal items-start justify-center leading-normal left-1/2 max-h-[65.24px] max-w-[201px] px-2 py-0 text-xs top-[calc(50%+2.5px)] translate-x-[-50%] translate-y-[-50%] w-[200px]">
        <p className="font-inter text-text-hard">{product.name}</p>
        <p className="font-inter text-text-mid2 text-[8pt]!">
          {product.purpose}
        </p>
      </div>

      {/* Price */}
      <div className="absolute flex font-inter font-semibold gap-1 items-center leading-normal left-[7px] text-xs top-[8.5px]">
        <p className="font-inter text-black">${product.price}</p>
        {product.discountPrice && (
          <p className="font-inter line-through text-bg-red">
            ${product.discountPrice}
          </p>
        )}
      </div>

      {/* Color picker */}
      <div className="absolute flex gap-1 items-start justify-center left-[67px] bottom-[8px]">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className="w-[7px] h-[7px] rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

const EmptyCard = () => {
  return <div className="carousel__card  border-gray-300/20" />;
};
