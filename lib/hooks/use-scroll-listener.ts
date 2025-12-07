import { useEffect } from "react";

export function useScrollListener({ handler }: { handler: () => void }) {
  useEffect(() => {
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
}
