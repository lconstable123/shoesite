import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Home Page",
    description: "Welcome to the home page of our shoe site.",
  };
}

export default function Home() {
  return (
    <main className="bg-black flex flex-col justify-start  w-100%">
      <HeroSection />
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
    </main>
  );
}
