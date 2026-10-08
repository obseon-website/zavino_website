"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { site } from "@/lib/site";

export function FooterSignature() {
  const root = useRef<HTMLDivElement>(null);
  const sculpture = useRef<HTMLSpanElement>(null);
  const light = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let bounds: DOMRect | undefined;
    let x = 0.5,
      y = 0.5;
    const draw = () => {
      frame = 0;
      if (sculpture.current)
        sculpture.current.style.transform = `rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 7}deg) translate3d(${(x - 0.5) * 10}px,0,0)`;
      if (light.current)
        light.current.style.transform = `translate3d(${(x - 0.5) * 120}%,${(y - 0.5) * 50}%,0)`;
    };
    const enter = () => {
      bounds = element.getBoundingClientRect();
    };
    const move = (event: PointerEvent) => {
      if (!motion.matches || !pointer.matches || event.pointerType !== "mouse")
        return;
      bounds ??= element.getBoundingClientRect();
      x = Math.min(
        1,
        Math.max(0, (event.clientX - bounds.left) / bounds.width),
      );
      y = Math.min(
        1,
        Math.max(0, (event.clientY - bounds.top) / bounds.height),
      );
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (sculpture.current)
        sculpture.current.style.removeProperty("transform");
      if (light.current) light.current.style.removeProperty("transform");
      bounds = undefined;
    };
    element.addEventListener("pointerenter", enter);
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    element.addEventListener("focusin", reset);
    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("resize", reset, { passive: true });
    motion.addEventListener("change", reset);
    pointer.addEventListener("change", reset);
    return () => {
      reset();
      element.removeEventListener("pointerenter", enter);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      element.removeEventListener("focusin", reset);
      window.removeEventListener("scroll", reset);
      window.removeEventListener("resize", reset);
      motion.removeEventListener("change", reset);
      pointer.removeEventListener("change", reset);
    };
  }, []);

  return (
    <div className="footer-signature" ref={root}>
      <span className="footer-light" ref={light} aria-hidden="true" />
      <div className="signature-topline section-shell">
        <p>
          Independent minds.
          <br />
          Connected work.
        </p>
        <Link href="/contact" className="signature-invite">
          Have something in mind?
          <span>
            Let’s make it happen <ArrowUpRight size={22} aria-hidden="true" />
          </span>
        </Link>
      </div>
      <Link className="footer-wordmark" href="/" aria-label="Zavino homepage">
        <span className="footer-sculpture" ref={sculpture} aria-hidden="true">
          zavino<span>.</span>
        </span>
      </Link>
      <div className="signature-baseline section-shell">
        <span>Where vision takes flight.</span>
        <a href={`mailto:${site.email}`}>
          {site.email}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <span>Dhaka, Bangladesh</span>
      </div>
    </div>
  );
}
