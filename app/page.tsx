import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen w-full">
      {/* Main content frame */}

      {/* Header with navigation and dropdown */}
      <Header isDropdownOpen={true} selected="SPORTS" />
      {/* Hero Section */}
      <HeroSection />
      {/* Black spacer */}
      <div className="bg-black h-[446px] w-full" />

      {/* <div className="absolute flex flex-col items-center left-1/2 top-[834px] translate-x-[-50%]">
        <Carousel products={[]} />
      </div> */}

      <Footer />
    </div>
  );
}
