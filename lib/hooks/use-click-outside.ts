import { RefObject, useEffect, useRef } from "react";

export function useClickOutside(
  ref: RefObject<HTMLDivElement | null>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current) return;
      // If click happened outside the ref's element
      if (!ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
