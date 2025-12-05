import { tPromoData } from "@/lib/types";
import Carousel from "./Carousel";
import { generateTinyUrl } from "@/lib/utils";
import Image from "next/image";
import { BackIcon } from "./Icons";

export function PointOfSale({ promoData }: { promoData: tPromoData | null }) {
  const breakpoints = [1200, 1400, 1600];
  const breakpointDisplayAmounts = [2, 3, 3, 3];

  return (
    <section className="checkout__pos__container ">
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

      <a
        href="/"
        className=" flex justify-center items-center absolute top-[14px] right-3 w-[46px] h-[40px] border-5 rounded-lg border-black "
      >
        <BackIcon className="cursor-pointer " size={30} />
      </a>
      <figcaption className=" flex flex-col text-center gap-[19px] justify-center py-4 items-center w-full ">
        <p>{promoData?.promoByline}</p>
      </figcaption>
    </figure>
  );
}
