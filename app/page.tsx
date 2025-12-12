import { Metadata } from "next";
import HomePage from "./components/home-page";
import { Suspense } from "react";

export function generateMetadata(): Metadata {
  return {
    title: "VirtaullyAnything Ecommerce Demo",
    description: "Discover premium footwear.",
    openGraph: {
      title: "VirtaullyAnything Ecommerce Demo",
      description: "Discover premium footwear with style and comfort.",
      url: "https://shoesite-sooty.vercel.app/",
      siteName: "Shoe Store",
      images: [
        {
          url: "https://shoesite-sooty.vercel.app/assets/gallery/rodney-mullet/rodney-mullet-promo.webp",

          width: 1200,
          height: 630,
          alt: "Featured Shoe",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <main className="bg-black flex flex-col justify-start w-100%">
      <HomePage />
    </main>
  );
}
