import React from "react";

export default function HeroSection() {
  // This would be the actual background image URL from the Figma design
  const heroImageUrl = "/api/placeholder/1438/728";

  return (
    <div className="grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-0">
      <div className="col-1 grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start ml-0 mt-0 row-1">
        <div
          className="col-1 h-[728px] ml-0 mt-0 row-1 w-[1438px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
          }}
        />
      </div>
    </div>
  );
}
