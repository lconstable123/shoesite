import React from "react";
import ShoeLogo from "@/assets/icons/logo/shoe.svg";
// Icon component data URLs - these would typically come from Figma or be SVG files
const iconData = {
  chevronLeft:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMTVMMTIuNSA1TDcuNSAxMEwxMi41IDE1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+",
  chevronDown:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDZsLTQuNSA0LjVMMyA2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=",
  heart:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE4Qzk1IDEzIDIgOS41IDIgNkMyIDQgNCAxIDcgMUMxMCAxIDEwIDYgMTAgNkMxMCA2IDEwIDEgMTMgMUMxNiAxIDE4IDQgMTggNkMxOCA5LjUgMTUgMTMgMTAgMThaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=",
  heartFilled:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE4Qzk1IDEzIDIgOS41IDIgNkMyIDQgNCAxIDcgMUMxMCAxIDEwIDYgMTAgNkMxMCA2IDEwIDEgMTMgMUMxNiAxIDE4IDQgMTggNkMxOCA5LjUgMTUgMTMgMTAgMThaIiBmaWxsPSIjY2YyNzI3Ii8+Cjwvc3ZnPg==",
  profile:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSI3IiByPSIzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNNSAxNmMwLTMuMyAyLjItNiA1LTZzNSAyLjcgNSA2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=",
  bag: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgNWgxNGwtMSAxMEgzTDMgNXoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik03IDVWM2EyIDIgMCAwIDEgNCAwdjJNNyA4djJhMiAyIDAgMCAwIDQgMFY4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=",
  search:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Im0xMyAxM2w0IDQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==",
  logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjUgNDJDMzIuOTM5OSA0MiA0MS41IDMzLjQzOTkgNDEuNSAyM0M0MS41IDEyLjU2MDEgMzIuOTM5OSA0IDIyLjUgNEMxMi4wNjAxIDQgMy41IDEyLjU2MDEgMy41IDIzQzMuNSAzMy40Mzk5IDEyLjA2MDEgNDIgMjIuNSA0MloiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KPHN2ZyB4PSIxMCIgeT0iMTAiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CjxwYXRoIGQ9Ik0gNSA1IEMgMTAgNSAxNSA4IDIwIDEwIEMgMTUgMTUgMTAgMjAgNSAyMCBDIDUgMTUgNSAxMCA1IDUgWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cjwvc3ZnPg==",
  flag: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgM1YxN001IDNIMTJMMTEgNkgxMlYxMkg1VjNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=",
};

interface IconProps {
  className?: string;
  size?: number;
}

export function ChevronLeft({ className, size = 20 }: IconProps) {
  return (
    <img
      alt=""
      className={className || "block max-w-none size-full "}
      src="/assets/icons/icon/chevron-left.svg"
      style={{ width: size, height: size }}
    />
  );
}
export function ChevronRight({ className, size = 20 }: IconProps) {
  return (
    <img
      alt=""
      className={className || "block max-w-none size-full rotate-180"}
      src="/assets/icons/icon/chevron-left.svg"
      style={{ width: size, height: size }}
    />
  );
}

export function ChevronDown({ className, size = 15 }: IconProps) {
  return (
    <img
      alt=""
      className={className || "block max-w-none size-full"}
      src={iconData.chevronDown}
      style={{ width: size, height: size }}
    />
  );
}

export function HeartIcon({
  className,
  size = 20,
  filled = false,
}: IconProps & { filled?: boolean }) {
  return (
    <img
      alt=""
      className={className || "block max-w-none size-full"}
      src="/assets/icons/icon/heart-full.svg"
      style={{ width: size, height: size }}
    />
  );
}

export function ProfileIcon({ className, size = 20 }: IconProps) {
  return (
    <img
      alt=""
      className={className || "block max-w-none size-full"}
      src="/assets/icons/icon/profile.svg"
      style={{ width: size, height: size }}
    />
  );
}

export function BagIcon({ className, size = 20 }: IconProps) {
  return (
    <img
      alt=""
      className={className || "block max-w-none size-full"}
      src="/assets/icons/icon/bag.svg"
      style={{ width: size, height: size }}
    />
  );
}

export function SearchIcon({
  className,
  size = 10,
  color = "white",
}: IconProps & { color?: "white" | "black" }) {
  return (
    <img
      alt=""
      className={className || "block max-w-none size-full"}
      src={`${
        color == "black"
          ? "/assets/icons/foundation_magnifying-glass.svg"
          : "/assets/icons/maginfying-white.svg"
      }`}
      style={{ width: size, height: size }}
    />
  );
}

export function LogoIcon({ className, size = 45 }: IconProps) {
  return (
    <img
      alt="Shoe Logo"
      className={className || "block max-w-none size-full"}
      src="/assets/icons/logo/shoe.svg"
      style={{ width: size, height: size }}
    />
  );
}
export function MenuIcon({ className, size = 45 }: IconProps) {
  return (
    <img
      alt="menu"
      className={className || "block max-w-none size-full"}
      src="/assets/icons/icon/menu-white.svg"
      style={{ width: size, height: size }}
    />
  );
}

export function FlagIcon({ className, size = 20 }: IconProps) {
  return (
    <img
      alt=""
      className={className || "block max-w-none size-full"}
      src="/assets/icons/icon/flag.svg"
      style={{ width: size, height: size }}
    />
  );
}
