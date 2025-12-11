"use client";
import Image from "next/image";
import { promoSegments, tPromoSegment } from "../../lib/curation-data";
import { productsById } from "../../lib/product-data";
import { tProduct, tProductId } from "../../lib/types";
import { motion } from "framer-motion";
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
import { useSearchParams } from "next/navigation";
// import { useSearchParams } from "next/navigation";
const delay = 0.1;
export const PromoSegment = () => {
  return (
    <section className="w-full h-full  flex flex-col overflow-hidden   ">
      {/* <div className="w-full flex justify-start items-center  my-2 ">
        <h3 className="text-2xl font-light tracking-widest opacity-80 uppercase ">
          Featured Collections
        </h3>
      </div> */}
      <div>
        {promoSegments.map((segment, index) => {
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
              index={index}
            >
              <SegmentContent
                productImageUrl={productImageUrl}
                product={product}
                segment={segment}
                index={index}
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
  index,
}: {
  product: tProduct;
  segment: tPromoSegment;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    //   transition={{ delay: delay }}
    //   // transition={{ duration: 0.5, delay: index ? index * 0.3 : 0 }}
    //   key={product.id}
    //   className={cn(
    //     " group transition-all duration-300 no-select border border-mid-grey-2/50 relative promo__container w-full flex flex-row odd:flex-row-reverse justify-between items-end bg-fiber ",
    //     "promo__container__closed "
    //   )}
    // >
    <div
      key={product.id}
      className={cn(
        " group transition-all duration-300 no-select border border-mid-grey-2/50 relative promo__container w-full flex flex-row odd:flex-row-reverse justify-between items-end bg-fiber ",
        "promo__container__closed "
      )}
    >
      {children}
    </div>
    //{" "}
    // </motion.div>
  );
}

function SegmentContent({
  productImageUrl,
  product,
  segment,
  index,
}: {
  productImageUrl: string;
  product: tProduct;
  segment: tPromoSegment;
  index?: number;
}) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <a
        href={`/product/${product.id}${
          category ? `?category=${category}` : ""
        }`}
        className="promo__primaryImages flex flex-row h-full   w-auto"
      >
        <SegmentImage
          productImageUrl={productImageUrl}
          id={product.id}
          isPrimary={true}
          product={product}
          index={index}
        />
        <SegmentImage
          productImageUrl={"/" + segment.promoImageUrl}
          id={segment.id}
          isPrimary={false}
          product={product}
          index={index}
        />
      </a>
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
  index,
}: {
  productImageUrl: string;
  id: string;
  isPrimary: boolean;
  product: tProduct;
  index?: number;
}) {
  const Tiny = generateTinyUrl2(productImageUrl);

  const animVariants = {
    hidden: (i: number) => ({ opacity: 0, x: i % 2 !== 0 ? -40 : 40 }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + delay,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={index}
      variants={animVariants}
      className={`promo__image relative overflow-hidden w-100 h-240  ${
        isPrimary
          ? "promo__image__primary bg-red-500  overflow-hidden"
          : "promo__image__secondary "
      } flex  border-l border-r border-gray-light h-full   `}
    >
      <Image
        priority
        loading="eager"
        src={productImageUrl}
        alt={id}
        // fill
        width={800}
        height={600}
        className="object-cover absolute w-full h-100 -translate-y-26    overflow-hidden  no-select "
        placeholder="blur"
        blurDataURL={Tiny}
      />
      {/* <p>{productImageUrl}</p> */}
      {/* <p>{productImageUrl}</p> */}
      {/* <p>{Tiny}</p> */}
    </motion.div>
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
  const animVariants = {
    hidden: (i: number) => ({ opacity: 0, x: i % 2 === 1 ? -40 : 40 }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + delay,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative  border-neutral-700 h-full w-full min-w-90  flex flex-col items-start  justify-center gap-2 px-12 py-5  bg-black bg-fiber z-200   ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animVariants}
        custom={0}
        transition={{ duration: 0.5 }}
      >
        <h2 className="uppercase text-5xl! font-bold  ">{segment.title}</h2>
        <p className=" text-[8pt]! uppercase tracking-[3px]! opacity-95 py-1 ">
          {product.byline}
        </p>

        <LinkButton text="Shop Now" id={product.id} />
      </motion.div>
    </div>
  );
}
