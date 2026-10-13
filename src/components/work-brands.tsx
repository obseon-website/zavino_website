"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Pause, Play } from "@phosphor-icons/react";
import styles from "./work-brands.module.css";

const brands = [
  { id: "rancon", name: "Rancon", width: 217, height: 30 },
  { id: "halda-valley", name: "Halda Valley", width: 384, height: 121 },
  { id: "ventro", name: "Ventro", width: 384, height: 64 },
  { id: "steak-and-marrow", name: "Steak & Marrow", width: 384, height: 152 },
  { id: "borsalle", name: "Borsalle", width: 384, height: 91 },
  { id: "saus-taus", name: "Saus Taus", width: 163, height: 130 },
  { id: "nawabi-delight", name: "Nawabi Delight", width: 384, height: 138 },
  { id: "popsicles", name: "Popsicles", width: 384, height: 74 },
  { id: "thanda-garam", name: "Thanda Garam", width: 384, height: 40 },
  { id: "chair-line", name: "Chair Line", width: 384, height: 178 },
  {
    id: "mk-electronics",
    name: "MK Electronics",
    width: 80,
    height: 12,
    vector: true,
  },
  {
    id: "british-bangla-travel",
    name: "British Bangla Travel Ltd",
    width: 384,
    height: 68,
  },
];

export function WorkBrands() {
  const section = useRef<HTMLElement>(null);
  const animations = useRef(new Map<HTMLElement, Animation>());
  const [paused, setPaused] = useState(false);
  const [keyboard, setKeyboard] = useState(false);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const active = animations.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reset = () => {
      active.forEach((animation) => animation.cancel());
      active.clear();
      delete element.dataset.reacting;
    };
    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.onstage = String(entry.isIntersecting);
      if (!entry.isIntersecting) reset();
    });
    const visibility = () => {
      element.dataset.visible = String(!document.hidden);
      if (document.hidden) reset();
    };
    visibility();
    observer.observe(element);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", reset);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", reset);
      reset();
    };
  }, []);

  function reactToLogo(event: MouseEvent<HTMLButtonElement>) {
    const logo = event.currentTarget.querySelector<HTMLElement>("[data-logo]");
    if (!logo || !section.current) return;
    const still =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      event.detail === 0;
    const startingPose = getComputedStyle(logo).transform;
    animations.current.get(logo)?.cancel();
    const animation = logo.animate(
      still
        ? [{ opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }]
        : [
            { transform: startingPose },
            {
              transform: "translate3d(-5px, -2px, 0) rotate(-6deg) scale(1.06)",
              offset: 0.17,
            },
            {
              transform: "translate3d(5px, 0, 0) rotate(5deg) scale(1.04)",
              offset: 0.34,
            },
            {
              transform: "translate3d(-3px, 0, 0) rotate(-3deg) scale(1.02)",
              offset: 0.51,
            },
            { transform: "translate3d(2px, 0, 0) rotate(2deg)", offset: 0.68 },
            {
              transform: "translate3d(-1px, 0, 0) rotate(-1deg)",
              offset: 0.84,
            },
            { transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)" },
          ],
      { duration: still ? 180 : 560, easing: "ease-out" },
    );
    animations.current.set(logo, animation);
    section.current.dataset.reacting = "true";
    const finish = () => {
      if (animations.current.get(logo) !== animation) return;
      animations.current.delete(logo);
      if (!animations.current.size && section.current) {
        delete section.current.dataset.reacting;
      }
    };
    animation.onfinish = finish;
    animation.oncancel = finish;
  }

  return (
    <section
      ref={section}
      className={styles.section}
      id="client-brands"
      aria-labelledby="work-brands-heading"
      data-paused={paused}
      data-keyboard={keyboard}
      onFocusCapture={(event) => {
        if (event.target.matches(":focus-visible")) setKeyboard(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setKeyboard(false);
      }}
    >
      <div className={`section-shell ${styles.heading}`}>
        <div>
          <h2 id="work-brands-heading">Brands we worked with.</h2>
        </div>
        <button
          type="button"
          className={styles.control}
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Resume logo motion" : "Pause logo motion"}
          aria-controls="work-brands-track"
        >
          {paused ? (
            <Play size={16} aria-hidden="true" />
          ) : (
            <Pause size={16} aria-hidden="true" />
          )}
          <span>{paused ? "Play" : "Pause"}</span>
        </button>
      </div>
      <div className={styles.viewport}>
        <div className={styles.track} id="work-brands-track">
          {[0, 1].map((copy) => (
            <ul
              className={styles.set}
              key={copy}
              aria-hidden={copy === 1 || undefined}
            >
              {brands.map((brand) => (
                <li className={styles.item} key={brand.id}>
                  <button
                    type="button"
                    className={styles.logoButton}
                    tabIndex={copy === 1 ? -1 : undefined}
                    aria-label={`Give ${brand.name} a nudge`}
                    onPointerDown={
                      copy === 1 ? (event) => event.preventDefault() : undefined
                    }
                    onClick={reactToLogo}
                  >
                    <span className={styles.mark} data-logo>
                      <Image
                        src={`/clients/${brand.id}.${brand.vector ? "svg" : "webp"}`}
                        alt=""
                        width={brand.width}
                        height={brand.height}
                        draggable={false}
                        loading="eager"
                        className={styles.image}
                      />
                    </span>
                    <span className={styles.name}>{brand.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
