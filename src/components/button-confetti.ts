"use client";

import { useCallback, useEffect, useRef, type MouseEvent } from "react";

/** One brief, button-origin celebration for a completed local example. */
export function useButtonConfetti() {
  const active = useRef<(() => void) | null>(null);
  const cancel = useCallback(() => {
    active.current?.();
    active.current = null;
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visibility = () => {
      if (document.hidden) cancel();
    };
    reduced.addEventListener("change", cancel);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancel();
      reduced.removeEventListener("change", cancel);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [cancel]);

  const celebrate = useCallback(
    (
      event: Pick<MouseEvent<HTMLButtonElement>, "currentTarget" | "detail">,
    ) => {
      cancel();
      // Completion text still updates immediately for keyboard and reduced motion.
      if (
        event.detail === 0 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;

      const bounds = event.currentTarget.getBoundingClientRect();
      const originX = bounds.left + bounds.width / 2;
      const originY = bounds.top + bounds.height / 3;
      const layer = document.createElement("div");
      layer.className = "button-confetti";
      layer.setAttribute("aria-hidden", "true");
      const animations: Animation[] = [];
      const colors = [
        "var(--forest-700)",
        "var(--forest-500)",
        "var(--sand)",
        "var(--forest-800)",
      ];
      // The 760–920ms particles are rare completion feedback; the control never waits.
      for (let index = 0; index < 18; index++) {
        const piece = document.createElement("i");
        piece.className = "button-confetti-piece";
        piece.style.background = colors[index % colors.length];
        piece.style.width = `${4 + (index % 3)}px`;
        piece.style.height = `${6 + (index % 4)}px`;
        piece.style.borderRadius = index % 4 === 0 ? "50%" : "1px";
        layer.appendChild(piece);
      }
      document.body.appendChild(layer);
      Array.from(layer.children).forEach((element, index) => {
        const angle = ((-158 + index * (136 / 17)) * Math.PI) / 180;
        const reach = 68 + ((index * 19) % 60);
        const x = Math.cos(angle) * reach;
        const y = Math.sin(angle) * reach;
        const rotation = (index % 2 === 0 ? 1 : -1) * (90 + index * 17);
        animations.push(
          element.animate(
            [
              {
                transform: `translate3d(${originX}px,${originY}px,0) rotate(0deg)`,
                opacity: 1,
                offset: 0,
              },
              {
                transform: `translate3d(${originX + x * 0.8}px,${originY + y}px,0) rotate(${rotation * 0.55}deg)`,
                opacity: 1,
                offset: 0.42,
              },
              {
                transform: `translate3d(${originX + x}px,${originY + y + 65}px,0) rotate(${rotation}deg)`,
                opacity: 0,
                offset: 1,
              },
            ],
            {
              duration: 760 + (index % 5) * 40,
              easing: "cubic-bezier(0.23, 1, 0.32, 1)",
              fill: "forwards",
            },
          ),
        );
      });
      const cleanup = () => {
        animations.forEach((animation) => animation.cancel());
        layer.remove();
      };
      active.current = cleanup;
      void Promise.allSettled(
        animations.map((animation) => animation.finished),
      ).then(() => {
        cleanup();
        if (active.current === cleanup) active.current = null;
      });
    },
    [cancel],
  );

  return { celebrate, cancel };
}
