"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const LinkButton = ({ text, id }: { text: string; id: string }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <Link
      // key={index}
      className="hover:scale-105  list__item cursor-pointer button__state no-select mt-3 w-20 max-w-30 h-6! flex justify-center! items-center! bg-black"
      href={`/product/${id}${category ? `?category=${category}` : ""}`}
    >
      {/* <p className="no-select text-black">{productNamesFromId[item]}</p> */}
      <p className="h-3  px-0! leading-3!">{text}</p>
    </Link>
  );
};
