import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black flex flex-col justify-start  w-100%">
      <Header isDropdownOpen={true} selected="SPORTS" />
      {/* Hero Section */}
      <HeroSection />

      {/* <div className="bg-black h-[446px] w-full" /> */}

      <div className="flex flex-col items-center justify-center py-10 w-full ">
        <Carousel
          sm_displayAmount={2}
          md_displayAmount={3}
          lg_displayAmount={5}
          xl_displayAmount={7}
          mobile_displayAmount={8}
          products={[]}
        />
      </div>

      <Footer />
    </div>
  );
}
