"use client";
import { useLayoutEffect, useRef } from "react";
import { logoPath } from "@/lib/logo";

export function Intro() {
  const root = useRef<HTMLDivElement>(null);
  const mask = useRef<SVGSVGElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem("zavino-intro") === "seen";
    } catch {
      /* Private browsers can disable storage. */
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    element.hidden = false;
    let disposed = false,
      finished = false,
      revealing = false,
      frame = 0,
      amount = 0,
      target = 12;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const animations: Animation[] = [];
    const end = () => {
      if (disposed || finished) return;
      finished = true;
      element.hidden = true;
      cancelAnimationFrame(frame);
      try {
        sessionStorage.setItem("zavino-intro", "seen");
      } catch {
        /* No storage is needed for navigation. */
      }
    };
    const tick = () => {
      amount += (target - amount) * 0.14;
      if (progress.current)
        progress.current.textContent = String(Math.round(amount)).padStart(
          3,
          "0",
        );
      if (bar.current) bar.current.style.transform = `scaleX(${amount / 100})`;
      if (!disposed && !finished) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const reveal = () => {
      if (disposed || finished) return;
      revealing = true;
      target = 100;
      timers.push(
        setTimeout(() => {
          if (disposed || finished) return;
          amount = 100;
          if (progress.current) progress.current.textContent = "100";
          if (bar.current) bar.current.style.transform = "scaleX(1)";
          const info = element.querySelector(".intro-info");
          if (info)
            animations.push(
              info.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 160,
                fill: "forwards",
              }),
            );
          const animation = mask.current?.animate(
            [{ transform: "scale(1)" }, { transform: "scale(100)" }],
            {
              duration: window.matchMedia("(max-width: 799px)").matches
                ? 650
                : 1000,
              easing: "cubic-bezier(.76,0,.24,1)",
              fill: "forwards",
            },
          );
          if (animation) {
            animations.push(animation);
            void animation.finished.then(end).catch(() => {});
          } else end();
        }, 180),
      );
    };
    const heroImage =
      document.querySelector<HTMLImageElement>("#hero-background");
    const ready = Promise.all([
      (heroImage?.decode() || Promise.resolve())
        .catch(() => {})
        .then(() => {
          if (!revealing) target += 58;
        }),
      document.fonts.ready.then(() => {
        if (!revealing) target += 25;
      }),
    ]);
    void Promise.race([
      ready,
      new Promise<void>((resolve) => timers.push(setTimeout(resolve, 1400))),
    ]).then(reveal);
    timers.push(setTimeout(end, 3000)); // A failed asset or animation must never block the website.
    skip.current?.addEventListener("click", end);
    const button = skip.current;
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      animations.forEach((a) => a.cancel());
      button?.removeEventListener("click", end);
      element.hidden = true;
    };
  }, []);
  return (
    <div className="intro" ref={root} hidden aria-label="Opening Zavino">
      <svg
        className="intro-mask"
        ref={mask}
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <mask
            id="zavino-window"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1600"
            height="1000"
          >
            <rect width="1600" height="1000" fill="white" />
            <path
              d={logoPath}
              transform="translate(646 346) scale(.3)"
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="1600"
          height="1000"
          fill="#b9c4ac"
          mask="url(#zavino-window)"
        />
      </svg>
      <div className="intro-info">
        <div className="intro-caption">
          <span>PREPARING FOR TAKEOFF</span>
          <span>
            <span ref={progress}>000</span>%
          </span>
        </div>
        <div className="intro-track">
          <span ref={bar} />
        </div>
        <button ref={skip}>Skip intro ↗</button>
      </div>
    </div>
  );
}
