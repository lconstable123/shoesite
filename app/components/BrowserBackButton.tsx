"use client";

import { BackIcon } from "./Icons";
// import { useNavigate } from "react-router-dom";
export default function BrowserBackButton() {
  return (
    <a
      onClick={() => history.back()}
      className=" flex justify-center items-center bg-black rounded-lg py-1 px-2 absolute top-[14px] right-3 w-[47px] h-[43px] not-first:rounded-lg border-neutral-300 z-300 "
    >
      <BackIcon className="cursor-pointer " white={true} size={40} />
    </a>
  );
}
