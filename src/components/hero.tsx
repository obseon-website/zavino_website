"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, Play } from "@phosphor-icons/react";
import { Intro } from "./intro";
import { MediaDialog, type MediaItem } from "./media-dialog";
import { reels, reelMedia } from "@/lib/reels";

const trailImages = [
  "jeep",
  "halda",
  "popsicles",
  "proton",
  "ventro",
  "chairline",
];

export function Hero() {
  const zone = useRef<HTMLElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<MediaItem | null>(null);
  useEffect(() => {
    const element = zone.current,
      trail = layer.current;
    if (!element || !trail) return;
    const mq = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let index = 0,
      lastX = -1000,
      lastY = -1000,
      lastTime = 0;
    const items = Array.from(trail.children) as HTMLElement[];
    const move = (event: PointerEvent) => {
      if (!mq.matches || (event.target as HTMLElement).closest("a,button"))
        return;
      const now = performance.now();
      if (
        now - lastTime < 95 ||
        Math.hypot(event.clientX - lastX, event.clientY - lastY) < 85
      )
        return;
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left,
        y = event.clientY - rect.top;
      const card = items[index % items.length];
      card.getAnimations().forEach((a) => a.cancel());
      card.style.left = `${x}px`;
      card.style.top = `${y}px`;
      card.style.zIndex = String(index + 1);
      const angle = [-9, 7, -4, 11, -7, 4][index % 6];
      card.animate(
        [
          {
            opacity: 0,
            transform: `translate(-50%,-40%) rotate(${angle - 6}deg) scale(.65)`,
            offset: 0,
          },
          {
            opacity: 1,
            transform: `translate(-50%,-50%) rotate(${angle}deg) scale(1)`,
            offset: 0.18,
          },
          {
            opacity: 1,
            transform: `translate(-50%,-54%) rotate(${angle}deg) scale(1)`,
            offset: 0.58,
          },
          {
            opacity: 0,
            transform: `translate(-50%,-70%) rotate(${angle + 3}deg) scale(.9)`,
            offset: 1,
          },
        ],
        { duration: 1150, easing: "cubic-bezier(.2,.65,.3,1)", fill: "both" },
      );
      index++;
      lastX = event.clientX;
      lastY = event.clientY;
      lastTime = now;
    };
    element.addEventListener("pointermove", move, { passive: true });
    return () => {
      element.removeEventListener("pointermove", move);
      items.forEach((item) => item.getAnimations().forEach((a) => a.cancel()));
    };
  }, []);
  return (
    <>
      <section
        className="hero"
        id="hero-zone"
        ref={zone}
        aria-labelledby="hero-heading"
      >
        <picture className="hero-atmosphere">
          <source
            media="(max-width: 700px)"
            srcSet="/media/aviation-960.webp"
          />
          <img
            id="hero-background"
            src="/media/aviation-1800.webp"
            width="1902"
            height="827"
            alt=""
            fetchPriority="high"
          />
        </picture>
        <div className="hero-shade" />
        <div className="hero-content section-shell">
          <div className="hero-eyebrow">
            <span className="flight-glyph" aria-hidden="true">
              ↗
            </span>
            <span>INDEPENDENT CREATIVE & MARKETING AGENCY</span>
          </div>
          <h1 id="hero-heading">
            <span>Where Vision</span>
            <span>
              Takes <span className="hero-flight">Flight.</span>
            </span>
          </h1>
          <p className="mobile-hero-copy">
            A creative crew for ambitious brands.
            <br />
            From the first idea to the final frame.
          </p>
          <div
            className="mobile-reel-deck"
            aria-label="Selected films. Swipe to explore."
          >
            {reels.slice(0, 3).map((reel) => (
              <button
                className="mobile-reel-card"
                key={reel.id}
                onClick={() => setActive(reelMedia(reel))}
                aria-label={`Play ${reel.title}. ${reel.category}, ${reel.duration}`}
              >
                <Image
                  src={`/media/reels/${reel.id}-poster.webp`}
                  width={480}
                  height={854}
                  alt={reel.alt}
                  sizes="(max-width: 799px) 180px, 1px"
                />
                <span className="mobile-reel-play">
                  <Play size={17} weight="fill" />
                </span>
                <span className="mobile-reel-caption">
                  {reel.category}
                  <span>{reel.duration}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="hero-bottom">
            <div className="hero-summary">
              <p>
                Strategy, stories, and standout creative.
                <br />
                One crew. Built for your next big move.
              </p>
              <a href="#work" className="text-link">
                Explore the work <ArrowDownRight size={22} />
              </a>
            </div>
            <button
              className="reel-preview"
              onClick={() => setActive(reelMedia(reels[0]))}
              aria-label="Watch Over an open flame"
            >
              <span className="reel-thumbnail">
                <Image
                  src="/media/reels/07-poster.webp"
                  width={176}
                  height={100}
                  alt=""
                />
                <span className="play-small">
                  <Play size={17} weight="fill" />
                </span>
              </span>
              <span className="reel-label">
                <span className="mono">OVER AN OPEN FLAME</span>
                <span>
                  Watch the film <span aria-hidden="true">↗</span>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="hero-trail" ref={layer} aria-hidden="true">
          {trailImages.map((name, i) => (
            <div className={`trail-image trail-image-${i}`} key={name}>
              <Image
                src={`/media/${name}-480.webp`}
                alt=""
                width={200}
                height={220}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      <Intro />
      <MediaDialog item={active} onClose={() => setActive(null)} />
    </>
  );
}
