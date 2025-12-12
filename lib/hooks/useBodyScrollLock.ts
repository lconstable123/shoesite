"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function BodyScrollLock(
  dropdownOpen: boolean,
  isVisible: boolean
) {
  // const params = useSearchParams();
  // const dropdownOpen = params.get("dropdown");
  function preventDefault(e: TouchEvent) {
    e.preventDefault();
  }

  useEffect(() => {
    if (dropdownOpen && isVisible) {
      // toast.success("lock");
      window.scrollTo(0, 0);
      // document.body.style.overflowY = "hidden";
      // document.body.addEventListener("touchmove", preventDefault, {
      //   passive: false,
      // });
      disableBodyScroll(document.body);
    } else {
      // toast.success("unlock");

      // document.body.style.overflowY = "";
      // document.body.removeEventListener("touchmove", preventDefault);
      enableBodyScroll(document.body);
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
