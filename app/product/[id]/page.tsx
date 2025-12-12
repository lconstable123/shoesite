import { tCollectionsId, tProduct, tProductId, tPromoData } from "@/lib/types";

import "@/app/components/styling/checkout.css";
import { productsById } from "@/lib/product-data";
import { Checkout } from "@/app/components/Checkout";
import { collectionById } from "@/lib/curation-data";
import { PointOfSale } from "@/app/components/point-of-sale";
import { BackIcon } from "@/app/components/Icons";
import BrowserBackButton from "@/app/components/BrowserBackButton";
import { Suspense } from "react";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "VirtaullyAnything Ecommerce Demo",
    description: "Discover premium footwear.",
    openGraph: {
      title: "Home Page – Shoe Store",
      description: "Discover premium footwear with style and comfort.",
      url: "https://shoesite-sooty.vercel.app/",
      siteName: "Shoe Store",
      images: [
        {
          url: "https://shoesite-sooty.vercel.app/assets/gallery/rodney-mullet/rodney-mullet-promo.webp",

          width: 1200,
          height: 630,
          alt: "Featured Shoe",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

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
    <main className="checkout__container relative z-300 ">
      <BrowserBackButton />
      <Checkout product={products} />
      <PointOfSale promoData={promoData} />
    </main>
  );
}
