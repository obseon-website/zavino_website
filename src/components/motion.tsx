"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0, transform: "translateY(26px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 800,
                easing: "cubic-bezier(.16,1,.3,1)",
                fill: "both",
              },
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13 },
    );
    elements.forEach((e) => observer.observe(e));
    return () => {
      observer.disconnect();
      elements.forEach((e) => e.getAnimations().forEach((a) => a.cancel()));
    };
  }, [pathname]);
  return null;
}
