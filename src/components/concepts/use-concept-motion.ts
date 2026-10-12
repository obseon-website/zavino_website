"use client";

import { useRef } from "react";

/** Shared input handling only; each page owns its scene and state machine. */
export function useConceptMotion() {
  const ref = useRef<HTMLDivElement>(null);
  return {
    ref,
    onPointerDownCapture: () => {
      if (ref.current) ref.current.dataset.input = "pointer";
    },
    onKeyDownCapture: () => {
      if (ref.current) ref.current.dataset.input = "keyboard";
    },
  };
}
