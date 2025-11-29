"use client";
import { useScreenSizeShared } from "@/lib/useScreenSize";
import Carousel from "./Carousel";
import HeroSection from "./HeroSection";

export default function HomePage() {
  const breakpoints = [800, 1250, 1600];
  const { isMobile, widthCategory: width } = useScreenSizeShared(
    breakpoints[0],
    breakpoints[1],
    breakpoints[2]
  );
  return (
    <>
      <HeroSection />
      <div className="flex flex-col items-center justify-center py-10 w-full ">
        <Carousel
          isMobile={isMobile}
          width={width}
          breakpoints={breakpoints}
          breakpointDisplayAmounts={[2, 3, 5, 7]}
          textAbove="Shop Popular Picks"
          mobile_displayAmount={8}
          products={[]}
        />
      </div>
    </>
  );
}
