"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { WidthCategory } from "./types";

let subscribers: ((width: number, height: number) => void)[] = [];

function notifySubscribers(width: number, height: number) {
  subscribers.forEach((fn) => fn(width, height));
}

if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    notifySubscribers(window.innerWidth, window.innerHeight);
  });
}

export function useScreenSizeShared(
  small: number,
  medium: number,
  large: number
): { isMobile: boolean; widthCategory: WidthCategory } {
  const [hydrated, setHydrated] = useState(false);
  const [size, setSize] = useState({
    width:
      typeof window !== "undefined" && hydrated ? window.innerWidth : small,
    height:
      typeof window !== "undefined" && hydrated ? window.innerHeight : small,
  });

  useEffect(() => {
    const subscriber = (width: number, height: number) => {
      setSize({ width, height });
    };
    subscribers.push(subscriber);

    // cleanup
    return () => {
      subscribers = subscribers.filter((s) => s !== subscriber);
    };
  }, []);

  const calculateWidth = (width: number) => {
    if (width < small) return "small";
    if (width < medium) return "medium";
    if (width < large) return "large";
    return "extralarge";
  };
  const calculateIsMobile = (width: number) => {
    return width < 650;
  };
  useEffect(() => {
    setHydrated(true);

    const handleInitial = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleInitial();

    return () => setHydrated(false);
  }, []);

  return {
    isMobile: calculateIsMobile(size.width),
    widthCategory: calculateWidth(size.width),
  };
}
