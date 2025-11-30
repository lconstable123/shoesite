"use client";
import Image from "next/image";
import { BackIcon } from "../../components/Icons";
import { tProduct } from "@/lib/types";
import { QuantityPicker } from "../../components/ui/quantity-picker";
import { ColorPicker } from "../../components/ui/color-picker";
import { SizePicker } from "../../components/ui/size-picker";
import { BagButton, HeartButton } from "../../components/ui/buttons";
import { useScreenSizeShared } from "@/lib/useScreenSize";
import Carousel from "../../components/Carousel";
import { dummyProduct } from "@/lib/data";
import { cn } from "@/lib/utils";
import "@/app/components/styling/checkout.css";
export default function ItemPage({ id }: { id: string }) {
  const breakpoints = [950, 1400, 1600];

  return (
    <main className="checkout__container">
      <ShoeCheckout product={dummyProduct} />
      <ProductDetails id={id} />
    </main>
  );
}

function ItemDisplay({ id }: { id: string }) {
  return (
    <figure className="relative flex flex-col items-center justify-center ">
      <div className="relative h-[579px] w-full object-cover   bg-amber-200 overflow-hidden  ">
        <Image
          style={{ objectFit: "cover" }}
          src="/assets/placeholders/img/blueshoe.png"
          alt="item image"
          fill
          className="object-cover  "
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVR4nBXPzUuTcQDA8d8l2SlCEdkhL+XJg+ChCGaU6dww33MqOfPZ9qTTqTjm46ZzPcbefOYIcUP3Ym5EwjqMINIgo0AKVBC8hIeBKYR0yEP/wDf8/Acf8eHwhJ0z2Dv9x9H5Bd+OL5ntkZCsTvZLvzku/aL05y9iUdP4/POC5Os8G9lVPKEMhrom1HkfqXdbJPJZcjvbCEV9ye7XL0RiURwzIfSNPq7VjRHeKJAuFvDH40wHw4hPu9v8OPhOPpug2Wyl+s4wpod9eAIR0oU3aOtJXuUziGQqRSq3ydrqMjazkdr6DjymBnzPJRK5DLH1JPHNNGJyUWMiECGsRVHUKLqaXipqjGy9L/L2Y5HAsoZ/ZQWhhGKMewO43Apmywi6m41U1bYxJE/zVBpn0OHC6X9xlQnijyzhDQZp7R7gxnU95VW3uN/UzSOTBYtVxuFWEAMTs7jmVCYXVO4ajJTpKrmtr+ZJVx+d/XZae6x0PnMi5JExPIpCaM6Nt/0Bjw33GG02MNXWgt0uYxsaRrLJ/AdB9vCPU4NOZwAAAABJRU5ErkJggg=="
        />
      </div>
      {/* <div className="w-full h-10 bg-red-200" /> */}

      <a
        href="/"
        className=" flex justify-center items-center absolute top-[14px] right-3 w-[46px] h-[40px] border-5 rounded-lg border-black "
      >
        <BackIcon className="cursor-pointer " size={30} />
      </a>
      <figcaption className=" flex flex-col text-center gap-[19px] justify-center px-[135px] py-10 items-center w-full bg-white text-darker">
        <h3 className="uppercase text-2xl font-bold">Product ID: {id}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
      </figcaption>
    </figure>
  );
}

function ShoeCheckout({ product }: { product: tProduct }) {
  return (
    <section className=" w-full no-select ">
      <div className="flex flex-col gap-4 px-[25px] sm:px-[63px] py-[31px]">
        <h3 className="header-light">{product.category}</h3>
        <h2>{product.name}</h2>
        {product.discountPrice ? (
          <div className="flex gap-[11px]">
            <h4 className="">${product.discountPrice}</h4>
            <h4 className="text-discount">${product.price}</h4>
          </div>
        ) : (
          <h4 className="">${product.price}</h4>
        )}

        <p className="text-on-black">{product.description}</p>
        <div className="flex gap-[22px]">
          <QuantityPicker />
          <ColorPicker colors={product.colors} />
        </div>
        <SizePicker type={product.sizing} />
        <div className="flex gap-2 ">
          <BagButton size="lg" text="Add To Bag" />
          <HeartButton liked={false} />
        </div>
      </div>
    </section>
  );
}

function ProductDetails({ id }: { id: string }) {
  const breakpoints = [1300, 1400, 1600];
  const breakpointDisplayAmounts = [2, 3, 3, 3];

  return (
    <section className="checkout__productDetails__container ">
      <ItemDisplay id={id} />

      <div className="checkout__productDetails__promos ">
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
