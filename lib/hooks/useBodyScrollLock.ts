"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function BodyScrollLock() {
  const params = useSearchParams();
  const dropdownOpen = params.get("dropdown");

  useEffect(() => {
    if (dropdownOpen === "open") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [dropdownOpen]);

  return null;
}
