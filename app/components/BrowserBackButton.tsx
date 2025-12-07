"use client";

import { BackIcon } from "./Icons";
// import { useNavigate } from "react-router-dom";
export default function BrowserBackButton() {
  return (
    <a
      onClick={() => history.back()}
      className=" flex justify-center items-center absolute top-[14px] right-3 w-[46px] h-[40px] border-5 rounded-lg border-black z-300 "
    >
      <BackIcon className="cursor-pointer " size={30} />
    </a>
  );
}
