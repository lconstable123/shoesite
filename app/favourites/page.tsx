import { Metadata } from "next";

import { Suspense } from "react";
import { BagButton } from "../components/ui/buttons";
import { Bag } from "../components/checkout-page";
import { RedDivider } from "../components/RedDivider";
import { Favourites } from "../components/favourites";

export function generateMetadata(): Metadata {
  return {
    title: "Favourites",
    description: "Welcome to the favourites page of our shoe site.",
  };
}

export default function FavouritesPage() {
  return (
    <main className="bg-black w-full flex flex-col items-center justify-center   w-100%">
      {/* <HomePage /> */}
      <RedDivider />
      {/* <Bag /> */}
      <Favourites />
    </main>
  );
}
