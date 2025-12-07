import { tCollectionsId, tProduct, tProductId, tPromoData } from "@/lib/types";

import "@/app/components/styling/checkout.css";
import { productsById } from "@/lib/product-data";
import { Checkout } from "@/app/components/Checkout";
import { collectionById } from "@/lib/curation-data";
import { PointOfSale } from "@/app/components/point-of-sale";
import { BackIcon } from "@/app/components/Icons";
import BrowserBackButton from "@/app/components/BrowserBackButton";
import { Suspense } from "react";

export default async function ItemPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  function getProductData(id: string): tProduct | tProduct[] | null {
    const collection = collectionById[id as tCollectionsId];
    let Ids: tProductId[] | tCollectionsId[] = [];
    if (collection) {
      Ids = collection.items;
      if (!Ids) return null;
      const products = Ids.map((prodId) => productsById[prodId]).filter(
        (prod) => prod !== undefined
      );
      return products.length ? products : null;
    }

    const product = productsById[id as tProductId];
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
    <Suspense fallback={<div>Loading product data…</div>}>
      <main className="checkout__container relative z-300 ">
        {/* <a
        href="/"
        className=" flex justify-center items-center absolute top-[14px] right-3 w-[46px] h-[40px] border-5 rounded-lg border-black z-300 "
      >
        <BackIcon className="cursor-pointer " size={30} />
      </a> */}
        <BrowserBackButton />
        <Checkout product={products} />
        <PointOfSale promoData={promoData} />
      </main>
    </Suspense>
  );
}
