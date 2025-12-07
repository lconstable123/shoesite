import { Metadata } from "next";
import HomePage from "./components/home-page";
import { Suspense } from "react";

export function generateMetadata(): Metadata {
  return {
    title: "Home Page",
    description: "Welcome to the home page of our shoe site.",
  };
}

export default function Home() {
  return (
    <main className="bg-black flex flex-col justify-start   w-100%">
      <Suspense fallback={<div>Loading search params…</div>}>
        <HomePage />
      </Suspense>
    </main>
  );
}
