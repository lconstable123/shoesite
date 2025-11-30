"use client";
import { useScreenSizeShared } from "@/lib/useScreenSize";
import Carousel from "./Carousel";
import HeroSection from "./HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col items-center justify-center py-10 w-full ">
        <Carousel
          breakpoints={[800, 1250, 1600]}
          breakpointDisplayAmounts={[2, 3, 5, 7]}
          textAbove="Shop Popular Picks"
          mobile_displayAmount={8}
          products={[]}
        />
      </div>
    </>
  );
}
