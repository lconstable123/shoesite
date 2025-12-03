"use client";
import Image from "next/image";
import { BackIcon } from "../../components/Icons";
import {
  colors,
  tCategory,
  tGarmentSizing,
  tProduct,
  tProductId,
  tShoeSizing,
} from "@/lib/types";
import { QuantityPicker } from "../../components/ui/quantity-picker";
import { ColorPicker } from "../../components/ui/color-picker";
import { SizePicker } from "../../components/ui/size-picker";
import { BagButton, HeartButton } from "../../components/ui/buttons";
import { useScreenSizeShared } from "@/lib/useScreenSize";
import Carousel from "../../components/Carousel";

import { dummyProduct } from "@/lib/data";
import { chooseProductColorImageUrl, cn, generateTinyUrl } from "@/lib/utils";
import { useParams, useSearchParams } from "next/navigation";
import "@/app/components/styling/checkout.css";
import { productsById } from "@/lib/product-data";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/lib/hooks/use-checkout";
export default function ItemPage() {
  const breakpoints = [950, 1400, 1600];
  const params = useParams<{ id: string }>();
  const { id } = params;
  const product = productsById[id as tProductId];
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <main className="checkout__container mt-10">
      {/* <p>{product.byline}</p> */}
      <Checkout product={product} />
      {/* <Checkout product={product} rangeId={1} /> */}
      <ProductDetails product={product} />
    </main>
  );
}

function Checkout({
  product,
  rangeId = 0,
}: {
  product: tProduct;
  rangeId?: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    checkoutImage,
    checkoutImagetiny,
    color,
    quantity,
    handleColourClick,
    handleQuantityChange,
  } = useCheckout(product, rangeId, router, searchParams);

  return (
    <section className=" flex flex-col w-full px-0 lg:px-0  no-select  bg-neutral-900/20 ">
      <div className="flex flex-col lg:flex-row     w-full  ">
        <div className="relative   min-w-[500px] h-[500px] w-full lg:w-[500px]  flex flex-col  ">
          <Image
            src={checkoutImage}
            alt={product.name}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={checkoutImagetiny}
          />
        </div>
        {/* <p className="header-light">{product.subcategory}</p> */}
        <div className="flex flex-col  gap-4 py-10  w-auto px-10 ">
          <h2 className=" border-b border-white">{product.name}</h2>
          {product.discountPrice ? (
            <div className="flex gap-[11px]">
              <h4 className="">${product.discountPrice}</h4>
              <h4 className="text-discount">${product.price}</h4>
            </div>
          ) : (
            <h4 className="">${product.price}</h4>
          )}

          <p className="text-on-black">{product.description}</p>
          <SizePicker type={"shoe"} />
          <div className="flex gap-[22px]">
            <QuantityPicker
              quantity={quantity}
              setQuantity={handleQuantityChange}
            />
            <ColorPicker
              colors={product.colors}
              selectedColor={color}
              handleColorChange={handleColourClick}
            />
          </div>
          <div className="flex gap-2   ">
            <BagButton size="lg" text="Add To Bag" />
            <HeartButton liked={false} />
          </div>
        </div>
      </div>
    </section>
  );
}

//-------------------------

function ProductDetails({ product }: { product: tProduct }) {
  const breakpoints = [1300, 1400, 1600];
  const breakpointDisplayAmounts = [2, 3, 3, 3];

  return (
    <section className="checkout__productDetails__container ">
      {/* <p>{product.byline}</p> */}
      <ItemDisplay product={product} />

      <div className="checkout__productDetails__promos mt-5  ">
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

function ItemDisplay({ product }: { product: tProduct }) {
  const imageUrl: string = "/" + product.promoImageUrl;
  const imageUrltiny = generateTinyUrl(imageUrl) || "";
  return (
    <figure className="w-full relative flex flex-col items-center justify-center ">
      <div className="flex flex-row w-full h-[380px]">
        <div className="relative object-cover flex-1   bg-amber-200 overflow-hidden  ">
          <Image
            style={{ objectFit: "cover" }}
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover  "
            priority
            placeholder="blur"
            blurDataURL={imageUrltiny}
          />
        </div>
        {/* <div className="relative object-cover flex-1  bg-amber-200 overflow-hidden  ">
          <Image
            style={{ objectFit: "cover" }}
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover  "
            priority
            placeholder="blur"
            blurDataURL={imageUrltiny}
          />
        </div> */}
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
