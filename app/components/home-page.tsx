"use client";
import { useScreenSizeShared } from "@/lib/useScreenSize";
import Carousel from "./Carousel";
import HeroSection from "./HeroSection";
import { PromoSegment } from "@/app/components/promo-segment";
import Image from "next/image";
import { generateTinyUrl2 } from "@/lib/utils";
import { motion } from "framer-motion";
import { productsById } from "@/lib/product-data";
import { RedDivider } from "./RedDivider";

export default function HomePage() {
  const carousels = productsById["sweatlodge-shoe"]?.carousels || [];

  return (
    <>
      <BannerImage />
      <PromoSegment />
      <RedDivider />
      <div className="w-full flex justify-center h-auto my-10 ">
        <Carousel
          breakpoints={[800, 1250, 1600]}
          breakpointDisplayAmounts={[2, 3, 5, 7]}
          textAbove="Shop Popular Picks"
          mobile_displayAmount={8}
        />
      </div>
    </>
  );
}

function BannerImage() {
  const image = "/assets/gallery/bg2/shoebanner_wide.webp";
  const Tiny = generateTinyUrl2(image);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className=" h-65  relative   w-full no-select  "
    >
      <Image
        src={image}
        priority
        loading="eager"
        alt="Banner"
        fill
        className="object-cover  no-select"
        placeholder="blur"
        blurDataURL={Tiny}
      />
      <div className=" absolute  bottom-0 w-full  ">
        <RedDivider />
      </div>
      {/* <div className=" absolute  top-0 w-full  ">
        <RedDivider />
      </div> */}
    </motion.section>
  );
}
