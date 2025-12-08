// "use client";
import Image from "next/image";
import { promoSegments, tPromoSegment } from "../../lib/curation-data";
import { productsById } from "../../lib/product-data";
import { tProduct, tProductId } from "../../lib/types";

import {
  chooseProductColorImageUrl,
  cn,
  generateTinyUrl,
  generateTinyUrl2,
  urlToBase64,
} from "../../lib/utils";
import "./styling/promo.css";
// import { useState } from "react";
import Link from "next/link";
import { LinkButton } from "./Link-Button";
// import { useSearchParams } from "next/navigation";

export const PromoSegment = () => {
  return (
    <section className="w-full h-full  flex flex-col gap-4   ">
      <div>
        {promoSegments.map((segment) => {
          const product = productsById[segment.id as tProductId];
          if (!product) return null;

          const productImageUrl: string =
            "/" +
            (chooseProductColorImageUrl(
              product,
              product?.primaryImageUrlColor
            ) || "");

          return (
            <PromoContainer
              key={segment.id}
              product={product}
              segment={segment}
            >
              <SegmentContent
                productImageUrl={productImageUrl}
                product={product}
                segment={segment}
              />
            </PromoContainer>
          );
        })}
      </div>
    </section>
  );
};

function PromoContainer({
  product,
  segment,
  children,
}: {
  product: tProduct;
  segment: tPromoSegment;
  children: React.ReactNode;
}) {
  // const segmentImageTiny = urlToBase64(
  //   generateTinyUrl("/" + segment.promoImageUrl2) || ""
  // );

  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      // onClick={() => setIsOpen(!isOpen)}
      key={product.id}
      className={cn(
        "group transition-all duration-300 border no-select border-mid-grey-2/50 relative promo__container w-full flex flex-row odd:flex-row-reverse justify-between items-end bg-fiber ",
        "promo__container__closed "
      )}
    >
      {children}
    </div>
  );
}

function SegmentContent({
  productImageUrl,
  product,
  segment,
}: {
  productImageUrl: string;
  product: tProduct;
  segment: tPromoSegment;
}) {
  return (
    <>
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
          product={product}
        />
        <SegmentImage
          productImageUrl={"/" + segment.promoImageUrl}
          id={segment.id}
          isPrimary={false}
          product={product}
        />
      </div>
      <SegmentText segment={segment} product={product} />

      {/* <div className="promo__secondaryImage overflow-hidden  relative w-full h-full ">
        <div
          className={cn(
            "transition-all  absolute inset-0 bg-black   z-400",
            "opacity-30"
          )}
        />

        <Image
          src={segment.promoImageUrl2 || "/"}
          alt={product.id}
          fill
          className="object-cover"
          // placeholder="blur"
          // blurDataURL={segmentImageTiny}
        />
      </div> */}
    </>
  );
}

function SegmentImage({
  productImageUrl,
  id,
  isPrimary,
  product,
}: {
  productImageUrl: string;
  id: string;
  isPrimary: boolean;
  product: tProduct;
}) {
  const Tiny = generateTinyUrl2(productImageUrl);

  return (
    <div
      className={`promo__image  ${
        isPrimary ? "promo__image__primary" : "promo__image__secondary"
      } relative flex w-130 border-1 border-neutral-700 h-full  aspectRatio: '1 / 1' `}
    >
      {/* public\assets\gallery\street-masters\street-masters-shoe-red.webp */}
      <Image
        priority
        loading="eager"
        src={productImageUrl}
        alt={id}
        fill
        className="object-cover no-select"
        placeholder="blur"
        blurDataURL={Tiny}
      />
      <p>{productImageUrl}</p>
      {/* <p>{productImageUrl}</p> */}
      {/* <p>{Tiny}</p> */}
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
  // const searchParams = useSearchParams();
  // const category = searchParams.get("category");
  return (
    <div className="relative border-3 border-neutral-700 h-full w-full min-w-90  flex flex-col items-start  justify-center gap-2 px-12 py-5  bg-black bg-fiber z-200   ">
      <h2 className="uppercase text-5xl! font-bold  ">{segment.title}</h2>
      <p className=" text-[8pt]! uppercase tracking-[3px]! opacity-95 ">
        {product.byline}
      </p>

      <LinkButton text="Shop Now" id={product.id} />

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
