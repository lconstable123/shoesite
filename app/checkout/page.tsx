import { Metadata } from "next";

import { Suspense } from "react";
import { BagButton } from "../components/ui/buttons";
import { Bag } from "../components/checkout-page";
import { RedDivider } from "../components/RedDivider";

export function generateMetadata(): Metadata {
  return {
    title: "Home Page",
    description: "Welcome to the home page of our shoe site.",
  };
}

export default function CheckoutPage() {
  return (
    <main className="bg-black flex flex-col items-center justify-center   w-100%">
      {/* <HomePage /> */}
      <RedDivider />
      <Bag />
    </main>
  );
}
