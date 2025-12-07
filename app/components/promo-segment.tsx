"use client";
import Image from "next/image";
import { promoSegments, tPromoSegment } from "../../lib/curation-data";
import { productsById } from "../../lib/product-data";
import { tProduct, tProductId } from "../../lib/types";
import {
  chooseProductColorImageUrl,
  cn,
  generateTinyUrl,
} from "../../lib/utils";
import "./styling/promo.css";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export const PromoSegment = () => {
  return (
    <section className="w-full h-full  flex flex-col gap-4   ">
      <div>
        {promoSegments.map((segment) => {
          const product = productsById[segment.id as tProductId];
          if (!product) return null;
          return <Promo key={segment.id} product={product} segment={segment} />;
        })}
      </div>
    </section>
  );
};

function Promo({
  product,
  segment,
}: {
  product: tProduct;
  segment: tPromoSegment;
}) {
  const productImageUrl: string =
    "/" +
    (chooseProductColorImageUrl(product, product?.primaryImageUrlColor) || "");

  const segmentImageTiny = generateTinyUrl("/" + segment.promoImageUrl2) || "";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      key={product.id}
      className={cn(
        "group transition-all duration-300 border no-select border-mid-grey-2/50 relative promo__container w-full flex flex-row odd:flex-row-reverse justify-between items-end bg-fiber ",
        isOpen ? "promo__container__open" : "promo__container__closed "
      )}
    >
      {/* <div
        className={cn(
          "transition-all no-select  absolute inset-0 bg-black   z-400",
          isOpen ? "opacity-0" : "opacity-20 hover:opacity-0 "
        )}
      /> */}
      <div className="promo__primaryImages flex flex-row h-full w-auto">
        <SegmentImage
          productImageUrl={productImageUrl}
          id={product.id}
          isPrimary={true}
        />
        <SegmentImage
          productImageUrl={"/" + segment.promoImageUrl}
          id={segment.title}
          isPrimary={false}
        />
      </div>
      <SegmentText segment={segment} product={product} />

      {/* <div className="promo__secondaryImage overflow-hidden  relative w-full h-full ">
        <div
          className={cn(
            "transition-all  absolute inset-0 bg-black   z-400",
            "opacity-70"
          )}
        />

        <Image
          src={segment.promoImageUrl2 || "/"}
          alt={product.id}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={segmentImageTiny}
        />
      </div> */}
    </div>
  );
}

function SegmentImage({
  productImageUrl,
  id,
  isPrimary,
}: {
  productImageUrl: string;
  id: string;
  isPrimary: boolean;
}) {
  const Tiny = generateTinyUrl(productImageUrl) || "";
  return (
    <div
      className={`promo__image  ${
        isPrimary ? "promo__image__primary" : "promo__image__secondary"
      } relative flex w-130 h-full `}
    >
      <Image
        src={productImageUrl}
        alt={id}
        fill
        className="object-cover no-select"
        placeholder="blur"
        blurDataURL={Tiny}
      />
    </div>
  );
}

function SegmentText({
  segment,
  product,
}: {
  segment: tPromoSegment;
  product: tProduct;
}) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <div className="relative h-full w-full min-w-90  flex flex-col items-start  justify-center gap-2 px-12 py-5  bg-black bg-fiber z-200   ">
      <h2 className="uppercase text-5xl! font-bold  ">{segment.title}</h2>
      <p className=" text-[8pt]! uppercase tracking-[3px]! opacity-95 ">
        {product.byline}
      </p>
      <button
        // key={category}
        onClick={() => {}}
        className={cn(
          "button__state no-select cursor-pointer mt-3"
          // !isActive ? "button__state__inactive" : "button__state__active"
        )}
      >
        <Link
          // key={index}
          className="list__item cursor-pointer"
          href={`/product/${product.id}${
            category ? `?category=${category}` : ""
          }`}
        >
          {/* <p className="no-select text-black">{productNamesFromId[item]}</p> */}
          <p>Visit</p>
        </Link>
      </button>
      {/* <div
        className={cn(
          "transition-all  absolute inset-0 bg-black   -z-1",
          "opacity-10"
        )}
      /> */}
      {/* <p>{product.description}</p> */}
    </div>
  );
}
