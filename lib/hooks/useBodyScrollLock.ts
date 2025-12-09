"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function BodyScrollLock(
  dropdownOpen: boolean,
  isVisible: boolean
) {
  // const params = useSearchParams();
  // const dropdownOpen = params.get("dropdown");

  useEffect(() => {
    if (dropdownOpen && isVisible) {
      // toast.success("lock");
      document.body.style.overflowY = "hidden";
    } else {
      // toast.success("unlock");
      document.body.style.overflowY = "";
    }
  }, [dropdownOpen, isVisible]);

  // useEffect(() => {
  //   if (!isVisible) {
  //     document.body.style.overflowY = "";
  //   } else {
  //     if (dropdownOpen) {
  //       document.body.style.overflowY = "hidden";
  //     }
  //   }
  // }, [isVisible]);

  return null;
}
