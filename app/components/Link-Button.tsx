"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const LinkButton = ({ text, id }: { text: string; id: string }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <Link
      // key={index}
      className="list__item cursor-pointer button__state no-select mt-3 w-20"
      href={`/product/${id}${category ? `?category=${category}` : ""}`}
    >
      {/* <p className="no-select text-black">{productNamesFromId[item]}</p> */}
      <p>{text}</p>
    </Link>
  );
};
