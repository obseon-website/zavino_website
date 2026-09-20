"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { logoPath } from "@/lib/logo";

/**
 * Zavino — Pure SVG Mask Loader (vector-sharp, center-locked, filled-focal)
 * HOTFIX: visible on first paint, robust show-every-reload toggle.
 */

type IntroProps = { force?: boolean };

export function Intro({ force }: IntroProps = {}) {
  const [isComplete, setIsComplete] = useState(false);
  const zoomGroupRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    // ---------- DEBUG / FORCE TOGGLE ----------
    // Force every reload via:
    //  - URL: ?forceIntro or ?intro or ?debug=intro
    //  - localStorage: localStorage.setItem('zavino:forceIntro','1')
    //  - prop: <Intro force />
    // Console helpers injected: __ZAVINO_RESET_INTRO(), __ZAVINO_FORCE_INTRO(true/false)
    const isForced = (() => {
      if (force) return true;
      try {
        const sp = new URLSearchParams(window.location.search);
        if (sp.has("forceIntro") || sp.has("intro") || sp.get("debug") === "intro") return true;
        if (localStorage.getItem("zavino:forceIntro") === "1") return true;
      } catch {}
      return false;
    })();

    try {
      const w = window as unknown as Record<string, () => void>;
      (w as unknown as { __ZAVINO_RESET_INTRO: () => void }).__ZAVINO_RESET_INTRO = () => {
        try { sessionStorage.removeItem("zavino-intro"); console.log("[Zavino] reset — reload"); } catch {}
      };
      (w as unknown as { __ZAVINO_FORCE_INTRO: (on?: boolean) => void }).__ZAVINO_FORCE_INTRO = (on: boolean = true) => {
        try {
          if (on) localStorage.setItem("zavino:forceIntro", "1");
          else localStorage.removeItem("zavino:forceIntro");
          console.log(`[Zavino] force ${on ? "ON" : "OFF"} — reload`);
        } catch {}
      };
      console.log(`[Zavino Intro] isForced=${isForced} seen=${(() => { try { return sessionStorage.getItem("zavino-intro"); } catch { return "err"; } })()} reduce=${window.matchMedia("(prefers-reduced-motion: reduce)").matches}`);
      if (isForced) console.log("[Zavino] FORCED — will show every reload. Run __ZAVINO_FORCE_INTRO(false) to restore.");
    } catch {}

    let seen = false;
    try { seen = sessionStorage.getItem("zavino-intro") === "seen"; } catch {}
    if (isForced) { try { sessionStorage.removeItem("zavino-intro"); } catch {} seen = false; }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if ((seen || prefersReducedMotion) && !isForced) {
      console.log("[Zavino] skipping intro — seen or prefers-reduced-motion");
      const t = window.setTimeout(() => setIsComplete(true), 0);
      return () => clearTimeout(t);
    }

    console.log("[Zavino] intro SHOWING — will zoom in 1.2s");

    const zoomEl = zoomGroupRef.current;
    if (!zoomEl) {
      console.warn("[Zavino] zoomGroup ref missing — retry in 50ms");
      const t = window.setTimeout(() => {
        const el = document.getElementById("zoom-group") as unknown as SVGGElement | null;
        if (el) {
          console.log("[Zavino] retry found zoom-group, starting animation");
          el.animate([{ transform: "scale(1)" }, { transform: "scale(80)" }], { duration: 1200, easing: "cubic-bezier(.76,0,.24,1)", fill: "forwards" }).finished.then(() => setIsComplete(true));
        } else {
          console.error("[Zavino] still no zoom-group — unmounting fallback");
          setIsComplete(true);
        }
      }, 50);
      return () => clearTimeout(t);
    }

    let disposed = false;
    let finished = false;
    const timers: number[] = [];
    const animations: Animation[] = [];

    const cleanupAndUnmount = () => {
      if (disposed || finished) return;
      finished = true;
      console.log("[Zavino] intro finished — unmounting");
      setIsComplete(true);
      try { sessionStorage.setItem("zavino-intro", "seen"); } catch {}
    };

    const infoEl = document.querySelector<HTMLElement>(".intro-info");
    const fadeInfo = () => {
      if (!infoEl || disposed) return;
      animations.push(infoEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, fill: "forwards" }));
    };

    const startZoom = () => {
      if (disposed || finished) return;
      console.log("[Zavino] starting zoom — #zoom-group scale 1→80");
      fadeInfo();
      try {
        const animation = zoomEl.animate([{ transform: "scale(1)" }, { transform: "scale(80)" }], { duration: 1200, easing: "cubic-bezier(.76,0,.24,1)", fill: "forwards" });
        animations.push(animation);
        animation.finished.then(cleanupAndUnmount).catch(cleanupAndUnmount);
        timers.push(window.setTimeout(cleanupAndUnmount, 1400));
      } catch (e) {
        console.error("[Zavino] WAAPI failed, fallback to CSS", e);
        (zoomEl as unknown as HTMLElement).style.animation = "svgMaskZoom 1.2s cubic-bezier(.76,0,.24,1) forwards";
        timers.push(window.setTimeout(cleanupAndUnmount, 1300));
      }
    };

    const heroImg = document.querySelector<HTMLImageElement>("#hero-background");
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const kickoff = Promise.all([(heroImg?.decode?.() ?? Promise.resolve()).catch(() => {}), fontsReady.catch(() => {})]);
    const race = Promise.race([kickoff, new Promise<void>((res) => timers.push(window.setTimeout(res, 700)))]);
    race.then(() => {
      if (disposed || finished) return;
      timers.push(window.setTimeout(startZoom, 120));
    });
    timers.push(window.setTimeout(cleanupAndUnmount, 3500));

    return () => {
      disposed = true;
      timers.forEach(clearTimeout);
      animations.forEach((a) => { try { a.cancel(); } catch {} });
    };
  }, [force]);

  if (isComplete) return null;

  // Fixed overlay — project has NO Tailwind, so Tailwind classes `fixed w-screen` did nothing and it rendered inline.
  // Use inline styles + existing `.intro` stacking (z-index 80 → bump to 9999) to force full-viewport.
  return (
    <div
      aria-label="Loading Zavino"
      className="intro"
      style={{ position: "fixed", inset: 0, zIndex: 9999, width: "100vw", height: "100vh", pointerEvents: "none", overflow: "hidden", isolation: "isolate" } as React.CSSProperties}
      suppressHydrationWarning
    >
      <svg
        className="intro-mask"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", background: "transparent", pointerEvents: "none" } as React.CSSProperties}
      >
        <defs>
          <mask id="screen-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="1000">
            <rect width="1600" height="1000" fill="white" />
            {/* Center-locked, vector-sharp — animate ONLY this g, not the whole SVG */}
            <g
              id="zoom-group"
              ref={zoomGroupRef}
              style={{ transformOrigin: "48% 48%", transformBox: "fill-box" } as React.CSSProperties}
            >
              {/* Original centered transform that WAS showing before: translate(646 346) scale(.3) puts logo at 800,500 dead center. Keep it, just wrap in g. */}
              <path d={logoPath} transform="translate(646 346) scale(.3)" fill="black" />
            </g>
          </mask>
        </defs>
        <rect width="1600" height="1000" fill="#effbf5" mask="url(#screen-mask)" />
      </svg>

      <div className="intro-info" style={{ pointerEvents: "auto" } as React.CSSProperties}>
        <div className="intro-caption">
          <span>PREPARING FOR TAKEOFF</span>
          <span aria-hidden>—</span>
        </div>
        <div className="intro-track">
          <span style={{ animation: "introTrack 1.2s ease-out forwards" } as React.CSSProperties} />
        </div>
      </div>

      <style>{`
        #zoom-group{transform-origin:48% 42%;transform-box:fill-box;will-change:transform}
        @keyframes introTrack{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        @keyframes svgMaskZoom{from{transform:scale(1)}to{transform:scale(80)}}
      `}</style>
    </div>
  );
}
