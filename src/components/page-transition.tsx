"use client";

import { useEffect, ViewTransition } from "react";
import { usePathname } from "next/navigation";

/** Native Next/React transitions preserve links, history, focus and prefetching. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    const rememberInput = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("a[href]")) {
        document.documentElement.dataset.navigationInput =
          event.detail === 0 ? "keyboard" : "pointer";
      }
    };
    document.addEventListener("click", rememberInput, true);
    return () => {
      document.removeEventListener("click", rememberInput, true);
      delete document.documentElement.dataset.navigationInput;
    };
  }, []);
  return (
    <ViewTransition
      key={pathname}
      name="page-content"
      share="route-blur"
      enter="route-blur"
      exit="route-blur"
      default="none"
    >
      <div className="page-transition">{children}</div>
    </ViewTransition>
  );
}
