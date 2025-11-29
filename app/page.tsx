import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { Metadata } from "next";
import HomePage from "./components/home-page";

export function generateMetadata(): Metadata {
  return {
    title: "Home Page",
    description: "Welcome to the home page of our shoe site.",
  };
}

export default function Home() {
  return (
    <main className="bg-black flex flex-col justify-start  w-100%">
      <HomePage />
    </main>
  );
}
