"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { site } from "@/lib/site";

export function FooterSignature() {
  const wordmark = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = wordmark.current;
    if (!button) return;
    const letters = Array.from(
      button.querySelectorAll<HTMLElement>(".signature-letter"),
    );
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const states = letters.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 }));
    let frame = 0,
      previous = 0,
      pointerId: number | null = null;
    let startX = 0,
      lastX = 0,
      lastTime = 0,
      velocity = 0,
      dragged = false;
    let grab = states.map(() => 0);
    let bounds: DOMRect | undefined;
    // A damped spring preserves position and release velocity when grabbed again.
    const draw = () =>
      letters.forEach((letter, i) => {
        const state = states[i];
        letter.style.transform = `translate3d(${state.x}px,${state.y}px,0) rotate(${state.x * 0.13 - state.y * 0.09}deg)`;
      });
    const tick = (time: number) => {
      const dt = Math.min((time - (previous || time - 16)) / 1000, 0.032);
      previous = time;
      let active = false;
      states.forEach((state) => {
        if (pointerId === null) {
          state.vx += (-260 * state.x - 25 * state.vx) * dt;
          state.x += state.vx * dt;
        }
        state.vy += (-260 * state.y - 25 * state.vy) * dt;
        state.y += state.vy * dt;
        if (
          Math.abs(state.x) +
            Math.abs(state.y) +
            Math.abs(state.vx) +
            Math.abs(state.vy) >
          0.15
        )
          active = true;
      });
      draw();
      frame = active && pointerId === null ? requestAnimationFrame(tick) : 0;
      if (!frame) {
        previous = 0;
        if (pointerId === null)
          letters.forEach((letter) =>
            letter.style.removeProperty("will-change"),
          );
      }
    };
    const start = () => {
      if (!frame) {
        letters.forEach((letter) => {
          letter.style.willChange = "transform";
        });
        frame = requestAnimationFrame(tick);
      }
    };
    const reset = () => {
      if (pointerId !== null && button.hasPointerCapture(pointerId))
        button.releasePointerCapture(pointerId);
      pointerId = null;
      cancelAnimationFrame(frame);
      frame = previous = 0;
      states.forEach((state) => {
        state.x = state.y = state.vx = state.vy = 0;
      });
      letters.forEach((letter) => {
        letter.style.removeProperty("transform");
        letter.style.removeProperty("will-change");
      });
      delete button.dataset.dragging;
    };
    const down = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0 || reduced.matches) return;
      bounds = button.getBoundingClientRect();
      pointerId = event.pointerId;
      button.setPointerCapture(event.pointerId);
      startX = lastX = event.clientX;
      lastTime = event.timeStamp;
      velocity = 0;
      dragged = false;
      grab = states.map((state) => state.x);
      button.dataset.dragging = "true";
    };
    const move = (event: PointerEvent) => {
      if (pointerId !== event.pointerId || !bounds) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 6) dragged = true;
      const limit = Math.min(60, bounds.width * 0.09);
      const travel =
        Math.sign(delta) * limit * (1 - Math.exp(-Math.abs(delta) / limit));
      const dt = Math.max(1, event.timeStamp - lastTime);
      velocity = 0.6 * velocity + 0.4 * (((event.clientX - lastX) / dt) * 1000);
      lastX = event.clientX;
      lastTime = event.timeStamp;
      states.forEach((state, i) => {
        state.x = grab[i] + travel * (0.7 + i * 0.055);
        state.y =
          -Math.sin(((i + 1) / letters.length) * Math.PI) *
          Math.abs(travel) *
          0.3;
      });
      start();
    };
    const release = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      const id = pointerId;
      pointerId = null;
      if (button.hasPointerCapture(id)) button.releasePointerCapture(id);
      const speed =
        event.type === "pointercancel" || event.timeStamp - lastTime > 90
          ? 0
          : Math.max(-450, Math.min(450, velocity));
      states.forEach((state, i) => {
        state.vx = speed * (0.7 + i * 0.055);
      });
      delete button.dataset.dragging;
      start();
    };
    const click = (event: MouseEvent) => {
      if (reduced.matches || event.detail === 0) {
        reset();
        button.dataset.finish =
          button.dataset.finish === "mint" ? "default" : "mint";
        return;
      }
      if (dragged) {
        dragged = false;
        return;
      }
      bounds = button.getBoundingClientRect();
      const origin =
        ((event.clientX - bounds.left) / bounds.width) * letters.length;
      const impulse = Math.min(620, Math.max(420, bounds.width * 0.65));
      states.forEach((state, i) => {
        state.vy = -impulse * Math.exp(-Math.pow(i - origin, 2) / 5);
      });
      start();
    };
    const visibility = () => {
      if (document.hidden) reset();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) reset();
    });
    observer.observe(button);
    button.addEventListener("pointerdown", down);
    button.addEventListener("pointermove", move);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("lostpointercapture", release);
    button.addEventListener("click", click);
    window.addEventListener("resize", reset);
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", reset);
    return () => {
      reset();
      observer.disconnect();
      button.removeEventListener("pointerdown", down);
      button.removeEventListener("pointermove", move);
      button.removeEventListener("pointerup", release);
      button.removeEventListener("pointercancel", release);
      button.removeEventListener("lostpointercapture", release);
      button.removeEventListener("click", click);
      window.removeEventListener("resize", reset);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", reset);
    };
  }, []);

  return (
    <div className="footer-signature">
      <span className="footer-light" aria-hidden="true" />
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
      <button
        type="button"
        className="footer-wordmark"
        ref={wordmark}
        aria-label="Play with the Zavino lettering"
        aria-describedby="signature-hint"
      >
        <span className="footer-sculpture" aria-hidden="true">
          {Array.from("zavino.").map((letter, index) => (
            <span className="signature-letter" key={index}>
              {letter}
            </span>
          ))}
        </span>
      </button>
      <p id="signature-hint" className="signature-hint">
        <span className="signature-pointer-hint">
          Tap a letter. Drag to give it a nudge.
        </span>
        <span className="signature-keyboard-hint">
          Press Enter to change the finish.
        </span>
      </p>
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
