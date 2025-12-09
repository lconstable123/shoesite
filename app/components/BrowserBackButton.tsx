"use client";

import { BackIcon } from "./Icons";
// import { useNavigate } from "react-router-dom";
export default function BrowserBackButton() {
  return (
    <a
      onClick={() => history.back()}
      className=" flex justify-center items-center absolute top-[14px] right-3 w-[46px] h-[40px] not-first:rounded-lg border-neutral-300 z-300 "
    >
      <BackIcon className="cursor-pointer " white={true} size={40} />
    </a>
  );
}
