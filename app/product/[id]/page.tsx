"use client";
import Image from "next/image";
import { BackIcon } from "../../components/Icons";
import {
  Collections,
  colors,
  tCategory,
  tCollectionsId,
  tGarmentSizing,
  tProduct,
  tProductId,
  tPromoData,
  tShoeSizing,
} from "@/lib/types";

import Carousel from "../../components/Carousel";

import { chooseProductColorImageUrl, cn, generateTinyUrl } from "@/lib/utils";
import { useParams, useSearchParams } from "next/navigation";
import "@/app/components/styling/checkout.css";
import { productsById } from "@/lib/product-data";

import { Checkout } from "@/app/components/Checkout";
import { collectionById } from "@/lib/curation-data";
import { toast } from "react-hot-toast";

export default function ItemPage() {
  const breakpoints = [950, 1400, 1600];
  const params = useParams<{ id: string }>();
  const { id } = params;

  function getProductData(id: string): tProduct | tProduct[] | null {
    const collection = collectionById[id as tCollectionsId];
    let Ids: tProductId[] | tCollectionsId[] = [];
    if (collection) {
      // toast.success("found a collection");
      Ids = collection.items;
      if (!Ids) return null;
      const products = Ids.map((prodId) => productsById[prodId]).filter(
        (prod) => prod !== undefined
      );
      return products.length ? products : null;
    }

    const product = productsById[id as tProductId];
    // toast.success("found a product");
    return product || null;
  }

  function getPromoData(id: string): tPromoData | null {
    const collection = collectionById[id as tCollectionsId];
    if (collection) {
      return {
        id: id,
        promoUrl: collection.splashImage || "",
        promoByline: collection.byline || null,
      };
    }
    // toast.success(collection.byline || "no byline found");

    const product = productsById[id as tProductId];
    if (!product) return null;
    return {
      id: id,
      promoUrl: product.promoImageUrl || null,
      promoByline: product.byline || null,
    };
  }

  const products = getProductData(id);
  const promoData = getPromoData(id);

  if (!products) {
    return <div>Product not found</div>;
  }
  return (
    <main className="checkout__container ">
      {/* <p>{product.byline}</p> */}
      <Checkout product={products} />
      {/* <Checkout product={product} rangeId={1} /> */}
      <PointOfSale promoData={promoData} />
    </main>
  );
}

function PointOfSale({ promoData }: { promoData: tPromoData | null }) {
  const breakpoints = [1200, 1400, 1600];
  const breakpointDisplayAmounts = [2, 3, 3, 3];

  return (
    <section className="checkout__pos__container ">
      {/* <p>{product.byline}</p> */}
      {/* <p>{promoData?.promoByline || "no data"}</p> */}
      {/* <p>{promoData?.promoUrl || "no data"}</p> */}
      <ItemDisplay promoData={promoData} />

      <div className="checkout__pos__promos mt-5  ">
        <Carousel
          textAbove="Shop Similar"
          breakpoints={breakpoints}
          breakpointDisplayAmounts={breakpointDisplayAmounts}
          mobile_displayAmount={3}
          products={[]}
        />
        <Carousel
          breakpoints={breakpoints}
          breakpointDisplayAmounts={breakpointDisplayAmounts}
          textAbove="Complete the look"
          mobile_displayAmount={3}
          products={[]}
        />
      </div>
    </section>
  );
}

function ItemDisplay({ promoData }: { promoData: tPromoData | null }) {
  const imageUrl: string = "/" + (promoData?.promoUrl || "");
  const imageUrltiny = generateTinyUrl(imageUrl) || "";
  return (
    <figure className="w-full relative flex flex-col items-center justify-center ">
      <div className="checkout__pos__image  ">
        <Image
          style={{ objectFit: "cover" }}
          src={imageUrl}
          alt={promoData?.id || "Product Image"}
          fill
          className="object-cover  "
          priority
          placeholder="blur"
          blurDataURL={imageUrltiny}
        />
      </div>

      {/* <div className="w-full h-10 bg-red-200" /> */}

      <a
        href="/"
        className=" flex justify-center items-center absolute top-[14px] right-3 w-[46px] h-[40px] border-5 rounded-lg border-black "
      >
        <BackIcon className="cursor-pointer " size={30} />
      </a>
      <figcaption className=" flex flex-col text-center gap-[19px] justify-center px-[135px] py-4 items-center w-full ">
        {/* <h3 className="uppercase text-2xl font-bold">Product ID: {id}</h3> */}
        {/* <p>{product.byline}</p> */}
      </figcaption>
    </figure>
  );
}
