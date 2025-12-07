import { useScreenSizeShared } from "@/lib/useScreenSize";
import Carousel from "./Carousel";
import HeroSection from "./HeroSection";
import { PromoSegment } from "@/app/components/promo-segment";

export default function HomePage() {
  return (
    <>
      {/* <HeroSection /> */}
      <section
        className=" h-50 ml-0 mt-0    row-1 w-full bg-cover bg-center flex gap-10 flex-wrap flex-row "
        style={{
          backgroundImage: `url(${"/assets/gallery/bg2/shoebanner_wide.png"})`,
        }}
      />
      {/* <section
        className=" h-20 ml-0 mt-0 row-1 w-full bg-cover bg-center flex gap-10 flex-wrap flex-row "
        style={{
          backgroundImage: `url(${"/assets/placeholders/shoebg.png"})`,
        }}
      /> */}
      <div className="flex flex-col items-center justify-center w-full  ">
        <PromoSegment />

        <div className="w-full  flex justify-center h-auto my-10 ">
          <Carousel
            breakpoints={[800, 1250, 1600]}
            breakpointDisplayAmounts={[2, 3, 5, 7]}
            textAbove="Shop Popular Picks"
            mobile_displayAmount={8}
            products={[]}
          />
        </div>
      </div>
    </>
  );
}
