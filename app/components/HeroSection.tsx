import React from "react";

export default function HeroSection() {
  // This would be the actual background image URL from the Figma design
  const heroImageUrl = "/api/placeholder/1438/728";

  return (
    <section
      className=" h-150 ml-0 mt-0 row-1 w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${"/assets/placeholders/shoebg.png"})`,
      }}
    />
  );
}
